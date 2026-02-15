"use client"

import { Separator } from "@/components/ui/separator"

const footerLinks = {
  services: [
    { label: "Soins du Visage", href: "#services" },
    { label: "Injections", href: "#services" },
    { label: "Laser & Lumiere", href: "#services" },
    { label: "Soins du Corps", href: "#services" },
  ],
  clinique: [
    { label: "A propos", href: "#apropos" },
    { label: "Notre equipe", href: "#apropos" },
    { label: "Temoignages", href: "#temoignages" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Mentions legales", href: "#" },
    { label: "Politique de confidentialite", href: "#" },
    { label: "CGU", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground py-16 text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-serif text-2xl">Lumea</span>
            <p className="mt-4 text-sm leading-relaxed text-background/60">
              {"Votre destination premium pour des soins esthetiques personnalises au coeur de Paris."}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-background/40">
              Services
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinique */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-background/40">
              Clinique
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.clinique.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-background/40">
              Informations
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-background/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-background/40">
            {"© 2026 Clinique Lumea. Tous droits reserves. Site fictif a titre de demonstration."}
          </p>
          <p className="text-xs text-background/40">
            {"Concu avec soin pour illustrer un site vitrine professionnel."}
          </p>
        </div>
      </div>
    </footer>
  )
}
