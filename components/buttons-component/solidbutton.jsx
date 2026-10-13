import React from "react";

const variants = {
  solid:
    "bg-brand-600 border-brand-600 text-white hover:bg-brand-700 hover:border-brand-700 shadow-[0_8px_20px_-8px_rgba(15,116,166,.6)]",
  outline:
    "bg-transparent border-brand-600 text-brand-700 hover:bg-brand-600 hover:text-white",
  light:
    "bg-white/10 border-white/40 text-white backdrop-blur hover:bg-white hover:text-ink",
};

// `as="span"` renders the same styling without a nested <button>, for use
// inside a <Link> (a button inside a link is two tab stops and invalid HTML).
const Button = ({
  styles,
  padding,
  fontSize,
  fontWeight,
  content,
  furtherClasses,
  onClick,
  variant = "solid",
  type = "button",
  as,
  ariaLabel,
}) => {
  const Tag = as === "span" ? "span" : "button";
  // The span carries the link's visible text, so it must stay readable.
  const tagProps = Tag === "button" ? { type, onClick } : {};
  return (
    <Tag
      {...tagProps}
      aria-label={ariaLabel}
      style={styles}
      className={`inline-flex items-center justify-center gap-2 rounded-md border-[1.5px] ${
        variants[variant]
      } ${padding} ${fontSize} ${
        fontWeight || "font-medium"
      } ${furtherClasses || ""} duration-300 transition-all active:scale-[0.98]`}
    >
      {content}
    </Tag>
  );
};

export default Button;
