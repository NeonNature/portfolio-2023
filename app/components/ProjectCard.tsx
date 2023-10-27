'use client'
import './../styles/projects.css'
import { useMemo, useState } from 'react'
import Image from 'next/image'
import math from '../../public/math.gif'

interface CardProps {
  trigger: number
  active: number
  setActive: (arg: number) => void
  className: string
}

const Card = ({ trigger, active, setActive, className }: CardProps) => {
  const classHelper = useMemo(() => {
    if (active === trigger) return 'expand'
    else return ''
  }, [trigger, active])

  return (
    <div
      className={`project-card ${classHelper} ${className}`}
      onClick={() => setActive(trigger)}
    >
      <div className="project-title">Lan Kyone</div>
      <div className="project-content">
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
      </div>
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
        className="project-bg-1"
      />
      <Card
        trigger={2}
        active={active}
        setActive={setActive}
        className="project-bg-1"
      />
      <Card
        trigger={3}
        active={active}
        setActive={setActive}
        className="project-bg-1"
      />
      <Card
        trigger={4}
        active={active}
        setActive={setActive}
        className="project-bg-1"
      />
      <Card
        trigger={5}
        active={active}
        setActive={setActive}
        className="project-bg-1"
      />
      <Card
        trigger={6}
        active={active}
        setActive={setActive}
        className="project-bg-1"
      />
    </div>
  )
}
