import { GUARANTEES } from '../config/site.js'
export default function Guarantees() {
  return (
    <section className="bg-trigo/40">
      <div className="max-w-6xl mx-auto px-5 py-12 grid md:grid-cols-3 gap-5">
        {GUARANTEES.map((g) => (
          <div key={g.title} className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <span className="text-3xl" aria-hidden="true">{g.icon}</span>
            <div><h3 className="font-display text-lg font-bold">{g.title}</h3><p className="mt-1 text-cafe/80">{g.text}</p></div>
          </div>
        ))}
      </div>
    </section>
  )
}
