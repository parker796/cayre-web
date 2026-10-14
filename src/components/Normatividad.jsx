const NORMS = [
  { code: 'ISO 9001', label: 'Gestión de calidad' },
  { code: 'ISO 14001', label: 'Gestión ambiental' },
  { code: 'ISO 45001', label: 'Seguridad y salud' },
  { code: 'ISO 14644', label: 'Salas limpias' },
  { code: 'NOM-059', label: 'SSA1-2015' },
  { code: 'NOM-241', label: 'SSA1-2015' },
  { code: 'NOM-251', label: 'SSA1-2009' },
  { code: 'FEUM', label: 'Farmacopea de México' },
  { code: 'ASHRAE', label: 'Estándares HVAC' },
  { code: 'SMACNA', label: 'Ductería y lámina' },
]

export default function Normatividad() {
  return (
    <section id="normatividad" className="section norm">
      <div className="container">
        <div className="section__head--center">
          <span className="section__eyebrow">Normatividad</span>
          <h2 className="section__title">Trabajamos bajo las normas que tu operación exige</h2>
          <p className="section__lead">
            El cumplimiento normativo es nuestro mayor compromiso. Diseñamos y validamos cada
            sistema conforme a los estándares nacionales e internacionales que rigen a los sectores
            regulados.
          </p>
        </div>

        <div className="grid norm__grid">
          {NORMS.map((n) => (
            <div className="norm-chip" key={n.code}>
              <strong>{n.code}</strong>
              <span>{n.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
