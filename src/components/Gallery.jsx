import { useEffect, useState } from 'react'
import { GALLERY } from '../config/site.js'
import { cargarGaleria } from '../services/config.js'
import Img from './Img.jsx'
export default function Gallery() {
  const [fotos, setFotos] = useState(null)
  useEffect(() => { cargarGaleria().then(setFotos).catch(() => setFotos([])) }, [])
  const items = fotos && fotos.length ? fotos.map((f, i) => ({ src: f.data, alt: `Foto ${i + 1} de la galería Delmana` })) : GALLERY
  return (
    <section id="galeria" className="bg-trigo/40">
      <div className="section">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center">Galería</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {fotos === null
            ? [0, 1, 2, 3, 4, 5].map((n) => <div key={n} className="w-full aspect-square rounded-2xl bg-trigo/60 animate-pulse" />)
            : items.map((g, i) => <Img key={i} src={g.src} alt={g.alt} className="w-full aspect-square rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300" />)}
        </div>
      </div>
    </section>
  )
}
