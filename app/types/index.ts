import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export interface ActionBubbleProps {
  hovered: number
  alt: string
  src: StaticImageData
  handleHover: (val: number) => void
  idx: number
}

export interface ActionSpeechProps {
  id: string
  hovered: number
  title: ReactNode
  children: ReactNode
}

export interface ProjectCardProps {
  className: string
  children: ReactNode
  logo?: StaticImageData
  alt?: string
  logoText?: string
}

export interface TestimonialCardProps {
  image: StaticImageData
  alt: string
  children: ReactNode
  name: string
  role: string
}

export interface AnimatedWordProps {
  className: string
  word: ReactNode
}
