"use client"

import { useEffect, useState } from "react"
import Logo from "./Logo"
import TransitionLink from "./TransitionLink"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
 <header className={`fixed inset-x-0 -top-px z-40 transition-all duration-300 ${
   isScrolled ? "  border-zinc-800/70 bg-black/65 py-4 backdrop-blur-md" : "py-8"
 }`}>
    <div className=" flex  items-center px-6 md:px-10">
      <Logo />
      <nav className="ml-auto">
        <ul className="flex gap-8 md:gap-12">
          <li>
            <TransitionLink href="/" label="Home" />
          </li>
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
 </header>
  )
}

export default Header
