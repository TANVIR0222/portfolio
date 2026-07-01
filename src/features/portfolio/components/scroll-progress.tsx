"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function ScrollProgress({ className }: { className?: string }) {
  const [progress, setProgress] = useState(0)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight

      if (docHeight <= 0) return

      const pct = Math.min(100, Math.round((scrollTop / docHeight) * 100))
      setProgress(pct)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // SVG circle maths
  const size = 28
  const strokeWidth = 2.5
  const r = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * r
  const dashOffset = circumference - (progress / 100) * circumference

  return (
    <div
      className={cn(
        "fixed left-1/2 z-50 -translate-x-1/2",
        "bottom-[calc(4rem+env(safe-area-inset-bottom,0px))]",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-1 rounded-full border px-2 py-1.5 shadow-none",
          isDark
            ? "border-white/20 bg-white text-black"
            : "border-black/20 bg-neutral-900 text-white"
        )}
      >
        {/* Theme toggle */}
        <ThemeToggle />

        {/* Vertical divider */}
        <div
          className={cn(
            "mx-1 h-4 w-px",
            isDark ? "bg-black/20" : "bg-white/20"
          )}
          aria-hidden
        />

        {/* Circular progress ring */}
        <div className="relative flex shrink-0 items-center justify-center">
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="-rotate-90"
            aria-hidden
          >
            {/* Track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              className={cn(isDark ? "text-black/10" : "text-white/10")}
            />
            {/* Progress */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              className="text-blue-500 transition-[stroke-dashoffset] duration-150"
            />
          </svg>
          {/* Percentage label inside circle */}
          <span
            className={cn(
              "absolute text-[7px] font-semibold tabular-nums",
              isDark ? "text-black" : "text-white"
            )}
          >
            {progress}
          </span>
        </div>

        {/* Label */}
        <span
          className={cn(
            "text-xs font-medium tracking-wide",
            isDark ? "text-black/60" : "text-white/60"
          )}
        >
          {progress < 100 ? "Scrolling" : "Done"}
        </span>

        {/* Vertical divider */}
        <div
          className={cn(
            "mx-1 h-4 w-px",
            isDark ? "bg-black/20" : "bg-white/20"
          )}
          aria-hidden
        />

        {/* GitHub link */}
        <a
          href="https://github.com/TANVIR0222"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className={cn(
            "flex size-8 items-center justify-center rounded-full transition-colors",
            isDark
              ? "text-black/50 hover:text-black"
              : "text-white/50 hover:text-white"
          )}
        >
          <svg
            viewBox="0 0 24 24"
            className="size-4"
            fill="currentColor"
            aria-hidden
          >
            <path d="M12 0C5.37 0 0 5.372 0 11.997 0 17.3 3.438 21.795 8.205 23.38c.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.609-4.042-1.609C4.422 17.77 3.633 17.4 3.633 17.4c-1.087-.744.084-.73.084-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.417-1.304.76-1.604-2.665-.3-5.466-1.332-5.466-5.929 0-1.31.465-2.38 1.235-3.219-.135-.303-.54-1.523.105-3.175 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.006 2.04.138 3 .404 2.28-1.551 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.608-2.805 5.623-5.475 5.918.42.36.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.284 0 .315.21.69.825.57C20.565 21.79 24 17.291 24 11.997 24 5.372 18.627 0 12 0" />
          </svg>
        </a>
      </div>
    </div>
  )
}
