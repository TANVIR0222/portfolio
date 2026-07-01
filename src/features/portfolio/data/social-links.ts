import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 */
export const SOCIAL = {
  x: {
    title: "X",
    handle: "@TanvirIsla3324",
    href: "https://x.com/TanvirIsla3324",
    sameAs: true,
  },
  github: {
    title: "GitHub",
    handle: "TANVIR0222",
    href: "https://github.com/TANVIR0222",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "tanvir",
    href: "https://www.linkedin.com/in/tanvir-islam-3b7883284/",
    sameAs: true,
  },
  dailydotdev: {
    title: "daily.dev",
    handle: "@tanvirislam9425",
    href: "https://daily.dev/tanvirislam9425",
    sameAs: true,
  },
  // discord: {
  //   title: "Discord",
  //   handle: "ncdai",
  //   href: "https://discord.com/users/1186630645443739651",
  // },
  youtube: {
    title: "YouTube",
    handle: "@MdTanvir-h3j",
    href: "https://www.youtube.com/@MdTanvir-h3j",
    sameAs: true,
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
