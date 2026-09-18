const ease = [0.22, 1, 0.36, 1];

export const animationVariants = {
  toLeft: {
    initial: { scaleX: 1 },
    animate: {
      scaleX: 0,
      transition: { duration: 0.9, ease },
    },
  },
  fadeUp: {
    initial: { opacity: 0, y: 32 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease },
    },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.7, ease } },
  },
  zoomOut: {
    initial: { scale: 1.05, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease },
    },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -40 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease },
    },
  },
  fadeRight: {
    initial: { opacity: 0, x: 40 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease },
    },
  },
  zoomIn: {
    initial: { scale: 0.92, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease },
    },
  },
};
