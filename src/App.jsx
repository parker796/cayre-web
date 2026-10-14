import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Sectors from './components/Sectors'
import Normatividad from './components/Normatividad'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './styles/components.css'

export default function App() {
  return (
    <>
      <Helmet>
        <html lang="es-MX" />
        <title>CAYRE | Control Ambiental y Refrigeración - Soluciones HVAC en CDMX</title>
        <meta
          name="description"
          content="CAYRE S.A. de C.V. Soluciones HVAC para industria, comercio y áreas controladas en CDMX: instalación, mantenimiento y proyectos con cumplimiento normativo ISO, NOM, ASHRAE y SMACNA."
        />
        <meta
          name="keywords"
          content="HVAC, aire acondicionado industrial, mantenimiento HVAC CDMX, chillers, VRF, salas limpias, climatización farmacéutica, CAYRE"
        />
        <link rel="canonical" href="https://cayre.com.mx/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:title" content="CAYRE | Soluciones HVAC con cumplimiento normativo" />
        <meta
          property="og:description"
          content="Diseño, instalación y mantenimiento de sistemas HVAC para industria, comercio y áreas controladas. CDMX y zona metropolitana."
        />
        <meta property="og:site_name" content="CAYRE" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CAYRE | Soluciones HVAC" />
        <meta
          name="twitter:description"
          content="Climatización de confort y de procesos con tecnología de última generación y cumplimiento normativo."
        />

        {/* Datos estructurados para SEO local */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HVACBusiness',
            name: 'CAYRE S.A. de C.V.',
            description:
              'Soluciones HVAC para industria, comercio y áreas controladas: instalación, mantenimiento y proyectos.',
            telephone: '+525511264583',
            email: 'ventas.cayre@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Corregidora 52A, Ampliación Miguel Hidalgo',
              addressLocality: 'Tlalpan',
              addressRegion: 'CDMX',
              postalCode: '14250',
              addressCountry: 'MX',
            },
            areaServed: 'Ciudad de México y zona metropolitana',
          })}
        </script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Sectors />
        <Normatividad />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
