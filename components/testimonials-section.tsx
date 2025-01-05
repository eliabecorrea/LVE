'use client'

import * as React from "react"
import { Quote } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
  return (
    <section className="py-24 bg-background w-full flex items-center justify-center rounded-lg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            See What Our Clients Are Saying
          </h2>
          <div className="w-full max-w-5xl mx-auto mt-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="border-0 bg-card">
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

