import { motion } from "framer-motion";
import {
  FaComments,
  FaSearchLocation,
  FaDraftingCompass,
  FaFileSignature,
  FaHardHat,
  FaFlagCheckered,
} from "react-icons/fa";
import { animationVariants } from "../../constants/animationVariants";

const steps = [
  {
    icon: <FaComments />,
    title: "Consultation",
    desc: "We listen to your goals, site constraints, timeline and budget.",
  },
  {
    icon: <FaSearchLocation />,
    title: "Feasibility & investigation",
    desc: "Site visits, surveys and geotechnical investigation to understand the ground and the brief.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Design",
    desc: "Value-engineered civil and structural design, calculations and construction drawings.",
  },
  {
    icon: <FaFileSignature />,
    title: "Approvals support",
    desc: "Documentation and coordination to support the statutory approval process.",
  },
  {
    icon: <FaHardHat />,
    title: "Supervision & QA",
    desc: "Site supervision, monitoring and quality control so what is built matches the design.",
  },
  {
    icon: <FaFlagCheckered />,
    title: "Handover",
    desc: "Final inspections and project close-out, delivered on time and within budget.",
  },
];

// "How we work" section: the engagement process from first call to handover.
const Process = () => {
  return (
    <section className="bg-surface">
      <div className="container-x py-28 max-md:py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center gap-5 max-w-2xl mx-auto"
        >
          <span className="eyebrow">How we work</span>
          <h2 className="section-title">From first call to final handover.</h2>
          <p className="text-lg text-ink-soft leading-relaxed">
            A clear, proven process that keeps you informed at every stage and
            your project on schedule and within budget.
          </p>
        </motion.div>
        <motion.ol
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.08 }}
          className="relative grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-6 gap-y-10 mt-16"
        >
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              variants={animationVariants.fadeUp}
              className="relative bg-white rounded-xl p-7 border border-black/5 shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-lg bg-brand-600 text-white text-lg flex items-center justify-center">
                  {s.icon}
                </span>
                <span className="font-display text-5xl font-bold text-ink/[0.06] leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-bold mt-5">{s.title}</h3>
              <p className="text-ink-soft leading-relaxed mt-2">{s.desc}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
};

export default Process;
