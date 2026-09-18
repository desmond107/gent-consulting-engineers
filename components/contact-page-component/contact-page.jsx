import React, { useState } from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import PageHero from "../page-hero/pageHero";
import { Button, Input, Textarea, useToast } from "@chakra-ui/react";
import axios from "axios";

const ContactPage = () => {
  const toast = useToast();
  const [btnLoader, setBtnLoader] = useState(false);

  const showToast = () => {
    toast({
      title: "Message Sent",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const errorToast = (res, status) => {
    toast({
      title: res,
      status: status,
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    const errors = validateForm(formData);

    if (errors === false) {
      setBtnLoader(true);
      axios
        .post("link needed", formData)
        .then((response) => {
          showToast();
          setFormData({
            firstName: "",
            lastName: "",
            phoneNo: "",
            email: "",
            message: "",
          });
          setBtnLoader(false);
        })
        .catch((error) => {
          setBtnLoader(false);
          errorToast(error.message, "error");
          console.error("Error submitting form:", error);
        });
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = (data) => {
    let _error;
    if (
      data.firstName &&
      data.firstName.trim() &&
      data.lastName &&
      data.lastName.trim() &&
      data.email &&
      data.email.trim() &&
      isValidEmail(data.email.trim()) &&
      data.phoneNo &&
      data.phoneNo.trim() &&
      data.message &&
      data.message.trim()
    ) {
      _error = false;
    } else {
      if (
        !data.firstName &&
        !data.firstName.trim() &&
        !data.lastName &&
        !data.lastName.trim() &&
        !data.email &&
        !data.email.trim() &&
        !isValidEmail(data.email.trim()) &&
        !data.phoneNo &&
        !data.phoneNo.trim() &&
        !data.message &&
        !data.message.trim()
      ) {
        errorToast("Fill the fields first!", "error");
      } else if (!data.firstName || !data.firstName.trim()) {
        errorToast("Enter the firstName!", "error");
      } else if (!data.lastName || !data.lastName.trim()) {
        errorToast("Enter the lastName!", "error");
      } else if (!data.email || !data.email.trim()) {
        errorToast("Enter the email!", "error");
      } else if (!isValidEmail(data.email.trim())) {
        errorToast("Enter the valid  email!", "error");
      } else if (!data.phoneNo || !data.phoneNo.trim()) {
        errorToast("Enter the phone no!", "error");
      } else if (!data.message || !data.message.trim()) {
        errorToast("Enter the message!", "error");
      }
    }
    return _error;
  };

  const fieldProps = {
    size: "lg",
    fontSize: 16,
    bg: "white",
    borderColor: "rgba(11,27,43,.12)",
    focusBorderColor: "#1891c8",
    color: "#0b1b2b",
    _placeholder: { color: "#64748b" },
    autoComplete: "off",
    borderRadius: "8px",
  };

  const contactItems = [
    {
      icon: <FaPhoneAlt />,
      label: "Call us",
      value: "+254 718 484 254",
      href: "tel:+254718484254",
    },
    {
      icon: <FaEnvelope />,
      label: "Email us",
      value: "info@gtc.com",
      href: "mailto:info@gtc.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Visit us",
      value: "Nairobi, Kenya",
    },
  ];

  const faqs = [
    {
      q: "What engineering services do you offer?",
      a: "We cover building evaluation and rehabilitation, civil and infrastructure design, bridge design, geotechnical engineering, airport and pavement design, construction and project management, quality assurance and control, and site supervision.",
    },
    {
      q: "Which areas do you serve?",
      a: "We are based in Nairobi and serve clients across Kenya and the wider East African region.",
    },
    {
      q: "How do I start a project with GCE?",
      a: "Send us a message using the form above or give us a call. We’ll arrange an initial consultation to understand your goals, scope and budget, then propose the right team and approach.",
    },
    {
      q: "Are your engineers registered professionals?",
      a: "Yes. Most of our engineers and staff are locally registered professionals, and our work is delivered to international standards.",
    },
    {
      q: "Can you assess an existing building?",
      a: "Yes. Our building evaluation and rehabilitation service assesses structural health and performance, identifies problems and recommends solutions to extend design life.",
    },
    {
      q: "Do you supervise construction on site?",
      a: "Yes. We provide project site supervision and monitoring, along with quality assurance and control, to make sure what is built matches what was designed.",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <PageHero
        image="/hero-bg-image.jpg"
        eyebrow="Contact"
        title="Let’s talk about your project"
        subtitle="Whether you’re planning a new build, assessing an existing structure or need site supervision, our engineers are ready to help."
      />

      {/* contact cards */}
      <section className="container-x relative z-10 -mt-12 max-md:-mt-8">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          className="grid grid-cols-3 max-md:grid-cols-1 gap-5"
        >
          {contactItems.map((c) => {
            const Tag = c.href ? "a" : "div";
            return (
              <motion.div key={c.label} variants={animationVariants.fadeUp}>
                <Tag
                  href={c.href}
                  className="group flex items-center gap-5 bg-white rounded-xl p-6 border border-black/5 shadow-lift transition-all hover:-translate-y-0.5"
                >
                  <span className="w-12 h-12 shrink-0 rounded-lg bg-brand-50 text-brand-600 text-lg flex items-center justify-center transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    {c.icon}
                  </span>
                  <span>
                    <span className="block text-sm text-ink-muted">
                      {c.label}
                    </span>
                    <span className="block font-semibold text-lg">
                      {c.value}
                    </span>
                  </span>
                </Tag>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* contact form section */}
      <section className="container-x py-24 max-md:py-16 grid grid-cols-12 max-lg:grid-cols-1 gap-14 max-lg:gap-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          className="col-span-5 max-lg:col-span-1 flex flex-col gap-6"
        >
          <span className="eyebrow">Send a message</span>
          <h2 className="section-title">
            Talk to our team{" "}
            <span className="text-brand-600">about what you’re building.</span>
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed">
            Gent Consulting Engineers is a civil, structural and construction
            engineering and management firm based in Nairobi, serving the
            commercial construction community across Kenya and East Africa.
          </p>
          <ul className="flex flex-col gap-3 mt-2">
            {[
              "Initial consultation to scope your project",
              "Registered professional engineers",
              "Design, management and site supervision",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 font-medium">
                <FaCheckCircle className="text-brand-500 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          id="contact"
          className="col-span-7 max-lg:col-span-1 bg-surface rounded-2xl p-10 max-md:p-6 flex flex-col gap-5 border border-black/5"
        >
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
            <Input
              {...fieldProps}
              maxLength={20}
              placeholder="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              {...fieldProps}
              maxLength={20}
              placeholder="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <Input
              {...fieldProps}
              maxLength={40}
              placeholder="Email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              {...fieldProps}
              maxLength={15}
              type="tel"
              placeholder="Phone number"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
            />
          </div>
          <Textarea
            {...fieldProps}
            maxLength={200}
            placeholder="Tell us about your project"
            minHeight={"160px"}
            resize="vertical"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button
            _hover={{ backgroundColor: "#0d5c84" }}
            backgroundColor={"#0f74a6"}
            color={"white"}
            size={"lg"}
            isLoading={btnLoader}
            loadingText={"Sending…"}
            onClick={handleSubmit}
            className="w-full"
            fontWeight={500}
            fontSize={"16px"}
            borderRadius={"8px"}
            height={"56px"}
          >
            Send message
          </Button>
        </motion.div>
      </section>

      {/* faq section */}
      <section className="bg-surface">
        <div className="container-x py-28 max-md:py-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center text-center gap-5 mb-14"
          >
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Frequently asked questions</h2>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion allowToggle={true} className="flex flex-col gap-4">
              {faqs.map((f) => (
                <AccordionItem
                  key={f.q}
                  className="bg-white rounded-xl border border-black/5 shadow-card overflow-hidden"
                  borderTopWidth={0}
                  _last={{ borderBottomWidth: 0 }}
                >
                  <h3>
                    <AccordionButton
                      px={6}
                      py={5}
                      fontSize={"lg"}
                      fontWeight={600}
                      _hover={{ backgroundColor: "transparent" }}
                      _expanded={{ color: "#0f74a6" }}
                    >
                      <Box as="span" flex="1" textAlign="left">
                        {f.q}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel px={6} pb={6} color={"#3b4a5a"} lineHeight={1.7}>
                    {f.a}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
