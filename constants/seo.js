import { site } from "./site.js";
import { servicesData } from "./servicesData.js";
import { showCase } from "./showcase.js";
import { faqs } from "./faqs.js";

// Per-page SEO. Used in two places:
//  - at build time by scripts/prerender.mjs, which writes a real HTML file per
//    route so crawlers and link previews (WhatsApp, LinkedIn, Facebook) see the
//    right tags without running JavaScript;
//  - at runtime by components/seo/seo.jsx, which keeps the tags correct as
//    visitors navigate within the app.

export const SITE_URL = site.url.replace(/\/$/, "");
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const BRAND = site.name;

const org = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: BRAND,
  alternateName: site.shortName,
  url: SITE_URL,
  logo: `${SITE_URL}/gents-logo-512.png`,
  image: OG_IMAGE,
  telephone: site.phone.replace(/\s/g, ""),
  email: site.email,
  foundingDate: "2015",
  founder: { "@type": "Person", name: "Alvince O. Korero" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  areaServed: ["Kenya", "East Africa"],
  knowsAbout: servicesData.map((s) => s.title),
};

const breadcrumbs = (trail) => ({
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...trail].map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: `${SITE_URL}${c.path}`,
  })),
});

const staticRoutes = {
  "/": {
    title: `${BRAND} | Civil & Structural Engineers in Nairobi, Kenya`,
    description:
      "Civil, structural and construction engineering and management consultants in Nairobi. Design, project management and site supervision across Kenya and East Africa.",
    jsonLd: [
      org,
      {
        "@type": "WebSite",
        url: SITE_URL,
        name: BRAND,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  },
  "/services": {
    title: `Engineering Services in Kenya | ${BRAND}`,
    description:
      "Structural and civil engineering services in Nairobi: building evaluation, infrastructure and bridge design, geotechnical investigation, project management, QA and site supervision.",
    jsonLd: [
      breadcrumbs([{ name: "Services", path: "/services" }]),
      {
        "@type": "ItemList",
        itemListElement: servicesData.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.title,
          url: `${SITE_URL}/services/${s.id}`,
        })),
      },
    ],
  },
  "/about": {
    title: `About Us | Structural Engineering Consultants in Nairobi`,
    description:
      "Founded in Nairobi in 2015, Gent Consulting Engineers delivers sustainable, value-engineered civil and structural solutions across Kenya and East Africa.",
    jsonLd: [
      breadcrumbs([{ name: "About", path: "/about" }]),
      { "@type": "AboutPage", name: "About Gent Consulting Engineers" },
    ],
  },
  "/contact": {
    title: `Contact | Talk to an Engineer in Nairobi | ${BRAND}`,
    description: `Contact Gent Consulting Engineers in Nairobi. Call ${site.phone}, email ${site.email} or message us on WhatsApp to discuss your project.`,
    jsonLd: [
      breadcrumbs([{ name: "Contact", path: "/contact" }]),
      {
        "@type": "ContactPage",
        name: "Contact Gent Consulting Engineers",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  },
  "/showcases/showcase1": {
    title: `Our Projects | Engineering Portfolio in Kenya | ${BRAND}`,
    description:
      "Selected civil and structural engineering projects delivered by Gent Consulting Engineers across Kenya and East Africa.",
    jsonLd: [breadcrumbs([{ name: "Projects", path: "/showcases/showcase1" }])],
  },
  "/showcases/showcase2": {
    title: `Project Showcase | ${BRAND}`,
    description:
      "More civil, structural and construction projects delivered by Gent Consulting Engineers in Kenya and East Africa.",
    jsonLd: [breadcrumbs([{ name: "Projects", path: "/showcases/showcase2" }])],
  },
};

const serviceMeta = (service) => ({
  title: `${service.title} in Kenya | ${BRAND}`,
  description: service.shortDescription,
  image: `${SITE_URL}${service.image}`,
  jsonLd: [
    breadcrumbs([
      { name: "Services", path: "/services" },
      { name: service.title, path: `/services/${service.id}` },
    ]),
    {
      "@type": "Service",
      name: service.title,
      description: service.mainDescription,
      serviceType: service.title,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: ["Kenya", "East Africa"],
      image: `${SITE_URL}${service.image}`,
    },
  ],
});

const projectMeta = (project) => {
  const name = project.city.trim();
  return {
    title: `${name} | Project by ${BRAND}`,
    description:
      project.description?.slice(0, 180) ||
      `${name} — a civil and structural engineering project by ${BRAND} in Kenya.`,
    image: `${SITE_URL}${project.coverImage}`,
    jsonLd: [
      breadcrumbs([
        { name: "Projects", path: "/showcases/showcase1" },
        { name, path: `/projects/${project.id}` },
      ]),
      {
        "@type": "CreativeWork",
        name,
        description: project.description || project.shortDescription,
        image: `${SITE_URL}${project.coverImage}`,
        creator: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
};

// Every URL that gets its own pre-rendered HTML file.
export const seoRoutes = [
  ...Object.keys(staticRoutes),
  ...servicesData.map((s) => `/services/${s.id}`),
  ...showCase.map((p) => `/projects/${p.id}`),
];

export const getRouteMeta = (pathname) => {
  const path = pathname.replace(/\/+$/, "") || "/";
  let meta = staticRoutes[path];

  if (!meta) {
    const serviceId = path.match(/^\/services\/(.+)$/)?.[1];
    const projectId = path.match(/^\/projects\/(.+)$/)?.[1];
    const service = servicesData.find((s) => String(s.id) === serviceId);
    const project = showCase.find((p) => String(p.id) === projectId);
    if (service) meta = serviceMeta(service);
    else if (project) meta = projectMeta(project);
  }

  if (!meta) {
    meta = {
      title: `Page not found | ${BRAND}`,
      description: staticRoutes["/"].description,
      noindex: true,
      jsonLd: [],
    };
  }

  return {
    ...meta,
    canonical: `${SITE_URL}${path === "/" ? "/" : path}`,
    image: meta.image || OG_IMAGE,
    jsonLd: meta.jsonLd || [],
  };
};

// One <script type="application/ld+json"> payload per page.
export const jsonLdFor = (pathname) => {
  const { jsonLd } = getRouteMeta(pathname);
  if (!jsonLd.length) return null;
  return JSON.stringify({ "@context": "https://schema.org", "@graph": jsonLd });
};
