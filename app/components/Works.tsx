"use client"
import gsap from "gsap"
import { useCallback, useEffect, useRef, useState } from "react"
import type React from "react";
import { createPortal } from "react-dom";
import type { ProjectItem } from "@/types/profile";

type WorksProps = {
    projects: ProjectItem[];
};

const Works = ({ projects }: WorksProps) => {
    const hoverCardRef = useRef<HTMLDivElement | null>(null);
    const xSetterRef = useRef<((value: number) => void) | null>(null);
    const ySetterRef = useRef<((value: number) => void) | null>(null);
    const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const isContentAnimatingRef = useRef(false);
    const pendingProjectRef = useRef<ProjectItem | null>(null);
    const pointerTargetRef = useRef({ x: 0, y: 0 });
    const pointerCurrentRef = useRef({ x: 0, y: 0 });
    const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
    const [visibleProject, setVisibleProject] = useState<ProjectItem | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    const animateContentToPending = useCallback(() => {
        const nextProject = pendingProjectRef.current;
        if (!nextProject || !contentRef.current) {
            return;
        }

        const contentEl = contentRef.current;
        pendingProjectRef.current = null;
        isContentAnimatingRef.current = true;

        gsap.to(contentEl, {
            y: -24,
            opacity: 0,
            duration: 0.16,
            ease: "power2.in",
            onComplete: () => {
                setVisibleProject(nextProject);

                requestAnimationFrame(() => {
                    if (!contentRef.current) {
                        isContentAnimatingRef.current = false;
                        return;
                    }

                    gsap.set(contentRef.current, { y: 24, opacity: 0 });
                    gsap.to(contentRef.current, {
                        y: 0,
                        opacity: 1,
                        duration: 0.24,
                        ease: "power3.out",
                        onComplete: () => {
                            isContentAnimatingRef.current = false;
                            if (pendingProjectRef.current && pendingProjectRef.current.name !== nextProject.name) {
                                animateContentToPending();
                            }
                        },
                    });
                });
            },
        });
    }, []);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted || !hoverCardRef.current) {
            return;
        }

        xSetterRef.current = gsap.quickSetter(hoverCardRef.current, "x", "px") as (value: number) => void;
        ySetterRef.current = gsap.quickSetter(hoverCardRef.current, "y", "px") as (value: number) => void;
    }, [isMounted]);

    useEffect(() => {
        if (!activeProject) {
            return;
        }

        const onPointerMoveGlobal = (e: PointerEvent) => {
            pointerTargetRef.current.x = e.clientX + 24;
            pointerTargetRef.current.y = e.clientY + 24;
        };

        const followPointer = () => {
            const current = pointerCurrentRef.current;
            const target = pointerTargetRef.current;

            current.x += (target.x - current.x) * 0.24;
            current.y += (target.y - current.y) * 0.24;

            xSetterRef.current?.(current.x);
            ySetterRef.current?.(current.y);
        };

        window.addEventListener("pointermove", onPointerMoveGlobal);
        gsap.ticker.add(followPointer);

        return () => {
            window.removeEventListener("pointermove", onPointerMoveGlobal);
            gsap.ticker.remove(followPointer);
        };
    }, [activeProject]);

    useEffect(() => {
        if (!activeProject) {
            return;
        }

        if (!visibleProject) {
            setVisibleProject(activeProject);
            return;
        }

        if (visibleProject.name === activeProject.name) {
            return;
        }

        pendingProjectRef.current = activeProject;

        if (!isContentAnimatingRef.current) {
            animateContentToPending();
        }
    }, [activeProject, visibleProject, animateContentToPending]);

    const positionPopup = (clientX: number, clientY: number) => {
        if (!xSetterRef.current || !ySetterRef.current) {
            return;
        }

        const x = clientX + 24;
        const y = clientY + 24;

        pointerTargetRef.current.x = x;
        pointerTargetRef.current.y = y;
        pointerCurrentRef.current.x = x;
        pointerCurrentRef.current.y = y;

        xSetterRef.current(x);
        ySetterRef.current(y);
    };

    const onMouseEnter = (e: React.PointerEvent<HTMLDivElement>, item: ProjectItem) => {
        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
            hideTimerRef.current = null;
        }

        setActiveProject(item);
        gsap.killTweensOf(hoverCardRef.current);
        positionPopup(e.clientX, e.clientY);

        gsap.to(hoverCardRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.16,
            ease: "power3.out",
        });
    };

    const onMouseLeave = () => {
        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
        }

        setActiveProject(null);
        hideTimerRef.current = setTimeout(() => {
            gsap.killTweensOf(hoverCardRef.current);
            gsap.to(hoverCardRef.current, {
                opacity: 0,
                scale: 0.9,
                duration: 0.14,
                ease: "power2.out",
            });
        }, 50);
    };

    useEffect(() => {
        return () => {
            if (hideTimerRef.current) {
                clearTimeout(hideTimerRef.current);
            }
        };
    }, []);

    return (
        <>
            {isMounted && createPortal(
                <div className="fixed left-0 top-0 z-9999 w-85 rounded-2xl border border-zinc-700 bg-zinc-900/95 p-5 opacity-0 scale-90 pointer-events-none" ref={hoverCardRef}>
                    <div ref={contentRef}>
                        <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">{visibleProject?.company}</p>
                        <h3 className="mt-2 text-2xl leading-tight text-zinc-100">{visibleProject?.name}</h3>
                        <p className="mt-3 text-sm text-zinc-300">{visibleProject?.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {visibleProject?.stack.map((tech) => (
                                <span key={tech} className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-100">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
                ,
                document.body
            )}
            <section className="px-6 py-18 md:px-12 lg:px-16" >
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-8 text-sm uppercase tracking-[0.34em] text-zinc-400">Selected Work</h2>
                    {
                        projects.map((item) => <div key={item.name} className="group border-y border-zinc-700/80 -mt-px py-8 flex flex-col gap-5 md:flex-row md:items-center" onPointerEnter={(e) => onMouseEnter(e, item)} onPointerLeave={onMouseLeave}>
                                <span className="text-[clamp(1.6rem,4.4vw,4.5rem)] font-medium uppercase leading-none transition-transform duration-500 group-hover:translate-x-2">{item.name}</span>
                                <span className="text-sm md:ml-auto uppercase tracking-[0.18em] text-zinc-400">{item.duration}</span>
                        </div>)
                    }
                </div>
            </section>
        </>
    );

};
export default Works;
