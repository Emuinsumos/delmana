import { useState } from 'react'
import useAuth from '../hooks/useAuth.js'
import Login from '../components/Login.jsx'
import { LIVE, PRODUCT, TEXTS, USES } from '../config/site.js'
import { borrarFoto, comprimir, guardarConfig, guardarFoto } from '../services/config.js'

const SLOTS = [['producto', 'Producto (portada y sección producto)'], ['pan-rallado', 'Pan rallado'], ['milanesas', 'Milanesas'], ['pollo', 'Pollo rebozado'], ['verduras', 'Verduras'], ['gastronomia', 'Preparaciones gastronómicas'], ['conoce', 'Conocé Delmana (sección de marca)']]
const CAMPOS = [['HERO_TITLE', 'Portada: título'], ['HERO_COPY', 'Portada: texto', 1], ['ABOUT_TITLE', 'Conocé Delmana: título'], ['ABOUT_COPY', 'Conocé Delmana: texto', 1], ['PRODUCT_NAME', 'Producto: nombre'], ['SUMMARY', 'Producto: descripción corta', 1], ['CTA_TITLE', 'Contacto: título'], ['CTA_TEXT', 'Contacto: texto', 1]]
const inp = 'w-full rounded-xl border border-trigo bg-white px-4 py-3 text-base'
const origen = { ...TEXTS, ...PRODUCT }

export default function Admin() {
  const { user, login, logout } = useAuth()
  const [f, setF] = useState({ w1: LIVE.w1, w2: LIVE.w2, instagram: LIVE.redes.instagram || '', facebook: LIVE.redes.facebook || '', tiktok: LIVE.redes.tiktok || '' })
  const [t, setT] = useState(() => { const o = {}; CAMPOS.forEach(([k]) => { o[k] = origen[k] }); return o })
  const [uses, setUses] = useState(() => USES.map((u) => ({ title: u.title, text: u.text })))
  const [bienvenida, setBienvenida] = useState(LIVE.bot.bienvenida)
  const [items, setItems] = useState(() => LIVE.bot.items.map((i) => ({ ...i })))
  const [msg, setMsg] = useState('')
  const [, tick] = useState(0)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const setIt = (n, k) => (e) => setItems(items.map((x, i) => (i === n ? { ...x, [k]: e.target.value } : x)))
  const setUs = (n, k) => (e) => setUses(uses.map((x, i) => (i === n ? { ...x, [k]: e.target.value } : x)))

  if (user === undefined) return <p className="p-10 text-center">Cargando…</p>
  if (!user) return <Login onLogin={login} />

  const guardar = async () => {
    try {
      const limpios = items.filter((i) => i.p.trim() && i.r.trim())
      await guardarConfig({ ...f, w1: f.w1.replace(/\D/g, ''), w2: f.w2.replace(/\D/g, ''), textos: { ...t, uses }, bot: { bienvenida, items: limpios } })
      LIVE.w1 = f.w1; LIVE.w2 = f.w2; LIVE.bot = { bienvenida, items: limpios }
      setItems(limpios); setMsg('Guardado ✔ (recargá la web para ver los cambios)')
    } catch { setMsg('No se pudo guardar.') }
  }
  const subir = async (slot, file) => {
    if (!file) return
    setMsg('Subiendo foto…')
    try { const d = await comprimir(file); await guardarFoto(slot, d); LIVE.fotos[slot] = d; setMsg('Foto actualizada ✔') } catch { setMsg('No se pudo subir la foto.') }
    tick((n) => n + 1)
  }
  const restaurar = async (slot) => { await borrarFoto(slot); delete LIVE.fotos[slot]; setMsg('Foto original restaurada'); tick((n) => n + 1) }
  const box = 'bg-white rounded-2xl p-5 space-y-3 shadow'

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

      <section className={box}>
        <h2 className="font-bold text-xl">WhatsApp y redes</h2>
        <label className="block text-sm font-semibold">WhatsApp 1 (ej: 5491122334455)<input className={inp} inputMode="numeric" value={f.w1} onChange={set('w1')} /></label>
        <label className="block text-sm font-semibold">WhatsApp 2<input className={inp} inputMode="numeric" value={f.w2} onChange={set('w2')} /></label>
        <label className="block text-sm font-semibold">Instagram (link completo, vacío = no se muestra)<input className={inp} value={f.instagram} onChange={set('instagram')} placeholder="https://instagram.com/..." /></label>
        <label className="block text-sm font-semibold">Facebook<input className={inp} value={f.facebook} onChange={set('facebook')} placeholder="https://facebook.com/..." /></label>
        <label className="block text-sm font-semibold">TikTok<input className={inp} value={f.tiktok} onChange={set('tiktok')} placeholder="https://tiktok.com/@..." /></label>
      </section>

      <section className={box}>
        <h2 className="font-bold text-xl">Textos de la web</h2>
        {CAMPOS.map(([k, label, area]) => (
          <label key={k} className="block text-sm font-semibold">{label}
            {area ? <textarea rows="3" className={inp} value={t[k]} onChange={(e) => setT({ ...t, [k]: e.target.value })} /> : <input className={inp} value={t[k]} onChange={(e) => setT({ ...t, [k]: e.target.value })} />}
          </label>
        ))}
        {uses.map((u, n) => (
          <div key={n} className="border-t border-trigo pt-3 space-y-2">
            <p className="text-sm font-semibold">Tarjeta de uso {n + 1}</p>
            <input className={inp} value={u.title} onChange={setUs(n, 'title')} />
            <textarea rows="2" className={inp} value={u.text} onChange={setUs(n, 'text')} />
          </div>
        ))}
      </section>

      <section className={box}>
        <h2 className="font-bold text-xl">Bot de respuestas</h2>
        <label className="block text-sm font-semibold">Mensaje de bienvenida<textarea rows="2" className={inp} value={bienvenida} onChange={(e) => setBienvenida(e.target.value)} /></label>
        {items.map((i, n) => (
          <div key={n} className="border-t border-trigo pt-3 space-y-2">
            <input className={inp} placeholder="Pregunta" value={i.p} onChange={setIt(n, 'p')} />
            <textarea rows="2" className={inp} placeholder="Respuesta" value={i.r} onChange={setIt(n, 'r')} />
            <button onClick={() => setItems(items.filter((_, x) => x !== n))} className="text-sm underline text-acento">Eliminar</button>
          </div>
        ))}
        <button onClick={() => setItems([...items, { p: '', r: '' }])} className="btn btn-outline w-full">+ Agregar pregunta</button>
      </section>

      <button onClick={guardar} className="btn btn-primary w-full">Guardar todo</button>

      <section className={box}>
        <h2 className="font-bold text-xl">Fotos</h2>
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
