'use client'

import { useEffect, useRef, RefObject } from 'react'

export function useScrollAnimation(
  threshold: number = 0.1,
  rootMargin: string = '0px 0px -100px 0px'
): RefObject<HTMLElement | null> {
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin])

  return elementRef
}
