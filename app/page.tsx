import RotatingName from './components/RotatingName'
import IntroDivider from './components/waves/IntroDivider'
import WaveTwo from './components/waves/WaveTwo'
import './styles/styles.css'

export default function Home() {
  return (
    <main className="w-full">
      <div className="grid grid-cols-2 content-one">
        <div className="intro-content">
          <p>Yo!</p>
          <RotatingName />
          <p>I code!</p>
        </div>
        <div>some picture here</div>
      </div>
      <IntroDivider />
      <div className="content-two"> aaaaaa </div>
      <WaveTwo />
      <div className="content-three"> aaaaaa </div>
    </main>
  )
}
