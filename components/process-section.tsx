"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { MessageCircle, ClipboardList, Sparkles, CalendarCheck } from "lucide-react"

const steps = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Prise de rendez-vous",
    description:
      "Reservez votre consultation en ligne en quelques clics. Choisissez le creneau qui vous convient le mieux.",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Consultation personnalisee",
    description:
      "Un echange approfondi avec votre praticien pour definir ensemble vos objectifs et elaborer un plan de soin sur mesure.",
  },
  {
    icon: ClipboardList,
    number: "03",
    title: "Plan de traitement",
    description:
      "Nous vous presentons un protocole detaille, transparent et adapte a vos besoins. Aucune surprise.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Resultats sublimes",
    description:
      "Profitez de resultats naturels et harmonieux. Un suivi regulier garantit votre satisfaction dans la duree.",
  },
]

interface ProcessSectionProps {
  onBooking: () => void
}

export function ProcessSection({ onBooking }: ProcessSectionProps) {
  const { ref, isInView } = useInView()

  return (
    <section className="bg-secondary/50 py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mb-16 text-center ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Notre approche
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">
              {"Un parcours simple et rassurant"}
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative p-6 ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center bg-accent">
                <step.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="font-serif text-3xl text-border">
                {step.number}
              </span>
              <h3 className="mt-2 font-serif text-lg text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center ${
            isInView ? "animate-fade-up delay-500" : "opacity-0"
          }`}
        >
          <Button
            onClick={onBooking}
            className="rounded-none bg-foreground px-10 py-6 text-xs uppercase tracking-widest text-background transition-all duration-300 hover:bg-foreground/80"
          >
            Commencer maintenant
          </Button>
        </div>
      </div>
    </section>
  )
}
