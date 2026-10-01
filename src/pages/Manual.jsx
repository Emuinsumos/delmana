import useAuth from '../hooks/useAuth.js'
import Login from '../components/Login.jsx'

const BENEFICIOS = [
  ['Tu marca, bien presentada', 'Diseño propio con los colores de Delmana, fotos grandes y el producto como protagonista.'],
  ['Pedidos por WhatsApp', 'Dos líneas, Asesor de ventas y Consultas, con mensaje listo para que el cliente escriba en un toque.'],
  ['Consultas ordenadas', 'El formulario guarda cada consulta en un panel privado, con estado nuevo o leído.'],
  ['Asistente automático', 'Un botón flotante responde las preguntas frecuentes por vos y deriva a una persona cuando hace falta.'],
  ['La manejás vos', 'Cambiás fotos, galería, textos, WhatsApp y redes sociales desde tu celular, sin programar.'],
  ['Pensada para el celular', 'Se ve y funciona bien en Android, iPhone y computadora, que es desde donde te van a encontrar.']
]
const Code = ({ children }) => <code className="bg-trigo px-2 py-0.5 rounded break-all text-sm">{children}</code>
const pasos = (host) => [
  ['Entrá al panel', <>Abrí <Code>{host}/admin</Code> en tu navegador e ingresá tu clave de acceso. Te la entregamos en forma personal: guardala y no la compartas.</>],
  ['Cargá tus WhatsApp y redes', <>En <b>WhatsApp y redes</b> escribí cada número con código de país, por ejemplo <Code>5491122334455</Code>. Si todavía no tenés Instagram, Facebook o TikTok, dejá el campo vacío: no se muestra. Cuando los tengas, pegá el link completo.</>],
  ['Cambiá los textos', <>En <b>Textos de la web</b> editás los títulos y descripciones principales.</>],
  ['Configurá el asistente', <>En <b>Bot de respuestas</b> escribí el mensaje de bienvenida y tus preguntas frecuentes con su respuesta. Con <b>+ Agregar pregunta</b> sumás más y con <b>Eliminar</b> sacás las que no quieras.</>],
  ['Tocá “Guardar todo”', <>Guarda WhatsApp, redes, textos y asistente. Después recargá la web para ver los cambios.</>],
  ['Subí tus fotos', <>En <b>Fotos principales</b> tocá <b>Cambiar</b> en la que quieras reemplazar y elegí una de tu galería. Se achica sola y se guarda al instante. Con <b>Restaurar original</b> volvés a la anterior.</>],
  ['Armá tu galería', <>En <b>Galería</b> tocá <b>+ Agregar fotos</b> y elegí todas las que quieras. Con las flechas ← → cambiás el orden y con <b>Eliminar</b> sacás una foto.</>],
  ['Mirá tus consultas', <>En <Code>{host}/contacto</Code> con la misma clave ves los mensajes que llegan. Podés marcarlos como leídos, ver el texto completo, abrir WhatsApp con ese cliente o eliminarlos.</>]
]
const card = 'bg-white border border-trigo rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'

export default function Manual() {
  const { user, login } = useAuth()
  if (user === undefined) return <p className="p-10 text-center">Cargando…</p>
  if (!user) return <Login onLogin={login} />
  const host = window.location.host
  return (
    <div>
      <div className="bg-acento text-white text-center py-2.5 font-bold tracking-[0.3em] text-sm">DELMANA</div>
      <header className="bg-gradient-to-b from-crema to-trigo/50 text-center px-5 py-16 md:py-20">
        <p className="font-display text-acento font-bold tracking-[0.35em] mb-4">DELMANA · PAN RALLADO</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">Bienvenido a tu propia página web</h1>
        <p className="mt-5 text-lg text-cafe/80 max-w-xl mx-auto">Una vitrina profesional para mostrar tu producto, recibir consultas de comercios y concretar pedidos por WhatsApp. Y la manejás vos.</p>
        <a href="#instructivo" className="btn btn-primary mt-8">Ver cómo usarla</a>
      </header>

      <section className="max-w-4xl mx-auto px-5 py-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center">Lo que ganás con tu web</h2>
        <p className="mt-3 text-center text-cafe/80 max-w-xl mx-auto">Pensada para vender a rotiserías, carnicerías, fábricas de milanesas y restaurantes.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFICIOS.map(([t, d], i) => (
            <article key={t} className={card}>
              <div className="w-11 h-11 rounded-xl bg-acento text-white flex items-center justify-center font-display font-bold mb-4">{i + 1}</div>
              <h3 className="font-display text-xl font-bold mb-1">{t}</h3>
              <p className="text-cafe/80">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="instructivo" className="bg-white border-y border-trigo">
        <div className="max-w-4xl mx-auto px-5 py-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center">Instructivo rápido</h2>
          <p className="mt-3 text-center text-cafe/80">Todo se maneja desde un panel privado. No hace falta saber de tecnología.</p>
          <ol className="mt-10 grid gap-4">
            {pasos(host).map(([t, d], i) => (
              <li key={t} className="flex gap-4 bg-crema border border-trigo rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="shrink-0 w-11 h-11 rounded-full bg-cafe text-crema flex items-center justify-center font-display font-bold text-lg">{i + 1}</div>
                <div><h3 className="font-display text-xl font-bold mb-1">{t}</h3><p className="text-cafe/85">{d}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="bg-cafe text-crema px-5 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-center">Condiciones del servicio</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-crema/20 bg-crema/10 p-5"><small className="block uppercase tracking-widest text-xs opacity-65 mb-1">Inicio de la demo</small><b className="text-lg">3 de octubre</b></div>
            <div className="rounded-2xl border border-crema/20 bg-crema/10 p-5"><small className="block uppercase tracking-widest text-xs opacity-65 mb-1">Fin de la demo</small><b className="text-lg">3 de noviembre</b></div>
            <div className="rounded-2xl border border-crema/20 bg-crema/10 p-5"><small className="block uppercase tracking-widest text-xs opacity-65 mb-1">Luego de la demo</small><b className="text-lg">$25.000</b><p className="text-sm opacity-70">(sujeto a cambios)</p></div>
            <div className="rounded-2xl border border-crema/20 bg-crema/10 p-5"><small className="block uppercase tracking-widest text-xs opacity-65 mb-1">Transferencia a</small><b className="text-lg break-all">mati.seba.garba</b><p className="text-sm opacity-85">MATIAS SEBASTIAN GARBARINO<br />Cta. Supervielle</p></div>
          </div>
          <p className="mt-8 text-center text-sm opacity-60">DELMANA · Pan rallado para tus mejores recetas.</p>
        </div>
      </footer>
    </div>
  )
}
