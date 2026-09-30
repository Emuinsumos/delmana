# DELMANA
1. `npm install` y `npm run dev`
2. Copiá `.env.example` a `.env` y completá con los datos de Firebase (o cargalos en Vercel > Settings > Environment Variables).
3. Editá `src/config/site.js` (números WhatsApp, ADMIN_EMAIL, textos, producto).
4. Firebase: creá proyecto > Firestore (modo producción) > Authentication > Email/Password habilitado.
5. Authentication > Users > Agregar usuario: email = ADMIN_EMAIL, contraseña = tu PIN (mínimo 6 caracteres).
6. Firestore > Reglas: pegá `firestore.rules` (con tu mismo email de admin) y publicá.
7. Auth > Settings > Authorized domains: agregá tu dominio de Vercel.
8. Vercel: importá el repo de GitHub, framework Vite, cargá las variables VITE_FIREBASE_*.
9. Fotos: reemplazá archivos en `public/img/` (milanesas, pollo, verduras, gastronomia, pan-rallado .jpg).
