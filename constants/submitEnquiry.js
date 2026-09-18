import axios from "axios";
import { site } from "./site";

// Sends a contact-form enquiry to the company inbox (see site.formEndpoint).
export const submitEnquiry = async (formData, source) => {
  const fullName = `${formData.firstName} ${formData.lastName}`.trim();
  const { data } = await axios.post(
    site.formEndpoint,
    {
      name: fullName,
      email: formData.email,
      phone: formData.phoneNo,
      message: formData.message,
      source,
      _subject: `New website enquiry from ${fullName}`,
      _replyto: formData.email,
      _template: "table",
    },
    { headers: { Accept: "application/json" } }
  );
  if (data && (data.success === false || data.success === "false")) {
    throw new Error(data.message || "The message could not be sent.");
  }
  return data;
};

export const enquiryErrorMessage = `We couldn't send your message. Please call ${site.phone} or email ${site.email}.`;
