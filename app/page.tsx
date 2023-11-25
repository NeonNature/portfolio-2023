import RotatingName from './components/RotatingName'
import IntroDivider from './components/waves/IntroDivider'
import WaveTwo from './components/waves/WaveTwo'
import RotatingAction from './components/RotatingAction'
import Avatar from './components/Avatar'
import Actions from './components/Actions'
import Testimonials from './components/Testimonials'
import TestimonialDividerStart from './components/waves/TestimonialDividerStart'
import TestimonialDividerEnd from './components/waves/TestimonialDividerEnd'
import Contact from './components/Contact'
import Projects from './components/Projects'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import './styles/styles.css'

export default function Home() {
  return (
    <main className="w-full">
      <div className="content-one">
        <div className="intro-content">
          <RotatingName />
          <hr className="intro-name-divider" />
          <RotatingAction />
        </div>
      </div>
      <IntroDivider />
      <div className="content-two">
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center p-4">
            <Actions />
          </div>
          <div className="flex items-center justify-center">
            <Avatar />
          </div>
        </div>
      </div>
      <WaveTwo />
      <Projects />
      <TestimonialDividerStart />
      <div className="content-five">
        <Testimonials />
      </div>
      <TestimonialDividerEnd />
      <div className="content-six">
        <Contact />
      </div>
    </main>
  )
}
