"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <>
      <Navbar onBooking={() => setBookingOpen(true)} />
      <main>
        <HeroSection onBooking={() => setBookingOpen(true)} />
        <ServicesSection onBooking={() => setBookingOpen(true)} />
        <AboutSection />
        <ProcessSection onBooking={() => setBookingOpen(true)} />
        <TestimonialsSection />
        <ContactSection onBooking={() => setBookingOpen(true)} />
      </main>
      <Footer />
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  )
}
