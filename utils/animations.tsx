import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

const setScrollLocked = (locked: boolean) => {
  const html = document.documentElement
  const body = document.body

  html.style.overflow = locked ? "hidden" : ""
  body.style.overflow = locked ? "hidden" : ""
}

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")
  const bannerThree = document.getElementById("banner-3")
  const bannerFour = document.getElementById("banner-4")

  setScrollLocked(true)

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const banners = [bannerOne, bannerTwo, bannerThree, bannerFour]
    const tl = gsap.timeline()

    tl.set(banners, {
      autoAlpha: 1,
      yPercent: 0,
    }).to(banners, {
      yPercent: 100,
      duration: 0.7,
      stagger: 0.2,
      ease: "power2.inOut",
    }).set(banners, {
      autoAlpha: 0,
    }).add(() => {
      setScrollLocked(false)
    })

    return
  }

  setScrollLocked(false)
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")
  const bannerThree = document.getElementById("banner-3")
  const bannerFour = document.getElementById("banner-4")

  setScrollLocked(true)

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const banners = [bannerOne, bannerTwo, bannerThree, bannerFour]
    const tl = gsap.timeline()

    tl.set(banners, {
      autoAlpha: 1,
      yPercent: -100,
    }).to(banners, {
      yPercent: 0,
      duration: 0.7,
      stagger: 0.2,
      ease: "power2.inOut",
      onComplete: () => {
        router.push(href)
      },
    })

    return
  }

  router.push(href)
}