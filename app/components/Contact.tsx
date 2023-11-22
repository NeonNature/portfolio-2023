'use client'
import { useRef, useState } from 'react'
import '../styles/contact.scss'
import Icon_LinkedIn from './waves/Icon_LinkedIn'
import Icon_Github from './waves/Icon_Github'
import emailjs from '@emailjs/browser'

const linkedinUrl = 'https://www.linkedin.com/in/min-maung-maung/'
const githubUrl = 'https://github.com/NeonNature'
const resumeUrl = '/resume/Min Maung Maung ; Neon - Frontend Developer.pdf'

enum status {
  Unsent = 'UNSENT',
  Sending = 'SENDING',
  Sent = 'SENT',
  Error = 'ERROR',
}

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [formState, setFormState] = useState<status>(status.Unsent)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setFormState(status.Sending)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        form.current || '',
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''
      )
      .then(
        (result) => {
          console.log(result.text)
          setFormState(status.Sent)
        },
        (error) => {
          console.log(error.text)
          setFormState(status.Error)
        }
      )
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
        <div className={`contact-form ${formState}`}>
          <form ref={form} onSubmit={handleSubmit}>
            <input
              id="contact-email"
              name="email"
              type="email"
              disabled={formState === status.Sent}
              placeholder="Email"
              required
            />
            <input
              id="contact-subject"
              name="subject"
              type="text"
              disabled={formState === status.Sent}
              placeholder="Subject"
            />
            <textarea
              id="contact-body"
              name="message"
              placeholder="Message"
              required
              disabled={formState === status.Sent}
              rows={10}
            ></textarea>
            <button
              id="contact-submit"
              type="submit"
              disabled={formState === status.Sent}
            >
              Send
            </button>
          </form>
        </div>
        <div className={`contact-success ${formState}`}>
          <p className="contact-success-title">
            {formState === status.Sent ? 'Thanks for contacting!' : 'Whooops!'}
          </p>
          <p className="contact-success-content">
            {formState === status.Sent
              ? "I'll reach out to you as soon as possible!"
              : 'Seems something went wrong while trying to reach out. Must be those pesky ducks again!'}
          </p>
        </div>
      </div>
    </div>
  )
}
