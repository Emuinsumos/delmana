import { BRAND_NAME, LIVE, TAGLINE, WHATSAPP_1, waLink } from '../config/site.js'
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from './Icons.jsx'
export default function Footer() {
  const redes = [['Instagram', LIVE.redes.instagram, InstagramIcon], ['Facebook', LIVE.redes.facebook, FacebookIcon], ['TikTok', LIVE.redes.tiktok, TikTokIcon]].filter(([, u]) => u)
  const link = 'inline-flex items-center gap-2 hover:text-crema transition'
  return (
    <footer className="bg-cafe text-crema/80 px-5 py-10 text-center">
      <p className="font-display text-2xl font-bold tracking-wider text-crema">{BRAND_NAME}</p>
      <p className="mt-1">{TAGLINE}</p>
      <nav className="mt-5 flex flex-wrap justify-center gap-6">
        <a href={waLink(WHATSAPP_1)} target="_blank" rel="noreferrer" className={link}><WhatsAppIcon />WhatsApp</a>
        {redes.map(([n, u, Icon]) => <a key={n} href={u} target="_blank" rel="noreferrer" className={link}><Icon />{n}</a>)}
        <a href="#consulta" className={link}>Contacto</a>
        <a href="#producto" className={link}>Producto</a>
      </nav>
      <p className="mt-6 text-sm text-crema/50">© {new Date().getFullYear()} {BRAND_NAME}</p>
    </footer>
  )
}
