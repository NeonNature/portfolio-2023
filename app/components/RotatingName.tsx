/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useEffect, useMemo, useState } from 'react'

const words = ['Neon.', 'Min Maung Maung.']
const animationDelay = 80

export default function RotatingName() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [firstClassHelper, setFirstClassHelper] = useState('out')
  const [secondClassHelper, setSecondClassHelper] = useState('in')

  useEffect(() => {
    const animateWords = () => {
      if (currentWordIndex === 0) {
        setCurrentWordIndex(1)

        setFirstClassHelper('behind')
        setTimeout(() => {
          setFirstClassHelper('in')
        }, 80)

        setSecondClassHelper('out')
      } else {
        setCurrentWordIndex(0)

        setSecondClassHelper('behind')
        setTimeout(() => {
          setSecondClassHelper('in')
        }, 80)

        setFirstClassHelper('out')
      }
    }

    const interval = setInterval(animateWords, 4000)

    return () => clearInterval(interval)
  }, [currentWordIndex])

  const words0 = useMemo(
    () =>
      words[0].split('').map((letter, index) => {
        return (
          <span
            key={index}
            className={`name-letter ${firstClassHelper}`}
            style={{
              transitionDelay: `${
                firstClassHelper === 'behind' ? 0 : index * animationDelay
              }ms`,
            }}
          >
            {letter}
          </span>
        )
      }),
    [firstClassHelper]
  )

  const words1 = useMemo(
    () =>
      words[1].split('').map((letter, index) => {
        return (
          <span
            key={index}
            className={`name-letter ${secondClassHelper}`}
            style={{
              transitionDelay: `${
                secondClassHelper === 'behind' ? 0 : index * animationDelay
              }ms`,
            }}
          >
            {letter === ' ' ? `\u00A0` : letter}
          </span>
        )
      }),
    [secondClassHelper]
  )

  return (
    <div className="name-container">
      <p>I am</p>
      <p>
        <span className="name-word green">{words0}</span>
        <span className="name-word belize">{words1}</span>
      </p>
    </div>
  )
}
