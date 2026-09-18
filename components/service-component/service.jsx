import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FreeTrial from "../free-trial-component/freeTrial";
import PageHero from "../page-hero/pageHero";
import Button from "../buttons-component/solidbutton";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";
import {
  servicesData,
  additionalServices,
} from "../../constants/servicesData";
import { site, whatsappLink } from "../../constants/site";

const ServicePage = ({ service }) => {
  const others = servicesData.filter((s) => s.id !== service.id);
  return (
    <>
      <PageHero
        image={service.image}
        eyebrow="Services"
        title={service.title}
        subtitle={service.shortDescription}
      />

      <section className="container-x py-24 max-md:py-16 grid grid-cols-12 max-lg:grid-cols-1 gap-14 items-start">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0 }}
          className="col-span-8 max-lg:col-span-1 flex flex-col gap-12"
        >
          <div className="flex flex-col gap-5">
            <span className="eyebrow">Overview</span>
            <h2 className="section-title text-4xl max-md:text-3xl">
              {service.heading}
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed">
              {service.mainDescription}
            </p>
          </div>

          {service.includes?.length ? (
            <div className="bg-surface rounded-xl p-8 max-md:p-6 border border-black/5">
              <h3 className="text-xl font-bold">What’s included</h3>
              <ul className="grid grid-cols-2 max-md:grid-cols-1 gap-x-8 gap-y-3 mt-5">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FaCheckCircle className="text-brand-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}

          <div>
            <h3 className="text-xl font-bold">Other core services</h3>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3 mt-5">
              {others.map((s) => (
                <Link
                  key={s.id}
                  onClick={scrollToTop}
                  to={`/services/${s.id}`}
                  className="group flex items-center justify-between gap-4 rounded-lg border border-black/10 px-5 py-4 font-medium transition-all hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700"
                >
                  {s.title}
                  <FaArrowRight className="text-sm shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold">Additional disciplines</h3>
            <Accordion allowToggle={true} className="flex flex-col gap-3 mt-5">
              {additionalServices.map((a) => (
                <AccordionItem
                  key={a.title}
                  className="bg-white rounded-lg border border-black/10 overflow-hidden"
                  borderTopWidth={0}
                  _last={{ borderBottomWidth: 0 }}
                >
                  <h4>
                    <AccordionButton
                      px={5}
                      py={4}
                      fontWeight={600}
                      _hover={{ backgroundColor: "transparent" }}
                      _expanded={{ color: "#0f74a6" }}
                    >
                      <Box as="span" flex="1" textAlign="left">
                        {a.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h4>
                  <AccordionPanel px={5} pb={5} color={"#3b4a5a"} lineHeight={1.7}>
                    {a.description}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        <motion.aside
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          className="col-span-4 max-lg:col-span-1 lg:sticky lg:top-28"
        >
          <div className="relative overflow-hidden rounded-xl bg-ink text-white p-8 flex flex-col gap-5">
            <div className="blueprint absolute inset-0"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold">Discuss your project</h3>
              <p className="text-white/70 mt-2">
                Speak to an engineer about {service.title.toLowerCase()}.
              </p>
            </div>
            <div className="relative flex flex-col gap-3 text-white/85">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 hover:text-white"
              >
                <FaPhoneAlt className="text-brand-300" /> {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 hover:text-white [overflow-wrap:anywhere]"
              >
                <FaEnvelope className="text-brand-300 shrink-0" /> {site.email}
              </a>
            </div>
            <Link onClick={scrollToTop} to="/contact" className="relative">
              <Button
                content={"Request a consultation"}
                padding={"py-3"}
                fontSize={"text-base"}
                furtherClasses={"w-full"}
              />
            </Link>
            <a
              href={whatsappLink(
                `Hello, I'd like to discuss ${service.title} for my project.`
              )}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center justify-center gap-2 rounded-md border border-white/20 py-3 font-medium hover:bg-white/10"
            >
              <FaWhatsapp className="text-[#25D366] text-lg" /> Chat on
              WhatsApp
            </a>
          </div>
        </motion.aside>
      </section>
      <FreeTrial />
    </>
  );
};

export default ServicePage;
