"use client"

import { useInView } from "@/hooks/use-in-view"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Soins du Visage",
    description:
      "Peelings, microneedling, hydrafacial et soins eclat pour une peau lumineuse et revitalisee.",
    image: "/images/service-visage.jpg",
    features: ["HydraFacial", "Peeling chimique", "Microneedling", "LED Therapy"],
  },
  {
    title: "Injections",
    description:
      "Acide hyaluronique et toxine botulique pour des resultats naturels et harmonieux.",
    image: "/images/service-injection.jpg",
    features: ["Acide hyaluronique", "Botox", "Skinbooster", "Mesolift"],
  },
  {
    title: "Laser & Lumiere",
    description:
      "Technologies avancees pour le rajeunissement, la depilation et le traitement des imperfections.",
    image: "/images/service-laser.jpg",
    features: ["Epilation laser", "Photorajeunissement", "Detatouage", "Resurfacing"],
  },
  {
    title: "Soins du Corps",
    description:
      "Modelage corporel, raffermissement et traitements anti-cellulite pour redessiner votre silhouette.",
    image: "/images/service-corps.jpg",
    features: ["Cryolipolyse", "Radiofrequence", "Drainage lymphatique", "Body sculpting"],
  },
]

interface ServicesSectionProps {
  onBooking: () => void
}

export function ServicesSection({ onBooking }: ServicesSectionProps) {
  const { ref, isInView } = useInView()

  return (
    <section id="services" className="py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mb-16 max-w-xl ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Nos expertises
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">{"Des soins d'exception"}</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {"Chaque soin est personnalise selon vos besoins et realise par des praticiens certifies utilisant les technologies les plus avancees."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              isInView={isInView}
              onBooking={onBooking}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isInView,
  onBooking,
}: {
  service: (typeof services)[0]
  index: number
  isInView: boolean
  onBooking: () => void
}) {
  return (
    <div
      className={`group cursor-pointer overflow-hidden border border-border bg-card transition-all duration-500 hover:shadow-lg ${
        isInView ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${(index + 1) * 150}ms` }}
      onClick={onBooking}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onBooking()
        }
      }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-foreground/10 transition-opacity duration-500 group-hover:bg-foreground/20" />
      </div>
      <div className="p-8">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl text-foreground">
            {service.title}
          </h3>
          <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="bg-secondary px-3 py-1 text-xs tracking-wide text-secondary-foreground"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
