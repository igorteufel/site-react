export const revealViewport = {
  once: true,
  amount: 0.18,
  margin: '0px 0px -7% 0px',
};

export const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const revealSoft = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
  },
};

export const revealMask = {
  hidden: { clipPath: 'inset(0 0 100% 0)', y: 40 },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    y: 0,
    transition: { duration: 0.92, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger = {
  hidden: {},
  visible: { transition: { delayChildren: 0.08, staggerChildren: 0.1 } },
};

export const motionState = (reduceMotion) => ({
  initial: reduceMotion ? false : 'hidden',
  whileInView: 'visible',
  viewport: revealViewport,
});
