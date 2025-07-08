"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { fadeSlideUp } from "@/lib/animations";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

export function HomeAnimator({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      {React.Children.map(children, (child, i) => (
        <motion.div key={i} variants={fadeSlideUp} custom={i}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
