# Portfolio Project - Technical Details

Un portafolio de código abierto para que los desarrolladores muestren sus proyectos, habilidades de programación e historia personal.

## 🚀 Cómo iniciar el proyecto

Sigue estos pasos para correr el proyecto localmente:

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Esto iniciará el proyecto en [http://localhost:4321](http://localhost:4321).

---

## 📁 Estructura del Proyecto

A continuación se explica la organización de las carpetas principales:

### `public/`
Contiene los archivos estáticos que se sirven directamente al navegador.
- **`assets/`**: Aquí encontrarás imágenes (SVG, JPG), el archivo PDF de tu CV y, lo más importante, `styles.css` que contiene los estilos globales del sitio.

### `src/`
Aquí se encuentra todo el código lógico y la estructura del sitio.
- **`components/`**: Contiene elementos reutilizables como el `Sidebar.astro`, `Header.astro` y las tarjetas de `Project.astro`.
- **`pages/`**: Cada archivo `.astro` aquí corresponde a una ruta en tu sitio (ej. `index.astro` es la página principal).
- **`layouts/`**: Define la estructura común que comparten las páginas (como el contenedor general, fuentes y meta-etiquetas).
- **`scripts/`**: Archivos JavaScript para funcionalidades específicas (como el toggle de modo oscuro).

---

## 🛠️ ¿Cómo modificarlo?

Para personalizar este portafolio a tu gusto, estos son los lugares clave:

- **Contenido General:** Modifica los archivos en `src/pages/` para cambiar textos, descripciones y la estructura de cada sección.
- **Estilos y Diseño:** Edita `public/assets/styles.css` para cambiar colores, fuentes, márgenes y la apariencia visual general.
- **Tu CV:** Reemplaza el archivo `public/assets/cv_rolandoaguilarordaz.pdf` con tu propio currículum (asegúrate de actualizar los enlaces en `Sidebar.astro`).
- **Imágenes:** Agrega tus fotos o iconos en `public/assets/projects/`. Ver sección de imágenes abajo.

---

## 🖼️ Manejo de Imágenes y Assets (Optimización)

Para asegurar un rendimiento premium y tiempos de carga rápidos, el proyecto utiliza las herramientas de optimización nativas de Astro.

### 1. Ubicación de Imágenes
**SIEMPRE** guarda las capturas de proyectos en `src/assets/projects/`. 
A diferencia de la carpeta `public/`, las imágenes en `src/assets/` son procesadas por Astro para generar formatos modernos (como WebP), redimensionarlas y optimizar su peso automáticamente.

### 2. Uso del Componente `<Image />`
No uses la etiqueta estándar `<img>`. Usa el componente optimizado:

1. **Importar la imagen y el componente en el frontmatter (`---`):**
   ```astro
   ---
   import { Image } from "astro:assets";
   import myProjectImg from "../assets/projects/mi-proyecto.png";
   ---
   ```

2. **Renderizar en el HTML:**
   ```astro
   <Image 
     src={myProjectImg} 
     alt="Descripción descriptiva" 
     class="mi-clase-css" 
   />
   ```

### 3. Reglas de Oro de Rendimiento
- **Lazy Loading (Por defecto):** Astro carga las imágenes de forma perezosa por defecto.
- **Above the Fold (Eager Loading):** Si la imagen es visible sin hacer scroll, añade `loading="eager"`. Esto elimina advertencias de performance y mejora el LCP.
  ```astro
  <Image src={heroImg} alt="Hero" loading="eager" />
  ```

### 4. Assets en `public/`
Usa la carpeta `public/` únicamente para archivos que no necesitan procesamiento (ej: `cv_rolando.pdf`) o estilos globales.

### 3. Iconos y Títulos (Regla de Oro para i18n)
⚠️ **IMPORTANTE:** El sistema de traducción dinámico (`src/scripts/translate.js`) funciona reemplazando el `innerHTML` de cualquier elemento que tenga el atributo `data-i18n`.

**El Problema:** Si pones `data-i18n` en un elemento que contiene un `<Icon />`, el script borrará el icono para poner el texto traducido.

**La Solución:** Separa siempre el icono del texto usando un `<span>` para la traducción.

- ❌ **MAL (El icono desaparecerá):**
  ```html
  <h3 data-i18n="pilar.1.title">
    <Icon name="lucide:zap" /> Título
  </h3>
  ```

- ✅ **BIEN (Forma correcta):**
  ```html
  <h3>
    <Icon name="lucide:zap" />
    <span data-i18n="pilar.1.title">Título</span>
  </h3>
  ```

*Tip: Esto aplica para cualquier elemento que deba conservar contenido HTML (como iconos o botones) junto con texto traducible.*

---

## 🏗️ Caso Especial: Devii (Bajo Construcción)
La página de detalles de `devii.astro` sirve como ejemplo de cómo manejar proyectos sin imágenes listas, usando un `construction-placeholder` con estilos adaptados para Dark y Light mode.

---

## 🌐 Multi-idioma (i18n)

El sitio cuenta con un sistema de traducción dinámico que permite alternar entre Inglés y Español. Todos los textos se gestionan desde `src/i18n/ui.js`.

### 1. ¿Cómo agregar o cambiar textos?
1. Abre `src/i18n/ui.js`.
2. Busca el objeto `translations`.
3. Para editar, cambia el texto dentro de `es` o `en` para la clave correspondiente.
4. Para **nuevos textos**, crea una clave única (ej: `'mi.key'`) en ambos idiomas:
   ```javascript
   es: { 'mi.key': 'Texto en español' },
   en: { 'mi.key': 'Text in english' }
   ```

### 2. ¿Cómo aplicarlo en el HTML?
Usa el atributo `data-i18n` con tu nueva clave:

```html
<p data-i18n="mi.key">Texto inicial</p>
```

### 3. Títulos de página
El título de la pestaña del navegador (ej: "Sobre mí...") se traduce automáticamente si añades la clave `'page.title.nombre-de-la-ruta'` en `ui.js`. (Ej: `page.title.home` para la raíz).

---

## Deployment
The current branch can be fully static built and deployed on any static hosting platform.

For deployment methods on various platforms, refer to the [Astro Official Deployment Guide](https://docs.astro.build/en/guides/deploy/).

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
