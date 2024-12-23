import { useTheme } from 'next-themes'
import { useTransform, useScroll, MotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

export function useHeaderBackground(): MotionValue<string> {
  const { scrollY } = useScroll()
  const { theme } = useTheme()
  const [headerBackground, setHeaderBackground] = useState<MotionValue<string>>(
    useTransform(scrollY, [0, 100], ['rgba(0, 0, 0, 0)', 'rgba(12, 16, 16, 0.8)'])
  )

  useEffect(() => {
    const lightBg = useTransform(
      scrollY,
      [0, 100],
      ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
    )
    const darkBg = useTransform(
      scrollY,
      [0, 100],
      ['rgba(0, 0, 0, 0)', 'rgba(12, 16, 16, 0.8)']
    )

    setHeaderBackground(theme === 'dark' ? darkBg : lightBg)
  }, [theme, scrollY])

  return headerBackground
}

