export const rightSlideFade = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.9,
    },
  },
};

export const leftSlideFade = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.9,
    },
  },
};

export const zoomInWithFade = {
  initial: {
    scale: 0.5,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: 'spring',
        damping: 5,
        stiftransitionfness: 100,
        restDelta: 0.001,
      },
    },
  },
};
