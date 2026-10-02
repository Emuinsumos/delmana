import { useEffect, useState } from 'react'
import { EmailAuthProvider, onAuthStateChanged, reauthenticateWithCredential, signInWithEmailAndPassword, signOut, updatePassword } from 'firebase/auth'
import { auth } from '../services/firebase.js'
import { ADMIN_EMAIL } from '../config/site.js'
export default function useAuth() {
  const [user, setUser] = useState(undefined)
  useEffect(() => onAuthStateChanged(auth, (u) => setUser(u && u.email === ADMIN_EMAIL ? u : null)), [])
  const login = (pin) => signInWithEmailAndPassword(auth, ADMIN_EMAIL, pin)
  const logout = () => signOut(auth)
  const cambiarPin = async (actual, nuevo) => {
    const u = auth.currentUser
    await reauthenticateWithCredential(u, EmailAuthProvider.credential(u.email, actual))
    await updatePassword(u, nuevo)
  }
  return { user, login, logout, cambiarPin }
}
