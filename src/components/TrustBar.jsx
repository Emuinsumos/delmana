import { TRUST } from '../config/site.js'
export default function TrustBar() {
  return (
    <section className="bg-white border-y border-trigo">
      <div className="max-w-6xl mx-auto px-5 py-10 text-center">
        <h2 className="font-display text-xl md:text-2xl font-bold">Solución en rebozado para el sector gastronómico</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3 md:gap-4">
          {TRUST.map((t) => (
            <div key={t.label} className="flex items-center gap-3 rounded-2xl bg-crema border border-trigo px-5 py-3 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <span className="text-2xl" aria-hidden="true">{t.icon}</span>
              <span className="font-semibold">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
