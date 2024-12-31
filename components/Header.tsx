"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Navigation from "./Navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()

  /*const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgb(28, 48, 44)', 'rgb(28, 48, 44, 0.9)']
  )

  const headerWidth = useTransform(
    scrollY,
    [0, 100],
    ['100%', 'calc(100vw - (100vw - 100%))']
  )*/
  
  const headerBackdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  )

  return (
    <motion.header
      style={{
        backdropFilter: headerBackdropBlur,
      }}
      className="sticky top-0 min-h-16 backdrop-blur-sm flex items-center justify-center z-30 mx-auto transition-all duration-300 rounded-b-lg rounded-t-0 w-full"
    >
      <div className="grid grid-cols-3 h-full w-full px-4 lg:px-6 container">
        <div className="flex items-center">
          <span className="text-3xl font-bold text-white">LVE</span>
        </div>
        
        <Navigation />
        
        <div className="flex items-center justify-end gap-4">
          <ModeToggle />
          <Button 
            variant="default" 
            className="hidden md:inline-flex bg-emerald-500 hover:bg-emerald-600 text-white"
          >
            Contact
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[rgb(28,48,44)]">
              <Navigation />
              <Button 
                variant="default" 
                className="mt-6 w-full bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                Contact
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}