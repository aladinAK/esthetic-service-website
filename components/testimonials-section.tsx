"use client"

import { useInView } from "@/hooks/use-in-view"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marie D.",
    treatment: "Injections acide hyaluronique",
    text: "Un resultat incroyablement naturel. Le Dr. Laurent a su ecouter mes attentes et me conseiller avec bienveillance. Je me sens plus confiante que jamais.",
    rating: 5,
  },
  {
    name: "Caroline P.",
    treatment: "HydraFacial",
    text: "Ma peau n'a jamais ete aussi eclatante. L'equipe est professionnelle, l'ambiance est apaisante et le resultat depasse mes esperances.",
    rating: 5,
  },
  {
    name: "Isabelle M.",
    treatment: "Epilation laser",
    text: "Apres plusieurs seances, les resultats sont bluffants. Le personnel est aux petits soins et la clinique est magnifique. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Nathalie R.",
    treatment: "Cryolipolyse",
    text: "J'avais des complexes depuis des annees. Grace a la Clinique Lumea, j'ai retrouve confiance en moi. Le suivi post-traitement est remarquable.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="temoignages" className="py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mb-16 text-center ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Temoignages
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">
              {"Ce que disent nos patients"}
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={`border border-border bg-card p-8 transition-all duration-500 hover:shadow-md ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-foreground text-foreground"
                  />
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {`"${testimonial.text}"`}
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-serif text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
