import { useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../services/firebase.js'
import { ADMIN_EMAIL } from '../config/site.js'
export default function useAuth() {
  const [user, setUser] = useState(undefined)
  useEffect(() => onAuthStateChanged(auth, (u) => setUser(u && u.email === ADMIN_EMAIL ? u : null)), [])
  const login = (pin) => signInWithEmailAndPassword(auth, ADMIN_EMAIL, pin)
  const logout = () => signOut(auth)
  return { user, login, logout }
}
