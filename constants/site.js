// Single source of truth for company details shown across the site.
// Anything left empty ("" or []) is hidden automatically, so fill these in
// as the information becomes available.

export const site = {
  name: "Gents Consulting Engineers",
  shortName: "GCE",
  url: "https://gceafrica.co.ke",
  email: "gentconsult@gmail.com",
  phone: "+254 718 484 254",
  phoneHref: "tel:+254718484254",
  location: "Nairobi, Kenya",
  // Full street address / building, shown on the contact page when set.
  address: "",

  whatsapp: {
    // International format, digits only.
    number: "254718484254",
    message:
      "Hello Gents Consulting Engineers, I'd like to discuss a project.",
  },

  // Enquiries from both contact forms are emailed here via FormSubmit.
  // The very first submission sends a one-time activation email to this
  // address; click "Activate Form" in it and every enquiry after that is
  // delivered normally.
  formEndpoint: "https://formsubmit.co/ajax/gentconsult@gmail.com",

  // Company profile PDF, e.g. "/gce-company-profile.pdf" placed in /public.
  companyProfilePdf: "",

  // Only accounts that actually exist. Empty = icon hidden.
  socials: {
    linkedin: "",
    facebook: "",
    instagram: "",
    twitter: "",
  },

  // Professional registrations and memberships, shown as a trust strip.
  // Example: { body: "Engineers Board of Kenya", short: "EBK", detail: "Reg. No. 1234" }
  credentials: [],

  // Real, named client testimonials only.
  // Example: { quote: "...", name: "Jane Doe", role: "Project Manager", company: "Acme Ltd" }
  testimonials: [],

  // Leadership shown on the home and about pages.
  // Add `photo: "/team/alvince.jpg"` once real headshots are available.
  team: [
    {
      name: "Eng. Alvince O. Korero, PE",
      role: "Technical Director & CEO",
      initials: "AK",
      bio: "Founded GCE in 2015. Over 15 years of structural engineering design, construction and project management experience.",
      photo: "",
    },
    {
      name: "CPA Angeline N.M. Omondi",
      role: "MD, Director Finance & Administration",
      initials: "AO",
      bio: "Joined GCE in 2016 and leads the firm’s finance and administration.",
      photo: "",
    },
  ],
};

export const whatsappLink = (text = site.whatsapp.message) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;
