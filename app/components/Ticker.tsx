'use client';
import gsap from "gsap";
import { useEffect, useRef } from "react";
const Ticker = () => {
    const trackRef: any = useRef(null);
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        track.innerHTML += track.innerHTML;
        const trackWidth = track.scrollWidth / 2;
        gsap.to(track, {
            x: -trackWidth,
            duration: 20,
            ease: 'none',
            repeat: -1,
        });
        return () => gsap.killTweensOf(track);
    }, []);
    return (
        <div className="w-full overflow-clip whitespace-nowrap">
            <div className="flex w-max [&>span]:uppercase [&>span]:text-[8vw] [&>span]:font-bold [&>span]:pr-[4vw]" ref={trackRef}>
                <span>Siva Nargana</span>
                <span>Frontend Developer</span>
            </div>
        </div>
    )
}
export default Ticker


