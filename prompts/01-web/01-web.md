I want to create a new web project. Technology stack i want to use is react, typescript, astro and aceternity components. Review https://ui.aceternity.com/ for UI components. One of the keypoints for this web is elegance and attractive it is. So focus on using good aceternity UI components.

I've created a mockup for the whole page. You can find it on mockup.png.

I'm gonna explain you this mockup:

## Pages

The application consists of 3 pages and 2 modals.

### 1. HOME (main page)

This is the landing page and the most content-rich page. It is a single-page scrollable layout composed of the following sections from top to bottom:

**Navbar:**
A sticky/fixed navigation bar at the top with: Logo, "Los premios", "Categorías", "Colabora", "FAQ", "Newsletter", and a language selector button ("ESP"). The "Newsletter" link opens the Newsletter Modal. The navbar items act as anchor links that scroll to the corresponding section on the Home page, except "Categorías" and "FAQ" which navigate to their own pages.

**Hero Header Section:**
A large hero/banner section with a prominent heading and a row of social media icons/links (RRSS) below it.

**Los Premios Section:**
A two-column layout. Left column displays a poster/image (CARTEL). Right column contains explanatory text about the awards (TEXTO EXPLICATIVO PREMIOS).

**Categorías Section:**
A grid of 9 category cards/buttons arranged in a 3x3 layout. Each card represents a category. Clicking a category navigates to the Categorías detail page for that specific category.

**Participación Section:**
A two-column layout. Left column displays an image. Right column contains explanatory text about how to participate (TEXTO EXPLICATIVO PARTICIPACIÓN) and a "PARTICIPAR" call-to-action button.

**Colabora Section:**
Two cards displayed side by side:
- **Card Artista:** A card for artist collaboration with a "COLABORA" button.
- **Card Stand:** A card for stand collaboration with a "COLABORA" button.
Clicking either "COLABORA" button opens the Colabora Modal.

**Formulario Contacto Section:**
A contact form section embedded directly in the page.

**Footer:**
A footer at the bottom of the page.

---

### 2. CATEGORÍAS (category detail page)

This page shows the details and rules for a specific category. It is accessed by clicking on a category card from the Home page.

**Navbar:**
A navigation bar with: Logo, "Los premios", "Categorías", "Participa", "Contacto", "FAQ", and a language selector button.

**Hero Header:**
A hero section with a heading (likely the category name).

**Bases de la Categoría:**
A section titled "BASES DE LA CATEGORÍA" containing a numbered list of rules/guidelines (displayed as numbered items: 1, 2, 3, 4...).

**Participar Button:**
A prominent "PARTICIPAR" call-to-action button below the rules.

**Footer:**
A footer at the bottom of the page.

---

### 3. FAQ (frequently asked questions page)

A dedicated page for frequently asked questions.

**Navbar:**
A navigation bar with: Logo, "Los premios", "Categorías", "Participa", "Contacto", "FAQ", and a language selector button.

**FAQ Accordion List:**
A vertical list of 3 (or more) collapsible accordion items. Each item has:
- A **question** row ("PREGUNTA") that acts as the toggle.
- A **collapsible answer** panel ("DESPLEGABLE TEXTO RESPUESTA") that expands/collapses when the question is clicked.

**Footer:**
A footer at the bottom of the page.

---

## Modals

### Modal Newsletter
Triggered from the "Newsletter" link in the Home navbar. Contains:
- A title ("TÍTULO NEWSLETTER").
- An email input field ("CORREO ELECTRÓNICO").
- A "SUBSCRIBIRME" (subscribe) button.

### Modal Colabora
Triggered from the "COLABORA" buttons on the Card Artista or Card Stand in the Home page. Contains:
- A title ("COLABORA").
- A form with the following fields:
  - "NOMBRE" (first name) and "APELLIDOS" (last name) side by side.
  - "EMAIL" and "TELÉFONO" (phone) side by side.
  - "COMENTARIOS" (comments) as a larger text area.
- An "ENVIAR" (send) submit button.

---

## Reusable Components

| Component | Used In | Description |
|---|---|---|
| **Navbar** | All pages | Navigation bar with logo and links. Links vary slightly per page. |
| **Footer** | All pages | Shared footer across all pages. |
| **Hero Header** | Home, Categorías | A large hero/banner section with a prominent heading. |
| **Category Card** | Home (Categorías section) | A clickable card/button representing a category. Displayed in a 3x3 grid. |
| **Colabora Card** | Home (Colabora section) | A card with an image/description and a "COLABORA" button. Two variants: Artista and Stand. |
| **FAQ Accordion Item** | FAQ page | A collapsible question/answer pair. |
| **Modal Newsletter** | Home (via navbar) | A modal with an email subscription form. |
| **Modal Colabora** | Home (via colabora cards) | A modal with a collaboration contact form. |
| **Contact Form** | Home (Formulario Contacto section) | An embedded contact form. |