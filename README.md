# 🐾 Veterinaria San Marcos - Sitio Web

Proyecto desarrollado para la **Evaluación Parcial N°1** de la asignatura **DSY1104 - Desarrollo Fullstack II** (Duoc UC, 2026).

Sitio web informativo y funcional para una veterinaria ficticia, que permite a los usuarios conocer los servicios ofrecidos y agendar una cita a través de un formulario de contacto validado con JavaScript.

## 📋 Descripción del proyecto

El sitio está compuesto por tres páginas interconectadas (Inicio, Servicios y Contacto), construidas con HTML5 semántico, estilizadas con CSS3 (usando variables y Flexbox/Grid) y con validación de formularios en JavaScript puro (Vanilla JS).

## 👥 Integrantes

- Diego Sanzana
- Benjamín Rojas
- Jocsan Sepúlveda

## 🛠️ Tecnologías utilizadas

- **HTML5**: estructura semántica (`header`, `nav`, `main`, `section`, `article`, `footer`).
- **CSS3**: variables (`:root`), Flexbox, CSS Grid responsivo, transiciones y estados de validación visual.
- **JavaScript (Vanilla)**: validación de formularios en tiempo real, manejo de eventos y manipulación del DOM.
- **Git / GitHub**: control de versiones colaborativo.

## ✨ Funcionalidades principales

- Navegación fluida entre páginas mediante un menú persistente.
- Catálogo de servicios en formato de tarjetas (grid), con imagen, descripción y precio.
- Video institucional embebido (Vimeo) en la página de inicio.
- Formulario de agendamiento de citas con:
  - Validación en tiempo real (eventos `blur` e `input`).
  - Mensajes de error específicos y contextuales por campo.
  - Estados visuales de campo válido/inválido.
  - Sugerencias automáticas para el motivo de consulta (`datalist`).
  - Confirmación de envío y reinicio del formulario.

> Para el detalle completo de requisitos funcionales y no funcionales, consultar el documento **ERS - Requisitos.docx** entregado junto a este proyecto.

## 📁 Estructura del proyecto

```
Veterinaria-San-Marcos/
├── Carpetajpg/
│   ├── Dogtores.jpg
│   ├── Gatosiendo acarisiado.jpg
│   ├── Perrito Camilla.jpg
│   ├── Perrito corriendo.jpg
│   └── Perro duchandose.jpg
├── css/
│   └── style.css        # Estilos compartidos por todo el sitio
├── js/
│   └── funciones.js     # Lógica de validación del formulario de contacto
├── index.html            # Página de inicio
├── catalogo.html          # Catálogo de servicios (CSS Grid)
├── contacto.html          # Formulario de agendamiento con validación JS
└── README.md
```

## ▶️ Cómo ejecutarlo

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` directamente en cualquier navegador web (Chrome, Firefox o Edge).
3. Las rutas de los recursos (CSS, JS, imágenes) son relativas, por lo que la navegación y los estilos funcionarán sin necesidad de un servidor local.

## 🔀 Control de versiones

El proyecto se desarrolló de forma colaborativa mediante un repositorio remoto en GitHub, distribuyendo tareas entre los integrantes del equipo y documentando los cambios mediante *commits* descriptivos.

## 📄 Licencia

Proyecto académico desarrollado con fines educativos para Duoc UC.
