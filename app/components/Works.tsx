"use client"
import gsap from "gsap"
import { useEffect, useRef } from "react"

const Works = () => {
    const hoverImgRef = useRef(null)

    const works = [
        {
            name: "Build Connect",
            type: "Design & Development"
        },
        {
            name: "FSII",
            type: "Design & Development"
        },
        {
            name: "Vinci 360",
            type: "Design & Development"
        },
        {
            name: "Madeinvsa",
            type: "Design & Development"
        },
        {
            name: "Swiftbrands",
            type: "Design & Development"
        },
        {
            name: "Colour Moon",
            type: "Design & Development"
        }
    ]

    useEffect(() => {

        document.addEventListener("mousemove", onMouseMove);
        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        };

    }, [])

    const onMouseEnter = (e: any) => {
        console.log(e, "enter")

        gsap.to(hoverImgRef.current, {
            opacity: 1,
            scale: 1, 
            duration: 0.3,
            ease: 'power3.out'
        })
    }
    const onMouseLeave = (e: any) => {
        console.log(e, "leave")
        gsap.to(hoverImgRef.current, {
            opacity: 0,
            scale: 0.8, 
            duration: 0.25,
            ease: 'power3.in'
        })

    }
    const onMouseMove = (e: any) => {
        console.log(e, "move")
        gsap.to(hoverImgRef.current, {
            x: e.clientX + 20,
            y: e.clientY + 20,
            duration: 0.15,
            ease: 'power2.out'
        })

    }

    return (
        <>

            <div className="size-50 bg-red-500 fixed left-0 top-0 opacity-0 scale-0" ref={hoverImgRef}></div>
            <section className="p-40" >
                <div className="max-w-350 mx-auto">
                    {
                        works.map((item: any, i: any) => <div key={i}>
                            <div className=" border-y -mt-px  py-10 flex items-center" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                                <span className="text-7xl font-medium uppercase">{item.name}</span>
                                <span className="text-base font-medium ml-auto">{item.type}</span>
                            </div>

                        </div>)
                    }
                </div>
            </section>
        </>
    )

}
export default Works
