'use client';

import { Variants, motion } from 'motion/react';
import { ClassNameValue } from 'tailwind-merge';

interface Props {
  children: React.ReactNode;
  variants: Variants;
  initial: string;
  whileInView: string;
  viewport?: {
    amount?: number;
    margin?: string;
    once?: boolean;
  };
  className?: ClassNameValue;
}

const SectionAnimation = ({
  children,
  variants,
  viewport,
  initial,
  whileInView,
  className,
}: Props) => {
  return (
    <motion.section
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      className={className as string}
    >
      {children}
    </motion.section>
  );
};

export default SectionAnimation;
