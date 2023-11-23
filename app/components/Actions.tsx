import Image, { StaticImageData } from 'next/image'
import math from '../../public/math.gif'
import target from '../../public/target.gif'
import astronaut from '../../public/astronaut.gif'
import '../styles/actions.css'
import { ReactNode } from 'react'

interface ActionCardProps {
  title: ReactNode
  children: ReactNode
  alt: string
  src: StaticImageData
}

const ActionCard = ({ title, children, src, alt }: ActionCardProps) => {
  return (
    <div className="action-section">
      <Image className="action-icon" src={src} alt={alt} />
      <div>
        <p className="action-title">{title}</p>
        <p className="action-content">{children}</p>
      </div>
    </div>
  )
}

export default function Actions() {
  return (
    <div className="flex flex-row">
      <ActionCard
        src={math}
        alt="Animated icon of math symbols popping out of a book"
        title={
          <>
            {' '}
            <span className="action-strikeout">Quick Math Skills</span> <br />
            <span className="action-reveal"> I&apos;m fun to work with!</span>
          </>
        }
      >
        {' '}
        Did you know that{' '}
        <span className="action-formula">
          ∫ (e^x * cos(x)) / (e^x + e^(-x)) dx
        </span>{' '}
        simplifies to just <span className="action-formula">1</span>? No? Yeah.
        Me neither!
      </ActionCard>
      <ActionCard
        src={target}
        alt="Animated icon of an arrow hitting a target"
        title={<span>Precision is my obsession</span>}
      >
        Oh, is that image off by two pixels? Not on my watch! All mockup and ui
        designs shall match pixel by pixel!
      </ActionCard>
      <ActionCard
        src={astronaut}
        alt="Animated icon of an arrow hitting a target"
        title={<span>The Tech Voyager!</span>}
      >
        {' '}
        I&apos;m always up for an adventure in the digital world. I adapt to new
        technologies quickly and embrace the ever-changing landscape!
      </ActionCard>
    </div>
  )
}
