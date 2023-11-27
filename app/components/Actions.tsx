'use client'

import Image from 'next/image'
import math from '/public/math.gif'
import target from '/public/target.gif'
import space from '/public/space.gif'
import '../styles/actions.scss'
import { useState } from 'react'
import { ActionBubbleProps, ActionSpeechProps } from '../types'

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

const ActionSpeech = ({ id, hovered, title, children }: ActionSpeechProps) => {
  return (
    <p id={id} className={`state-${hovered}`}>
      {title}
      <br />
      <span className="action-speech">{children}</span>
    </p>
  )
}

export default function Actions() {
  const [hovered, setHovered] = useState(0)

  const handleHover = (val: number) => setHovered(val)

  return (
    <>
      <div className="details-content">
        <ActionSpeech
          id="details-initial"
          hovered={hovered}
          title={<span className="details-popout">Hey there</span>}
        >
          Hey, I&apos;m{' '}
          <span className="highlight-text-blue">Min Maung Maung</span> aka{' '}
          <span className="highlight-bg-green">Neon</span>, a Front-end
          Developer currently based in Myanmar.
        </ActionSpeech>
        <ActionSpeech
          id="details-fun"
          hovered={hovered}
          title={
            <>
              {' '}
              <span className="details-popout">
                <span className="action-strikeout">Quick Math Skills</span>
              </span>{' '}
              <span className="details-popout">
                <span className="action-reveal">
                  {' '}
                  I&apos;m fun to work with!
                </span>
              </span>
            </>
          }
        >
          Did you know that{' '}
          <span className="action-formula">
            ∫ (e^x * cos(x)) / (e^x + e^(-x)) dx
          </span>{' '}
          simplifies to just <span className="action-formula">1</span>? No?
          Yeah. Me neither!
        </ActionSpeech>
        <ActionSpeech
          id="details-precise"
          hovered={hovered}
          title={
            <span className="details-popout">Precision is my obsession</span>
          }
        >
          Oh, is that image off by two pixels? Not on my watch! All mockup and
          ui designs shall match pixel by pixel!
        </ActionSpeech>
        <ActionSpeech
          id="details-voyage"
          hovered={hovered}
          title={<span className="details-popout">The Tech Voyager!</span>}
        >
          {' '}
          I&apos;m always up for an adventure in the digital world. I adapt to
          new technologies quickly and embrace the ever-changing landscape!
        </ActionSpeech>
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
          src={space}
          alt="Animated icon of an astronaut wandering in space"
        />
      </div>
    </>
  )
}
