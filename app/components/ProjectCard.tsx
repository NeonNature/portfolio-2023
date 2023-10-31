'use client'
import './../styles/projects.css'
import { ReactNode, useMemo, useState } from 'react'
import Image from 'next/image'
import math from '../../public/math.gif'
import LanKyoneAdmin from '../../public/lankyone/Admin.png'
import LanKyoneLogin from '../../public/lankyone/Login.jpg'
import LanKyoneRoute from '../../public/lankyone/Route.png'

interface CardProps {
  trigger: number
  active: number
  setActive: (arg: number) => void
  className: string
  name: string
  children: ReactNode
}

const Card = ({
  trigger,
  active,
  setActive,
  className,
  name,
  children,
}: CardProps) => {
  const classHelper = useMemo(() => {
    if (active === trigger) return 'expand'
    else return ''
  }, [trigger, active])

  return (
    <div
      className={`project-card ${classHelper} ${className}`}
      onClick={() => setActive(trigger)}
    >
      <div className="project-title">{name}</div>
      <div className="project-content">{children}</div>
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
        className="project-bg-lankyone"
        name="Lan Kyone"
      >
        <div className="">
          <Image
            className="project-pic-lankyone-admin"
            src={LanKyoneAdmin}
            alt="Admin Panel of Lan Kyone App"
          />
          <Image
            className="profile-pic-lankyone-login"
            src={LanKyoneLogin}
            alt="Login Panel of Lan Kyone App"
          />
          <Image
            className="profile-pic-lankyone-route"
            src={LanKyoneRoute}
            alt="Route Panel of Lan Kyone App"
          />
          <p className="project-">
            Lan Kyone is where all began for InnovatoryMM, my startup adventure.
            It&apos;s a simple ride-sharing platform designed with university
            students in mind, by university students. This brainchild of ours
            made quite a splash, bagging the first runner-up spot in the Unihack
            Challenge 2018 and taking home the gold in the Tech for Life
            category at the Phandeeyar Startup Challenge.
            <br />
            Our journey even got some social media buzz and media coverage! But,
            you know, those were the days when giants like Grab and Uber ruled
            the ride-sharing realm. Lan Kyone put up a good fight, but when Grab
            introduced their GrabShare feature, well, it was a tough game.
            <br />
            Our development team consisted of just two devs, and I am proud to
            say that I was in charge of all front-end aspects; the app, the
            landing pages and more! There were multiple iterations of designs
          </p>
        </div>
      </Card>
      <Card
        trigger={2}
        active={active}
        setActive={setActive}
        className="project-bg-bettercast"
        name="BetterCast"
      >
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
      </Card>
      <Card
        trigger={3}
        active={active}
        setActive={setActive}
        name="Appvantage Asia"
        className="project-bg-appvantageasia"
      >
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
      </Card>
      <Card
        trigger={4}
        active={active}
        setActive={setActive}
        name="Project M Series"
        className="project-bg-m"
      >
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
      </Card>
      <Card
        trigger={5}
        active={active}
        setActive={setActive}
        name="Legacy Projects"
        className="project-bg-legacy"
      >
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
      </Card>
      <Card
        trigger={6}
        active={active}
        setActive={setActive}
        name="BetterCast"
        className="project-bg-1"
      >
        <Image
          className="action-icon"
          src={math}
          alt="Animated icon of math symbols popping out of a book"
        />
      </Card>
    </div>
  )
}
