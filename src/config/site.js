// ====== CONFIGURACIÓN CENTRAL: editá acá ======
export const BRAND_NAME = 'DELMANA'
export const TAGLINE = 'Pan rallado para tus mejores recetas.'

// Formato internacional SIN + ni espacios (Argentina celular: 549 + área + número)
export const WHATSAPP_1 = '5491100000001'
export const WHATSAPP_2 = '5491100000002'
export const WHATSAPP_MESSAGE = 'Hola Delmana, quisiera consultar por el pan rallado y realizar un pedido.'

// Email del usuario administrador creado en Firebase Auth (el PIN es su contraseña). No es un secreto.
export const ADMIN_EMAIL = 'matiasgarbarino19@gmail.com'

export const PRODUCT = {
  PRODUCT_NAME: 'Pan rallado Delmana',
  BRAND_NAME,
  SUMMARY: 'Pan rallado de uso profesional para cocinas, rotiserías y fábricas.',
  IMAGE: '/img/producto.jpg',
  IMAGE_ALT: 'Bolsa de pan rallado Delmana junto a una milanesa rebozada'
}

export const TEXTS = {
  HERO_TITLE: 'Pan rallado para tus mejores recetas',
  HERO_COPY: 'Pan rallado de alta calidad para gastronomía y comercios. Presentaciones de 20 Kg y 25 Kg con rendimiento superior.',
  ABOUT_TITLE: 'Conocé Delmana',
  ABOUT_COPY: 'Un pan rallado de horneado parejo y textura uniforme, elaborado sin conservantes innecesarios, para que cada empanado salga igual de bien en cocinas, comercios y fábricas.',
  CTA_TITLE: '¿Buscás pan rallado para tu comercio o emprendimiento?',
  CTA_TEXT: 'Consultanos por disponibilidad, presentaciones y precios.'
}

export const USES = [
  { title: 'Milanesas', text: 'El clásico infaltable para preparar milanesas.', image: '/img/milanesas.jpg', alt: 'Milanesas rebozadas' },
  { title: 'Pollo rebozado', text: 'Ideal para diferentes preparaciones con pollo.', image: '/img/pollo.jpg', alt: 'Pollo rebozado' },
  { title: 'Verduras', text: 'Una alternativa para incorporar rebozados a distintas recetas.', image: '/img/verduras.jpg', alt: 'Verduras rebozadas' },
  { title: 'Preparaciones gastronómicas', text: 'Una opción práctica para cocinas y emprendimientos gastronómicos.', image: '/img/gastronomia.jpg', alt: 'Preparaciones gastronómicas' }
]

// Para cambiar una foto: reemplazá el archivo en /public/img o cambiá la URL.
export const GALLERY = [
  { src: '/img/producto.jpg', alt: 'Producto Delmana' },
  { src: '/img/pan-rallado.jpg', alt: 'Pan rallado en un bowl' },
  { src: '/img/milanesas.jpg', alt: 'Milanesas' },
  { src: '/img/pollo.jpg', alt: 'Pollo rebozado' },
  { src: '/img/verduras.jpg', alt: 'Verduras rebozadas' },
  { src: '/img/gastronomia.jpg', alt: 'Preparación gastronómica' }
]

// Valores editables desde /admin (se pisan al cargar Firestore). Los componentes siguen usando WHATSAPP_1/2.
export const LIVE = { w1: WHATSAPP_1, w2: WHATSAPP_2, redes: {}, fotos: {} }

export const waLink = (number, text = WHATSAPP_MESSAGE) => {
  const n = number === WHATSAPP_1 ? LIVE.w1 : number === WHATSAPP_2 ? LIVE.w2 : number
  return `https://wa.me/${String(n).replace(/\D/g, '')}?text=${encodeURIComponent(text)}`
}

LIVE.bot = {
  bienvenida: '¡Hola! Soy el asistente de Delmana. ¿En qué te puedo ayudar?',
  items: [
    { p: '¿Cómo hago un pedido?', r: 'Escribinos por WhatsApp y te ayudamos con tu pedido.' },
    { p: '¿Qué presentaciones hay?', r: 'Consultanos por WhatsApp por las presentaciones disponibles.' },
    { p: '¿Tienen precios para comercios?', r: 'Consultanos por disponibilidad, presentaciones y precios.' }
  ]
}

// ====== Landing B2B: editá acá ======
export const SPECS = [
  { k: 'Granulometría', v: 'Media / Pareja' },
  { k: 'Rendimiento', v: 'Alto empanado sin desprenderse' },
  { k: 'Absorción de aceite', v: 'Reducida (dorado parejo)' },
  { k: 'Presentaciones', v: 'Bolsas reforzadas de 20 Kg y 25 Kg' }
]
export const TRUST = [
  { icon: '🏭', label: 'Fábricas de Milanesas' },
  { icon: '🥩', label: 'Carnicerías' },
  { icon: '🍗', label: 'Rotiserías y Catering' },
  { icon: '🍽️', label: 'Restaurantes' }
]
export const GUARANTEES = [
  { icon: '🛡️', title: 'Calidad Constante', text: 'Mismo granulado en cada bolsa.' },
  { icon: '🚚', title: 'Envíos Mayoristas', text: 'Entregas coordinadas a comercios.' },
  { icon: '📦', title: 'Empaque Reforzado', text: 'Bolsas diseñadas para uso profesional.' }
]
// Completá "texto" para que cada testimonio aparezca. Si todos están vacíos, la sección no se muestra.
export const TESTIMONIOS = [
  { texto: '', negocio: '', rubro: '', localidad: '' },
  { texto: '', negocio: '', rubro: '', localidad: '' },
  { texto: '', negocio: '', rubro: '', localidad: '' }
]
