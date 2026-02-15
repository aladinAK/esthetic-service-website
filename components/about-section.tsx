"use client"

import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"
import { Award, Heart, Shield, Users } from "lucide-react"

const stats = [
  { icon: Users, value: "2 500+", label: "Patients satisfaits" },
  { icon: Award, value: "15 ans", label: "D'experience" },
  { icon: Shield, value: "100%", label: "Certifie" },
  { icon: Heart, value: "98%", label: "Taux de satisfaction" },
]

export function AboutSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="apropos"
      className="bg-secondary/50 py-24 lg:py-32"
    >
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div
            className={`relative ${
              isInView ? "animate-slide-left" : "opacity-0"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Dr. Sophie Laurent, fondatrice de la Clinique Lumea"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 border border-border bg-card p-6 shadow-lg md:p-8">
              <p className="font-serif text-3xl text-foreground">15+</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {"Annees d'excellence"}
              </p>
            </div>
          </div>

          {/* Content */}
          <div
            className={`${
              isInView ? "animate-slide-right delay-200" : "opacity-0"
            }`}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Notre histoire
            </p>
            <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl">
              <span className="text-balance">
                {"L'art de la beaute au service de votre bien-etre"}
              </span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {"Fondee par le Dr. Sophie Laurent, la Clinique Lumea est nee d'une vision : offrir des soins esthetiques d'excellence dans un cadre bienveillant et chaleureux. Notre approche allie expertise medicale et ecoute attentive pour des resultats qui vous ressemblent."}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {"Chaque patient est unique. C'est pourquoi nous prenons le temps de comprendre vos attentes et de concevoir un plan de soin entierement personnalise."}
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent">
                    <stat.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-serif text-xl text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
