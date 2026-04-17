import React from "react";
import { motion } from "motion/react";

export const PatternOverlay = ({ type }: { type: 'dots' | 'checker' | 'wavy' | 'psychedelic' | 'starburst' }) => {
  if (type === 'dots') return <div className="absolute inset-0 pattern-dots pointer-events-none" />;
  if (type === 'checker') return <div className="absolute inset-0 pattern-checkerboard-retro opacity-20 pointer-events-none" />;
  if (type === 'wavy') return <div className="absolute inset-0 pattern-retro-wavy opacity-20 pointer-events-none" />;
  if (type === 'psychedelic') return <div className="absolute inset-0 pattern-psychedelic opacity-30 pointer-events-none" />;
  if (type === 'starburst') return <div className="absolute inset-0 pattern-starburst opacity-40 pointer-events-none" />;
  return null;
};

export const SectionHeading = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`retro-title mb-8 ${className}`}>{children}</h2>
);

export const BrutalCard = ({ children, className = "", color = "bg-white" }: { children: React.ReactNode, className?: string, color?: string }) => (
  <div className={`brutal-border-lg p-6 ${color} ${className}`}>
    {children}
  </div>
);
