import RotatingName from './components/RotatingName'
import IntroDivider from './components/waves/IntroDivider'
import WaveTwo from './components/waves/WaveTwo'
import './styles/styles.css'
import RotatingAction from './components/RotatingAction'
import Avatar from './components/Avatar'
import Actions from './components/Actions'
import ProjectCard from './components/ProjectCard'
import Testimonials from './components/Testimonials'
import TestimonialDividerStart from './components/waves/TestimonialDividerStart'
import TestimonialDividerEnd from './components/waves/TestimonialDividerEnd'
import Contact from './components/Contact'

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
          <div className="flex items-center justify-center p-4">
            <div className="details-content">
              <p>
                Hey, I&apos;m{' '}
                <span className="details-highlight-blue">Min Maung Maung</span>{' '}
                aka <span className="details-highlight-green">Neon</span>, your
                friendly web guru, always chasing{' '}
                <span className="details-highlight-purple">
                  pixel perfection
                </span>
                , and slightly obsessed with{' '}
                <span className="details-highlight-animate">animations</span>.
                But here&apos;s the kicker – I&apos;ve got a secret love for
                time travel.
              </p>
              <p className="mt-4">
                While I can&apos;t make you jump through centuries, I can sure
                take your website on a journey through pixel magic and
                animations that&apos;ll make it feel like a{' '}
                <span className="details-highlight-time">time warp</span>.
                Buckle up, because we&apos;re about to make the digital clock
                spin backward!
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Avatar />
          </div>
        </div>
      </div>
      <WaveTwo />
      <div className="content-three">
        <Actions />
      </div>
      <div className="content-four">
        <ProjectCard />
      </div>
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
