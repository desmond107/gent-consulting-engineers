import { FaArrowLeft, FaArrowRight, FaThLarge, FaWhatsapp } from "react-icons/fa";
import Button from "../buttons-component/solidbutton";
import { Link, useParams, Navigate } from "react-router-dom";
import { showCase } from "../../constants/showcase";
import { animationVariants } from "../../constants/animationVariants";
import { motion } from "framer-motion";
import { scrollToTop } from "../../constants/scrollToTop";
import { whatsappLink } from "../../constants/site";
import { useEffect } from "react";

// Case-study page. Every block is driven by constants/showcase.js and only
// renders when its field has content.
const AboutProject = () => {
  const param = useParams();
  const index = showCase.findIndex((p) => String(p.id) === String(param.id));
  const project = showCase[index];

  useEffect(() => {
    if (project) {
      document.title = `${project.city.trim()} | Gent Consulting Engineers`;
    }
  }, [project]);

  if (!project) return <Navigate to="/showcases/showcase1" replace />;

  const prev = showCase[(index - 1 + showCase.length) % showCase.length];
  const next = showCase[(index + 1) % showCase.length];

  const facts = [
    ["Client", project.client],
    ["Location", project.location],
    ["Year", project.year],
    ["Our role", (project.role || []).join(", ")],
  ].filter(([, v]) => v);

  const story = [
    ["The challenge", project.challenge],
    ["Our solution", project.solution],
    ["The outcome", project.outcome],
  ].filter(([, v]) => v);

  return (
    <div className="overflow-hidden">
      {/* hero */}
      <section className="relative isolate min-h-[70svh] flex items-end bg-ink text-white">
        <img
          src={project.coverImage}
          alt=""
          className="absolute inset-0 -z-10 w-full h-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/50 to-ink/20"></div>
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.1 }}
          className="container-x pt-40 pb-16 max-md:pb-12 flex flex-col gap-5"
        >
          <motion.nav
            variants={animationVariants.fadeUp}
            className="flex items-center gap-2 text-sm text-white/60"
          >
            <Link onClick={scrollToTop} to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link
              onClick={scrollToTop}
              to="/showcases/showcase1"
              className="hover:text-white"
            >
              Projects
            </Link>
          </motion.nav>
          <motion.span
            variants={animationVariants.fadeUp}
            className="eyebrow eyebrow-light"
          >
            Case study {String(index + 1).padStart(2, "0")}
          </motion.span>
          <motion.h1
            variants={animationVariants.fadeUp}
            className="text-6xl max-md:text-4xl font-bold leading-[1.05] max-w-3xl"
          >
            {project.city.trim()}
          </motion.h1>
        </motion.div>
      </section>

      {/* overview + key facts */}
      <section className="container-x py-20 max-md:py-14 grid grid-cols-12 max-lg:grid-cols-1 gap-14 max-lg:gap-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          className="col-span-8 max-lg:col-span-1 flex flex-col gap-6"
        >
          <span className="eyebrow">Project overview</span>
          <p className="text-2xl max-md:text-xl font-display font-medium leading-snug">
            {project.shortDescription}
          </p>
          {project.description ? (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-fg-muted">
                Scope of work
              </h2>
              <p className="mt-3 text-lg text-fg-soft leading-relaxed">
                {project.description}
              </p>
            </div>
          ) : (
            ""
          )}
        </motion.div>

        <motion.aside
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          className="col-span-4 max-lg:col-span-1"
        >
          <div className="bg-surface rounded-xl border border-line/5 p-7 flex flex-col gap-5">
            {facts.length ? (
              <dl className="flex flex-col gap-4">
                {facts.map(([k, v]) => (
                  <div key={k} className="border-b border-line/5 pb-4">
                    <dt className="text-sm text-fg-muted">{k}</dt>
                    <dd className="font-semibold mt-0.5">{v}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              ""
            )}
            <div>
              <p className="font-display text-lg font-semibold">
                Planning a similar project?
              </p>
              <p className="text-fg-soft text-sm mt-1">
                Talk to the team that delivered this one.
              </p>
            </div>
            <Link onClick={scrollToTop} to="/contact">
              <Button
                content={"Request a consultation"}
                padding={"py-3"}
                fontSize={"text-base"}
                furtherClasses={"w-full"}
              />
            </Link>
            <a
              href={whatsappLink(
                `Hello, I saw the "${project.city.trim()}" project on your website and would like to discuss a similar project.`
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-fg-soft hover:text-brand-700"
            >
              <FaWhatsapp className="text-[#25D366] text-lg" /> Or chat on
              WhatsApp
            </a>
          </div>
        </motion.aside>
      </section>

      {/* challenge / solution / outcome */}
      {story.length ? (
        <section className="bg-ink text-white relative overflow-hidden">
          <div className="blueprint absolute inset-0"></div>
          <div
            className={`container-x relative py-20 grid gap-10 ${
              story.length === 3
                ? "grid-cols-3"
                : story.length === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            } max-md:grid-cols-1`}
          >
            {story.map(([k, v], i) => (
              <div key={k} className="border-t border-white/15 pt-6">
                <span className="font-display text-sm text-brand-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-2xl font-bold mt-2">{k}</h2>
                <p className="text-white/70 leading-relaxed mt-3">{v}</p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        ""
      )}

      {/* gallery */}
      <section className="container-x py-20 max-md:py-14">
        <h2 className="section-title text-4xl max-md:text-3xl">Project gallery</h2>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 mt-10">
          {project.moreImages.map((e, i) => {
            return (
              <motion.div
                key={e}
                initial="initial"
                whileInView="animate"
                variants={animationVariants.fadeUp}
                viewport={{ once: true, amount: 0.2 }}
                className={`overflow-hidden rounded-xl bg-surface ${
                  i === 0 ? "md:col-span-3" : ""
                }`}
              >
                <img
                  className={`w-full object-cover transition-transform duration-700 hover:scale-105 ${
                    i === 0 ? "h-[520px] max-md:h-72" : "h-64"
                  }`}
                  src={e}
                  loading="lazy"
                  alt={`${project.city.trim()} — photo ${i + 1}`}
                />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* prev / next */}
      <nav className="border-t border-line/5">
        <div className="container-x grid grid-cols-[1fr_auto_1fr] items-center gap-6 py-8">
          <Link
            onClick={scrollToTop}
            to={`/projects/${prev.id}`}
            className="group flex items-center gap-4 min-w-0"
          >
            <span className="w-11 h-11 shrink-0 rounded-full border border-fg/15 flex items-center justify-center transition-all group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white">
              <FaArrowLeft className="text-sm" />
            </span>
            <span className="min-w-0 max-sm:hidden">
              <span className="block text-sm text-fg-muted">Previous</span>
              <span className="block font-semibold truncate">
                {prev.city.trim()}
              </span>
            </span>
          </Link>
          <Link
            onClick={scrollToTop}
            to="/showcases/showcase1"
            aria-label="All projects"
            className="w-11 h-11 rounded-full bg-surface flex items-center justify-center text-fg-soft hover:text-brand-600"
          >
            <FaThLarge />
          </Link>
          <Link
            onClick={scrollToTop}
            to={`/projects/${next.id}`}
            className="group flex items-center justify-end gap-4 text-right min-w-0"
          >
            <span className="min-w-0 max-sm:hidden">
              <span className="block text-sm text-fg-muted">Next</span>
              <span className="block font-semibold truncate">
                {next.city.trim()}
              </span>
            </span>
            <span className="w-11 h-11 shrink-0 rounded-full border border-fg/15 flex items-center justify-center transition-all group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white">
              <FaArrowRight className="text-sm" />
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default AboutProject;
