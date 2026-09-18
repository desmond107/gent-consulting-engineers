import "./reviewcard.css";
const ReviewCard = ({ title, from, imgSrc, initials }) => {
  const monogram =
    initials ||
    (title || "")
      .replace(/^(Eng\.?|CPA\.?|Dr\.?)\s+/i, "")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  return (
    <div className="w-full review-card flex items-center gap-5 p-5 rounded-xl border border-black/5">
      {imgSrc ? (
        <img
          className="w-16 h-16 object-cover rounded-full"
          src={imgSrc}
          alt={title}
        />
      ) : (
        <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-brand-500 to-brand-800 text-white font-display font-bold text-xl flex items-center justify-center">
          {monogram}
        </div>
      )}
      <div>
        <h3 className="text-lg font-semibold leading-snug">{title}</h3>
        <p className="text-ink-muted mt-0.5">{from}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
