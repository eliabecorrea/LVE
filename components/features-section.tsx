'use client'

import { Shield, Globe2, CandlestickChart, DollarSign, ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"

const features = [
  {
    icon: Shield,
    title: "Protection Against Local Inflation",
    description: "Shield your assets from local economic fluctuations and currency devaluation"
  },
  {
    icon: Globe2,
    title: "Access to Global Opportunities",
    description: "Invest in international markets and diversify across regions"
  },
  {
    icon: CandlestickChart,
    title: "Investment Diversification",
    description: "Spread your investments across multiple asset classes and markets"
  },
  {
    icon: DollarSign,
    title: "High Liquidity and Easy Conversion",
    description: "Quick access to your funds with seamless currency conversion"
  }
]

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-transparent p-6 rounded-lg w-full flex items-center justify-center">
      <div className="absolute inset-0" />
      <div className="container mx-auto relative">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-6 backdrop-blur-sm bg-card hover:bg-card/40 transition-colors duration-300"
            >
              <div className="mb-4 inline-block rounded-xl bg-base-500/10 p-3">
                <feature.icon className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 flex items-center justify-center"
        >
          <a 
            href="#" 
            className="group flex items-center gap-2 text-lg font-medium text-foreground hover:text-accent-foreground"
          >
            If your money could move freely, where would it go?
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

