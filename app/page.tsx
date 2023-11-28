import RotatingName from './components/RotatingName'
import RotatingAction from './components/RotatingAction'
import Avatar from './components/Avatar'
import Actions from './components/Actions'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Projects from './components/Projects'

import Wave_Intro from './assets/Wave_Intro'
import Wave_Projects from './assets/Wave_Projects'
import Wave_Testimonial from './assets/Wave_Testimonial'
import Wave_Contact from './assets/Wave_Contact'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import './styles/styles.scss'

export default function Home() {
  return (
    <main className="w-full">
      <div className="content-one">
        <div>
          <RotatingName />
          <hr className="intro-name-divider" />
          <RotatingAction />
        </div>
        <div className="intro-scroll-icon-wrapper">
          <i className="intro-scroll-icon"></i>
        </div>
      </div>
      <Wave_Intro />
      <div className="content-two">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center p-4">
            <Actions />
          </div>
          <div className="flex items-center justify-center">
            <Avatar />
          </div>
        </div>
      </div>
      <Wave_Projects />
      <Projects />
      <Wave_Testimonial />
      <div className="content-five">
        <Testimonials />
      </div>
      <Wave_Contact />
      <div className="content-six">
        <Contact />
      </div>
    </main>
  )
}
