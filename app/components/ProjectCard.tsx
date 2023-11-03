'use client'
import './../styles/projects.css'
import { ReactNode, useMemo, useState } from 'react'
import Image from 'next/image'
import math from '../../public/math.gif'
import LanKyone from '../../public/projects/lankyone.png'
import BetterCast from '../../public/projects/bettercast.jpeg'
import AppvantageAsia from '../../public/projects/appvantageasia.png'
import ProjectM from '../../public/projects/projectm.png'
import Legacy from '../../public/projects/legacy.jpeg'

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
        <div className="flex flex-col md:flex-row justify-center items-center">
          <Image
            className="profile-pic-lankyone-route"
            src={LanKyone}
            alt="An image of Lan Kyone App, Route Panel"
          />
          <div className="project-details">
            <p>
              Lan Kyone is where all began for InnovatoryMM, my startup
              adventure. It&apos;s a simple ride-sharing platform designed with
              university students in mind, by university students. This
              brainchild of ours made quite a splash, bagging the first
              runner-up spot in the Unihack Challenge 2018 and taking home the
              gold in the Tech for Life category at the Phandeeyar Startup
              Challenge.
            </p>
            <p className="my-8">
              Our journey even got some social media buzz and media coverage!
              But, you know, those were the days when giants like Grab and Uber
              ruled the ride-sharing realm. Lan Kyone put up a good fight, but
              when Grab introduced their GrabShare feature, well, it was a tough
              game.
            </p>
            <p>
              Our development team consisted of just two devs, and I am proud to
              say that I was in charge of all front-end aspects; the app, the
              landing pages and more! Oh, did I forget to mention that our
              blockchain-themed election system app for Yangon Technological
              Univesity Student Union got endorsed by a majority of members and
              selected for implementation?
            </p>
          </div>
        </div>
      </Card>
      <Card
        trigger={2}
        active={active}
        setActive={setActive}
        className="project-bg-bettercast"
        name="BetterCast"
      >
        <div className="flex flex-col md:flex-row justify-center items-center">
          <Image
            className="profile-pic-lankyone-route"
            src={BetterCast}
            alt="An image of BetterCast webapp, landing schedule page"
          />
          <div className="project-details">
            <p>
              BetterCast was an Australian company that specialized in hosting
              virtual conferences and events, primarily during the Covid-19
              period. The platform got regarded as one of the top choices by the
              AV professionals! However, it has ended services around June 2023
              but still great to be part of the great journey!
            </p>
            <p className="my-8">
              I played a major role in a loooot of features! Dealing with third
              party related issues, supporting NFT Login, self-serve feature,
              refactoring the codebase (by a lot!).
            </p>
            <p>
              I&apos;m proud to say that I&apos;ve also been personally
              recommended by CTO for exceptional availability, responsiveness
              and continuous improvement!
            </p>
          </div>
        </div>
      </Card>
      <Card
        trigger={3}
        active={active}
        setActive={setActive}
        name="Appvantage Asia"
        className="project-bg-appvantageasia"
      >
        <div className="flex flex-col md:flex-row justify-center items-center">
          <Image
            className="profile-pic-lankyone-route"
            src={AppvantageAsia}
            alt="An image of one of appvantage asia projects, auto finance calculator"
          />
          <div className="project-details">
            <p>
              Appvantage Asia is a Singaporean company specializing in digital
              solutions for the automobile industry, with an office in Myanmar.
              Awesome journey since I got to work with big-shot automobile
              clients such as Cycle and Carriage, Mercedes Benz, Mazda, Kia,
              Mitsubishi, and more!
            </p>
            <p className="my-8">
              Although there are several developers in the team, I&apos;m proud
              to say that I&apos;m the sole front end developer across multiple
              projects, including building up proof of concepts!
            </p>
            <p>
              This is where I realize what my greatest strength is -
              Adaptability! I have adapted and picked up a lot of technologies
              needed to both maintain legacy projects and develop new ones!
            </p>
          </div>
        </div>
      </Card>
      <Card
        trigger={4}
        active={active}
        setActive={setActive}
        name="Project M Series"
        className="project-bg-m"
      >
        <div className="flex flex-col md:flex-row justify-center items-center">
          <Image
            className="profile-pic-lankyone-route"
            src={ProjectM}
            alt="An image of one of Project M series apps, weather forecast"
          />
          <div className="project-details">
            <p>
              Project M Series is like my playground of creativity, where random
              ideas come to life just because I&apos;m testing things out,
              tinkering with new tech, or simply because boredom kicked in.
            </p>
            <p className="my-8">
              This collection boasts a bit of everything - from a handy weather
              forecast app to code challenges that keep me on my toes.
              You&apos;ll find ThreeJS experiments like mesmerizing sunsets,
              glimpses of past portfolio designs, and CSS experiments that play
              with visual flair. There are even some personal lovey-dovey
              projects that help me keep track of the beautiful journey with my
              now-wife, counting the days since we first met!
            </p>
            <p>
              And let&apos;s not forget the star of the show: the Discord bot
              feature for Kuru Anime, which quickly became the server&apos;s
              favorite commands. I also dabble in fun projects I&apos;d toss
              into Codepen now and then. For the full collection, swing by my
              Github – it&apos;s all there for you to explore!
            </p>
          </div>
        </div>
      </Card>
      <Card
        trigger={5}
        active={active}
        setActive={setActive}
        name="Legacy Projects"
        className="project-bg-legacy"
      >
        <div className="flex flex-col md:flex-row justify-center items-center">
          <Image
            className="profile-pic-lankyone-route"
            src={Legacy}
            alt="An image of one of legacy apps, quick clicker"
          />
          <div className="project-details">
            <p>
              Welcome to the Legacy Projects series, where I take you back to
              the good ol&apos; days before my professional dev career began.
              This is where my coding journey kicked off.
            </p>
            <p className="my-8">
              Back then, I had got my hands on a variety of languages before I
              focused on front end - a Cookie Clicker clone using Java (which
              brought a really big wow factor among my class!), a Mobile Money
              platform and a cinema booking system using PHP, mostly for
              educational assignments.
            </p>
            <p>
              Then there&apos;s the Minecraft plugins, a bit of my gaming past,
              which unfortunately have gone into the digital abyss since I had
              yet to discover GitHub back then. These projects are like my own
              personal time capsule, reminding me of how far I&apos;ve come
              since those early days of coding exploration.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
