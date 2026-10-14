const VALUES = [
  {
    icon: '🎯',
    title: 'Calidad e innovación',
    text: 'Soluciones HVAC eficientes, seguras y alineadas con las necesidades actuales del mercado.',
  },
  {
    icon: '🏭',
    title: 'Diversos sectores',
    text: 'Servicios especializados para los sectores industrial y comercial, adaptados a cada cliente.',
  },
  {
    icon: '🤝',
    title: 'Satisfacción del cliente',
    text: 'Servicio personalizado, atención oportuna y asesoría técnica en cada etapa del proyecto.',
  },
  {
    icon: '📈',
    title: 'Mejora continua',
    text: 'Relaciones comerciales duraderas basadas en confianza, transparencia y excelencia.',
  },
]

export default function About() {
  return (
    <section id="nosotros" className="section">
      <div className="container about__grid">
        <div>
          <span className="section__eyebrow">Sobre nosotros</span>
          <h2 className="section__title">Expertos en climatización de confort y de procesos</h2>
          <p className="section__lead" style={{ marginBottom: 24 }}>
            Somos una empresa cuya razón de ser es cubrir las necesidades de climatización de
            confort y de procesos, haciendo uso de herramientas y tecnologías de última generación
            para cada uno de nuestros clientes. Nuestra preparación, conocimiento del mercado y
            experiencia nos avalan.
          </p>
          <p className="section__lead">
            <strong style={{ color: 'var(--navy)' }}>Nuestra visión:</strong> posicionarnos como
            una empresa líder en el mercado mexicano de soluciones HVAC, impulsando la
            sostenibilidad y la eficiencia energética en todo lo que ofrecemos.
          </p>
        </div>

        <div className="about__values">
          {VALUES.map((v) => (
            <div className="value-card" key={v.title}>
              <div className="value-card__icon">{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
