"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

const services = [
  "Soins du Visage - HydraFacial",
  "Soins du Visage - Peeling",
  "Soins du Visage - Microneedling",
  "Injections - Acide hyaluronique",
  "Injections - Botox",
  "Injections - Skinbooster",
  "Laser - Epilation",
  "Laser - Photorajeunissement",
  "Laser - Resurfacing",
  "Corps - Cryolipolyse",
  "Corps - Radiofrequence",
  "Corps - Drainage lymphatique",
  "Consultation decouverte",
]

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
]

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setStep(1)
      onOpenChange(false)
    }, 3000)
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setStep(1)
      setSubmitted(false)
    }
    onOpenChange(open)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-none border-border sm:max-w-lg">
        {submitted ? (
          <div className="flex flex-col items-center py-10 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center bg-accent">
              <CheckCircle2 className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="font-serif text-2xl text-foreground">
              Rendez-vous confirme
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {"Vous recevrez un email de confirmation sous peu. Merci de votre confiance."}
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-foreground">
                Prendre rendez-vous
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {"Remplissez le formulaire ci-dessous pour reserver votre creneau."}
              </DialogDescription>
            </DialogHeader>

            {/* Step indicator */}
            <div className="flex gap-2">
              {[1, 2].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 transition-colors duration-300 ${
                    s <= step ? "bg-foreground" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {step === 1 && (
                <>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="service"
                      className="text-xs uppercase tracking-widest text-muted-foreground"
                    >
                      Service souhaite
                    </label>
                    <Select required>
                      <SelectTrigger
                        id="service"
                        className="rounded-none border-border"
                      >
                        <SelectValue placeholder="Choisir un soin" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none">
                        {services.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="date"
                      className="text-xs uppercase tracking-widest text-muted-foreground"
                    >
                      Date souhaitee
                    </label>
                    <Input
                      id="date"
                      type="date"
                      required
                      className="rounded-none border-border"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="time"
                      className="text-xs uppercase tracking-widest text-muted-foreground"
                    >
                      Heure souhaitee
                    </label>
                    <Select required>
                      <SelectTrigger
                        id="time"
                        className="rounded-none border-border"
                      >
                        <SelectValue placeholder="Choisir un horaire" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none">
                        {timeSlots.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    className="mt-2 rounded-none bg-foreground py-5 text-xs uppercase tracking-widest text-background hover:bg-foreground/80"
                  >
                    Continuer
                  </Button>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="firstname"
                        className="text-xs uppercase tracking-widest text-muted-foreground"
                      >
                        Prenom
                      </label>
                      <Input
                        id="firstname"
                        placeholder="Votre prenom"
                        required
                        className="rounded-none border-border"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="lastname"
                        className="text-xs uppercase tracking-widest text-muted-foreground"
                      >
                        Nom
                      </label>
                      <Input
                        id="lastname"
                        placeholder="Votre nom"
                        required
                        className="rounded-none border-border"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs uppercase tracking-widest text-muted-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      className="rounded-none border-border"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-xs uppercase tracking-widest text-muted-foreground"
                    >
                      Telephone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      required
                      className="rounded-none border-border"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-xs uppercase tracking-widest text-muted-foreground"
                    >
                      Message (optionnel)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Des precisions sur votre demande..."
                      className="flex w-full border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1 rounded-none border-border py-5 text-xs uppercase tracking-widest"
                    >
                      Retour
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 rounded-none bg-foreground py-5 text-xs uppercase tracking-widest text-background hover:bg-foreground/80"
                    >
                      Confirmer
                    </Button>
                  </div>
                </>
              )}
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
