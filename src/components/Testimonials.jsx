import { TESTIMONIOS } from '../config/site.js'
export default function Testimonials() {
  const items = TESTIMONIOS.filter((t) => t.texto && t.texto.trim())
  if (!items.length) return null
  return (
    <section className="section">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center">Lo que dicen nuestros clientes</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <figure key={i} className="bg-white rounded-2xl p-6 shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <blockquote className="text-cafe/90">“{t.texto}”</blockquote>
            <figcaption className="mt-4 text-sm"><strong>{t.negocio}</strong><br />{[t.rubro, t.localidad].filter(Boolean).join(' · ')}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
