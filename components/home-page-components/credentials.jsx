import { FaCertificate } from "react-icons/fa";
import { site } from "../../constants/site";

// Professional registrations strip. Renders nothing until
// site.credentials has entries.
const Credentials = ({ dark = false }) => {
  if (!site.credentials.length) return null;
  return (
    <div
      className={`flex flex-wrap items-center gap-x-8 gap-y-4 ${
        dark ? "text-white/80" : "text-ink-soft"
      }`}
    >
      <span
        className={`text-sm font-semibold uppercase tracking-[0.18em] ${
          dark ? "text-brand-300" : "text-ink-muted"
        }`}
      >
        Registered with
      </span>
      {site.credentials.map((c) => (
        <span
          key={c.body}
          title={c.detail ? `${c.body} — ${c.detail}` : c.body}
          className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-medium ${
            dark ? "border-white/15 bg-white/5" : "border-black/10 bg-white"
          }`}
        >
          <FaCertificate className="text-brand-500" />
          <span>
            {c.short || c.body}
            {c.detail ? (
              <span className="opacity-60 font-normal"> · {c.detail}</span>
            ) : (
              ""
            )}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Credentials;
