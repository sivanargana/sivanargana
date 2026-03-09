'use client';
import gsap from "gsap";
import { useEffect, useRef } from "react";

type TickerProps = {
  name: string;
  title: string;
};

const Ticker = ({ name, title }: TickerProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;
    if (!track || !group) return;

    let tween: gsap.core.Tween | undefined;

    const setupAnimation = () => {
      tween?.kill();

      const singleGroupWidth = group.offsetWidth;
      gsap.set(track, { x: 0 });

      tween = gsap.to(track, {
        x: -singleGroupWidth,
        duration: 18,
        ease: "none",
        repeat: -1,
      });
    };

    setupAnimation();
    window.addEventListener("resize", setupAnimation);

    return () => {
      window.removeEventListener("resize", setupAnimation);
      tween?.kill();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden whitespace-nowrap text-zinc-100">
      <div className="flex w-max will-change-transform" ref={trackRef}>
        <div
          ref={groupRef}
          className="flex shrink-0 [&>span]:pr-[4vw] [&>span]:text-[clamp(1.6rem,5.5vw,5.4rem)] [&>span]:font-light"
        >
          <span className="uppercase">{name}</span>
          <span className="uppercase">{title}</span>
        </div>
        <div
          aria-hidden="true"
          className="flex shrink-0 [&>span]:pr-[4vw] [&>span]:text-[clamp(1.6rem,5.5vw,5.4rem)] [&>span]:font-light"
        >
          <span className="uppercase">{name}</span>
          <span className="uppercase">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Ticker


