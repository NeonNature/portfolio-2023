'use client'
import '../styles/project.scss'
import Image from 'next/image'
import DeeD from '/public/testimonials/deed.png'
import LanKyone from '/public/projects/lankyone.png'
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
}

// do not put SwiperSlide here; breaks swiperjs
const ProjectCard = ({ className, children }: ProjectCardProps) => {
  return (
    <div className={`project-card ${className}`}>
      <div className="project-details">{children}</div>
    </div>
  )
}

export default function Projects() {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null)

  const slideTo = (index: number) => {
    if (swiper) swiper.slideTo(index)
  }

  return (
    <div className="project-container">
      <div className="project-showcase-container">
        <Swiper
          onSwiper={setSwiper}
          modules={[Autoplay, EffectFade]}
          loop={true}
          className="project-showcase-swiper"
          effect={'fade'}
        >
          <SwiperSlide>
            <Image className="project-showcase" src={DeeD} alt={'Dee D'} />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="project-showcase"
              src={LanKyone}
              alt={'Lan Kyone'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="project-showcase" src={DeeD} alt={'Dee D'} />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="project-showcase"
              src={LanKyone}
              alt={'Lan Kyone'}
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
            <ProjectCard className="lankyone">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              unde rem laboriosam laudantium! Quia iste accusantium adipisci
              totam exercitationem non quae porro sit blanditiis, explicabo
              fugit distinctio ipsam, odio quisquam.
            </ProjectCard>
          </SwiperSlide>

          <SwiperSlide>
            <ProjectCard className="lankyone">
              Lan Kyone is where all began for InnovatoryMM, my startup
              adventure. It&apos;s a simple ride-sharing platform designed with
              university students in mind, by university students. This
              brainchild of ours made quite a splash, bagging the first
              runner-up spot in the Unihack Challenge 2018 and taking home the
              gold in the Tech for Life category at the Phandeeyar Startup
              Challenge.
            </ProjectCard>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard className="lankyone">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              quisquam perspiciatis at nihil placeat nesciunt officia
              praesentium animi deserunt rem dolor consequuntur vero dicta
              temporibus, id aut. Dolor, adipisci architecto.
            </ProjectCard>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard className="lankyone">
              Lan Kyone is where all began for InnovatoryMM, my startup
              adventure. It&apos;s a simple ride-sharing platform designed with
              university students in mind, by university students. This
              brainchild of ours made quite a splash, bagging the first
              runner-up spot in the Unihack Challenge 2018 and taking home the
              gold in the Tech for Life category at the Phandeeyar Startup
              Challenge.
            </ProjectCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
