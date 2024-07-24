import {NextRequest, NextResponse} from "next/server"
import {google} from "googleapis"

export async function GET(request: NextRequest) {
  if (request.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({message: "Unauthorized"}, {status: 401})
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_CLIENT_PRIVATE_KEY?.replace(/\\n/g, "\n")
      },
      scopes: ["https://www.googleapis.com/auth/drive.readonly"]
    })

    const drive = google.drive({version: "v3", auth})
    const candidatesFolder = "1qqISWNlmJMIFlv_vuf0_3YuWym5V9sDo"

    const twentyFourHoursAgo = new Date()
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24)

    const foldersRes = await drive.files.list({
      q: `'${candidatesFolder}' in parents and mimeType='application/vnd.google-apps.folder'`,
      fields: "files(id, name)"
    })

    let hasModifiedFiles = false

    for (const folder of foldersRes.data.files || []) {
      const mdRes = await drive.files.list({
        q: `'${folder.id}' in parents and name='candidate.md' and modifiedTime > '${twentyFourHoursAgo.toISOString()}'`,
        fields: "files(id, name, modifiedTime)"
      })

      const imageRes = await drive.files.list({
        q: `'${folder.id}' in parents and (mimeType='image/png' or mimeType='image/jpeg') and modifiedTime > '${twentyFourHoursAgo.toISOString()}'`,
        fields: "files(id, name, modifiedTime)"
      })

      if (mdRes.data.files && mdRes.data.files.length > 0) {
        console.log(`Found modified candidate.md in folder ${folder.name}`)
        hasModifiedFiles = true
        break
      }

      if (imageRes.data.files && imageRes.data.files.length > 0) {
        console.log(`Found modified image in folder ${folder.name}`)
        hasModifiedFiles = true
        break
      }
    }

    if (hasModifiedFiles) {
      console.log("Found modified files in the last 24 hours.")

      const deployHook = process.env.VERCEL_DEPLOY_HOOK
      if (deployHook) {
        const redeployResponse = await fetch(deployHook, {method: "POST"})
        if (redeployResponse.ok) {
          console.log("Redeploy triggered successfully")
          return NextResponse.json({message: "Changes detected, redeploy triggered"}, {status: 200})
        } else {
          console.error("Failed to trigger redeploy")
          return NextResponse.json({message: "Changes detected, but failed to trigger redeploy"}, {status: 500})
        }
      } else {
        console.error("VERCEL_DEPLOY_HOOK is not set")
        return NextResponse.json({message: "Changes detected, but VERCEL_DEPLOY_HOOK is not set"}, {status: 500})
      }
    } else {
      console.log("No modified files found in the last 24 hours.")
      return NextResponse.json({message: "No changes detected"}, {status: 200})
    }
  } catch (error) {
    console.error("Error checking for file modifications:", error)
    return NextResponse.json({message: "Error checking for file modifications"}, {status: 500})
  }
}
