'use client'

import { motion } from "framer-motion"
import { ArrowRight, ClipboardCheck, MessageSquare, ShieldCheck } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const steps = [
  {
    number: 1,
    title: "Fill Out the Initial Form",
    description: "Quick and easy registration process. Get started in just a few minutes with our streamlined onboarding form.",
    icon: ClipboardCheck,
  },
  {
    number: 2,
    title: "Talk to Our Experts",
    description: "Receive personalized guidance from our investment specialists who will help craft your global investment strategy.",
    icon: MessageSquare,
  },
  {
    number: 3,
    title: "Invest Securely",
    description: "Your assets are allocated in strong USD investments, with potential yields ranging from 6-12% annually.",
    icon: ShieldCheck,
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full py-24 bg-black min-h-screen flex items-center justify-center rounded-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.h2 
            className="font-bold tracking-tighter text-white title-font"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How it Works
          </motion.h2>
          <motion.p 
            className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-2xl/relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            See How Easy It Is to Start Investing Globally
          </motion.p>
        </div>
        <div className="grid gap-8 mt-16 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="relative h-full bg-zinc-900 border-zinc-800 text-white">
                  <div className="absolute -top-5 left-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
                      <span className="text-lg font-bold">{step.number}</span>
                    </div>
                  </div>
                  <CardHeader className="pt-8">
                    <div className="flex items-center space-x-2">
                      <Icon className="w-6 h-6 text-primary" />
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zinc-400 text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary/90 text-white"
          >
            Your Legacy Deserves a Fortress
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

