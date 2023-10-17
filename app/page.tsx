// import Avatar from './components/Avatar'
import RotatingName from './components/RotatingName'
import IntroDivider from './components/waves/IntroDivider'
import WaveTwo from './components/waves/WaveTwo'
import './styles/styles.css'
import RotatingAction from './components/RotatingAction'

export default function Home() {
  return (
    <main className="w-full">
      <div className="content-one">
        <div className="intro-content">
          <RotatingName />
          <hr className="intro-name-divider" />
          <RotatingAction />
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
