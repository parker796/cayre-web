const SERVICES = [
  {
    icon: '🏗️',
    title: 'Proyectos de obra HVAC',
    items: [
      'Ingeniería y diseño de sistemas HVAC',
      'Cálculo de cargas térmicas',
      'Supervisión y ejecución de obra',
      'Puesta en marcha y pruebas de funcionamiento',
    ],
  },
  {
    icon: '🔧',
    title: 'Instalación de equipos',
    items: [
      'Aire acondicionado minisplit y multisplit',
      'Sistemas VRF / VRV y chillers (aire y agua)',
      'Unidades paquete y manejadoras de aire (AHU)',
      'Sistemas de ventilación y extracción',
    ],
  },
  {
    icon: '🛠️',
    title: 'Mantenimiento integral',
    items: [
      'Mantenimiento preventivo, correctivo y predictivo',
      'Limpieza y desinfección de equipos',
      'Diagnóstico y reparación de fallas',
      'Suministro de materiales y refacciones',
    ],
  },
  {
    icon: '⚙️',
    title: 'Servicios especializados',
    items: [
      'Balanceo de sistemas HVAC',
      'Calificación de campanas y áreas ISO (clase 5-9)',
      'Sistemas de control eléctrico y mecánico',
      'Automatización',
    ],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="section section--alt">
      <div className="container">
        <div className="section__head--center">
          <span className="section__eyebrow">Servicios</span>
          <h2 className="section__title">Soluciones HVAC de principio a fin</h2>
          <p className="section__lead">
            Desde la ingeniería del proyecto hasta la operación y el mantenimiento, cubrimos todo el
            ciclo de vida de tus sistemas de climatización.
          </p>
        </div>

        <div className="grid services__grid">
          {SERVICES.map((s) => (
            <article className="service-card" key={s.title}>
              <div className="service-card__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
