import Image from 'next/image'
import math from '../../public/math.gif'
import '../styles/actions.css'

export default function Actions() {
  return (
    <>
      <div className="flex">
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
        <div>
          <p>Quick Math Skills</p>
          <p>
            Did you know that <span>∫ (e^x * cos(x)) / (e^x + e^(-x)) dx</span>{' '}
            simplifies to just 1? No? Yeah. Me neither!
          </p>
        </div>
      </div>
    </>
  )
}
