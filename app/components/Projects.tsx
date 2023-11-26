'use client'
import '../styles/project.scss'
import Image, { StaticImageData } from 'next/image'

import LanKyone from '/public/projects/lankyone.png'
import LanKyoneLogo from '/public/logo/lankyone.png'
import LanKyoneLogoActive from '/public/logo/lankyone-active.png'

import BetterCast from '/public/projects/bettercast.jpeg'
import BetterCastLogo from '/public/logo/bettercast.png'

import Appvantage from '/public/projects/appvantageasia.png'
import AppvantageLogo from '/public/logo/appvantage.png'
import AppvantageLogoActive from '/public/logo/appvantage-active.png'

import ProjectM from '/public/projects/projectm.png'
import Legacy from '/public/projects/legacy.jpeg'

import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Autoplay,
  Pagination,
  Navigation,
  Controller,
  EffectFade,
} from 'swiper/modules'
import { ReactNode, useState } from 'react'
import type SwiperCore from 'swiper'

interface ProjectCardProps {
  className: string
  children: ReactNode
  logo?: StaticImageData
  alt?: string
  logoText?: string
}

// do not put SwiperSlide here; breaks swiperjs
const ProjectCard = ({
  className,
  children,
  logo,
  alt,
  logoText,
}: ProjectCardProps) => {
  return (
    <div className={`project-card ${className}`}>
      {logo && alt ? (
        <Image className="project-logo" src={logo} alt={alt} />
      ) : (
        <div className="project-logo-text">{logoText}</div>
      )}
      <div className="project-details">{children}</div>
    </div>
  )
}

export default function Projects() {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null)

  const slideTo = (index: number) => {
    console.log(index)
    if (swiper) swiper.slideTo(index)
  }

  return (
    <div className="project-container flex-col md:flex-row">
      <div className="project-showcase-container">
        <Swiper
          onSwiper={setSwiper}
          modules={[Autoplay, EffectFade]}
          loop={true}
          className="project-showcase-swiper"
          effect={'fade'}
        >
          <SwiperSlide>
            <Image
              className="project-showcase lankyone"
              src={LanKyone}
              alt="An image of Lan Kyone App, Route Panel"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="project-showcase"
              src={BetterCast}
              alt="An image of BetterCast webapp, landing schedule page"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="project-showcase"
              src={Appvantage}
              alt="An image of one of appvantage asia projects, auto finance calculator"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="project-showcase"
              src={ProjectM}
              alt="An image of one of Project M series apps, weather forecast"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              className="project-showcase"
              src={Legacy}
              alt="An image of one of legacy apps, quick clicker"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="project-carousel">
        <Swiper
          onRealIndexChange={(swiper) => slideTo(swiper.realIndex)}
          spaceBetween={30}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Controller]}
          className="project-swiper"
        >
          <SwiperSlide>
            {({ isActive }) => (
              <ProjectCard
                className="lankyone"
                logo={isActive ? LanKyoneLogoActive : LanKyoneLogo}
                alt="Lan Kyone Logo"
              >
                Lan Kyone is where all began for InnovatoryMM, my startup
                adventure. It&apos;s a simple ride-sharing platform designed
                with university students in mind, by university students, which
                got featured in local news!
                <br />
                <br /> This brainchild of ours made quite a splash, grabbing the
                first runner-up spot in the Unihack Challenge 2018 and taking
                home the gold in the Tech for Life category at the Phandeeyar
                Startup Challenge.
              </ProjectCard>
            )}
          </SwiperSlide>

          <SwiperSlide>
            <ProjectCard
              className="bettercast"
              logo={BetterCastLogo}
              alt={'BetterCast Logo'}
            >
              BetterCast was an Australian company that specialized in hosting
              virtual conferences and events, primarily during the Covid-19
              period. The platform got regarded as one of the top choices by the
              AV professionals!
              <br />
              <br />
              I&apos;m proud to say that I&apos;ve also been personally
              recommended by CTO for exceptional availability, responsiveness
              and continuous improvement!
            </ProjectCard>
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <ProjectCard
                className="appvantage"
                logo={isActive ? AppvantageLogoActive : AppvantageLogo}
                alt={'Appvantage Asia Logo'}
              >
                Appvantage Asia is a Singaporean company specializing in digital
                solutions for the automobile industry, with an office in
                Myanmar. Awesome journey since I got to work with big-shot
                automobile clients such as Cycle and Carriage, Mercedes Benz,
                Mazda, Kia, Mitsubishi, and more!
                <br />
                <br /> Although there are several developers in the team,
                I&apos;m proud to say that I&apos;m the sole front end developer
                across multiple projects, including building up proof of
                concepts!
              </ProjectCard>
            )}
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard className="m" logoText="Project M Series">
              Project M, which stands for Mini, is a collection of ...bits of
              everything I have done either due to my boredom or trying new
              things out.
              <br />
              <br />
              The collection ranges from ThreeJS experiments, CSS visuals, past
              portfolio designs, weather apps, discord bot commands, to even
              personal lovey dovey ones such as a day counter since the time my
              now-wife and I see each other!
            </ProjectCard>
          </SwiperSlide>

          <SwiperSlide>
            <ProjectCard className="legacy" logoText="Legacy Projects">
              Legacy Projects are mostly from pre-professional career/ during my
              educational period, or you could say the start of everything!
              <br />
              <br />
              Back then, I had got my hands on a variety of languages before I
              focused on front end - a Cookie Clicker clone (which brought a
              really big wow factor among my class!), a Mobile Money platform
              and a cinema booking system. There were even some stuff like
              Minecraft plugins which had become victims to harddrive failures
              unfortunately.
            </ProjectCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
