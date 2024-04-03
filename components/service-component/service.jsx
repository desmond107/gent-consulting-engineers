import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import "./service.css";
import {
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FreeTrial from "../free-trial-component/freeTrial";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";
const ServicePage = ({ id, title, breif, descr, imageSrc }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
        className="relative bg-no-repeat bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 flex justify-center items-center text-white "
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50"></div>
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="text-6xl max-md:text-5xl max-sm:text-4xl font-semibold z-10"
        >
          {title}
        </motion.h1>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className=" mx-auto flex
         p-10 max-sm:px-5 relative items-start gap-16 max-lg:flex-col"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0 }}
          className="w-2/3 max-lg:w-full flex flex-col gap-5"
        >
          <h1 className="text-[46px] leading-none max-md:text-4xl font-semibold">
            Tuning in to future of engineering with GCE
          </h1>
          <div className="text-xl flex flex-col gap-3">
            <p>
              At Gent we employ new technologies to perform building evaluation monitoring performance to discover and solve problems, 
              predict effects and develop robust results aimed at helping designers and managers make more informed decisions to improve the building structural health and design life.

            </p>
            <p>
              Designing an efficient and robust network infrastructure is a structured process encompassing several key factors, 
              from initial planning to post-implementation monitoring and analysis. This is Gent’s heart beat as it strives by incorporating 
              network and infrastructure integrations and current design softwares to design for buildability, performance, usability, sustainability and safety.  
            </p>
            <p>
              Gent’s main focus is to designs bridges that withstand gravity, wind, earthquakes, 
              or other external influences and minimizes the risk of structural failure or collapse in accordance with the relevant codes and safety standards.
            </p>
            <p>
              Site investigation is a critical aspect of geotechnical engineering, providing important information about the geological and
               geotechnical properties of a site, groundwater conditions, and other factors that may affect the design and construction of a project. 
               Gent considers site investigation as an important part of the design and construction process, as it helps our engineers and designers to 
               understand the site conditions and develop appropriate foundation designs and construction methods that are safe, economical, and sustainable.

            </p>
            <p>
              Airport airfield pavement design is an integrative exercise involving expertise including topo surveying, geotechnical investigations,
              material engineering, hydrological and drainage design, pavement design and structural design. Gent has vast experience in: Airport
              topographical surveying, geotechnical/soil investigations, 
              Engineering material testing, geometric & pavement design, hydrology and drainage design and preparation of construction drawings.

            </p>
            <p>
              Our project management team utilizes the current technological  knowledge, tools, skills, deliverables, 
              and techniques to successfully guide 
            </p>
          </div>
          <div className="mt-10">
            <Accordion
              className="text-xl flex flex-col gap-5 "
              allowToggle={true}
            >
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Architectural engineering design services

                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Architectural engineering services offered at GCE include:
                  Building design and supervision of low and high rise building (e.g. feasibility, design, procurement, installation supervision, and close-out).
                  Local authority’s approvals on client request. This service shall be fully sponsored by the client.

                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Mechanical engineering design services

                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Mechanical services offered at GCE include:
                 Building Services (feasibility, design, procurement, installation supervision, and close-out) Heating, Ventilation and Air-conditioning,
                  Refrigeration, Hot Water Generation (Boilers, Clarifiers etc.) and steam reticulation systems, Central Heating Systems, Fire Prevention and Fire Fighting,
                 Industrial Laundry & Kitchen equipment, Medical Gas, Other Mechanical services.

                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Electrical engineering design services
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Township establishment infrastructure
                  Bulk Power Designs- building Services reticulation, Data Capturing and Management, 
                  Network Audits, Substation Refurbishment and Upgrade, Power Station Management, 
                  technical performance and efficiency of Main and Auxiliary Equipment for Power Stations, Energy Management. 
                  Lighting- General Lighting, Township Lighting (High masts & Street Lighting), Security Lighting, Specialized Lighting
                 Security Systems- Access Control, CCTV monitoring Systems, Building Management

                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                       Alternative Energy Solutions
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Energy audits, plant optimization, installation, and project management in the following are offered:
                  Solar systems, Heat pumps, Energy saving Lighting systems, Energy efficient Motors and VSD’s, Industrial Compressed air systems,
                  HVAC, Shower heads and water flow regulators, Power Factor Correction, Plant optimization systems, and Metering Systems

                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                       Plans Blue-Printing Services

                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Architectural and Engineering Plans Blue-Printing
                  Gent consulting engineers offer a vast professionalism and cost-effective plan printing for all architectural, engineering and geo-surveys as show below:
                  A1 blue-printing
                  A2 blue-printing
                  A3 blue-printing
                  Contact us for plan printing pricing.


                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomIn}
          viewport={{ once: true, amount: 0.2 }}
          className="w-1/3 max-lg:w-full sticky top-36 questions-card p-8 gap-5 flex flex-col"
        >
          <h1 className="text-center text-2xl font-semibold">
            Have Additional Questions?
          </h1>
          <div className="flex mt-2  gap-3 text-xl items-center">
            <div>
              <FaEnvelope className="text-red-500" />
            </div>
            <p>Office # Nairobi, Kenya</p>
          </div>
          <div className="flex  gap-3 text-xl items-center">
            <div>
              <FaPhone className="rotate-90 text-red-500" />
            </div>
            <p>+254718484254</p>
          </div>
          <div className="flex  gap-3 text-xl items-center">
            <div>
              <FaMapMarkerAlt className="text-red-500" />
            </div>
            <p>information@gce.com</p>
          </div>
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="text-red-500 hover:text-black transition-all duration-300"
          >
            <div className="flex items-center gap-1">
              <p className="text-xl">Contact us</p>
              <FaArrowRight className="text-sm mt-[2px]" />
            </div>
          </Link>
        </motion.div>
      </div>
      <FreeTrial />
    </>
  );
};

export default ServicePage;
