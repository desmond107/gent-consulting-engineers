// Writes public/sitemap.xml from the site's routes and data files.
// Runs automatically before every `npm run build`.
import { writeFileSync } from "node:fs";
import { site } from "../constants/site.js";
import { servicesData } from "../constants/servicesData.js";
import { showCase } from "../constants/showcase.js";

const today = new Date().toISOString().slice(0, 10);
const routes = [
  ["/", "1.0"],
  ["/services", "0.9"],
  ["/about", "0.8"],
  ["/contact", "0.8"],
  ["/showcases/showcase1", "0.7"],
  ["/showcases/showcase2", "0.7"],
  ...servicesData.map((s) => [`/services/${s.id}`, "0.8"]),
  ...showCase.map((p) => [`/projects/${p.id}`, "0.6"]),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    ([path, priority]) =>
      `  <url><loc>${site.url}${path}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`sitemap.xml: ${routes.length} URLs`);
