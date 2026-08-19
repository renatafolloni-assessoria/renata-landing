"use client";

import { useRef, type RefObject } from "react";
import { useInView } from "framer-motion";

export function useReveal(amount = 0.12): [RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount });
  return [ref, inView];
}
