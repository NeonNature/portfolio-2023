'use client'
import { useCallback, useEffect, useState } from 'react'
import '../styles/rotating_action.css'

export default function RotatingAction() {
  const [currentIndex, setCurrentndex] = useState(0)

  useEffect(() => {
    const animateWords = () => {
      setCurrentndex(currentIndex >= 3 ? 0 : currentIndex + 1)
    }

    const interval = setInterval(animateWords, 4000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const getClass = useCallback(
    (index: number) =>
      `${index === currentIndex ? 'expand' : ''} rotating-action-word`,
    [currentIndex]
  )

  return (
    <p className="intro-action-container">
      A <span className="intro-underline">Front-End Developer</span> who{' '}
      <br className="intro-line-breaker" />
      <span className="intro-action-word c">
        C<span className={getClass(0)}>reate </span>
      </span>
      <span className="intro-action-word o">
        O<span className={getClass(1)}>ptimize </span>
      </span>
      <span className="intro-action-word d">
        D<span className={getClass(2)}>ebug </span>
      </span>
      <span className="intro-action-word e">
        E<span className={getClass(3)}>xplore </span>
      </span>
      <span className="intro-action-remaining"> stuff</span>
    </p>
  )
}
