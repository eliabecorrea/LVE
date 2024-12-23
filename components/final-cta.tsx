import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section className="w-full bg-primary/5 min-h-screen flex items-center justify-center rounded-lg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Why Settle for Local When You Can Go Global?
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl">
            Take the first step towards international investing and secure your financial future.
          </p>
          <Button size="lg" className="group" >
            Talk to an Expert Now
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

