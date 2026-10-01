import { useState } from 'react'
import { LIVE } from '../config/site.js'
export const slotDe = (src) => src.split('/').pop().replace(/\.\w+$/, '')
export default function Img({ src, alt, className = '', eager = false }) {
  const [fail, setFail] = useState(false)
  const real = LIVE.fotos[slotDe(src)] || src
  if (fail) return <div role="img" aria-label={alt} className={`bg-trigo/60 flex items-center justify-center text-cafe/50 text-sm ${className}`}>Foto pendiente</div>
  return <img src={real} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setFail(true)} className={`object-cover ${className}`} />
}
