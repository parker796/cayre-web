const PROJECTS = [
  {
    tag: 'Farmacéutico',
    title: 'Sala limpia clase 7',
    desc: 'Instalación y calificación de área controlada para laboratorio.',
    gradient: 'linear-gradient(135deg, #0a3d62, #1e90c6)',
  },
  {
    tag: 'Comercial',
    title: 'Climatización de plaza',
    desc: 'Sistema VRF para locales y áreas comunes de centro comercial.',
    gradient: 'linear-gradient(135deg, #1e90c6, #48dbfb)',
  },
  {
    tag: 'Industrial',
    title: 'Chiller enfriado por agua',
    desc: 'Puesta en marcha y balanceo de sistema para proceso industrial.',
    gradient: 'linear-gradient(135deg, #072a44, #0a3d62)',
  },
  {
    tag: 'Corporativo',
    title: 'Oficinas - confort',
    desc: 'Minisplit y multisplit con mantenimiento preventivo integral.',
    gradient: 'linear-gradient(135deg, #0a3d62, #2c5f78)',
  },
  {
    tag: 'Hospitalario',
    title: 'Manejadoras de aire (AHU)',
    desc: 'Ventilación y extracción para áreas críticas de salud.',
    gradient: 'linear-gradient(135deg, #1e6091, #48dbfb)',
  },
  {
    tag: 'Automatización',
    title: 'Control eléctrico y mecánico',
    desc: 'Automatización y monitoreo de sistemas HVAC.',
    gradient: 'linear-gradient(135deg, #072a44, #1e90c6)',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="section section--alt">
      <div className="container">
        <div className="section__head--center">
          <span className="section__eyebrow">Proyectos</span>
          <h2 className="section__title">Nuestra presencia en el mercado</h2>
          <p className="section__lead">
            Una muestra del tipo de proyectos que ejecutamos. Las imágenes de referencia pueden
            reemplazarse por fotografías reales de tus instalaciones.
          </p>
        </div>

        <div className="grid projects__grid">
          {PROJECTS.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-card__bg" style={{ background: p.gradient }}></div>
              <div className="project-card__overlay"></div>
              <div className="project-card__body">
                <span className="project-card__tag">{p.tag}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="projects__note">
          * Galería de demostración. Sustituir por fotografías reales de obra (sin revelar datos
          sensibles del cliente).
        </p>
      </div>
    </section>
  )
}
