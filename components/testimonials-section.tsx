"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"

interface Testimonial {
  content: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    content: "Now I feel my wealth is safe and protected. Investing in dollars was the best decision I made.",
    author: "Gustavo M.",
    role: "Entrepreneur"
  },
  {
    content: "I had total support to understand every step of the process. Impeccable professionalism.",
    author: "Marcos S.",
    role: "Lawyer"
  },
  {
    content: "Diversifying in dollars brought me the peace of mind I needed.",
    author: "Carla R.",
    role: "Independent Investor"
  }
]

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  
  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-24 bg-background w-full flex items-center justify-center rounded-lg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            See What Our Clients Are Saying
          </h2>
          <div className="w-full max-w-5xl mx-auto mt-8">
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div className="flex-[0_0_100%] min-w-0 pl-4" key={index}>
                      <Card className="border-0 bg-card/5">
                        <CardContent className="flex flex-col items-center gap-4 p-6">
                          <Quote className="h-12 w-12 text-primary" />
                          <p className="text-xl md:text-2xl italic text-card-foreground">
                            {testimonial.content}
                          </p>
                          <div className="mt-4 text-muted-foreground">
                            <p className="font-semibold">{testimonial.author}</p>
                            <p className="text-sm">{testimonial.role}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={scrollPrev}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous slide</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={scrollNext}
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next slide</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

