import React from "react";

const variants = {
  solid:
    "bg-brand-600 border-brand-600 text-white hover:bg-brand-700 hover:border-brand-700 shadow-[0_8px_20px_-8px_rgba(15,116,166,.6)]",
  outline:
    "bg-transparent border-brand-600 text-brand-700 hover:bg-brand-600 hover:text-white",
  light:
    "bg-white/10 border-white/40 text-white backdrop-blur hover:bg-white hover:text-ink",
};

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
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={styles}
      className={`inline-flex items-center justify-center gap-2 rounded-md border-[1.5px] ${
        variants[variant]
      } ${padding} ${fontSize} ${
        fontWeight || "font-medium"
      } ${furtherClasses || ""} duration-300 transition-all active:scale-[0.98]`}
    >
      {content}
    </button>
  );
};

export default Button;
