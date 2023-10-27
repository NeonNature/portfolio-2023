'use client'
import './../styles/projects.css'
import { useState } from 'react'
import Image from 'next/image'
import math from '../../public/math.gif'

export default function ProjectCard() {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-wrap">
      <div className="project-card">
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
        Lan Kyone
      </div>

      <div className="project-card">
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
        Lan Kyone
      </div>

      <div className="project-card">
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
        Lan Kyone
      </div>

      <div className="project-card">
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
        Lan Kyone
      </div>

      <div className="project-card">
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
        Lan Kyone
      </div>

      <div className="project-card">
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
        Lan Kyone
      </div>
    </div>
  )
}
