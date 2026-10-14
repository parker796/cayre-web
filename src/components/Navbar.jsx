import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#sectores', label: 'Sectores' },
  { href: '#normatividad', label: 'Normatividad' },
  { href: '#proyectos', label: 'Proyectos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#inicio" className="brand" onClick={close}>
          <img src="/favicon.svg" alt="Logo CAYRE" className="brand__logo" />
          <span>
            <span className="brand__name">CAYRE</span>
            <span className="brand__tag">Control Ambiental y Refrigeración</span>
          </span>
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav__link" onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn--primary nav__cta" onClick={close}>
            Cotizar proyecto
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
