import { useId } from "react";

// Brand emblem: a hexagon (structural nut / bolt head) holding a "G" built
// from straight beam sections, with a light-blue knee brace in the corner.
export const LogoMark = ({ size = 44, className = "" }) => {
  const gradientId = `gce-grad-${useId().replace(/:/g, "")}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#35a0d4" />
          <stop offset="1" stopColor="#0d5c84" />
        </linearGradient>
      </defs>
      <path
        d="M29 3.7a6 6 0 0 1 6 0l19.7 11.4a6 6 0 0 1 3 5.2v23.4a6 6 0 0 1-3 5.2L35 60.3a6 6 0 0 1-6 0L9.3 48.9a6 6 0 0 1-3-5.2V20.3a6 6 0 0 1 3-5.2z"
        fill={`url(#${gradientId})`}
      />
      <path
        d="M43.5 21.5h-23v21h23V32.5H33"
        fill="none"
        stroke="#fff"
        strokeWidth="6.2"
        strokeLinejoin="miter"
      />
      <path
        d="M23.6 31.5 30.5 24.6"
        stroke="#a9d6ef"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
};

// Full logo: emblem + "GENTS / CONSULTING ENGINEERS" wordmark.
// tone="light" for dark backgrounds, "dark" for light backgrounds.
const Logo = ({ tone = "dark", size = "md", className = "" }) => {
  const s = {
    sm: { mark: 36, name: "text-[19px]", tag: "text-[7.5px]", gap: "gap-2.5" },
    md: { mark: 44, name: "text-[23px]", tag: "text-[8.5px]", gap: "gap-3" },
    lg: { mark: 56, name: "text-[30px]", tag: "text-[10.5px]", gap: "gap-3.5" },
  }[size];
  return (
    <span
      className={`inline-flex items-center ${s.gap} ${className}`}
      aria-label="Gents Consulting Engineers"
    >
      <LogoMark size={s.mark} className="shrink-0 drop-shadow-sm" />
      <span className="flex flex-col leading-none" aria-hidden="true">
        <span
          className={`font-display font-bold tracking-[0.04em] ${s.name} ${
            tone === "light" ? "text-white" : "text-ink"
          }`}
        >
          GENTS
        </span>
        <span
          className={`mt-1 font-semibold uppercase tracking-[0.26em] whitespace-nowrap ${
            s.tag
          } ${tone === "light" ? "text-white/90" : "text-brand-700"}`}
        >
          Consulting Engineers
        </span>
      </span>
    </span>
  );
};

export default Logo;
