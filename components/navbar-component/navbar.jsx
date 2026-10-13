import ThemeToggle from "../theme-toggle/themeToggle";
import Logo from "../brand/logo";
import { FaAngleDown, FaBars } from "react-icons/fa";
import "./navbar.css";
import Button from "../buttons-component/solidbutton";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { scrollToTop } from "../../constants/scrollToTop";

const projectLinks = [
  ["/showcases/showcase1", "Project Showcase I"],
  ["/showcases/showcase2", "Project Showcase II"],
];

const NavBar = ({ navBar2, showCase1Page }) => {
  const [scrolled, setScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [showcaseDropDown, setShowcaseDropDown] = useState(false);
  const [viewSideNav, setViewSideNav] = useState(false);
  const drawerRef = useRef(null);
  const openButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const projectsRef = useRef(null);
  const hideNav = () => setViewSideNav(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The closed drawer is off-screen but would still be reachable by keyboard
  // and screen readers, so take it out of the accessibility tree entirely.
  useEffect(() => {
    const el = drawerRef.current;
    if (!el) return;
    el.inert = !viewSideNav;
    el.setAttribute("aria-hidden", viewSideNav ? "false" : "true");
    if (viewSideNav) closeButtonRef.current?.focus();
  }, [viewSideNav]);

  // Escape closes whichever menu is open; focus goes back where it came from.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== "Escape") return;
      if (viewSideNav) {
        setViewSideNav(false);
        openButtonRef.current?.focus();
      }
      if (projectsOpen) {
        setProjectsOpen(false);
        projectsRef.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [viewSideNav, projectsOpen]);

  // Keep focus inside the open drawer.
  const trapFocus = (e) => {
    if (e.key !== "Tab" || !viewSideNav) return;
    const items = drawerRef.current?.querySelectorAll(
      'a[href], button:not([disabled])'
    );
    if (!items?.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  // Solid (light) bar when scrolled or on pages without a dark hero
  const solid = !showCase1Page && (navBar2 || scrolled);
  const linkClass = ({ isActive }) =>
    `relative py-1 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full ${
      isActive ? "after:w-full" : "after:w-0"
    } ${solid ? "hover:text-brand-600" : "hover:text-white"}`;

  return (
    <>
      <header
        style={{ zIndex: 98 }}
        className={`${
          showCase1Page ? "absolute" : "fixed"
        } top-0 left-0 right-0 transition-all duration-300 ${
          solid
            ? "bg-card/95 backdrop-blur-md shadow-[0_1px_0_rgb(var(--c-line)/0.08),0_8px_24px_-12px_rgba(0,0,0,.25)]"
            : "bg-transparent [text-shadow:0_1px_10px_rgba(0,0,0,.55)]"
        }`}
      >
        <nav
          aria-label="Main"
          className={`container-x flex justify-between items-center gap-4 transition-all duration-300 ${
            solid ? "py-3" : "py-6 max-md:py-4"
          }`}
        >
          <Link
            onClick={scrollToTop}
            to="/"
            aria-label="Gent Consulting Engineers home"
            className="shrink-0"
          >
            <Logo
              tone={solid ? "dark" : "light"}
              size={solid ? "sm" : "md"}
              className="transition-all duration-300"
            />
          </Link>
          <ul
            className={`${
              solid ? "text-fg" : "text-white/90"
            } text-[15px] font-medium flex max-lg:hidden items-center gap-9`}
          >
            <li>
              <NavLink onClick={scrollToTop} className={linkClass} to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={scrollToTop}
                className={linkClass}
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li
              ref={projectsRef}
              className="relative"
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget))
                  setProjectsOpen(false);
              }}
            >
              <button
                type="button"
                aria-expanded={projectsOpen}
                aria-haspopup="true"
                onClick={() => setProjectsOpen((v) => !v)}
                className={`py-1 flex items-center gap-1.5 transition-colors ${
                  solid ? "hover:text-brand-600" : "hover:text-white"
                }`}
              >
                Projects
                <FaAngleDown
                  className={`text-xs opacity-70 transition-transform ${
                    projectsOpen ? "-rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute -left-5 top-full pt-4 ${
                  projectsOpen ? "block" : "hidden"
                }`}
              >
                <ul className="flex flex-col gap-1 bg-card text-fg p-2 rounded-lg shadow-lift border border-line/5 w-56 menu-in">
                  {projectLinks.map(([to, label]) => (
                    <li key={to}>
                      <Link
                        onClick={() => {
                          setProjectsOpen(false);
                          scrollToTop();
                        }}
                        className="block rounded-md px-3 py-2.5 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                        to={to}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <NavLink onClick={scrollToTop} className={linkClass} to="/about">
                About
              </NavLink>
            </li>
            <li className="flex items-center">
              <ThemeToggle onDark={!solid} />
            </li>
            <li>
              <Link onClick={scrollToTop} to="/contact">
                <Button
                  as="span"
                  content={"Get a Quote"}
                  fontSize={"text-[15px]"}
                  padding={"px-5 py-2.5"}
                  variant={solid ? "solid" : "light"}
                />
              </Link>
            </li>
          </ul>
          <div
            className={`${
              solid ? "text-fg" : "text-white"
            } text-xl hidden max-lg:flex items-center gap-6`}
          >
            <ThemeToggle onDark={!solid} />
            <button
              ref={openButtonRef}
              aria-label="Open menu"
              aria-expanded={viewSideNav}
              aria-controls="mobile-menu"
              onClick={() => setViewSideNav(true)}
              className="p-1"
            >
              <FaBars />
            </button>
          </div>
        </nav>
      </header>

      {/* side nav bar for mobile view */}
      <div
        onClick={() => setViewSideNav(false)}
        style={{ zIndex: 99 }}
        className={`fixed inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300 ${
          viewSideNav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        ref={drawerRef}
        onKeyDown={trapFocus}
        style={{ zIndex: 100 }}
        className={`fixed top-0 bottom-0 left-0 hidden max-lg:flex flex-col ${
          viewSideNav ? "translate-x-0" : "-translate-x-full"
        } bg-card w-80 max-w-[85vw] p-6 transition-transform duration-300 ease-out shadow-2xl`}
      >
        <div className="flex justify-between items-center">
          <Logo tone="dark" size="sm" />
          <button
            ref={closeButtonRef}
            aria-label="Close menu"
            onClick={() => {
              setViewSideNav(false);
              openButtonRef.current?.focus();
            }}
            className="w-9 h-9 rounded-full hover:bg-surface flex items-center justify-center text-2xl leading-none text-fg"
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col mt-10 text-lg font-medium text-fg">
          {[
            ["/", "Home"],
            ["/services", "Services"],
          ].map(([to, label]) => (
            <li key={to}>
              <NavLink
                end
                onClick={() => {
                  hideNav();
                  scrollToTop();
                }}
                to={to}
                className={({ isActive }) =>
                  `block py-3 border-b border-line/5 transition-colors ${
                    isActive ? "text-brand-600" : "hover:text-brand-600"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className="border-b border-line/5">
            <button
              aria-expanded={showcaseDropDown}
              onClick={() => setShowcaseDropDown((v) => !v)}
              className="w-full py-3 flex justify-between items-center hover:text-brand-600 transition-colors"
            >
              Projects
              <FaAngleDown
                className={`${
                  showcaseDropDown ? "-rotate-180" : "rotate-0"
                } transition-transform text-sm`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                showcaseDropDown ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"
              }`}
            >
              <ul className="overflow-hidden flex flex-col gap-1 pl-4 text-base text-fg-soft">
                {projectLinks.map(([to, label]) => (
                  <li key={to}>
                    <Link
                      onClick={() => {
                        hideNav();
                        scrollToTop();
                      }}
                      className="block py-1.5 hover:text-brand-600"
                      to={to}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <NavLink
              onClick={() => {
                hideNav();
                scrollToTop();
              }}
              to={"/about"}
              className={({ isActive }) =>
                `block py-3 border-b border-line/5 transition-colors ${
                  isActive ? "text-brand-600" : "hover:text-brand-600"
                }`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
        <Link
          onClick={() => {
            hideNav();
            scrollToTop();
          }}
          to={"/contact"}
          className="mt-8"
        >
          <Button
            as="span"
            content={"Get a Quote"}
            padding={"py-3"}
            furtherClasses={"w-full"}
          />
        </Link>
        <ThemeToggle withLabel className="mt-8" />
        <div className="mt-auto text-sm text-fg-muted">
          Nairobi, Kenya · +254 718 484 254
        </div>
      </nav>
    </>
  );
};

export default NavBar;
