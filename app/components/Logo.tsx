'use client';

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Logo() {
  const trackRef: any = useRef(null);
  const itemRef: any = useRef(null);
  useEffect(() => {
    const track = trackRef.current;
    const itemHeight = itemRef.current.offsetHeight;

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(track, {
      y: -itemHeight,
      duration: 0.6,
      ease: 'power2.inOut',
    })
      .to({}, { duration: 1 })
      .to(track, {
        y: -itemHeight * 2,
        duration: 0.6,
        ease: 'power2.inOut',
      })
      .to({}, { duration: 1 })
      .set(track, { y: 0 });

    return () => {
      tl.kill();
    };

  }, [])

  return (
    <>
      <div className="h-[30px] overflow-clip">
        <div className="flex flex-col [&>div]:leading-[30px] [&>div]:h-[30px] [&>div]:font-medium [&>div]:text-xl" ref={trackRef}>
          <div ref={itemRef}>@ Siva Nargana</div>
          <div>@ Code by Siva Nargana</div>
          <div>@ Siva Nargana</div>
        </div>
      </div>
    </>
  );
}
