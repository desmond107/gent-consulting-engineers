import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";
const ServiceCard = ({ id, title, imgSrc, iconSrc, brief, index }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={animationVariants.fadeUp}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link
        to={`/services/${id}`}
        onClick={scrollToTop}
        className="group flex flex-col h-full bg-white rounded-xl overflow-hidden border border-black/5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
      >
        <div className="relative h-64 overflow-hidden bg-ink">
          <img
            src={imgSrc}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent"></div>
          <div className="absolute bottom-5 left-6 w-14 h-14 rounded-lg bg-brand-600 flex items-center justify-center shadow-lg">
            <img src={iconSrc} className="w-8" alt="" />
          </div>
          {index ? (
            <span className="absolute top-5 right-5 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold text-white tracking-wider">
              {String(index).padStart(2, "0")}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col flex-1 gap-3 p-7">
          <h2 className="text-2xl font-bold leading-snug transition-colors group-hover:text-brand-700">
            {title}
          </h2>
          <p className="text-ink-soft leading-relaxed">{brief}</p>
          <span className="mt-auto pt-3 inline-flex items-center gap-2 font-semibold text-brand-600">
            Learn more
            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
