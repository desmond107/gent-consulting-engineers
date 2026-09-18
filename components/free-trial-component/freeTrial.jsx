import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { scrollToTop } from "../../constants/scrollToTop";

const FreeTrial = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 to-brand-800 text-white">
      <div className="blueprint absolute inset-0"></div>
      <div className="container-x relative py-24 max-sm:py-16 flex flex-col items-center text-center gap-6">
        <span className="eyebrow eyebrow-light before:hidden">
          GCE · The future of engineering
        </span>
        <h2 className="font-display text-5xl max-sm:text-3xl font-bold max-w-2xl leading-tight">
          Ready to start your next project?
        </h2>
        <p className="text-lg text-white/80 max-w-xl">
          Speak to our engineers about scope, feasibility and the right
          approach for your build.
        </p>
        <Link onClick={scrollToTop} to="/contact" className="mt-2">
          <button className="inline-flex items-center gap-2 rounded-md bg-white text-brand-800 px-7 py-3.5 font-semibold transition-all hover:bg-ink hover:text-white active:scale-[0.98]">
            Get in touch <FaArrowRight className="text-sm" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FreeTrial;
