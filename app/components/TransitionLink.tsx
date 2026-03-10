"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/utils/animations"
import { ReactNode } from "react"

interface Props {
  href: string
  label?: string
  ariaLabel?: string
  children?: ReactNode
  className?: string
}

const TransitionLink = ({ href, label, ariaLabel, children, className = "" }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href)
  const hasCustomContent = Boolean(children)

  const handleClick = () => {
    if (!isActive) {
      animatePageOut(href, router)
    }
  }

  return (
    <button
      type="button"
      className={`inline-flex group cursor-pointer p-2 ${hasCustomContent ? "" : "text-base md:text-xl"} ${isActive ? "text-white" : "text-zinc-300"} ${className}`}
      onClick={handleClick}
      aria-label={ariaLabel ?? label}
      aria-current={isActive ? "page" : undefined}
    >
      {hasCustomContent ? (
        <span className="inline-flex items-center">{children}</span>
      ) : isActive ? (
        <span className="relative inline-flex after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-white">
          {label}
        </span>
      ) : (
        <div className="relative overflow-hidden">
          <span className="block relative transition-all duration-300 ease translate-y-[0%] group-hover:-translate-y-[101%]">{label}</span>
          <span aria-hidden="true" className="block absolute left-0 top-0 pointer-events-none transition-all duration-300 ease translate-y-[101%] group-hover:translate-y-[0%]">{label}</span>
        </div>
      )}
    </button>
  )
}

export default TransitionLink
