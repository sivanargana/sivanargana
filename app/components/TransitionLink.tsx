"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/utils/animations"

interface Props {
  href: string
  label: string
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }

  return (
    <button className="inline-flex text-xl group cursor-pointer p-2" onClick={handleClick}>
      <div className="relative overflow-hidden">
          <span className="block relative transition-all duration-300 ease translate-y-[0%] group-hover:-translate-y-[101%]">{label}</span>
          <span aria-hidden="true" className="block absolute left-0 top-0 pointer-events-none transition-all duration-300 ease translate-y-[101%] group-hover:translate-y-[0%]">{label}</span>
      </div>
    </button>
  )
}

export default TransitionLink
