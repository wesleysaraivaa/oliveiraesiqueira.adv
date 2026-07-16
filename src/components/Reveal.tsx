import { type ReactNode } from "react";
import { motion } from "motion/react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function RevealWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    show: {},
  };

  const wordVariants = {
    hidden: { y: "110%" },
    show: (custom: number) => ({
      y: "0%",
      transition: {
        duration: 0.9,
        delay: delay + custom * 0.06,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <motion.span
      className={className}
      style={{ display: "inline-block" }}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {words.map((w, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
        >
          <motion.span style={{ display: "inline-block" }} variants={wordVariants} custom={i}>
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
