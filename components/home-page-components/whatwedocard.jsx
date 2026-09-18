const WhatWeDoCard = ({ icon, iconSrc, iconAlt, title, desc, index }) => {
  return (
    <div className="group relative h-full bg-card rounded-xl p-7 flex flex-col gap-4 border border-line/5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 text-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
          {icon || <img src={iconSrc} alt={iconAlt} className="w-6" />}
        </div>
        {index ? (
          <span className="font-display text-sm font-semibold text-fg-muted/60">
            {String(index).padStart(2, "0")}
          </span>
        ) : (
          ""
        )}
      </div>
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="text-fg-soft leading-relaxed">{desc}</p>
      <span className="absolute left-7 right-7 bottom-0 h-[3px] rounded-full bg-brand-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
    </div>
  );
};

export default WhatWeDoCard;
