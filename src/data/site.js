// Datos de contacto y contenido reutilizables de CAYRE
export const CONTACT = {
  phone: '55 11 26 45 83',
  phoneRaw: '5511264583',
  whatsapp: '525511264583', // formato internacional para wa.me
  email: 'ventas.cayre@gmail.com',
  address: 'Corregidora 52A, Ampliación Miguel Hidalgo, Tlalpan, CDMX, C.P. 14250',
}

export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hola CAYRE, me gustaría recibir información sobre sus servicios HVAC.'
)

export const whatsappLink = `https://wa.me/${CONTACT.whatsapp}?text=${WHATSAPP_MESSAGE}`
