import {Dataset, PuppeteerCrawler} from "crawlee"
import ExcelJS from "exceljs"

const main = async () => {
  const crawler = new PuppeteerCrawler({
    // maxRequestsPerCrawl: 50,
    requestHandler: async ({request, page, enqueueLinks, log}) => {
      log.info(`Processing ${request.url}`)

      if (!request.label) {
        await enqueueLinks({selector: "a[href*=\"/nursing-homes\"]", label: "list"})
      }

      if (request.label == "list") {
        const list = await page.$$("h2.heading-95 ~ .w-dyn-list div[role=listitem]")
        for (const item of list) {
          const name = await item.$eval("h3.heading-99", el => el.innerText).catch(() => "")
          const address = await item.$eval("p.address", el => el.innerText).catch(() => "")
          const website = await item.$eval("p.website", el => el.innerText).catch(() => "")
          const phone = await item.$eval("p.phonenumber", el => el.innerText).catch(() => "")
          const email = await item.$eval("p.emailaddress", el => el.innerText).catch(() => "")
          const link = await item.$eval("a.more-information", link => link.getAttribute("href") ?? "")
          await enqueueLinks({
            urls: [link],
            userData: {detail: {name, address, website, phone, email, county: new URL(request.url).pathname.split("-").pop()}}
          })
        }

        await enqueueLinks({selector: "a[aria-label=\"Next Page\"]", label: "list"})
      }

      if (request.userData.detail) {
        const intro = await page.$eval("div.hero-split-3 p", el => el.innerText)
        let type = "", personInCharge = "", beds = ""
        const meta = await page.$$eval("div.uui-layout72_item-content", elArr => elArr.flatMap(elArr => elArr.innerText))
        for (let one of meta) {
          if (one.includes("Nursing Home Type")) {
            type = one.replace("Nursing Home Type", "").trim()
          } else if (one.includes("Person in charge")) {
            personInCharge = one.replace("Person in charge", "").trim()
          } else if (one.includes("Number of Beds")) {
            beds = one.replace("Number of Beds", "").trim()
          }
        }
        await Dataset.pushData({
          ...request.userData.detail,
          intro,
          type,
          personInCharge,
          beds,
          link: request.url
        })
      }
    }
  })

  await crawler.run([process.argv.pop() as string])

  const dataset = await Dataset.getData()
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet("Nursing Homes")

  worksheet.columns = [
    {header: "County", key: "county"},
    {header: "Name", key: "name"},
    {header: "Type", key: "type"},
    {header: "Address", key: "address"},
    {header: "Phone", key: "phone"},
    {header: "Email", key: "email"},
    {header: "Website", key: "website"},
    {header: "Person In Charge", key: "personInCharge"},
    {header: "Number of Beds", key: "beds"},
    {header: "Database page", key: "link"},
    {header: "Introduction", key: "intro"}
  ]

  dataset.items.forEach((item) => {
    worksheet.addRow(item)
  })

  await workbook.xlsx.writeFile("database.xlsx")
  console.log("Data saved to database.xlsx")
}

main().catch(console.error)
