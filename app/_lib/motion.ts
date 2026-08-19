import type { Variants } from "framer-motion";

export const ease = [0.16, 1, 0.3, 1] as const; // expo ease-out

export const motion_fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease },
  }),
};

export const motion_scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease },
  }),
};
