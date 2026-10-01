import { PRODUCT, SPECS } from '../config/site.js'
import Img from './Img.jsx'
export default function Product() {
  return (
    <section id="producto" className="bg-white">
      <div className="section grid md:grid-cols-2 gap-10 items-center">
        <Img src={PRODUCT.IMAGE} alt={PRODUCT.IMAGE_ALT} className="w-full aspect-square rounded-3xl shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300" />
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">{PRODUCT.PRODUCT_NAME}</h2>
          <p className="mt-4 text-cafe/80">{PRODUCT.SUMMARY}</p>
          <dl className="mt-6 grid sm:grid-cols-2 gap-3">
            {SPECS.map((s) => (
              <div key={s.k} className="rounded-2xl border border-trigo bg-crema p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <dt className="text-sm font-semibold text-acento">{s.k}</dt>
                <dd className="mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
          <a href="#consulta" className="btn btn-primary mt-8 w-full sm:w-auto">Consultar disponibilidad</a>
        </div>
      </div>
    </section>
  )
}
