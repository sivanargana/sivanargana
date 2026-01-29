'use client';
import gsap from "gsap";
import { useEffect, useRef } from "react";
const Ticker = () => {
    const trackRef: any = useRef(null);
 
useEffect(() => {
  const track = trackRef.current;
  if (!track) return;

  // duplicate content only once
  if (!track.dataset.cloned) {
    track.innerHTML += track.innerHTML;
    track.dataset.cloned = "true";
  }

  let tween: gsap.core.Tween;

  const setupAnimation = () => {
    // kill previous tween
    tween?.kill();

    // reset position
    gsap.set(track, { x: 0 });

    const trackWidth = track.scrollWidth / 2;

    tween = gsap.to(track, {
      x: -trackWidth,
      duration: 20,
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
        <div className="w-full overflow-clip whitespace-nowrap">
            <div className="flex w-max [&>span]:uppercase1 [&>span]:text-[10vw] [&>span]:font-light [&>span]:pr-[4vw]" ref={trackRef}>
                <span>Siva Nargana</span>
                <span>Frontend Developer</span>
            </div>
        </div>
    )
}
export default Ticker


