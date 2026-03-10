"use client"

import { animatePageIn } from "@/utils/animations"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

export default function Template({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) {
      return
    }

    animatePageIn()
  }, [mounted])

  const banners = (
    <>
      <div
        id="banner-1"
        className="fixed top-0 left-0 z-20000 min-h-screen w-1/4 bg-white pointer-events-none"
      />
      <div
        id="banner-2"
        className="fixed top-0 left-1/4 z-20000 min-h-screen w-1/4 bg-white pointer-events-none"
      />
      <div
        id="banner-3"
        className="fixed top-0 left-2/4 z-20000 min-h-screen w-1/4 bg-white pointer-events-none"
      />
      <div
        id="banner-4"
        className="fixed top-0 left-3/4 z-20000 min-h-screen w-1/4 bg-white pointer-events-none"
      />
    </>
  )

  return (
    <div>
      {mounted && createPortal(banners, document.body)}
      {children}
    </div>
  )
}