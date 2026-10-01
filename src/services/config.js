import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { db } from './firebase.js'
import { LIVE } from '../config/site.js'

export async function cargarLive() {
  try {
    const [c, f] = await Promise.all([getDoc(doc(db, 'delmana_config', 'site')), getDocs(collection(db, 'delmana_fotos'))])
    if (c.exists()) {
      const d = c.data()
      if (d.w1) LIVE.w1 = d.w1
      if (d.w2) LIVE.w2 = d.w2
      LIVE.redes = { instagram: d.instagram || '', facebook: d.facebook || '', tiktok: d.tiktok || '' }
    }
    f.forEach((x) => { LIVE.fotos[x.id] = x.data().data })
  } catch (e) { console.warn('Config no cargada, uso valores por defecto', e) }
}
export const guardarConfig = (d) => setDoc(doc(db, 'delmana_config', 'site'), d, { merge: true })
export const guardarFoto = (slot, data) => setDoc(doc(db, 'delmana_fotos', slot), { data })
export const borrarFoto = (slot) => deleteDoc(doc(db, 'delmana_fotos', slot))

// Achica la foto en el celu antes de guardarla (máx 1100px, webp)
export function comprimir(file) {
  return new Promise((ok, fail) => {
    const img = new Image()
    img.onload = () => {
      const k = Math.min(1, 1100 / Math.max(img.width, img.height))
      const c = document.createElement('canvas')
      c.width = Math.round(img.width * k); c.height = Math.round(img.height * k)
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height)
      let q = 0.8, out = c.toDataURL('image/webp', q)
      while (out.length > 900000 && q > 0.3) { q -= 0.1; out = c.toDataURL('image/webp', q) }
      out.length > 900000 ? fail(new Error('grande')) : ok(out)
    }
    img.onerror = fail
    img.src = URL.createObjectURL(file)
  })
}
