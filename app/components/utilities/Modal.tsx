'use client'
import { useMemo, useState } from 'react'
import '../../styles/modal.css'

export default function Modal() {
  const [open, setOpen] = useState(false)

  const modal = useMemo(
    () =>
      open && (
        <div className="modal-container" onClick={() => setOpen(false)}>
          <div className="modal-background">
            <div className="modal">SOMETHING</div>
          </div>
        </div>
      ),
    [open]
  )
  return (
    <>
      {modal}
      <div className="modal-button" onClick={() => setOpen(true)}>
        PLACEHOLDER
      </div>
    </>
  )
}
