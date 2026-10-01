import { useState } from 'react'
import { WhatsAppIcon } from './Icons.jsx'
import { LIVE, WHATSAPP_1, WHATSAPP_2, waLink } from '../config/site.js'
export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false)
  const [chat, setChat] = useState([])
  const preguntar = (i) => setChat([...chat, { de: 'yo', t: i.p }, { de: 'bot', t: i.r }])
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-white rounded-2xl shadow-xl w-[calc(100vw-2.5rem)] max-w-sm max-h-[70vh] overflow-y-auto p-4 fade-up">
          <div className="bg-trigo/50 rounded-xl p-3 mb-3">{LIVE.bot.bienvenida}</div>
          {chat.map((m, i) => (
            <div key={i} className={`mb-2 flex ${m.de === 'yo' ? 'justify-end' : ''}`}>
              <div className={`rounded-xl px-3 py-2 max-w-[85%] ${m.de === 'yo' ? 'bg-acento text-white' : 'bg-trigo/50'}`}>{m.t}</div>
            </div>
          ))}
          <div className="flex flex-col gap-2 mt-3">
            {LIVE.bot.items.map((i, n) => (
              <button key={n} onClick={() => preguntar(i)} className="text-left border border-trigo rounded-xl px-3 py-2.5 hover:bg-trigo/40">{i.p}</button>
            ))}
          </div>
          <p className="font-semibold mt-4 mb-2">¿Querés hablar con una persona?</p>
          <a href={waLink(WHATSAPP_1)} target="_blank" rel="noreferrer" className="btn btn-primary w-full mb-2"><WhatsAppIcon />Asesor de ventas</a>
          <a href={waLink(WHATSAPP_2)} target="_blank" rel="noreferrer" className="btn btn-primary w-full"><WhatsAppIcon />Consultas</a>
        </div>
      )}
      <button onClick={() => setOpen(!open)} aria-label="Asistente" className="w-16 h-16 rounded-full bg-acento text-white shadow-xl text-3xl hover:scale-105 transition">{open ? '✕' : '💬'}</button>
    </div>
  )
}
