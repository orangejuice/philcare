import {drive_v3, google} from "googleapis"
import fs from "node:fs"
import crypto from "crypto"
import * as path from "node:path"
import matter from "gray-matter"

const googleDriveProvider = async (contentDirPath: string) => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_CLIENT_PRIVATE_KEY?.replace(/\\n/g, "\n")
    },
    scopes: ["https://www.googleapis.com/auth/drive.readonly"]
  })
  const drive = google.drive({version: "v3", auth})
  const candidatesFolder = "1qqISWNlmJMIFlv_vuf0_3YuWym5V9sDo"

  const res = await drive.files.list({
    q: `'${candidatesFolder}' in parents and mimeType='application/vnd.google-apps.folder'`,
    fields: "files(id, name)"
  })

  await Promise.all(res.data.files!.map(async (folder) => {
    const [mdFile, imageFile] = await Promise.all([
      drive.files.list({
        q: `'${folder.id}' in parents and name='candidate.md' and trashed=false`,
        fields: "files(id, name)"
      }),
      drive.files.list({
        q: `'${folder.id}' in parents and (mimeType='image/png' or mimeType='image/jpeg') and trashed=false`,
        fields: "files(id, name, mimeType)"
      })
    ])

    if (mdFile.data.files!.length > 0 && imageFile.data.files!.length > 0) {
      const mdContent = await drive.files.get({
        fileId: mdFile.data.files![0].id as string,
        alt: "media"
      })
      const imagePath = await downloadAndSaveImage(drive, imageFile.data.files![0])
      const {data: frontmatter, content} = matter(mdContent.data as string)
      frontmatter.imagePath = imagePath
      const updatedContent = matter.stringify(content, frontmatter)

      fs.mkdirSync(path.join(contentDirPath, folder.name!), {recursive: true})
      fs.writeFileSync(path.join(contentDirPath, folder.name!, `candidate.md`), updatedContent)
    }
  }))

  return () => {}
}

async function downloadAndSaveImage(drive: drive_v3.Drive, imageData: drive_v3.Schema$File) {
  const res = await drive.files.get(
    {fileId: imageData.id as string, alt: "media"},
    {responseType: "arraybuffer"}
  )

  const buffer = Buffer.from(res.data as ArrayBuffer)
  const hash = crypto.createHash("sha256").update(buffer).digest("hex")
  const ext = imageData.mimeType!.split("/")[1]
  const fileName = `${hash}.${ext}`
  const filePath = path.join(process.cwd(), "public", "candidates", fileName)

  fs.mkdirSync(path.dirname(filePath), {recursive: true})
  fs.writeFileSync(filePath, buffer)

  return `/candidates/${fileName}`
}


export default googleDriveProvider
