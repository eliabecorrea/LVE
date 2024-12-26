"use client"

import Menu from "./Menu"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Header() {
  const { scrollY } = useScroll()

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,.8)']
  )

  const headerWidth = useTransform(
    scrollY,
    [0, 100],
    ['1440px', 'calc(100vw - (100vw - 100%))']
  )
  const headerBackdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  )

  /*useEffect(() => {
    useMotionValueEvent(headerBackground, 'change', (latest) => {
      setHeaderClass(
        latest > 0.5
          ? 'dark:bg-base-800 bg-emerald-200'
          : 'bg-transparent'
      );
    });
  }, [headerBackground]);*/

  return (
    <motion.header
      style={{
        width: headerWidth,
        backgroundColor: headerBackground,
        backdropFilter: headerBackdropBlur,
      }}
      className="sticky top-0 min-h-16 w-full dark:bg-base-light/50 backdrop-blur-sm flex items-center justify-center z-30  mx-auto transition-all duration-300 rounded-b-lg rounded-t-0"
    >
      <div className="grid grid-cols-3 h-full w-full px-4 lg:px-6">
        <div id="logo" className=" items-center justify-center h-full place-items-center">
          <span className="text-3xl font-bold">LVE</span>
        </div>
        <Menu />
        <div id="header-buttons" className="flex justify-self-end gap-4 items-center">
          <ModeToggle />
          <Button variant="default">Become an Investor</Button>
        </div>
      </div>
    </motion.header>
  )
}