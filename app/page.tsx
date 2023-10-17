// import Avatar from './components/Avatar'
import RotatingName from './components/RotatingName'
import IntroDivider from './components/waves/IntroDivider'
import WaveTwo from './components/waves/WaveTwo'
import { Fade } from 'react-awesome-reveal'
import './styles/styles.css'

export default function Home() {
  return (
    <main className="w-full">
      <div className="content-one">
        <div className="intro-content">
          <RotatingName />
          <hr className="intro-name-divider" />
          <p className="intro-action-container">
            A Front-End Developer who
            <br />
            <span className="intro-action-c">C</span>
            <Fade direction={'left'}>
              <span>reate</span>
            </Fade>
            <span className="intro-action-o">O</span>ptimize
            <span className="intro-action-d">D</span>ebug
            <span className="intro-action-e">E</span>xplore
            <span className="intro-action-remaining">stuff</span>
          </p>
        </div>
        {/* <div className="flex items-center justify-center">
          <Avatar />
        </div> */}
      </div>
      <IntroDivider />
      <div className="content-two">
        <p className="text-center text-3xl">Who am I?</p>
        <p>
          I am your regular everyday normal frontend developer.... except Ive
          got a dream.{' '}
        </p>
      </div>
      <WaveTwo />
      <div className="content-three"> aaaaaa </div>
    </main>
  )
}
