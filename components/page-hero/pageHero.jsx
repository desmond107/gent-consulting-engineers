import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";

// Shared banner for inner pages: image background, breadcrumb, title and intro.
const PageHero = ({ image, eyebrow, title, subtitle, children }) => {
  return (
    <section className="relative isolate bg-ink text-white overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/40"></div>
      <div className="blueprint absolute inset-0 -z-10 opacity-60"></div>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.1 }}
        className="container-x pt-44 pb-24 max-md:pt-32 max-md:pb-16 flex max-md:flex-col justify-between items-end max-md:items-start gap-10"
      >
        <div className="flex flex-col gap-5 max-w-2xl">
          <motion.nav
            variants={animationVariants.fadeUp}
            className="flex items-center gap-2 text-sm text-white/60"
          >
            <Link onClick={scrollToTop} to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-300">{eyebrow || title}</span>
          </motion.nav>
          <motion.h1
            variants={animationVariants.fadeUp}
            className="text-6xl max-md:text-[2.6rem] font-bold leading-[1.05]"
          >
            {title}
          </motion.h1>
          {subtitle ? (
            <motion.p
              variants={animationVariants.fadeUp}
              className="text-lg text-white/75 leading-relaxed max-w-xl"
            >
              {subtitle}
            </motion.p>
          ) : (
            ""
          )}
        </div>
        {children ? (
          <motion.div variants={animationVariants.fadeUp}>{children}</motion.div>
        ) : (
          ""
        )}
      </motion.div>
    </section>
  );
};

export const HeroStats = () => (
  <div className="flex gap-10">
    {[
      ["100+", "Satisfied clients"],
      ["500+", "Successful projects"],
    ].map(([v, l]) => (
      <div key={l} className="border-l-2 border-brand-400 pl-4">
        <p className="font-display text-4xl font-bold">{v}</p>
        <p className="text-sm text-white/60 mt-1">{l}</p>
      </div>
    ))}
  </div>
);

export default PageHero;
