import { motion } from "motion/react"
import { Dancing_Script } from "next/font/google"

import Container from "@/components/container"
import { LinkPreview } from "@/components/link-preview"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
})

export function AppFooter() {
  return (
    <Container className="pb-10">
      <footer className="my-8 flex flex-col items-center gap-4">
        <Signature />
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-center text-sm text-balance text-foreground/40">
            Built by yours truly. Here&apos;s the{" "}
            <LinkPreview url="https://github.com/manuarora700/manuarora.in">
              code
            </LinkPreview>{" "}
            and{" "}
            <LinkPreview url="https://www.youtube.com/@manuarora">
              video
            </LinkPreview>{" "}
            explaining it.
          </p>
          <p className="text-sm text-balance text-foreground/40">
            Website heavily inspired by{" "}
            <LinkPreview url="https://designerdada.com">
              Akash Bhadange
            </LinkPreview>
          </p>
        </div>
      </footer>
    </Container>
  )
}

function Signature() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={`${dancingScript.className} text-4xl text-foreground/80 transition-colors duration-300 select-none hover:text-foreground`}
    >
      Tanvir
    </motion.div>
  )
}
