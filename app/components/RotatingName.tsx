'use client'
import React, {
  useEffect,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import '../styles/rotating_name.css'
import { AnimatedWordProps } from '../types'

const words = ['        Neon        ', 'Min Maung Maung']
const animationDelay = 80

const AnimatedWord = ({ className, word }: AnimatedWordProps) => {
  return <span className={`name-word ${className}`}>{word}</span>
}

export default function RotatingName() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [firstClassHelper, setFirstClassHelper] = useState('out')
  const [secondClassHelper, setSecondClassHelper] = useState('in')

  const setClass = (
    inClass: Dispatch<SetStateAction<string>>,
    outClass: Dispatch<SetStateAction<string>>
  ) => {
    inClass('behind')
    setTimeout(() => {
      inClass('in')
    }, 80)

    outClass('out')
  }

  useEffect(() => {
    const animateWords = () => {
      if (currentWordIndex === 0) {
        setCurrentWordIndex(1)
        setClass(setFirstClassHelper, setSecondClassHelper)
      } else {
        setCurrentWordIndex(0)
        setClass(setSecondClassHelper, setFirstClassHelper)
      }
    }

    const interval = setInterval(animateWords, 4000)

    return () => clearInterval(interval)
  }, [currentWordIndex])

  const generateWordComponents = (word: string, helperClass: string) => {
    return word.split('').map((letter, index) => (
      <span
        key={index}
        className={`name-letter ${helperClass}`}
        style={{
          transitionDelay: `${
            helperClass === 'behind' ? 0 : index * animationDelay
          }ms`,
        }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ))
  }

  const words0 = useMemo(
    () => generateWordComponents(words[0], firstClassHelper),
    [firstClassHelper]
  )
  const words1 = useMemo(
    () => generateWordComponents(words[1], secondClassHelper),
    [secondClassHelper]
  )

  return (
    <div className="name-container">
      <p>
        <AnimatedWord className="neon" word={words0} />
        <AnimatedWord className="mmm" word={words1} />
      </p>
    </div>
  )
}
