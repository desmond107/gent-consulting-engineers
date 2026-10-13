import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteMeta, jsonLdFor } from "../../constants/seo";

const setTag = (selector, create, attr, value) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
  return el;
};

const meta = (nameOrProp, isProperty = false) => {
  const key = isProperty ? "property" : "name";
  return (value) =>
    setTag(
      `meta[${key}="${nameOrProp}"]`,
      () => {
        const el = document.createElement("meta");
        el.setAttribute(key, nameOrProp);
        return el;
      },
      "content",
      value
    );
};

// Keeps title, description, canonical, social tags and structured data in sync
// as visitors move between pages. Pre-rendered HTML carries the same values for
// crawlers that don't run JavaScript (see scripts/prerender.mjs).
const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const m = getRouteMeta(pathname);
    document.title = m.title;
    meta("description")(m.description);
    meta("robots")(m.noindex ? "noindex, follow" : "index, follow");
    meta("og:title", true)(m.title);
    meta("og:description", true)(m.description);
    meta("og:url", true)(m.canonical);
    meta("og:image", true)(m.image);
    meta("twitter:title")(m.title);
    meta("twitter:description")(m.description);
    meta("twitter:image")(m.image);
    setTag(
      'link[rel="canonical"]',
      () => {
        const el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        return el;
      },
      "href",
      m.canonical
    );

    const json = jsonLdFor(pathname);
    let script = document.getElementById("route-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "route-jsonld";
      document.head.appendChild(script);
    }
    script.textContent = json || "";
  }, [pathname]);

  return null;
};

export default Seo;
