import Image from 'next/image'
import avatar from '../../public/avatar.jpg'
import '../styles/avatar.css'

export default function Avatar() {
  return (
    <div className="intro-avatar-wrapper-primary">
      <div className="intro-avatar-wrapper-secondary">
        <div className="intro-avatar-container">
          <Image
            className="intro-avatar"
            src={avatar}
            alt="Profile Picture of Min Maung Maung aka Neon"
          />
        </div>
      </div>
    </div>
  )
}
