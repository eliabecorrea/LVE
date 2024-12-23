'use client'

import { motion } from "framer-motion"
import { DollarSign, TrendingUp, Shield, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-base-50 via-base-100 to-emerald-50 dark:from-base-950 dark:via-base-900 dark:to-emerald-950 w-full  h-screen flex items-center justify-center rounded-lg">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem] bg-opacity-20" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#00ff9580,transparent)]"
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
                className="rounded-full bg-emerald-500/10 p-3"
              >
                <DollarSign className="h-6 w-6 text-emerald-400 dark:text-emerald-600" />
              </motion.div>
              <motion.div
                animate={{ y: [-8, 0, -8] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-full bg-emerald-500/10 p-3"
              >
                <TrendingUp className="h-6 w-6 text-emerald-400 dark:text-emerald-600" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-full bg-emerald-500/10 p-3"
              >
                <Shield className="h-6 w-6 text-emerald-400 dark:text-emerald-600" />
              </motion.div>
            </div>

            <h1 className="bg-gradient-to-r from-base-950 via-base-800 to-base-500 dark:from-white darkvia-base-100 darkto-base-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
              Why is the Dollar the{" "}
              <span className="text-emerald-400 dark:text-emerald-600">Safest Harbor</span>
              <br /> for Your Wealth?
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-base-300"
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

