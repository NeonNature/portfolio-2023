'use client'
import { useState } from 'react'
import '../styles/contact.scss'
import Icon_LinkedIn from './waves/Icon_LinkedIn'
import Icon_Github from './waves/Icon_Github'

const linkedinUrl = 'https://www.linkedin.com/in/min-maung-maung/'
const githubUrl = 'https://github.com/NeonNature'
const resumeUrl = '/resume/Min Maung Maung ; Neon - Frontend Developer.pdf'

export default function Contact() {
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
  })

  const handleInput = (e: React.SyntheticEvent): void => {
    const target = e.target as HTMLInputElement
    const { name, value } = target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    console.log('test')
  }

  const handleUrl = (link: string) => window.open(link, '_blank', 'noreferrer')

  return (
    <div className="flex flex-row items-center justify-center gap-16">
      <div>
        <div className="contact-title">
          Get in <span>TOUCH!</span>
        </div>
        <div className="flex flex-row">
          <button
            className="contact-btn linkedin"
            onClick={() => handleUrl(linkedinUrl)}
          >
            <Icon_LinkedIn />
          </button>
          <button
            className="contact-btn resume"
            onClick={() => handleUrl(resumeUrl)}
          >
            Resume
          </button>
          <button
            className="contact-btn github"
            onClick={() => handleUrl(githubUrl)}
          >
            <Icon_Github />
          </button>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            id="contact-subject"
            value={formData.subject}
            onChange={handleInput}
            name="subject"
            type="text"
            placeholder="Subject"
          />
          <textarea
            id="contact-body"
            value={formData.message}
            onChange={handleInput}
            name="message"
            placeholder="Message"
            rows={10}
          ></textarea>
          <button id="contact-submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
