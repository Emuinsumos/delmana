import { useState } from 'react'
import useAuth from '../hooks/useAuth.js'
import Login from '../components/Login.jsx'
import { LIVE } from '../config/site.js'
import { borrarFoto, comprimir, guardarConfig, guardarFoto } from '../services/config.js'

const SLOTS = [['producto', 'Producto (portada y sección producto)'], ['pan-rallado', 'Pan rallado'], ['milanesas', 'Milanesas'], ['pollo', 'Pollo rebozado'], ['verduras', 'Verduras'], ['gastronomia', 'Preparaciones gastronómicas']]
const inp = 'w-full rounded-xl border border-trigo bg-white px-4 py-3 text-base'

export default function Admin() {
  const { user, login, logout } = useAuth()
  const [f, setF] = useState({ w1: LIVE.w1, w2: LIVE.w2, instagram: LIVE.redes.instagram || '', facebook: LIVE.redes.facebook || '', tiktok: LIVE.redes.tiktok || '' })
  const [msg, setMsg] = useState('')
  const [, tick] = useState(0)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  if (user === undefined) return <p className="p-10 text-center">Cargando…</p>
  if (!user) return <Login onLogin={login} />

  const guardar = async () => {
    try {
      await guardarConfig({ ...f, w1: f.w1.replace(/\D/g, ''), w2: f.w2.replace(/\D/g, '') })
      setMsg('Guardado ✔'); LIVE.w1 = f.w1; LIVE.w2 = f.w2
    } catch { setMsg('No se pudo guardar.') }
  }
  const subir = async (slot, file) => {
    if (!file) return
    setMsg('Subiendo foto…')
    try { const d = await comprimir(file); await guardarFoto(slot, d); LIVE.fotos[slot] = d; setMsg('Foto actualizada ✔') } catch { setMsg('No se pudo subir la foto.') }
    tick((n) => n + 1)
  }
  const restaurar = async (slot) => { await borrarFoto(slot); delete LIVE.fotos[slot]; setMsg('Foto original restaurada'); tick((n) => n + 1) }

  return (
    <main className="max-w-2xl mx-auto px-5 py-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="font-display text-3xl font-bold">Administración</h1>
        <div className="flex gap-2">
          <a href="/contacto" className="btn btn-outline !py-2">Mensajes</a>
          <button onClick={logout} className="btn btn-outline !py-2">Salir</button>
        </div>
      </div>
      {msg && <p className="font-semibold text-acento">{msg}</p>}

      <section className="bg-white rounded-2xl p-5 space-y-3 shadow">
        <h2 className="font-bold text-xl">WhatsApp y redes</h2>
        <label className="block text-sm font-semibold">WhatsApp 1 (ej: 5491122334455)<input className={inp} inputMode="numeric" value={f.w1} onChange={set('w1')} /></label>
        <label className="block text-sm font-semibold">WhatsApp 2<input className={inp} inputMode="numeric" value={f.w2} onChange={set('w2')} /></label>
        <label className="block text-sm font-semibold">Instagram (link completo, vacío = no se muestra)<input className={inp} value={f.instagram} onChange={set('instagram')} placeholder="https://instagram.com/..." /></label>
        <label className="block text-sm font-semibold">Facebook<input className={inp} value={f.facebook} onChange={set('facebook')} placeholder="https://facebook.com/..." /></label>
        <label className="block text-sm font-semibold">TikTok<input className={inp} value={f.tiktok} onChange={set('tiktok')} placeholder="https://tiktok.com/@..." /></label>
        <button onClick={guardar} className="btn btn-primary w-full">Guardar</button>
      </section>

      <section className="bg-white rounded-2xl p-5 shadow">
        <h2 className="font-bold text-xl mb-4">Fotos</h2>
        <div className="grid grid-cols-2 gap-4">
          {SLOTS.map(([slot, label]) => (
            <div key={slot} className="space-y-2">
              <img src={LIVE.fotos[slot] || `/img/${slot}.jpg`} alt={label} className="w-full aspect-square object-cover rounded-xl bg-trigo/60" />
              <p className="text-sm font-semibold">{label}</p>
              <label className="btn btn-primary !py-2 text-sm w-full cursor-pointer">Cambiar<input type="file" accept="image/*" className="hidden" onChange={(e) => subir(slot, e.target.files[0])} /></label>
              {LIVE.fotos[slot] && <button onClick={() => restaurar(slot)} className="text-sm underline w-full">Restaurar original</button>}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
