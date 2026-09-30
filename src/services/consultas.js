import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from './firebase.js'
const col = () => collection(db, 'delmana_consultas')
export const enviarConsulta = (d) =>
  addDoc(col(), { fecha: serverTimestamp(), nombre: d.nombre, empresa: d.empresa, telefono: d.telefono, email: d.email, mensaje: d.mensaje, leido: false })
export const escucharConsultas = (dir, cb, onErr) =>
  onSnapshot(query(col(), orderBy('fecha', dir)), (s) => cb(s.docs.map((x) => ({ id: x.id, ...x.data() }))), onErr)
export const marcarLeida = (id) => updateDoc(doc(db, 'delmana_consultas', id), { leido: true })
export const eliminarConsulta = (id) => deleteDoc(doc(db, 'delmana_consultas', id))
