"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { ease } from "../_lib/motion";

export type MockupStat = {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

function formatValue(n: number, decimals = 0) {
  return n.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function CountUpStat({ target, label, prefix = "", suffix = "", decimals = 0, inView }: MockupStat & { inView: boolean }) {
  const [display, setDisplay] = useState(formatValue(0, decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease,
      onUpdate: (latest) => setDisplay(formatValue(latest, decimals)),
    });
    return () => controls.stop();
  }, [inView, target, decimals]);

  return (
    <div className="text-center">
      <div className="font-display text-[#fe6601] text-[1.5rem] sm:text-[1.7rem] leading-none tracking-[-0.02em]">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="font-mono text-white/30 text-[0.56rem] tracking-widest uppercase mt-2">{label}</div>
    </div>
  );
}

export function MockupVisual({
  src,
  alt,
  width,
  height,
  stats,
  framed = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  stats: MockupStat[];
  framed?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="w-full min-w-0 max-w-[640px] mx-auto lg:mx-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 18 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease }}
        className={framed ? "rounded-2xl bg-white p-4 sm:p-5 shadow-[0_30px_60px_rgba(0,0,0,0.4)]" : ""}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 1024px) 90vw, 640px"
          className={["w-full h-auto", framed ? "rounded-lg" : "drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"].join(" ")}
          priority
        />
      </motion.div>

      {stats.length > 0 && (
        <div className="grid grid-cols-3 gap-3 mt-4 pt-6 border-t border-white/[0.08]">
          {stats.map((stat) => (
            <CountUpStat key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
      )}
    </div>
  );
}
