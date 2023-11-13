'use client'
import './../styles/testimonials.css'
import { ReactNode, useMemo, useState } from 'react'
import Image from 'next/image'
import LanKyone from '../../public/projects/lankyone.png'
import BetterCast from '../../public/projects/bettercast.jpeg'
import AppvantageAsia from '../../public/projects/appvantageasia.png'
import ProjectM from '../../public/projects/projectm.png'
import Legacy from '../../public/projects/legacy.jpeg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Testimonial = () => {
  return (
    <div>
      <Image
        className="testimonial-avatar"
        src={LanKyone}
        alt="Animated icon of math symbols popping out of a book"
      />
      <div className="testimonial-card">AAAAAA</div>
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
