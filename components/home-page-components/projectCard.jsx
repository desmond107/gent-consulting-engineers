import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { scrollToTop } from "../../constants/scrollToTop";
import { animationVariants } from "../../constants/animationVariants";
import { motion } from "framer-motion";
const ProjectCard = ({ src, title, href, index }) => {
  return (
    <Link
      onClick={scrollToTop}
      to={`/projects/${href}`}
      className="group relative block h-[380px] max-sm:h-80 w-full overflow-hidden rounded-xl bg-ink"
    >
      <img
        src={src}
        loading="lazy"
        className="absolute w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"></div>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={animationVariants.toLeft}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute inset-0 bg-surface origin-left z-20"
      ></motion.div>
      {index ? (
        <span className="absolute top-5 left-5 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold text-white tracking-wider">
          {String(index).padStart(2, "0")}
        </span>
      ) : (
        ""
      )}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex items-end justify-between gap-4">
        <h3 className="text-xl font-semibold leading-snug">{title}</h3>
        <span className="shrink-0 w-10 h-10 rounded-full bg-white/15 backdrop-blur flex items-center justify-center transition-all duration-300 group-hover:bg-brand-500 group-hover:-rotate-45">
          <FaArrowRight className="text-sm" />
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
