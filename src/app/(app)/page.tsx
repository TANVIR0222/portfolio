import type { Metadata } from "next"

import { Experiences } from "@/features/portfolio/components/experiences"
import { GitHubContributions } from "@/features/portfolio/components/github-contributions"
import { Hello } from "@/features/portfolio/components/hello"
import { Overview } from "@/features/portfolio/components/overview"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { Projects } from "@/features/portfolio/components/projects"
import { ScrollProgress } from "@/features/portfolio/components/scroll-progress"
import { SocialLinks } from "@/features/portfolio/components/social-links"
import { TechStack } from "@/features/portfolio/components/tech-stack"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      {/* <JsonLdScript data={getProfilePageJsonLd()} /> */}

      <ScrollProgress />

      <div className="[--separator-height:--spacing(8)] **:data-[slot=panel]:scroll-mt-[calc(var(--header-height)+var(--separator-height))]">
        <div className="mx-auto md:max-w-3xl">
          <ProfileHeader />
          <Separator />
          <Overview />
          <Separator />
          <SocialLinks />

          <GitHubContributions />
          <Separator />

          <Hello />
          <Separator />

          {/* <Blog />
          <Separator /> */}

          <Experiences />
          <Separator />

          <TechStack />
          <Separator />

          <Projects />
          <Separator />

          {/* 

          <Experiences />
          <Separator />

          <Projects />
          <Separator />

          <Awards />
          <Separator />

          <Certifications />
          <Separator />

          <Bookmarks />
          <Separator />

          <Suspense fallback={<InsightsSkeleton />}>
            <Insights />
          </Suspense>
          <Separator />

          <Sponsors /> */}
        </div>
      </div>
    </>
  )
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "stripe-divider h-(--separator-height) w-full border-x border-line",
        className
      )}
    >
      {/* <div
        className="absolute -top-1.25 -left-1.25 z-2 flex size-2.25 border bg-background"
        aria-hidden
      />
      <div
        className="absolute -top-1.25 -right-1.25 z-2 flex size-2.25 border bg-background"
        aria-hidden
      /> */}
    </div>
  )
}
