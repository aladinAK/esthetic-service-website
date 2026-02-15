"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "42 Avenue des Champs-Elysees, 75008 Paris",
  },
  {
    icon: Phone,
    label: "Telephone",
    value: "+33 1 42 56 78 90",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@clinique-lumea.fr",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun - Ven : 9h - 19h | Sam : 9h - 14h",
  },
]

interface ContactSectionProps {
  onBooking: () => void
}

export function ContactSection({ onBooking }: ContactSectionProps) {
  const { ref, isInView } = useInView()

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div
            className={`${isInView ? "animate-slide-left" : "opacity-0"}`}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Contact
            </p>
            <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl">
              <span className="text-balance">
                {"Prenons soin de vous"}
              </span>
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              {"Notre equipe est a votre disposition pour repondre a toutes vos questions et vous accompagner dans votre parcours beaute."}
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent">
                    <info.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="mt-1 text-sm text-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={onBooking}
              className="mt-10 rounded-none bg-foreground px-10 py-6 text-xs uppercase tracking-widest text-background transition-all duration-300 hover:bg-foreground/80"
            >
              Prendre rendez-vous
            </Button>
          </div>

          {/* Right - Map placeholder */}
          <div
            className={`${
              isInView ? "animate-slide-right delay-200" : "opacity-0"
            }`}
          >
            <div className="relative h-full min-h-[400px] overflow-hidden bg-secondary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2158023755!2d2.3004954!3d48.8698043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4f8f3049b%3A0xcbb47407434935db!2sAv.%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                className="absolute inset-0 border-0 grayscale"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Clinique Lumea"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
