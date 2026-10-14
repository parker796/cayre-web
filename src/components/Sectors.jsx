const SECTORS = [
  { icon: '💊', name: 'Farmacéutico', desc: 'Áreas limpias y procesos controlados bajo NOM y FEUM.' },
  { icon: '🏥', name: 'Hospitalario', desc: 'Climatización crítica para salud y laboratorios.' },
  { icon: '🔬', name: 'Laboratorios', desc: 'Calificación de áreas ISO clase 5 a 9.' },
  { icon: '🏬', name: 'Plazas comerciales', desc: 'Confort y eficiencia energética para retail.' },
  { icon: '🏢', name: 'Edificios y oficinas', desc: 'Sistemas de confort para espacios corporativos.' },
  { icon: '🏭', name: 'Industria', desc: 'Climatización de procesos y naves industriales.' },
]

export default function Sectors() {
  return (
    <section id="sectores" className="section">
      <div className="container">
        <div className="section__head--center">
          <span className="section__eyebrow">Sectores que atendemos</span>
          <h2 className="section__title">Experiencia en entornos exigentes</h2>
          <p className="section__lead">
            Adaptamos cada solución a las características y requerimientos específicos de tu
            industria, garantizando un alto nivel de desempeño y confiabilidad.
          </p>
        </div>

        <div className="grid sectors__grid">
          {SECTORS.map((s) => (
            <div className="sector-card" key={s.name}>
              <div className="sector-card__icon">{s.icon}</div>
              <h4>{s.name}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
