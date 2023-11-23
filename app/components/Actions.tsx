import Image from 'next/image'
import math from '../../public/math.gif'
import target from '../../public/target.gif'
import astronaut from '../../public/astronaut.gif'
import '../styles/actions.css'

export default function Actions() {
  return (
    <div className="flex flex-row">
      <div className="action-section">
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
        <div>
          <p className="action-title">
            <span className="action-strikeout">Quick Math Skills</span> <br />
            <span className="action-reveal"> I&apos;m fun to work with!</span>
          </p>
          <p className="action-content">
            Did you know that{' '}
            <span className="action-formula">
              ∫ (e^x * cos(x)) / (e^x + e^(-x)) dx
            </span>{' '}
            simplifies to just <span className="action-formula">1</span>? No?
            Yeah. Me neither!
          </p>
        </div>
      </div>
      <div className="action-section">
        <Image
          className="action-icon"
          src={target}
          alt="Animated icon of an arrow hitting a target"
        />
        <div>
          <p className="action-title">
            <span className="">Precision is my obsession</span>
          </p>
          <p className="action-content">
            Oh, is that image off by two pixels? Not on my watch! All mockup and
            ui designs shall match pixel by pixel!
          </p>
        </div>
      </div>
      <div className="action-section">
        <Image
          className="action-icon"
          src={astronaut}
          alt="Animated icon of an arrow hitting a target"
        />
        <div>
          <p className="action-title">
            <span className="">The Tech Voyager!</span>
          </p>
          <p className="action-content">
            I&apos;m always up for an adventure in the digital world. I adapt to
            new technologies quickly and embrace the ever-changing landscape!
          </p>
        </div>
      </div>
    </div>
  )
}
