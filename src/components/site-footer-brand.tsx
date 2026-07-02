"use client"

import {
    useMotionValue,
    useReducedMotion,
    useSpring
} from "motion/react";

const VIEWBOX_WIDTH = 1410
const DEFAULT_GRADIENT_X = 705

export function SiteFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion()

  const gradientX1Raw = useMotionValue(DEFAULT_GRADIENT_X)
  const gradientX1 = useSpring(gradientX1Raw, {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return

    const container = event.currentTarget
    const containerRect = container.getBoundingClientRect()
    const mouseX = event.clientX - containerRect.left
    const containerWidth = containerRect.width

    const normalizedX = (mouseX / containerWidth) * VIEWBOX_WIDTH
    const clampedX = Math.max(0, Math.min(VIEWBOX_WIDTH, normalizedX))

    gradientX1Raw.set(clampedX)
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    gradientX1Raw.set(DEFAULT_GRADIENT_X)
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 9.470000267028809 177.8300018310547 35.78999710083008" data-asc="0.9052734375" width="177.8300018310547" height="35.78999710083008"><defs/><g fill="#000000"><g transform="translate(0, 0)"><path d="M11.79 45.26L11.79 13.70L0 13.70L0 9.47L28.37 9.47L28.37 13.70L16.53 13.70L16.53 45.26L11.79 45.26ZM25.59 45.26L39.33 9.47L44.43 9.47L59.08 45.26L53.69 45.26L49.51 34.42L34.55 34.42L30.62 45.26L25.59 45.26M35.91 30.57L48.05 30.57L44.31 20.65Q42.60 16.14 41.77 13.23Q41.09 16.67 39.84 20.07L35.91 30.57ZM62.82 45.26L62.82 9.47L67.68 9.47L86.47 37.57L86.47 9.47L91.02 9.47L91.02 45.26L86.16 45.26L67.36 17.14L67.36 45.26L62.82 45.26ZM109.20 45.26L95.34 9.47L100.46 9.47L109.77 35.47Q110.89 38.60 111.65 41.33Q112.48 38.40 113.57 35.47L123.24 9.47L128.08 9.47L114.06 45.26L109.20 45.26ZM133.13 45.26L133.13 9.47L137.87 9.47L137.87 45.26L133.13 45.26ZM146.29 45.26L146.29 9.47L162.16 9.47Q166.94 9.47 169.43 10.44Q171.92 11.40 173.41 13.84Q174.90 16.28 174.90 19.24Q174.90 23.05 172.44 25.66Q169.97 28.27 164.82 28.98Q166.70 29.88 167.68 30.76Q169.75 32.67 171.61 35.52L177.83 45.26L171.88 45.26L167.14 37.82Q165.06 34.59 163.72 32.89Q162.38 31.18 161.32 30.49Q160.25 29.81 159.16 29.54Q158.35 29.37 156.52 29.37L151.03 29.37L151.03 45.26L146.29 45.26M151.03 25.27L161.21 25.27Q164.45 25.27 166.28 24.60Q168.12 23.93 169.07 22.45Q170.02 20.97 170.02 19.24Q170.02 16.70 168.18 15.06Q166.33 13.43 162.35 13.43L151.03 13.43L151.03 25.27Z"/></g></g></svg>
</div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden
      />
    </div>
  )
}
