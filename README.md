# Prueba Técnica: Desafío Licitaciones (Unholster)

Este proyecto es una solución visual y funcional para la visualización de licitaciones públicas. La meta principal fue lograr una interfaz limpia, fácil de navegar tanto en desktop como en mobile, y que responda bien a los distintos estados por los que pasa una aplicación web (cuando está cargando, cuando muestra datos, cuando no hay resultados o cuando ocurre un error).

---

1. [Decisión Tecnológica: ¿Por qué HTML, CSS y JavaScript nativo (Vanilla)?](#decisión-tecnológica-por-qué-html-css-y-javascript-nativo-vanilla)
2. [Sobre el Manejo de Estilos y Tokens de Diseño](#sobre-el-manejo-de-estilos-y-tokens-de-diseño)
3. [Decisiones de Diseño y Experiencia de Usuario (UX)](#decisiones-de-diseño-y-experiencia-de-usuario-ux)
4. [Uso de Inteligencia Artificial](#uso-de-inteligencia-artificial)
5. [Cómo levantar el proyecto localmente](#cómo-levantar-el-proyecto-localmente)

---

## Decisión Tecnológica: ¿Por qué HTML, CSS y JavaScript nativo (Vanilla)?

En lugar de utilizar frameworks como React o Vue, opté por desarrollar el proyecto en **HTML, CSS y JavaScript nativo**. La razón fue doble:

1. **Simplicidad y alcance del proyecto:** Al tratarse de una sola pantalla (*Single Page*), no tenía sentido agregar la complejidad de instalar y configurar un framework pesado. La solución nativa es más liviana, rápida de cargar y directa de evaluar.
2. **Facilidad de despliegue en GitHub Pages:** Era la primera vez que utilizaba **GitHub Pages** para publicar un proyecto en vivo. Para asegurar que la página se levantara sin problemas de compilación ni fallas en el servidor, ir por lo simple y seguro con JavaScript nativo fue la mejor alternativa.

---

## Sobre el Manejo de Estilos y Tokens de Diseño

* **Traducción manual:** El enunciado mencionaba trabajar con tokens de diseño. Al no disponer de un archivo descargable de configuración (como un JSON exportado), transcribí manualmente las variables de colores, tipografías y espacios al archivo CSS (`:root`) para cumplir con la guía visual entregada.
* **Agregado de elementos faltantes:** Para maquetar componentes completos que no venían totalmente especificados (como las tablas de datos y sus bordes), agregué los estilos necesarios manteniendo la coherencia con los colores de la marca.

---

## Decisiones de Diseño y Experiencia de Usuario (UX)

* **Tablas en móvil convertidas a Tarjetas (Cards):** Las tablas horizontales en pantallas de celular suelen ser difíciles de leer y requieren hacer un desplazamiento (*scroll*) incómodo. Por eso, en dispositivos móviles la tabla se transforma automáticamente en tarjetas verticales a 360 px de ancho, mostrando claramente cada dato por fila.
* **Paginación vs. Scroll Infinito:** En lugar de cargar una lista infinita hacia abajo, opté por una **paginación clásica**. El scroll infinito dificulta encontrar el pie de página y pierde el control de la búsqueda. Además, le di al usuario la opción de elegir cuántos elementos ver por página (5, 10, 25 o 50), utilizando el múltiplo de 5 que es el estándar habitual en tablas de gestión de datos.
* **Manejo de Estados de la Pantalla:** La interfaz está adaptada para reaccionar a 4 situaciones clave:
  1. **Carga (*Skeleton*):** Muestra tarjetas/filas grises parpadeantes mientras los datos se están obteniendo, para que el usuario sepa que la página está trabajando.
  2. **Éxito (Con datos):** Muestra la tabla o tarjetas cargadas con la información completa.
  3. **Sin Resultados (*Empty State*):** Muestra un mensaje claro cuando los filtros o búsquedas no arrojan ninguna licitación.
  4. **Error de Red:** Muestra un aviso explícito si falla la conexión o la carga de información.

---

## Uso de Inteligencia Artificial

Utilicé la Inteligencia Artificial como un **asistente de maquetación rápida**. Me sirvió principalmente para estructurar código repetitivo y acelerar el aprendizaje sobre temas que eran nuevos para mí en este desafío (como el flujo de despliegue en GitHub Pages), permitiéndome enfocarme en la lógica visual, la usabilidad y la experiencia del usuario.

---

## Cómo levantar el proyecto localmente

No necesitas instalar **Node.js**, ni ejecutar comandos de consola (`npm install`), ni configurar servidores.

### Opción 1: Ver directamente en la web
El proyecto está publicado y funcionando en GitHub Pages:
👉 **[Ver aplicación desplegada en GitHub Pages](https://antohorta.github.io/unholster-licitaciones/)**

### Opción 2: Correr en tu computadora
1. Descarga o clona este repositorio en tu equipo.
2. Abre la carpeta del proyecto.
3. Haz doble clic en el archivo `index.html` (se abrirá automáticamente en cualquier navegador como Chrome, Edge o Safari).
4. *(Opcional)* Si usas **Visual Studio Code**, puedes hacer clic derecho sobre `index.html` y seleccionar **"Open with Live Server"**.