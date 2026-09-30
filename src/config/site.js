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
  PRESENTATION: 'Consultar presentación disponible',
  DESCRIPTION: 'Una opción práctica y versátil para acompañar milanesas, rebozados y muchas otras preparaciones, pensada para cocinas, comercios y emprendimientos.',
  IMAGE: '/img/producto.jpg',
  IMAGE_ALT: 'Bolsa de pan rallado Delmana junto a una milanesa rebozada'
}

export const TEXTS = {
  HERO_TITLE: 'Pan rallado para tus mejores recetas',
  HERO_TEXT: 'Una opción práctica y versátil para acompañar milanesas, rebozados y muchas otras preparaciones.',
  ABOUT_TITLE: 'Conocé Delmana',
  ABOUT_TEXT: 'Delmana ofrece pan rallado pensado para acompañar las necesidades de cocinas, comercios y emprendimientos gastronómicos. Un producto práctico y versátil para preparar diferentes recetas y rebozados.',
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

export const waLink = (number, text = WHATSAPP_MESSAGE) =>
  `https://wa.me/${String(number).replace(/\D/g, '')}?text=${encodeURIComponent(text)}`
