import { useRef, useEffect } from 'react'
import { motion, useSpring, useTransform, useInView } from 'framer-motion'

interface CountUpProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export const CountUp = ({ end, duration = 2, prefix = '', suffix = '' }:CountUpProps) => {
  const textContainer = useRef<HTMLDivElement>(null)
  const isInView = useInView(textContainer, { once: true, amount: 0.5 })
  const initialValue = useRef(0)
  
  const springValue = useSpring(initialValue.current, { 
    duration: duration * 1000,
    bounce: 0
  })
  
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  useEffect(() => {
    if (isInView) {
      initialValue.current = 0
      springValue.set(end)
    }
  }, [isInView, end, springValue])

  return (
    <div ref={textContainer} className="primary-header text-3xl sm:text-5xl">
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </div>
  )
}

