import { CONTACT } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="brand">
              <img src="/favicon.svg" alt="Logo CAYRE" className="brand__logo" />
              <span>
                <span className="brand__name">CAYRE</span>
                <span className="brand__tag">Control Ambiental y Refrigeración</span>
              </span>
            </div>
            <p className="footer__about">
              CAYRE S.A. de C.V. Soluciones HVAC para industria, comercio y áreas controladas, con
              tecnología de última generación y cumplimiento normativo.
            </p>
          </div>

          <div>
            <h5>Navegación</h5>
            <ul>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#sectores">Sectores</a></li>
              <li><a href="#normatividad">Normatividad</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
            </ul>
          </div>

          <div>
            <h5>Contacto</h5>
            <ul>
              <li><a href={`tel:+52${CONTACT.phoneRaw}`}>{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li>{CONTACT.address}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          © {year} CAYRE S.A. de C.V. — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
