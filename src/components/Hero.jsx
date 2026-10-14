import { whatsappLink } from '../data/site'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__blur hero__blur--1"></div>
      <div className="hero__blur hero__blur--2"></div>
      <div className="container hero__inner">
        <span className="hero__badge">❄ Soluciones HVAC con cumplimiento normativo</span>
        <h1 className="hero__title">
          Climatización y control ambiental para <span>industria y comercio</span>
        </h1>
        <p className="hero__text">
          En CAYRE diseñamos, instalamos y damos mantenimiento a sistemas HVAC de confort y de
          procesos, con tecnología de última generación y apego a las normas que exigen los
          sectores farmacéutico, hospitalario e industrial.
        </p>
        <div className="hero__actions">
          <a href="#contacto" className="btn btn--primary">
            Solicitar cotización
          </a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn--light">
            Escríbenos por WhatsApp
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <strong>+15</strong>
            <span>Servicios especializados</span>
          </div>
          <div className="hero__stat">
            <strong>ISO</strong>
            <span>9001 · 14001 · 45001</span>
          </div>
          <div className="hero__stat">
            <strong>CDMX</strong>
            <span>y zona metropolitana</span>
          </div>
        </div>
      </div>
    </section>
  )
}
