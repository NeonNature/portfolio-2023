import Image from 'next/image'
import avatar from '/public/avatar.jpg'
import '../styles/avatar.scss'

export default function Avatar() {
  return (
    <div className="intro-avatar-container">
      <Image
        className="intro-avatar"
        src={avatar}
        alt="Profile Picture of Min Maung Maung aka Neon"
      />
    </div>
  )
}
