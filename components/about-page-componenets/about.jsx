import React from "react";
import Button from "../buttons-component/solidbutton";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaAward,
  FaShieldAlt,
  FaHardHat,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";
import ReviewCard from "../home-page-components/reviewCard";
import Carousel from "../home-page-components/carousel";
import PartnerBrandCard from "../home-page-components/partnerBrandCard";
import PageHero, { HeroStats } from "../page-hero/pageHero";
import Testimonials from "../home-page-components/testimonials";
import Credentials from "../home-page-components/credentials";
import { site } from "../../constants/site";
import { partnerBrands } from "../../constants/partnerBrands";
import "./about.css";

const offers = [
  {
    title: "Free initial consultation",
    desc: "Talk through your project with a registered engineer and get clear, practical advice on scope, feasibility and next steps.",
  },
  {
    title: "Quality engineering services",
    desc: "Civil, structural, geotechnical and infrastructure design delivered to international standards and local regulations.",
  },
  {
    title: "Infrastructure Q&A and review",
    desc: "Independent design reviews, building evaluations and quality assurance to de-risk your investment before and during construction.",
  },
];

const focus = [
  {
    icon: <FaAward />,
    title: "Quality",
    desc: "High technical competence and attention to detail at every stage, from concept to completion.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Assurance",
    desc: "Rigorous quality assurance and site supervision so what is built matches what was designed.",
  },
  {
    icon: <FaHardHat />,
    title: "Durability",
    desc: "Sustainable, value-engineered solutions that minimise environmental impact and stand the test of time.",
  },
];

const AboutPage = () => {
  return (
    <>
      <PageHero
        image="/services-page-images/service-hero-bg.jpg"
        eyebrow="About"
        title="Who we are"
        subtitle="…where probity flairs and diligence meet. A Nairobi-based engineering consultancy delivering sustainable, cost-effective solutions across East Africa."
      >
        <HeroStats />
      </PageHero>

      {/* what we offer section */}
      <section className="container-x py-28 max-md:py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-12 max-lg:grid-cols-1 gap-12 max-lg:gap-10 items-center"
        >
          <div className="col-span-5 max-lg:col-span-1 flex flex-col gap-5 items-start">
            <span className="eyebrow">What we offer</span>
            <h2 className="section-title">
              Engineering partners from first sketch to final handover.
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed">
              Gents Consulting Engineers is a civil, structural and construction
              engineering and management firm serving the commercial
              construction community nationwide, with a reputation for
              creative, innovative and sustainable design.
            </p>
            <Link onClick={scrollToTop} to={"/services"} className="mt-2">
              <Button
                content={
                  <>
                    Our services <FaArrowRight className="text-sm" />
                  </>
                }
                fontSize={"text-base"}
                padding={"px-6 py-3"}
              />
            </Link>
            <Credentials />
          </div>
          <div className="col-span-7 max-lg:col-span-1 relative">
            <img
              src="/about-page-images/what-we-do.jpg"
              className="w-full h-[440px] max-md:h-80 object-cover rounded-xl shadow-lift"
              alt="Tower crane on a GCE construction site"
            />
            <div className="absolute -bottom-8 -left-8 max-lg:left-4 max-lg:-bottom-6 bg-white rounded-xl shadow-lift px-7 py-5 border border-black/5">
              <p className="font-display text-4xl font-bold text-brand-600">
                2015
              </p>
              <p className="text-ink-muted text-sm">Founded in Nairobi</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-3 max-md:grid-cols-1 gap-10 mt-24 max-md:mt-20"
        >
          {offers.map((o, i) => (
            <motion.div
              key={o.title}
              variants={animationVariants.fadeUp}
              className="border-t-2 border-ink/10 pt-6"
            >
              <span className="font-display text-sm font-semibold text-brand-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold mt-3">{o.title}</h3>
              <p className="text-ink-soft leading-relaxed mt-2">{o.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* numbers band */}
      <section className="relative bg-ink text-white overflow-hidden">
        <div className="blueprint absolute inset-0"></div>
        <div className="container-x relative py-20 grid grid-cols-4 max-md:grid-cols-2 gap-10">
          {[
            ["100+", "Satisfied clients"],
            ["500+", "Successful projects"],
            ["15+", "Years of combined experience"],
            ["8", "Core engineering services"],
          ].map(([v, l]) => (
            <motion.div
              key={l}
              initial="initial"
              whileInView="animate"
              variants={animationVariants.fadeUp}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="font-display text-6xl max-md:text-5xl font-bold bg-gradient-to-b from-white to-brand-300 bg-clip-text text-transparent">
                {v}
              </p>
              <p className="text-white/60 mt-2">{l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* we focus section */}
      <section className="bg-surface">
        <div className="container-x py-28 max-md:py-20 grid grid-cols-2 max-lg:grid-cols-1 gap-16 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src="/we-focus.jpg"
              alt="Hard hats on a construction site"
              className="w-full h-[520px] max-md:h-80 object-cover rounded-xl"
            />
          </motion.div>
          <div className="flex flex-col gap-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.fadeUp}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-5"
            >
              <span className="eyebrow">Our focus</span>
              <h2 className="section-title">
                We focus on all{" "}
                <span className="text-brand-600">
                  engineering &amp; structural development.
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.1 }}
              className="flex flex-col gap-4"
            >
              {focus.map((f) => (
                <motion.div
                  key={f.title}
                  variants={animationVariants.fadeUp}
                  className="flex gap-5 bg-white rounded-xl p-6 border border-black/5 shadow-card"
                >
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-brand-50 text-brand-600 text-xl flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{f.title}</h3>
                    <p className="text-ink-soft leading-relaxed mt-1">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* leadership & why us */}
      <section>
        <div className="container-x grid grid-cols-2 max-lg:grid-cols-1 gap-20 max-lg:gap-14 py-28 max-md:py-20 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
            className="flex flex-col gap-5"
          >
            <motion.span variants={animationVariants.fadeUp} className="eyebrow">
              Leadership
            </motion.span>
            {site.team.map((m, i) => (
              <motion.div
                key={m.name}
                variants={animationVariants.fadeUp}
                className={i % 2 ? "lg:ml-12" : ""}
              >
                <ReviewCard
                  initials={m.initials}
                  imgSrc={m.photo}
                  title={m.name}
                  from={m.role}
                  bio={m.bio}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6 min-w-0"
          >
            <span className="eyebrow">Why choose us</span>
            <h2 className="section-title">
              Why clients choose Gents Consulting Engineers
            </h2>
            <Carousel />
          </motion.div>
        </div>
      </section>

      <Testimonials />

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
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 px-14 py-16 max-md:px-7 max-md:py-12 text-white flex max-lg:flex-col justify-between items-center gap-8 max-lg:text-center">
          <div className="blueprint absolute inset-0"></div>
          <div className="relative">
            <h2 className="font-display text-4xl max-md:text-3xl font-bold">
              Let’s build something that lasts.
            </h2>
            <p className="mt-3 text-white/80 text-lg max-w-xl">
              Speak to our team about your next project.
            </p>
          </div>
          <Link onClick={scrollToTop} to="/contact" className="relative">
            <button className="inline-flex items-center gap-2 rounded-md bg-white text-brand-800 px-7 py-3.5 font-semibold transition-all hover:bg-ink hover:text-white active:scale-[0.98]">
              Contact us <FaArrowRight className="text-sm" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
