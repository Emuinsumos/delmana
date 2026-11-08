import { useEffect, useState } from 'react'
import Home from './pages/Home.jsx'
import Contacto from './pages/Contacto.jsx'
import Admin from './pages/Admin.jsx'
import Manual from './pages/Manual.jsx'
import { cargarLive } from './services/config.js'
export default function App() {
  const [ready, setReady] = useState(false)
  useEffect(() => { cargarLive().finally(() => setReady(true)) }, [])
  if (!ready) return null
  const path = window.location.pathname.replace(/\/+$/, '')
  if (path === '/contacto') return <Contacto />
  if (path === '/admin') return <Admin />
  if (path === '/manual') return <Manual />
  return <Home />
}
