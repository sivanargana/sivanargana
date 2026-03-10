"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import Logo from "./Logo"
import TransitionLink from "./TransitionLink"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <header className={`fixed inset-x-0 -top-px z-40 transition-all duration-300 ${
      isScrolled ? "border-zinc-800/70 bg-black/65 py-4 backdrop-blur-md" : "py-8"
    }`}>
      <div className="flex items-center px-6 md:px-10">
        <TransitionLink href="/" ariaLabel="Home" className="p-0 text-left">
          <Logo />
        </TransitionLink>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-700 text-zinc-200 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={18} strokeWidth={2.25} /> : <Menu size={18} strokeWidth={2.25} />}
        </button>

        <nav className="ml-auto hidden md:block">
          <ul className="flex gap-8 md:gap-12">
            <li>
              <TransitionLink href="/work" label="Work" />
            </li>
            <li>
              <TransitionLink href="/about" label="About" />
            </li>
            <li>
              <TransitionLink href="/contact" label="Contact" />
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={`md:hidden ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} transition-opacity duration-200`}
      >
        <div className="fixed inset-0 top-19 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        <nav
          id="mobile-nav"
          className={`absolute left-4 right-4 top-full mt-3 rounded-2xl border border-zinc-700 bg-zinc-950/95 p-4 transition-all duration-250 ${isMenuOpen ? "translate-y-0" : "-translate-y-2"}`}
        >
          <ul className="flex flex-col gap-2" onClick={() => setIsMenuOpen(false)}>
            <li>
              <TransitionLink href="/work" label="Work" className="w-full justify-start" />
            </li>
            <li>
              <TransitionLink href="/about" label="About" className="w-full justify-start" />
            </li>
            <li>
              <TransitionLink href="/contact" label="Contact" className="w-full justify-start" />
            </li>
          </ul>
        </nav>
      </div>

    </header>
  )
}

export default Header
