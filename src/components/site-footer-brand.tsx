"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react"

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
          <svg
            className="container size-full"
            viewBox="0 0 1410 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M193 1h160v32h-160ZM257 33h32v224h-32ZM385 33h32v224h-32ZM513 33h32v224h-32ZM385 1h160v32h-160ZM417 129h96v32h-96ZM577 1h32v256h-32ZM705 1h32v256h-32ZM609 33h32v64h-32ZM641 97h32v64h-32ZM673 161h32v64h-32ZM769 1h32v160h-32ZM897 1h32v160h-32ZM801 161h32v64h-32ZM865 161h32v64h-32ZM833 225h32v32h-32ZM961 1h160v32h-160ZM961 225h160v32h-160ZM1025 33h32v192h-32ZM1153 1h32v256h-32ZM1185 1h96v32h-96ZM1281 33h32v96h-32ZM1185 129h96v32h-96ZM1217 161h32v32h-32ZM1249 193h32v32h-32ZM1281 225h32v32h-32Z"
              fill="url(#paint0_linear_1145_73)"
            />
            <path
              className="stroke-foreground/10"
              d="M193 1h160v32h-160ZM257 33h32v224h-32ZM385 33h32v224h-32ZM513 33h32v224h-32ZM385 1h160v32h-160ZM417 129h96v32h-96ZM577 1h32v256h-32ZM705 1h32v256h-32ZM609 33h32v64h-32ZM641 97h32v64h-32ZM673 161h32v64h-32ZM769 1h32v160h-32ZM897 1h32v160h-32ZM801 161h32v64h-32ZM865 161h32v64h-32ZM833 225h32v32h-32ZM961 1h160v32h-160ZM961 225h160v32h-160ZM1025 33h32v192h-32ZM1153 1h32v256h-32ZM1185 1h96v32h-96ZM1281 33h32v96h-32ZM1185 129h96v32h-96ZM1217 161h32v32h-32ZM1249 193h32v32h-32ZM1281 225h32v32h-32Z"
              strokeWidth="2"
            />
            <defs>
              <motion.linearGradient
                id="paint0_linear_1145_73"
                x1={gradientX1}
                y1="1"
                x2="705"
                y2="257"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
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
