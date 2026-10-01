import { BRAND_NAME, LIVE, TAGLINE, WHATSAPP_1, waLink } from '../config/site.js'
export default function Footer() {
  const redes = [['Instagram', LIVE.redes.instagram], ['Facebook', LIVE.redes.facebook], ['TikTok', LIVE.redes.tiktok]].filter(([, u]) => u)
  return (
    <footer className="bg-cafe text-crema/80 px-5 py-10 text-center">
      <p className="font-display text-2xl font-bold tracking-wider text-crema">{BRAND_NAME}</p>
      <p className="mt-1">{TAGLINE}</p>
      <nav className="mt-5 flex flex-wrap justify-center gap-6">
        <a href={waLink(WHATSAPP_1)} target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="#consulta">Contacto</a>
        <a href="#producto">Producto</a>
        {redes.map(([n, u]) => <a key={n} href={u} target="_blank" rel="noreferrer">{n}</a>)}
      </nav>
      <p className="mt-6 text-sm text-crema/50">© {new Date().getFullYear()} {BRAND_NAME}</p>
    </footer>
  )
}
