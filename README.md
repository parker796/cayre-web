# CAYRE — Sitio web corporativo (demo)

Sitio web de **CAYRE S.A. de C.V.** (Control Ambiental y Refrigeración), empresa de soluciones
HVAC para industria, comercio y áreas controladas.

Construido con **Vite + React** (JavaScript). Pensado para desplegarse en **Netlify** con
despliegue automático desde GitHub.

## Secciones

- **Inicio (Hero):** mensaje principal + llamados a la acción (cotizar / WhatsApp)
- **Nosotros:** quiénes son, visión y valores
- **Servicios:** obra HVAC, instalación, mantenimiento y servicios especializados
- **Sectores:** farmacéutico, hospitalario, laboratorios, comercial, industria
- **Normatividad:** ISO, NOM, FEUM, ASHRAE, SMACNA
- **Proyectos:** galería de demostración (reemplazar por fotos reales)
- **Contacto:** formulario (Netlify Forms) + datos + WhatsApp
- Botón flotante de **WhatsApp**

## Requisitos

- Node.js 18 o superior

## Uso local

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # genera la versión de producción en /dist
npm run preview  # previsualiza el build de producción
```

## Despliegue en Netlify

1. Sube este proyecto a un repositorio de **GitHub**.
2. En Netlify: **Add new project → Import from GitHub** y selecciona el repo.
3. Netlify detecta la configuración desde `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Clic en **Deploy**. Cada `git push` vuelve a desplegar automáticamente.

### Formulario de contacto

El formulario usa **Netlify Forms** (atributo `data-netlify="true"`). Una vez desplegado en
Netlify, los envíos aparecen en el panel: **Forms → contacto**. No requiere backend.

En desarrollo local el formulario solo muestra un mensaje de confirmación de demo.

## Personalización

- **Datos de contacto:** `src/data/site.js` (teléfono, WhatsApp, correo, dirección).
- **Colores / tema:** variables CSS en `src/styles/global.css` (`:root`).
- **Logo:** reemplazar `public/favicon.svg` por el logo real (SVG o PNG) y actualizar las
  referencias en `Navbar.jsx` y `Footer.jsx`.
- **Fotos de proyectos:** editar `src/components/Projects.jsx` para usar imágenes reales.

## Datos de la empresa

- **Teléfono:** 55 11 26 45 83
- **Correo:** ventas.cayre@gmail.com
- **Dirección:** Corregidora 52A, Ampliación Miguel Hidalgo, Tlalpan, CDMX, C.P. 14250
