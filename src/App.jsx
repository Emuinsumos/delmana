import Home from './pages/Home.jsx'
import Contacto from './pages/Contacto.jsx'
export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '')
  return path === '/contacto' ? <Contacto /> : <Home />
}
