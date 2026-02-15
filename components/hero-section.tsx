"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  onBooking: () => void
}

export function HeroSection({ onBooking }: HeroSectionProps) {
  const { ref, isInView } = useInView()

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Interieur elegant de la Clinique Lumea"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-2xl">
          <p
            className={`mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground ${
              isInView ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Clinique esthetique premium
          </p>
          <h1
            className={`font-serif text-5xl leading-tight tracking-tight text-foreground md:text-7xl md:leading-tight ${
              isInView ? "animate-fade-up delay-100" : "opacity-0"
            }`}
          >
            <span className="text-balance">
              {"Reveler votre beaute naturelle"}
            </span>
          </h1>
          <p
            className={`mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg ${
              isInView ? "animate-fade-up delay-200" : "opacity-0"
            }`}
          >
            {"Des soins sur mesure, une expertise medicale d'excellence et une approche bienveillante pour sublimer votre beaute unique."}
          </p>
          <div
            className={`mt-10 flex flex-col gap-4 sm:flex-row ${
              isInView ? "animate-fade-up delay-300" : "opacity-0"
            }`}
          >
            <Button
              onClick={onBooking}
              className="rounded-none bg-foreground px-8 py-6 text-xs uppercase tracking-widest text-background transition-all duration-300 hover:bg-foreground/80"
            >
              Prendre rendez-vous
            </Button>
            <Button
              variant="outline"
              asChild
              className="rounded-none border-foreground/20 px-8 py-6 text-xs uppercase tracking-widest text-foreground transition-all duration-300 hover:bg-foreground/5 hover:text-foreground"
            >
              <a href="#services">Decouvrir nos soins</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#services"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Defiler vers les services"
        >
          <span className="text-[10px] uppercase tracking-widest">
            Defiler
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
