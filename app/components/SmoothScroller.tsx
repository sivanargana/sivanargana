"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroller({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let smoother = ScrollSmoother.get();

    if (!smoother && wrapperRef.current && contentRef.current) {
      smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.2,
        effects: true,
        smoothTouch: 0.1,
      });
    }

    return () => {
      smoother?.kill();
    };
  }, []);

  useEffect(() => {
    const smoother = ScrollSmoother.get();
    smoother?.scrollTo(0, false);
    ScrollTrigger.refresh();
  }, [pathname]);

  return (
    <div ref={wrapperRef} >
      <div ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
