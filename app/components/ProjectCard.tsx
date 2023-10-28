'use client'
import './../styles/projects.css'
import { ReactNode, useMemo, useState } from 'react'
import Image from 'next/image'
import math from '../../public/math.gif'

interface CardProps {
  trigger: number
  active: number
  setActive: (arg: number) => void
  className: string
  name: string
  children: ReactNode
}

const Card = ({
  trigger,
  active,
  setActive,
  className,
  name,
  children,
}: CardProps) => {
  const classHelper = useMemo(() => {
    if (active === trigger) return 'expand'
    else return ''
  }, [trigger, active])

  return (
    <div
      className={`project-card ${classHelper} ${className}`}
      onClick={() => setActive(trigger)}
    >
      <div className="project-title">{name}</div>
      <div className="project-content">{children}</div>
    </div>
  )
}

export default function ProjectCard() {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-wrap">
      <Card
        trigger={1}
        active={active}
        setActive={setActive}
        className="project-bg-lankyone"
        name="Lan Kyone"
      >
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
      </Card>
      <Card
        trigger={2}
        active={active}
        setActive={setActive}
        className="project-bg-bettercast"
        name="BetterCast"
      >
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
      </Card>
      <Card
        trigger={3}
        active={active}
        setActive={setActive}
        name="Appvantage Asia"
        className="project-bg-appvantageasia"
      >
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
      </Card>
      <Card
        trigger={4}
        active={active}
        setActive={setActive}
        name="Project M Series"
        className="project-bg-m"
      >
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
      </Card>
      <Card
        trigger={5}
        active={active}
        setActive={setActive}
        name="Legacy Projects"
        className="project-bg-legacy"
      >
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
      </Card>
      <Card
        trigger={6}
        active={active}
        setActive={setActive}
        name="BetterCast"
        className="project-bg-1"
      >
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
      </Card>
    </div>
  )
}
