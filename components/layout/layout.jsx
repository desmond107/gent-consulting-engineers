import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../navbar-component/navbar";
import Footer from "../footer/footer";
import Seo from "../seo/seo";
import { getRouteMeta } from "../../constants/seo";

// Shared page frame: skip link, navigation, the single <main> landmark,
// footer, and screen-reader handling of client-side page changes.
const Layout = ({ navProps = {}, withFooter = true }) => {
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  const announcerRef = useRef(null);
  const prevPath = useRef(pathname);

  useEffect(() => {
    // Chakra renders six unlabelled toast containers as ARIA landmarks;
    // name them so assistive tech can tell them apart.
    const label = () =>
      document
        .querySelectorAll('[id^="chakra-toast-manager"]')
        .forEach((el, i) =>
          el.setAttribute("aria-label", `Notifications ${i + 1}`)
        );
    label();
    // The portals mount after this effect on first load.
    const t = setTimeout(label, 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (prevPath.current === pathname) return; // first paint, not a navigation
    prevPath.current = pathname;
    // On in-app navigation the browser doesn't move focus or tell screen
    // readers anything, so do both here.
    mainRef.current?.focus({ preventScroll: true });
    if (announcerRef.current) {
      announcerRef.current.textContent = `${
        getRouteMeta(pathname).title.split("|")[0].trim()
      } page loaded`;
    }
  }, [pathname]);

  return (
    <>
      <Seo />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-md focus:bg-brand-600 focus:px-5 focus:py-3 focus:text-white focus:font-semibold focus:shadow-lift"
      >
        Skip to main content
      </a>
      <NavBar {...navProps} />
      <main id="main" ref={mainRef} tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      {withFooter ? <Footer /> : ""}
      <p
        ref={announcerRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      ></p>
    </>
  );
};

export default Layout;
