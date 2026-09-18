import React from "react";

const PartnerBrandCard = ({ title, src, alt }) => {
  return (
    <div className="flex justify-center items-center gap-2 grayscale opacity-75 transition-all duration-300 hover:grayscale-0 hover:opacity-100">
      <img src={src} alt={alt} className="h-12 max-w-[160px] object-contain" loading="lazy" />
      {title ? <span className="text-xl font-semibold">{title}</span> : ""}
    </div>
  );
};

export default PartnerBrandCard;
