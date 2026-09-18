import ServiceCard from "./serviceCard";
import { servicesData } from "../../constants/servicesData";
import PageHero, { HeroStats } from "../page-hero/pageHero";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { scrollToTop } from "../../constants/scrollToTop";
const ServicesComponent = () => {
  return (
    <>
      <PageHero
        image="/services-page-images/service-hero-bg.jpg"
        eyebrow="Services"
        title="Our services"
        subtitle="Integrated civil, structural and construction engineering services, from feasibility and design through to site supervision."
      >
        <HeroStats />
      </PageHero>
      <section className="container-x py-24 max-md:py-16">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          {servicesData.map((e, i) => {
            return (
              <ServiceCard
                key={e.id}
                index={i + 1}
                title={e.title}
                brief={e.shortDescription}
                imgSrc={e.image}
                id={e.id}
                iconSrc={e.icon}
              />
            );
          })}
        </div>
      </section>
      <section className="container-x pb-24 max-md:pb-16">
        <div className="relative overflow-hidden rounded-2xl bg-ink px-14 py-14 max-md:px-7 max-md:py-10 text-white flex max-lg:flex-col justify-between items-center gap-8 max-lg:text-center">
          <div className="blueprint absolute inset-0"></div>
          <div className="relative">
            <h2 className="font-display text-3xl font-bold">
              Not sure which service you need?
            </h2>
            <p className="mt-2 text-white/70 text-lg">
              Tell us about your project and we’ll point you in the right
              direction.
            </p>
          </div>
          <Link onClick={scrollToTop} to="/contact" className="relative">
            <button className="inline-flex items-center gap-2 rounded-md bg-brand-600 text-white px-7 py-3.5 font-semibold transition-all hover:bg-brand-500 active:scale-[0.98]">
              Talk to an engineer <FaArrowRight className="text-sm" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesComponent;
