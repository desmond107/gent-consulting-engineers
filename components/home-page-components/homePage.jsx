import {
  FaArrowRight,
  FaShieldAlt,
  FaHandshake,
  FaDraftingCompass,
  FaAward,
  FaLeaf,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";
import WhatWeDoCard from "./whatwedocard";
import Button from "../buttons-component/solidbutton";
import ProjectCard from "./projectCard";
import Carousel from "./carousel";
import ReviewCard from "./reviewCard";
import PartnerBrandCard from "./partnerBrandCard";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { showCase } from "../../constants/showcase";
import { servicesData } from "../../constants/servicesData";
import "./homePage.css";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";
import { partnerBrands } from "../../constants/partnerBrands";

const stats = [
  { value: "100+", label: "Satisfied clients" },
  { value: "500+", label: "Successful projects" },
  { value: "15+", label: "Years of experience" },
  { value: "2015", label: "Established in Nairobi" },
];

const principles = [
  {
    icon: <FaShieldAlt />,
    title: "Reliability",
    desc: "Sound, code-compliant designs backed by rigorous analysis, so every structure performs as intended for its full design life.",
  },
  {
    icon: <FaHandshake />,
    title: "Dependable",
    desc: "Clear communication and accountable project management that keep your build on schedule and within budget.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Precision",
    desc: "Meticulous attention to detail from concept drawings to site supervision, eliminating costly surprises in the field.",
  },
  {
    icon: <FaAward />,
    title: "Quality First",
    desc: "Registered professionals delivering work that meets international standards, with continuous training across our team.",
  },
];

const values = [
  {
    title: "Clients",
    desc: "Enduring relationships built on competency, reliability, trust, integrity and delivering on time and within budget.",
  },
  {
    title: "Employees",
    desc: "Our people are the fabric of our organisation. We foster teamwork, innovation, growth and career advancement.",
  },
  {
    title: "Quality of Work",
    desc: "A tradition of high technical competence and attention to detail that meets international standards.",
  },
];

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* hero section */}
      <section className="relative isolate min-h-[100svh] flex items-end bg-ink">
        <img
          src="/hero-bg-image.jpg"
          alt=""
          className="absolute inset-0 -z-10 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/10 max-lg:bg-ink/60"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 -z-10 bg-gradient-to-t from-ink/90 to-transparent"></div>

        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
          className="container-x text-white pt-40 pb-14 max-md:pt-32 flex flex-col gap-8 max-lg:items-center max-lg:text-center"
        >
          <motion.span
            variants={animationVariants.fadeUp}
            className="eyebrow eyebrow-light max-lg:before:hidden"
          >
            Civil · Structural · Construction
          </motion.span>
          <motion.h1
            variants={animationVariants.fadeUp}
            className="text-7xl max-lg:text-6xl max-sm:text-[2.6rem] font-bold leading-[1.02] max-w-3xl"
          >
            The Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
              Sustainable
            </span>{" "}
            Engineering.
          </motion.h1>
          <motion.p
            variants={animationVariants.fadeUp}
            className="text-xl max-sm:text-lg text-white/80 max-w-xl leading-relaxed"
          >
            Leading civil, structural and construction engineering and
            management consultants in Kenya &amp; East Africa.
          </motion.p>
          <motion.div
            variants={animationVariants.fadeUp}
            className="flex flex-wrap gap-4 max-lg:justify-center"
          >
            <Link onClick={scrollToTop} to="/services">
              <Button
                content={
                  <>
                    Explore our services <FaArrowRight className="text-sm" />
                  </>
                }
                fontSize={"text-base"}
                padding={"px-7 py-3.5"}
              />
            </Link>
            <Link onClick={scrollToTop} to="/contact">
              <Button
                content={"Talk to an engineer"}
                fontSize={"text-base"}
                padding={"px-7 py-3.5"}
                variant="light"
              />
            </Link>
          </motion.div>

          <motion.div
            variants={animationVariants.fadeUp}
            className="w-full mt-10 max-md:mt-6 grid grid-cols-4 max-md:grid-cols-2 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md overflow-hidden"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-7 py-6 max-sm:px-4 max-sm:py-5 text-left max-lg:text-center border-white/10 ${
                  i > 0 ? "md:border-l" : ""
                } ${i % 2 === 1 ? "max-md:border-l" : ""} ${
                  i > 1 ? "max-md:border-t" : ""
                }`}
              >
                <p className="font-display text-4xl max-sm:text-3xl font-bold">
                  {s.value}
                </p>
                <p className="text-white/60 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* about section */}
      <section className="container-x grid grid-cols-2 max-md:grid-cols-1 gap-16 max-md:gap-8 py-28 max-md:py-20 items-start">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-5"
        >
          <span className="eyebrow">Who we are</span>
          <h2 className="section-title">
            Innovative, intelligent{" "}
            <span className="text-brand-600">
              &amp; integrated sustainable engineering.
            </span>
          </h2>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-6 md:pt-10"
        >
          <p className="text-lg text-ink-soft leading-relaxed">
            GCE was founded by Eng. Alvince O. Korero, PE in 2015 and joined by
            CPA Angeline N.M. Omondi in 2016. Together, they bring over 15 years
            of structural engineering design, construction and project
            management experience.
          </p>
          <p className="text-lg text-ink-soft leading-relaxed">
            Gent leads a collaborative environment with a mission to provide
            functional, sound, economical and sustainable engineering &amp;
            construction solutions that achieve our clients’ vision.
          </p>
          <ul className="grid grid-cols-2 max-sm:grid-cols-1 gap-3 mt-2">
            {[
              "Registered professional engineers",
              "Value engineering approach",
              "Design through to supervision",
              "Serving Kenya & East Africa",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 font-medium">
                <FaCheckCircle className="text-brand-500 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <Link onClick={scrollToTop} to={"/about"} className="self-start mt-2">
            <Button
              content={
                <>
                  More about us <FaArrowRight className="text-sm" />
                </>
              }
              fontSize={"text-base"}
              padding={"px-6 py-3"}
              variant="outline"
            />
          </Link>
        </motion.div>
      </section>

      {/* principles section */}
      <section className="bg-surface">
        <div className="container-x py-28 max-md:py-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 max-lg:grid-cols-1 gap-8 items-end"
          >
            <div className="flex flex-col gap-5">
              <span className="eyebrow">What we do</span>
              <h2 className="section-title">Engineering you can build on.</h2>
            </div>
            <p className="text-lg text-ink-soft leading-relaxed">
              A Nairobi-based civil, structural and construction engineering and
              management firm serving the commercial construction community,
              with a reputation for creative, sustainable design and
              cost-effective construction solutions.
            </p>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 mt-14"
          >
            {principles.map((p, i) => (
              <motion.div key={p.title} variants={animationVariants.fadeUp}>
                <WhatWeDoCard
                  icon={p.icon}
                  index={i + 1}
                  title={p.title}
                  desc={p.desc}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* services preview */}
      <section className="container-x py-28 max-md:py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-between items-end gap-8 flex-wrap"
        >
          <div className="flex flex-col gap-5 max-w-2xl">
            <span className="eyebrow">Our services</span>
            <h2 className="section-title">
              Expertise across the full project lifecycle.
            </h2>
          </div>
          <Link onClick={scrollToTop} to="/services">
            <Button
              content={
                <>
                  All services <FaArrowRight className="text-sm" />
                </>
              }
              fontSize={"text-base"}
              padding={"px-6 py-3"}
              variant="outline"
            />
          </Link>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.06 }}
          className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-14"
        >
          {servicesData.map((s) => (
            <motion.div key={s.id} variants={animationVariants.fadeUp}>
              <Link
                onClick={scrollToTop}
                to={`/services/${s.id}`}
                className="group relative block h-72 rounded-xl overflow-hidden bg-ink"
              >
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/5 transition-colors duration-500 group-hover:from-brand-900"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <img src={s.icon} alt="" className="w-10 mb-4 opacity-90" />
                  <h3 className="text-xl font-semibold leading-snug">
                    {s.title}
                  </h3>
                  <span className="mt-3 flex items-center gap-2 text-sm font-medium text-brand-200 opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    Learn more <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* mission, vision & values section */}
      <section className="relative bg-ink text-white overflow-hidden">
        <div className="blueprint absolute inset-0"></div>
        <div className="absolute -left-40 top-20 w-[520px] h-[520px] rounded-full bg-brand-500/20 blur-3xl"></div>
        <div className="container-x relative py-28 max-md:py-20 grid grid-cols-12 max-lg:grid-cols-1 gap-14 max-lg:gap-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="col-span-7 max-lg:col-span-1 flex flex-col gap-10"
          >
            <motion.div
              variants={animationVariants.fadeUp}
              className="flex flex-col gap-5"
            >
              <span className="eyebrow eyebrow-light">Our purpose</span>
              <h2 className="font-display text-5xl max-md:text-4xl font-bold leading-[1.08]">
                Value engineering and sustainable innovation, in every
                structure we touch.
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
              <motion.div
                variants={animationVariants.fadeUp}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-7"
              >
                <h3 className="text-brand-300 text-sm font-semibold uppercase tracking-[0.18em]">
                  Mission
                </h3>
                <p className="mt-3 text-white/75 leading-relaxed">
                  To provide innovative, intelligent and integrated sustainable
                  engineering design solutions and quality services that
                  enhance our customers’ satisfaction, combining exceptional
                  design with proven performance.
                </p>
              </motion.div>
              <motion.div
                variants={animationVariants.fadeUp}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-7"
              >
                <h3 className="text-brand-300 text-sm font-semibold uppercase tracking-[0.18em]">
                  Vision
                </h3>
                <p className="mt-3 text-white/75 leading-relaxed">
                  To grow from a locally focused firm into an internationally
                  market-focused one, and be our clients’ first choice for
                  sustainable and value engineering services across East
                  Africa.
                </p>
              </motion.div>
            </div>

            <motion.div variants={animationVariants.fadeUp}>
              <h3 className="text-brand-300 text-sm font-semibold uppercase tracking-[0.18em]">
                Values
              </h3>
              <div className="mt-5 grid grid-cols-3 max-md:grid-cols-1 gap-6">
                {values.map((v) => (
                  <div key={v.title} className="border-t border-white/15 pt-5">
                    <h4 className="font-display text-lg font-semibold">
                      {v.title}
                    </h4>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div className="col-span-5 max-lg:col-span-1 flex flex-col gap-6">
            <div className="relative flex-1 min-h-[420px] rounded-xl overflow-hidden">
              <img
                src="/appriciation-section-image.jpg"
                className="absolute w-full h-full object-cover object-center"
                alt="Construction site at dusk"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent"></div>
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={animationVariants.toLeft}
                viewport={{ once: true, amount: 0.2 }}
                className="absolute inset-0 bg-ink origin-left z-20"
              ></motion.div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <FaLeaf className="text-brand-300 text-xl" />
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/60">
                  Our motto
                </p>
                <p className="font-display text-2xl font-semibold mt-1">
                  “…where probity flairs and diligence meet…”
                </p>
              </div>
            </div>
            <Link onClick={scrollToTop} to={"/contact"}>
              <Button
                content={
                  <>
                    Get in touch <FaArrowRight className="text-sm" />
                  </>
                }
                padding={"px-6 py-3.5"}
                fontSize={"text-base"}
                furtherClasses={"w-full"}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* featured projects section */}
      <section className="container-x py-28 max-md:py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-between items-end gap-8 flex-wrap"
        >
          <div className="flex flex-col gap-5 max-w-2xl">
            <span className="eyebrow">Portfolio</span>
            <h2 className="section-title">Featured projects</h2>
          </div>
          <Link onClick={scrollToTop} to="/showcases/showcase1">
            <Button
              content={
                <>
                  View all projects <FaArrowRight className="text-sm" />
                </>
              }
              fontSize={"text-base"}
              padding={"px-6 py-3"}
              variant="outline"
            />
          </Link>
        </motion.div>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-14">
          {showCase
            .filter((e) => e.id != 5 && e.id != 6)
            .map((e, i) => (
              <ProjectCard
                key={e.id}
                src={e.coverImage}
                title={e.city}
                href={e.id}
                index={i + 1}
              />
            ))}
        </div>
      </section>

      {/* leadership & why us section */}
      <section className="bg-surface">
        <div className="container-x grid grid-cols-2 max-lg:grid-cols-1 gap-20 max-lg:gap-14 py-28 max-md:py-20 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
            className="flex flex-col gap-5"
          >
            <motion.span variants={animationVariants.fadeUp} className="eyebrow">
              <FaUsers /> Leadership
            </motion.span>
            <motion.div variants={animationVariants.fadeUp}>
              <ReviewCard
                initials={"AK"}
                title={"Eng. Alvince O. Korero, PE"}
                from={"Technical Director & CEO"}
              />
            </motion.div>
            <motion.div variants={animationVariants.fadeUp} className="lg:ml-12">
              <ReviewCard
                initials={"AO"}
                title={"CPA Angeline N.M. Omondi"}
                from={"MD, Director Finance & Administration"}
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6 min-w-0"
          >
            <span className="eyebrow">Why choose us</span>
            <h2 className="section-title">Why Gent Consulting Engineers</h2>
            <Carousel />
          </motion.div>
        </div>
      </section>

      {/* partner brand section */}
      <section className="border-y border-black/5">
        <div className="container-x py-12 flex max-md:flex-col items-center gap-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-muted whitespace-nowrap">
            Trusted by
          </p>
          <div className="flex-1 flex gap-12 max-sm:gap-8 flex-wrap justify-around items-center">
            {partnerBrands.map((e, i) => {
              return (
                <PartnerBrandCard
                  title={e.title}
                  src={`/partner-brands/${e.src}.png`}
                  alt={e.src}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* call to action */}
      <section className="container-x py-24 max-md:py-16">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 px-14 py-16 max-md:px-7 max-md:py-12 text-white flex max-lg:flex-col justify-between items-center gap-8 max-lg:text-center"
        >
          <div className="blueprint absolute inset-0"></div>
          <div className="relative">
            <h2 className="font-display text-4xl max-md:text-3xl font-bold">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-white/80 text-lg max-w-xl">
              From feasibility to handover, let’s engineer something that lasts.
            </p>
          </div>
          <Link onClick={scrollToTop} to="/contact" className="relative">
            <button className="inline-flex items-center gap-2 rounded-md bg-white text-brand-800 px-7 py-3.5 font-semibold transition-all hover:bg-ink hover:text-white active:scale-[0.98]">
              Request a consultation <FaArrowRight className="text-sm" />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
