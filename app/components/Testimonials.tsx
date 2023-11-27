'use client'
import './../styles/testimonials.scss'
import Image from 'next/image'
import Ben from '/public/testimonials/ben.jpeg'
import Clara from '/public/testimonials/clara.jpeg'
import Htoo from '/public/testimonials/htoo.jpeg'
import Hunter from '/public/testimonials/hunter.jpeg'
import Sarada from '/public/testimonials/sarada.jpeg'
import Waing from '/public/testimonials/waing.jpeg'
import DeeD from '/public/testimonials/deed.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { TestimonialCardProps } from '../types'

// do not put SwiperSlide here; breaks swiperjs
const TestimonialCard = ({
  image,
  alt,
  children,
  name,
  role,
}: TestimonialCardProps) => {
  return (
    <div>
      <Image className="testimonial-avatar" src={image} alt={alt} />
      <div className="testimonial-card">{children}</div>
      <div className="testimonial-name">{name}</div>
      <div className="testimonial-role">{role}</div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <div className="overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="testimonial-swiper"
      >
        <SwiperSlide>
          <TestimonialCard
            image={Ben}
            alt={'Profile Picture of Benjamin Powell'}
            name="Benjamin Powell"
            role="CEO, BetterCast"
          >
            It has been a real pleasure working with Neon, He was an amazing
            addition to the team and brought to the role a dedication and talent
            that far exceeds expectations.
            <br /> <br /> I can not recommend him highly enough to any role that
            he is considered for and I believe he is an asset to any project.
          </TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            image={Hunter}
            alt={'Profile Picture of Hunter Williams'}
            name="Hunter Williams"
            role="CTO, BetterCast"
          >
            Neon is the sort of person any dev team would be happy to have. He
            gives feedback on issues and participates in discussions. He
            delivers quality code and when it can be improved he takes feedback
            with a smile. This feedback is immediately results in better code
            for that issue and continues to use it on other issues. I&apos;m
            quite happy to have had him on the team.
            <br />
            <br />
            His time with BetterCast was only limited by the company itself
            having to close and not once was he ever seen on any chopping block.
            I would be happy to work with him or recommend anyone to work with
            him in the future.
          </TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            image={Htoo}
            alt={'Profile Picture of Zaw Kyi Han Htoo'}
            name="Zaw Kyi Han Htoo"
            role="General Manager, Appvantage Asia"
          >
            I&apos;ve know Min since 2019. Min was a great professional to work
            with. He has exhibited consistency in his ability to remain comitted
            and focused. I recommend Min highly and look forward to working
            together in future.
          </TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            image={Sarada}
            alt={'Profile Picture of Sarada Lakshmi'}
            name="Sarada Lakshmi"
            role="Project Manager, Appvantage Asia"
          >
            During his tenure with Appvantage Asia Pte Ltd, he exhibited strong
            technical skills. Troubleshooting skills are exceptional. He
            demonstrated professionalism, unwavering dedication, and commitment
            to his work.
            <br />
            <br />
            In addition, his hardworking and steady style had motivated other
            team members in meeting stringent deadlines and targets. He was a
            very good team player and always open to feedback. Possesses
            exceptional ability to learn new technologies quickly and
            successfully.
            <br />
            <br /> During his service, he had been found very sincere, reliable,
            trustworthy, sociable, and pleasant. Many of our staff members were
            pleased to work with him as a team. He will be a great asset
            wherever he belongs.
          </TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            image={Clara}
            alt={'Profile Picture of Clara Chong'}
            name="Clara Chong"
            role="UI/UX Designer, Appvantage Asia"
          >
            In my professional experience as a UX Designer and Researcher,
            I&apos;ve worked alongside numerous developers and rarely would you
            find someone as efficient, bright and sharp at such a young age.
            <br />
            <br />
            While working together on a tight deadline for a large-scale digital
            transformation project, he was able to fully understand my design
            requirements and translate them into web applications swiftly with
            little to no hiccups. He ensured that every corner case and edge
            scenario was accounted for in his code and when we tested it out, it
            was bug-free. When there was a scope creep, he would roll up his
            sleeves to get the code done in no time.
            <br />
            <br />
            Furthermore, Min continues to elevate his developer competency
            through his voracious appetite for learning new technologies. I have
            no doubt that he will be an asset to any company he&apos;s joining
            next.
          </TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            image={Waing}
            alt={'Profile Picture of Waing La Min Lwin'}
            name="Waing La Min Lwin"
            role="Co-Founder, InnovatoryMM"
          >
            Min is the kind of developer you&apos;d love to work together,
            whether the business is a startup or a big corporation. His talent,
            passion, and creativity are what made him stand out as an
            outstanding talent. His creativity is what enabled us to develop an
            application that offers a fun and refreshing experience for
            end-users.
            <br />
            <br />
            Min is also a person who thinks differently. He would bring
            unforeseen perspectives to the table, allowing us to develop our
            products with a broader range of considerations for users eventually
            resulting in products with better and more unique qualities.
            <br />
            <br />
            I&apos;ve seen him learning continuously and performing diligently
            at a top level for years, so I think he&apos;ll be a great talent
            for whatever company he&apos;s working in or joining next.
          </TestimonialCard>
        </SwiperSlide>

        <SwiperSlide>
          <TestimonialCard
            image={DeeD}
            alt={'Profile Picture of Woody'}
            name="Woody"
            role="Personal Supervisor, Home"
          >
            Meow.
            <br /> <br />
            (Disclaimer: Due to intense language barrier, I am not able to
            translate his expression of words, but I believe he is saying
            something good about me)
          </TestimonialCard>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
