'use client'

import { motion } from "framer-motion"
import { DollarSign, TrendingUp, Shield, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-base-50 via-base-100 to-emerald-50 dark:from-transparent dark:via-background/10 dark:to-transparent w-full  h-screen flex items-center justify-center rounded-lg">
      <div className="absolute inset-0 overflow-visible h-full w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_500px,#00ff9580,transparent)]"
        />
      </div>

      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
   
            <div className="mb-8 flex justify-center gap-4">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-full bg-primary p-3"
              >
                <DollarSign className="h-6 w-6 text-primary-foreground" />
              </motion.div>
              <motion.div
                animate={{ y: [-8, 0, -8] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-full bg-primary p-3"
              >
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-full bg-primary p-3"
              >
                <Shield className="h-6 w-6 text-primary-foreground" />
              </motion.div>
            </div>

            <h1 className="font-extrabold tracking-tight text-foreground title-font">
              Why is the Dollar the{" "}
              <span className="text-primary">Safest Harbor</span>
              <br /> for Your Wealth?
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground"
            >
              The most widely used strong currency in the world for global transactions.
              Diversifying your wealth in dollars is a smart strategy to protect your
              capital and secure your financial freedom.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-10 flex justify-center gap-4"
            >
              <Button
                size="lg"
                className="group bg-emerald-500 text-white hover:bg-emerald-600"
              >
                Discover how
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

