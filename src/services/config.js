import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore'
import { db } from './firebase.js'
import { LIVE, PRODUCT, TEXTS, USES } from '../config/site.js'

export async function cargarLive() {
  try {
    const [c, f] = await Promise.all([getDoc(doc(db, 'delmana_config', 'site')), getDocs(collection(db, 'delmana_fotos'))])
    if (c.exists()) {
      const d = c.data()
      if (d.w1) LIVE.w1 = d.w1
      if (d.w2) LIVE.w2 = d.w2
      LIVE.redes = { instagram: d.instagram || '', facebook: d.facebook || '', tiktok: d.tiktok || '' }
      if (d.textos) {
        const t = d.textos
        Object.keys(TEXTS).forEach((k) => { if (t[k]) TEXTS[k] = t[k] })
        ;['PRODUCT_NAME', 'SUMMARY'].forEach((k) => { if (t[k]) PRODUCT[k] = t[k] })
        ;(t.uses || []).forEach((u, i) => { if (USES[i]) { if (u.title) USES[i].title = u.title; if (u.text) USES[i].text = u.text } })
      }
      if (d.bot) {
        if (d.bot.bienvenida) LIVE.bot.bienvenida = d.bot.bienvenida
        if (Array.isArray(d.bot.items)) LIVE.bot.items = d.bot.items
      }
    }
    f.forEach((x) => { LIVE.fotos[x.id] = x.data().data })
  } catch (e) { console.warn('Config no cargada, uso valores por defecto', e) }
}
export const guardarConfig = (d) => setDoc(doc(db, 'delmana_config', 'site'), d, { merge: true })
export const guardarFoto = (slot, data) => setDoc(doc(db, 'delmana_fotos', slot), { data })
export const borrarFoto = (slot) => deleteDoc(doc(db, 'delmana_fotos', slot))

export function comprimir(file, max = 1100, q0 = 0.8) {
  return new Promise((ok, fail) => {
    const img = new Image()
    img.onload = () => {
      const k = Math.min(1, max / Math.max(img.width, img.height))
      const c = document.createElement('canvas')
      c.width = Math.round(img.width * k); c.height = Math.round(img.height * k)
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height)
      let q = q0, out = c.toDataURL('image/webp', q)
      while (out.length > 900000 && q > 0.3) { q -= 0.1; out = c.toDataURL('image/webp', q) }
      out.length > 900000 ? fail(new Error('grande')) : ok(out)
    }
    img.onerror = fail
    img.src = URL.createObjectURL(file)
  })
}

// ---- Galería (fotos dinámicas, se cargan aparte para no frenar la web)
export async function cargarGaleria() {
  const sn = await getDocs(collection(db, 'delmana_galeria'))
  return sn.docs.map((x) => ({ id: x.id, ...x.data() })).sort((a, b) => a.orden - b.orden)
}
export const agregarFoto = (data, orden = Date.now()) => addDoc(collection(db, 'delmana_galeria'), { data, orden })
export const borrarGaleria = (id) => deleteDoc(doc(db, 'delmana_galeria', id))
export const ordenarGaleria = (a, b) => Promise.all([
  updateDoc(doc(db, 'delmana_galeria', a.id), { orden: b.orden }),
  updateDoc(doc(db, 'delmana_galeria', b.id), { orden: a.orden })
])
