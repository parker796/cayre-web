import { useState } from 'react'
import { CONTACT, whatsappLink } from '../data/site'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // Netlify Forms captura el envío automáticamente al desplegar.
  // Aquí mostramos un mensaje de confirmación en el frontend.
  const handleSubmit = (e) => {
    // Si NO estás en Netlify (ej. local), evitamos recargar y mostramos éxito.
    // En producción, Netlify intercepta el POST por el atributo data-netlify.
    if (import.meta.env.DEV) {
      e.preventDefault()
      setSent(true)
    }
  }

  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className="section__head--center">
          <span className="section__eyebrow">Contacto</span>
          <h2 className="section__title">Cotiza tu proyecto con CAYRE</h2>
          <p className="section__lead">
            Contáctanos y descubre la diferencia. Cuéntanos qué necesitas y un especialista te
            responderá a la brevedad.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact-info">
            <div className="contact-info__item">
              <div className="contact-info__icon">📞</div>
              <div>
                <h4>Teléfono</h4>
                <a href={`tel:+52${CONTACT.phoneRaw}`}>{CONTACT.phone}</a>
              </div>
            </div>
            <div className="contact-info__item">
              <div className="contact-info__icon">✉️</div>
              <div>
                <h4>Correo</h4>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </div>
            <div className="contact-info__item">
              <div className="contact-info__icon">📍</div>
              <div>
                <h4>Dirección</h4>
                <p>{CONTACT.address}</p>
              </div>
            </div>
            <div className="contact-info__item">
              <div className="contact-info__icon">💬</div>
              <div>
                <h4>WhatsApp</h4>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Enviar mensaje directo
                </a>
              </div>
            </div>
          </div>

          <form
            className="form"
            name="contacto"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {sent && (
              <div className="form__success">
                ¡Gracias! Tu mensaje fue registrado. Te contactaremos pronto. (Vista de demo)
              </div>
            )}

            {/* Campos requeridos por Netlify Forms */}
            <input type="hidden" name="form-name" value="contacto" />
            <p hidden>
              <label>
                No llenar: <input name="bot-field" />
              </label>
            </p>

            <div className="form__row">
              <div className="field">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" />
              </div>
              <div className="field">
                <label htmlFor="empresa">Empresa</label>
                <input id="empresa" name="empresa" type="text" placeholder="Nombre de la empresa" />
              </div>
            </div>

            <div className="form__row">
              <div className="field">
                <label htmlFor="email">Correo</label>
                <input id="email" name="email" type="email" required placeholder="correo@empresa.com" />
              </div>
              <div className="field">
                <label htmlFor="telefono">Teléfono</label>
                <input id="telefono" name="telefono" type="tel" placeholder="55 0000 0000" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="servicio">Servicio de interés</label>
              <select id="servicio" name="servicio" defaultValue="">
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option>Proyecto de obra HVAC</option>
                <option>Instalación de equipos</option>
                <option>Mantenimiento integral</option>
                <option>Servicios especializados / áreas limpias</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                placeholder="Describe brevemente tu proyecto o necesidad..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn--primary form__submit">
              Enviar solicitud
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
