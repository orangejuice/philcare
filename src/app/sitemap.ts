import {MetadataRoute} from "next"
import {menu, site} from "@/site"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paths: string[] = []

  for (const item of menu) {
    paths.push(item.path)

    if (item.sub) {
      for (const subItem of item.sub) {
        paths.push(subItem.path)
      }
    }
  }

  return paths.map(path => ({
    url: site.url.concat(path),
    lastModified: new Date()
  }))
}
