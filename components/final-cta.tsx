'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ContactForm from "@/components/contact-form"

export default function FinalCTA() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section className="w-full min-h-screen flex items-center justify-center rounded-lg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            <div>Why Settle for Local</div>
            <div>When You Can Go Global?</div>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl">
            Take the first step towards international investing and secure your financial future.
          </p>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="group">
                Talk to an Expert Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Contact an Expert</DialogTitle>
                <DialogDescription>
                  Fill out the form below and one of our experts will get back to you shortly.
                </DialogDescription>
              </DialogHeader>
              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}

