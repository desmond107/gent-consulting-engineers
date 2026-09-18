import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { animationVariants } from "../../constants/animationVariants";
import { site } from "../../constants/site";

// Client testimonials. Renders nothing until site.testimonials has entries.
const Testimonials = () => {
  const items = site.testimonials;
  if (!items.length) return null;
  return (
    <section className="container-x py-28 max-md:py-20">
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={animationVariants.fadeUp}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center text-center gap-5"
      >
        <span className="eyebrow">Client feedback</span>
        <h2 className="section-title">What our clients say</h2>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.1 }}
        className={`grid gap-6 mt-14 ${
          items.length >= 3
            ? "grid-cols-3 max-lg:grid-cols-2"
            : items.length === 2
            ? "grid-cols-2"
            : "grid-cols-1 max-w-3xl mx-auto"
        } max-md:grid-cols-1`}
      >
        {items.map((t) => (
          <motion.figure
            key={t.name + t.quote.slice(0, 20)}
            variants={animationVariants.fadeUp}
            className="flex flex-col gap-6 bg-card rounded-xl p-8 border border-line/5 shadow-card"
          >
            <FaQuoteLeft className="text-2xl text-brand-300" />
            <blockquote className="text-lg leading-relaxed text-fg flex-1">
              “{t.quote}”
            </blockquote>
            <figcaption className="border-t border-line/5 pt-5">
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-fg-muted">
                {[t.role, t.company].filter(Boolean).join(", ")}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
