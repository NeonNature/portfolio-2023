'use client'

import Image, { StaticImageData } from 'next/image'
import math from '../../public/math.gif'
import target from '../../public/target.gif'
import astronaut from '../../public/astronaut.gif'
import '../styles/actions.scss'
import { useState } from 'react'

interface ActionBubbleProps {
  hovered: number
  alt: string
  src: StaticImageData
  handleHover: (val: number) => void
  idx: number
}

const ActionBubble = ({
  src,
  alt,
  hovered,
  handleHover,
  idx,
}: ActionBubbleProps) => {
  return (
    <div
      className={`action-section state-${hovered} idx-${idx}`}
      onMouseLeave={() => handleHover(0)}
      onMouseEnter={() => handleHover(idx)}
    >
      <Image className="action-icon" src={src} alt={alt} />
    </div>
  )
}

export default function Actions() {
  const [hovered, setHovered] = useState(0)

  const handleHover = (val: number) => setHovered(val)

  return (
    <>
      <div className="details-content">
        <p id="details-initial" className={`state-${hovered}`}>
          <span className="details-popout">Hey there</span>
          <br />
          Hey, I&apos;m{' '}
          <span className="details-highlight-blue">
            Min Maung Maung
          </span> aka <span className="details-highlight-green">Neon</span>, a
          Front-end Developer currently based in Myanmar.
        </p>
        <p id="details-fun" className={`state-${hovered}`}>
          <span className="details-popout">
            <span className="action-strikeout">Quick Math Skills</span>
          </span>{' '}
          <span className="details-popout">
            <span className="action-reveal"> I&apos;m fun to work with!</span>
          </span>
          <br />
          Did you know that{' '}
          <span className="action-formula">
            ∫ (e^x * cos(x)) / (e^x + e^(-x)) dx
          </span>{' '}
          simplifies to just <span className="action-formula">1</span>? No?
          Yeah. Me neither!
        </p>
        <p id="details-precise" className={`state-${hovered}`}>
          <span className="details-popout">Precision is my obsession</span>
          Oh, is that image off by two pixels? Not on my watch! All mockup and
          ui designs shall match pixel by pixel!
        </p>
        <p id="details-voyage" className={`state-${hovered}`}>
          <span className="details-popout">The Tech Voyager!</span>
          <br />
          I&apos;m always up for an adventure in the digital world. I adapt to
          new technologies quickly and embrace the ever-changing landscape!
        </p>
      </div>
      <div className="flex flex-row">
        <ActionBubble
          idx={1}
          hovered={hovered}
          src={math}
          alt="Animated icon of math symbols popping out of a book"
          handleHover={handleHover}
        />
        <ActionBubble
          idx={2}
          hovered={hovered}
          handleHover={handleHover}
          src={target}
          alt="Animated icon of an arrow hitting a target"
        />
        <ActionBubble
          idx={3}
          hovered={hovered}
          handleHover={handleHover}
          src={astronaut}
          alt="Animated icon of an arrow hitting a target"
        />
      </div>
    </>
  )
}
