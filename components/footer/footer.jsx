import Logo from "../brand/logo";
import { Button, Input, Textarea, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedinIn,
  FaFilePdf,
} from "react-icons/fa";
import Credentials from "../home-page-components/credentials";
import { site, whatsappLink } from "../../constants/site";
import {
  submitEnquiry,
  enquiryErrorMessage,
} from "../../constants/submitEnquiry";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";

const Footer = () => {
  const toast = useToast();
  const [btnLoader, setBtnLoader] = useState(false);

  const showToast = () => {
    toast({
      title: "Thanks! Your message has been sent.",
      description: "Our team will be in touch soon.",
      status: "success",
      duration: 4000,
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
      duration: 6000,
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
      submitEnquiry(formData, "Footer")
        .then(() => {
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
          errorToast(enquiryErrorMessage, "error");
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
    pl: 0,
    fontSize: 16,
    variant: "flushed",
    borderColor: "rgba(255,255,255,.18)",
    focusBorderColor: "#35a0d4",
    _placeholder: { color: "rgba(255,255,255,.45)" },
    autoComplete: "off",
  };

  const socialLinks = [
    [site.socials.linkedin, <FaLinkedinIn key="l" />, "LinkedIn"],
    [site.socials.facebook, <FaFacebookF key="f" />, "Facebook"],
    [site.socials.instagram, <FaInstagram key="i" />, "Instagram"],
    [site.socials.twitter, <FaTwitter key="t" />, "Twitter"],
  ].filter(([href]) => href);

  const footerLinks = [
    ["/", "Home"],
    ["/services", "Services"],
    ["/showcases/showcase1", "Projects"],
    ["/about", "About Us"],
    ["/contact", "Contact"],
  ];

  return (
    <div className="bg-ink text-white relative overflow-hidden">
      <div className="blueprint absolute inset-0 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full bg-brand-500/20 blur-3xl pointer-events-none"></div>

      <footer className="container-x relative grid grid-cols-2 gap-20 max-lg:grid-cols-1 max-lg:gap-14 pt-24 pb-10 max-md:pt-16">
        <div className="flex flex-col items-start gap-8">
          <Link onClick={scrollToTop} to="/">
            <Logo tone="light" size="lg" />
          </Link>
          <p className="text-white/60 text-base leading-relaxed max-w-md">
            Gents leads a collaborative environment with a mission to provide
            functional, sound, economical, quality and sustainable engineering
            &amp; construction solutions that achieve our clients’ requirements.
          </p>
          <div className="flex flex-col gap-3 text-white/80">
            {[
              [site.phoneHref, <FaPhoneAlt key="p" />, site.phone],
              [`mailto:${site.email}`, <FaEnvelope key="e" />, site.email],
              [whatsappLink(), <FaWhatsapp key="w" />, "Chat on WhatsApp"],
              ["", <FaMapMarkerAlt key="m" />, site.location],
            ].map(([href, icon, label]) => {
              const Tag = href ? "a" : "span";
              return (
                <Tag
                  key={label}
                  href={href || undefined}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <span className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-300 text-sm">
                    {icon}
                  </span>
                  {label}
                </Tag>
              );
            })}
          </div>
          {socialLinks.length ? (
            <div className="flex items-center gap-3">
              {socialLinks.map(([href, icon, label]) => (
                <a
                  key={label}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  href={href}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:bg-brand-500 hover:border-brand-500 hover:text-white transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          ) : (
            ""
          )}
          <Credentials dark />
          {site.companyProfilePdf ? (
            <a
              href={site.companyProfilePdf}
              download
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-white"
            >
              <FaFilePdf /> Download company profile (PDF)
            </a>
          ) : (
            ""
          )}
        </div>

        <div id="footer-contact" className="flex flex-col gap-8">
          <div>
            <span className="eyebrow eyebrow-light">Start a project</span>
            <h2 className="text-3xl font-bold mt-3">Get in touch</h2>
            <p className="text-white/60 mt-2">
              Tell us about your project and our engineers will get back to you.
            </p>
          </div>
          <div className="w-full grid grid-cols-2 gap-8 max-sm:grid-cols-1">
            <Input
              {...fieldProps}
              placeholder="First name"
              name="firstName"
              maxLength={20}
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              {...fieldProps}
              placeholder="Last name"
              name="lastName"
              maxLength={20}
              value={formData.lastName}
              onChange={handleChange}
            />
            <Input
              {...fieldProps}
              placeholder="Email address"
              name="email"
              maxLength={40}
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              {...fieldProps}
              type="tel"
              placeholder="Phone number"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              maxLength={15}
            />
          </div>
          <Textarea
            {...fieldProps}
            placeholder="How can we help?"
            maxLength={200}
            name="message"
            rows={3}
            resize="none"
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
            className="self-start max-sm:w-full"
            px={10}
            fontWeight={500}
            fontSize={"16px"}
            borderRadius={"6px"}
          >
            Send message
          </Button>
        </div>
      </footer>

      <div className="container-x relative">
        <div className="flex justify-between items-center gap-6 flex-wrap border-t border-white/10 py-8 text-sm text-white/50">
          <p>
            © {new Date().getFullYear()} Gents Consulting Engineers. All rights
            reserved.
          </p>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {footerLinks.map(([to, label]) => (
              <Link
                key={to}
                onClick={scrollToTop}
                className="hover:text-white transition-colors"
                to={to}
              >
                {label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
