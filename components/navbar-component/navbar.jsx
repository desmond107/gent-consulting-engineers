import { FaAngleDown, FaBars } from "react-icons/fa";
import "./navbar.css";
import Button from "../buttons-component/solidbutton";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { scrollToTop } from "../../constants/scrollToTop";
const NavBar = ({ navBar2, showCase1Page }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showcaseDropDown, setShowcaseDropDown] = useState(false);
  const [viewSideNav, setViewSideNav] = useState(false);
  const hideNav = () => {
    setViewSideNav(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(11,27,43,.08),0_8px_24px_-12px_rgba(11,27,43,.18)]"
            : "bg-gradient-to-b from-black/40 to-transparent"
        }`}
      >
        <nav
          className={`container-x flex justify-between items-center gap-4 transition-all duration-300 ${
            solid ? "py-3" : "py-6 max-md:py-4"
          }`}
        >
          <Link onClick={scrollToTop} to="/" aria-label="Gent Consulting Engineers home">
            <img
              src={solid ? "/Homyz-logo2.png" : "/gce-logo-light.png"}
              className={`transition-all duration-300 ${
                solid ? "w-28" : "w-36 max-lg:w-28"
              }`}
              alt="Gent Consulting Engineers"
            />
          </Link>
          <ul
            className={`${
              solid ? "text-ink" : "text-white/90"
            } text-[15px] font-medium flex max-lg:hidden items-center gap-9`}
          >
            <NavLink onClick={scrollToTop} className={linkClass} to="/" end>
              Home
            </NavLink>
            <NavLink onClick={scrollToTop} className={linkClass} to="/services">
              Services
            </NavLink>
            <div className="showcase-menu cursor-pointer relative py-1 flex items-center gap-1.5 transition-colors">
              Projects <FaAngleDown className="text-xs opacity-70" />
              <div className="showcase-list hidden absolute cursor-default -left-5 top-full pt-4">
                <ul className="flex flex-col gap-1 bg-white text-ink p-2 rounded-lg shadow-lift border border-black/5 w-56">
                  <li className="listItem">
                    <Link
                      onClick={scrollToTop}
                      className="block rounded-md px-3 py-2.5 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                      to="/showcases/showcase1"
                    >
                      Project Showcase I
                    </Link>
                  </li>
                  <li className="listItem">
                    <Link
                      onClick={scrollToTop}
                      className="block rounded-md px-3 py-2.5 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                      to="/showcases/showcase2"
                    >
                      Project Showcase II
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <NavLink onClick={scrollToTop} className={linkClass} to="/about">
              About
            </NavLink>
            <Link onClick={scrollToTop} to="/contact">
              <Button
                content={"Get a Quote"}
                fontSize={"text-[15px]"}
                padding={"px-5 py-2.5"}
                variant={solid ? "solid" : "light"}
              />
            </Link>
          </ul>
          <div
            className={`${
              solid ? "text-ink" : "text-white"
            } text-xl hidden max-lg:flex items-center gap-6`}
          >
            <button
              aria-label="Open menu"
              onClick={() => {
                setViewSideNav(!viewSideNav);
              }}
              className="p-1"
            >
              <FaBars />
            </button>
          </div>
        </nav>
      </header>

      {/* side nav bar for mobile view */}
      <div
        onClick={() => {
          setViewSideNav(false);
        }}
        style={{ zIndex: 99 }}
        className={`fixed inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300 ${
          viewSideNav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <nav
        style={{ zIndex: 100 }}
        className={`fixed top-0 bottom-0 left-0 hidden max-lg:flex flex-col ${
          viewSideNav ? "translate-x-0" : "-translate-x-full"
        } bg-white w-80 max-w-[85vw] p-6 transition-transform duration-300 ease-out shadow-2xl`}
      >
        <div className="flex justify-between items-center">
          <img className="w-28" src="/Homyz-logo2.png" alt="Gent Consulting Engineers" />
          <button
            aria-label="Close menu"
            onClick={() => {
              setViewSideNav(false);
            }}
            className="w-9 h-9 rounded-full hover:bg-surface flex items-center justify-center text-2xl leading-none text-ink"
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col mt-10 text-lg font-medium text-ink">
          {[
            ["/", "Home"],
            ["/services", "Services"],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              end
              onClick={() => {
                hideNav();
                scrollToTop();
              }}
              to={to}
              className={({ isActive }) =>
                `py-3 border-b border-black/5 transition-colors ${
                  isActive ? "text-brand-600" : "hover:text-brand-600"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <li className="border-b border-black/5">
            <button
              onClick={() => {
                setShowcaseDropDown(!showcaseDropDown);
              }}
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
              <div className="overflow-hidden flex flex-col gap-1 pl-4 text-base text-ink-soft">
                <Link
                  onClick={() => {
                    hideNav();
                    scrollToTop();
                  }}
                  className="py-1.5 hover:text-brand-600"
                  to={"/showcases/showcase1"}
                >
                  Project Showcase I
                </Link>
                <Link
                  onClick={() => {
                    hideNav();
                    scrollToTop();
                  }}
                  to={"/showcases/showcase2"}
                  className="py-1.5 hover:text-brand-600"
                >
                  Project Showcase II
                </Link>
              </div>
            </div>
          </li>
          <NavLink
            onClick={() => {
              hideNav();
              scrollToTop();
            }}
            to={"/about"}
            className={({ isActive }) =>
              `py-3 border-b border-black/5 transition-colors ${
                isActive ? "text-brand-600" : "hover:text-brand-600"
              }`
            }
          >
            About
          </NavLink>
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
            content={"Get a Quote"}
            padding={"py-3"}
            furtherClasses={"w-full"}
          />
        </Link>
        <div className="mt-auto text-sm text-ink-muted">
          Nairobi, Kenya · +254 718 484 254
        </div>
      </nav>
    </>
  );
};

export default NavBar;
