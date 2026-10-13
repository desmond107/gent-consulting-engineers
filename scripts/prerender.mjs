// Writes one real HTML file per page into dist/, each carrying its own title,
// description, canonical, social tags and structured data.
//
// Visitors still get the single-page app; this is for crawlers and link
// previews (WhatsApp, Facebook, LinkedIn, X), which read the HTML as served and
// never run JavaScript. Vercel serves these files directly and falls back to
// index.html for anything else (see vercel.json).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { getRouteMeta, jsonLdFor, seoRoutes } from "../constants/seo.js";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const template = readFileSync(join(dist, "index.html"), "utf8");

const escape = (s = "") =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const headFor = (path) => {
  const m = getRouteMeta(path);
  const json = jsonLdFor(path);
  return [
    `<title>${escape(m.title)}</title>`,
    `<meta name="description" content="${escape(m.description)}" />`,
    `<meta name="robots" content="${
      m.noindex ? "noindex, follow" : "index, follow"
    }" />`,
    `<meta property="og:site_name" content="Gent Consulting Engineers" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${escape(m.title)}" />`,
    `<meta property="og:description" content="${escape(m.description)}" />`,
    `<meta property="og:url" content="${m.canonical}" />`,
    `<meta property="og:image" content="${m.image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(m.title)}" />`,
    `<meta name="twitter:description" content="${escape(m.description)}" />`,
    `<meta name="twitter:image" content="${m.image}" />`,
    `<link rel="canonical" href="${m.canonical}" />`,
    json
      ? `<script type="application/ld+json" id="route-jsonld">${json.replace(
          /</g,
          "\\u003c"
        )}</script>`
      : "",
  ]
    .filter(Boolean)
    .map((line) => `    ${line}`)
    .join("\n");
};

const SEO_BLOCK = /<!--seo-->[\s\S]*?<!--\/seo-->/;
if (!SEO_BLOCK.test(template)) {
  throw new Error("index.html is missing the <!--seo--> block");
}

let written = 0;
for (const route of seoRoutes) {
  const html = template.replace(SEO_BLOCK, headFor(route));
  const file =
    route === "/" ? join(dist, "index.html") : join(dist, route, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  written++;
}

console.log(`prerender: ${written} pages`);
