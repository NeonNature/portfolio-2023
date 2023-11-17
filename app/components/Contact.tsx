'use client'
import { useState } from 'react'
import '../styles/contact.scss'

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

  return (
    <div className="flex flex-row items-center justify-center">
      <div>
        <div>Get in touch!</div>
        <div className="flex flex-col">
          <div>
            <button>LinkedIn</button>
            <button>CodePen</button>
            <button>Github</button>
          </div>
          <button>Resume</button>
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
            placeholder="Subject Placeholder"
          />
          <textarea
            id="contact-body"
            value={formData.message}
            onChange={handleInput}
            name="message"
            placeholder="Body Placeholder"
            rows={10}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
