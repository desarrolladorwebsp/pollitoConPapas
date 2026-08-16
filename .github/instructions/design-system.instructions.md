---
description: "Sistema de diseño de la marca 'Pollitos con Papas' (Propuesta 1: Tradición Chilena). Aplica a toda nueva sección de la landing (menú, promociones, locales, nosotros, contacto) para mantener consistencia visual con el HERO."
applyTo: "app/**"
---

# Sistema de diseño — Pollitos con Papas ("Tradición Chilena")

Toda nueva sección debe sentirse parte de la **misma marca** que el HERO
([app/components/hero-section.tsx](../../app/components/hero-section.tsx)). No introducir estilos,
colores o tipografías que no estén definidos aquí.

## Paleta de colores

Tokens definidos en [app/globals.css](../../app/globals.css) (Tailwind v4 `@theme`):

| Token | Uso |
|---|---|
| `bg-cream` / `text-cream` (`--color-cream`) | Fondo principal, marfil cálido |
| `bg-cream-dark` (`--color-cream-dark`) | Superficies secundarias, papel envejecido |
| `bg-paper` (`--color-paper`) | Texturas/tarjetas alternativas |
| `text-coffee` (`--color-coffee`) | Texto principal, café oscuro |
| `text-coffee-soft` (`--color-coffee-soft`) | Texto secundario / párrafos |
| `bg-terracotta` / `text-terracotta` (`--color-terracotta`) | Rojo ladrillo medio: divisores, insignias, detalles |
| `bg-terracotta-dark` / `text-terracotta-dark` (`--color-terracotta-dark`) | Rojo marroquí/vino profundo: color principal de marca — CTAs, logo, segunda línea de titulares, estado activo de nav |
| `text-gold` (`--color-gold`) | Acentos puntuales (líneas decorativas, iconos, divisores punteados), usar con moderación |

Reglas: nunca usar azules, morados, neones ni gradientes saturados. El fondo base de toda sección es
cálido/tostado (`bg-cream` o `bg-cream-dark`), nunca blanco puro. `terracotta-dark` es el rojo
protagonista de la marca (botones, logo, acentos de titular); `terracotta` es su variante más suave para
detalles secundarios (insignias, líneas). Resérvalos para CTAs/acentos, no los uses como fondo masivo
salvo en una sección oscura puntual (ver "Secciones oscuras" abajo).

## Tipografía

- **Serif editorial** (`font-serif`, Fraunces): títulos `h1`/`h2`, wordmark del logo, frases destacadas.
  Los titulares usan peso **bold** (no itálica) con la línea de énfasis en `text-terracotta-dark`.
- **Sans funcional** (`font-sans`, Inter): navegación, párrafos, botones, labels, formularios. Botones y
  nav en mayúsculas con `tracking-wide`/`tracking-wider`.
- **Script/manuscrita** (`font-script`, Caveat): solo para acentos manuscritos puntuales sobre fotografías
  (ej. frase superpuesta en el HERO), siempre en `text-cream` sobre fondo oscuro/imagen. No usarla para
  contenido funcional ni en más de un elemento por sección.

### Escala tipográfica y jerarquía

| Elemento | Clases de referencia |
|---|---|
| H1 (hero) | `font-serif text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] tracking-tight` |
| H2 (título de sección) | `font-serif text-4xl sm:text-5xl font-bold leading-tight tracking-tight` |
| H3 (subtítulo/tarjeta) | `font-serif text-2xl font-bold leading-snug` |
| Logo/wordmark | `font-serif text-2xl font-bold leading-[1.05] text-terracotta-dark` |
| Kicker/etiqueta | `font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-gold` |
| Párrafo | `font-sans text-lg leading-relaxed text-coffee` |
| Texto pequeño / legal | `font-sans text-sm text-coffee-soft` |

Los titulares siempre en serif bold con personalidad; nunca usar la sans para H1/H2. La segunda línea de
un titular (frase de énfasis) se pinta en `text-terracotta-dark`, sin itálica.

## Botones

- **Primario**: `rounded-lg bg-terracotta-dark px-7 py-4 font-sans text-sm font-bold uppercase tracking-wider text-cream shadow-warm-sm hover:bg-coffee`, con icono lineal opcional (flecha, bolsa) a la derecha.
- **Secundario/enlace**: texto en `text-coffee` con `underline decoration-gold decoration-2 underline-offset-4`, hover a `text-terracotta-dark`.
- Botones siempre `rounded-lg` (esquinas suavemente redondeadas, no pastilla completa); las únicas formas
  circulares/`rounded-full` son insignias tipo sello (ej. `heritage-stamp.tsx`) y avatares.

## Bordes, radios y sombras

- Radios medios: botones y tarjetas `rounded-lg`/`rounded-2xl`; contenedores de imagen grandes pueden usar
  `rounded-[2rem]` cuando están enmarcados (no a sangre).
- Insignias/sellos: siempre circulares (`rounded-full`) con `border-2 border-dashed border-terracotta-dark`.
- Sombras cálidas (nunca grises frías): usar utilidades `shadow-warm` (elementos grandes/imágenes) y
  `shadow-warm-sm` (botones, tarjetas pequeñas, insignias) definidas en `globals.css`.
- Bordes discretos con opacidad baja sobre café: `border border-coffee/15` para detalles sutiles (botón de
  menú móvil, separadores).

## Espaciado y composición

- Contenedor: `mx-auto max-w-7xl px-6 lg:px-12`.
- Separación vertical entre secciones: `py-20 lg:py-28`.
- Layout típico de sección: contenido a un lado (`lg:col-span-5`) e imagen protagonista al otro; en el
  HERO la fotografía va **a sangre** (`absolute inset-y-0 right-0 w-full lg:w-[56%]`, sin recuadro) para que
  toque el borde de la pantalla; en secciones internas puede usarse un contenedor `rounded-[2rem]` normal.
  En mobile todo se apila a una columna, el contenido siempre antes que la imagen en el DOM.
- Jerarquía de lectura dentro de un bloque: título → divisor decorativo (línea punteada + icono) → texto de
  apoyo → CTA → imagen/insignia.
- Un separador punteado con icono lineal centrado (`DashedChickenDivider` en el HERO) puede reutilizarse
  entre título y texto de apoyo en otras secciones para reforzar identidad.

## Tratamiento de imágenes y estilo fotográfico

- La comida es siempre protagonista: fotografías cálidas, abundantes, con texturas visibles (dorado,
  crujiente), nunca frías ni de stock genérico.
- En el HERO la fotografía va a sangre hasta el borde de la pantalla (sin marco ni `rounded`), ocupando
  ~55-58% del ancho en desktop; en secciones internas usar contenedores enmarcados
  `overflow-hidden rounded-[2rem]` sobre fondo `bg-cream-dark`, con `shadow-warm`.
- Sobre la fotografía puede superponerse **una** frase corta en `font-script text-cream` (acento
  manuscrito) y **una** insignia circular tipo sello (`heritage-stamp.tsx`) sobre su esquina inferior.
- Mientras no exista fotografía real, usar la ilustración con gradientes cálidos (ver
  [app/components/chicken-plate-illustration.tsx](../../app/components/chicken-plate-illustration.tsx)) en vez de imágenes
  de stock. Al incorporar fotos reales, usar `next/image` con `fill object-cover` dentro del mismo
  contenedor (a sangre en el HERO, enmarcado en el resto).

## Texturas e iconografía

- Textura de papel sutil disponible vía la clase utilitaria `.texture-paper` (grano fino, opacidad baja).
  Aplicarla como máximo una vez por sección, nunca combinarla con fondos oscuros saturados.
- Ilustración lineal de fondo (ej. `farmhouse-line-art.tsx`): trazo simple en `text-terracotta-dark/15`,
  posicionada detrás del bloque de contenido/insignia, nunca protagonista ni sobre la fotografía.
- Iconografía funcional (nav, botones, divisores): siempre lineal (`stroke`, sin relleno sólido salvo
  pequeños acentos como la estrella de la insignia), color `currentColor` heredado del texto/acento que
  acompaña.
- Insignias/sellos vintage (ej. `heritage-stamp.tsx`) se usan como detalle puntual —máximo una por
  sección—, siempre circulares, con borde punteado `terracotta-dark` y texto apilado en 3 líneas.

## Navegación

- Barra absoluta sobre el hero, transparente sobre el fondo crema/tostado.
- Marca a la izquierda como bloque apilado: icono lineal pequeño → wordmark en dos líneas
  (`font-serif font-bold text-terracotta-dark`) → tagline con líneas decorativas ("— Desde 1995 —" en
  `text-gold`, `tracking-[0.25em]`).
- Enlaces centrados (`hidden lg:flex`, `text-sm font-medium text-coffee`); el enlace activo ("Inicio") se
  distingue con `text-terracotta-dark border-b-2 border-terracotta-dark`, el resto solo cambia de color en
  hover, sin subrayado permanente.
- CTA "Pedir ahora" en botón primario (`rounded-lg`) a la derecha, con icono de bolsa.
- En mobile, ocultar enlaces y CTA de texto largo, mostrar solo marca + botón de menú cuadrado
  (`rounded-lg border border-coffee/15`).

## Tarjetas

- Fondo `bg-cream-dark` o `bg-paper`, `rounded-2xl`, `shadow-warm-sm`, padding generoso (`p-6`/`p-8`).
- Título de tarjeta en serif bold (`h3`), texto de apoyo en sans `text-coffee-soft`.
- Tarjetas de icono+texto (ej. features) usan icono lineal `text-terracotta-dark` sobre título en
  `text-terracotta-dark` y descripción en `text-coffee`/`text-coffee-soft`.

## Secciones claras vs. oscuras

- Por defecto toda sección es clara: fondo `bg-cream` o `bg-cream-dark`, texto `text-coffee`.
- Si se necesita una sección de énfasis/contraste (ej. cierre, promoción destacada), usar fondo
  `bg-coffee` con texto `text-cream` y acentos `text-gold`/`text-terracotta`; usar con moderación,
  no más de una sección oscura por página.

## Animaciones

Librería: **`motion`** (`import { motion } from "motion/react"`). Cualquier componente que anime debe
llevar `"use client"` al inicio del archivo. Reutiliza siempre los primitivos de
[app/components/motion-primitives.tsx](../../app/components/motion-primitives.tsx) en vez de crear
variantes de animación nuevas:

| Primitivo | Uso |
|---|---|
| `FadeIn` | Envuelve bloques de encabezado (kicker + título + subtítulo) para un fade-up al entrar en viewport. Acepta `delay`. |
| `StaggerContainer` + `fadeUpVariants` | Envuelve grids/listas (platos, testimonios, categorías); cada hijo directo debe llevar `variants={fadeUpVariants}` para animarse en cascada. |

Reglas generales:
- **Entrada en scroll** (secciones bajo el fold: Menú, Testimonios, Footer): usar `FadeIn`/`StaggerContainer`
  con `whileInView` y `viewport={{ once: true }}` — la animación se reproduce una sola vez, nunca en cada
  scroll.
- **Entrada al montar** (Hero, Navbar, botón flotante de WhatsApp): usar `initial`/`animate` (no
  `whileInView`, ya están en el viewport inicial) con un stagger corto (`delayChildren` ~0.1s).
- **Hover/tap en elementos interactivos** (botones, tarjetas, iconos sociales): usar `whileHover`/`whileTap`
  de `motion` en vez de `hover:scale-*`/`hover:-translate-y-*` de Tailwind, para evitar conflictos de
  `transform`. Las clases Tailwind de color/sombra (`hover:bg-coffee`, `hover:shadow-warm`) siguen
  aplicándose normalmente junto a `motion` porque no tocan `transform`.
- Micro-interacciones sutiles: lift de tarjetas `whileHover={{ y: -6 }}`, botones
  `whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}`, iconos sociales `whileHover={{ scale: 1.1 }}`.
- Loops continuos (ej. flotado suave de la insignia del HERO, pulso del botón de WhatsApp) deben ser
  discretos: amplitudes pequeñas, `duration` de 2-4s, `repeat: Infinity`, `ease: "easeInOut"`.
- Nunca animar color/fondo con `motion` (eso lo resuelve Tailwind); `motion` se reserva para
  transform/opacity (entradas, hover, loops).
- Mantener duraciones entre 0.3s y 0.6s para transiciones de entrada; evitar animaciones largas o
  exageradas que distraigan de la comida como protagonista.

## Responsive

- Mobile-first: definir estilos base para mobile y escalar con `sm:`/`lg:`.
- Grids de dos columnas colapsan a una columna en mobile; el orden de lectura (kicker → título → texto →
  CTA → imagen) se mantiene.
- Tamaños tipográficos bajan un escalón en mobile (ej. H1 `text-5xl` → mantiene `sm:text-6xl` solo desde
  tablet en adelante).

## Consistencia entre secciones

- Reutilizar siempre los tokens de color/tipografía de `globals.css`, nunca valores hex sueltos en los
  componentes.
- Reutilizar los componentes existentes en `app/components/` (navbar, ilustraciones, sellos, primitivos de
  animación) en vez de crear variantes nuevas de lo mismo.
- Cualquier nueva sección debe poder describirse con la misma jerarquía: kicker/etiqueta → titular serif →
  texto de apoyo sans → CTA en pastilla terracotta → imagen/ilustración con `shadow-warm`.
- Toda sección/tarjeta/botón nuevo debe llevar las animaciones de entrada y hover descritas arriba para que
  la página se sienta consistente e interactiva en todo el sitio, no solo en el HERO.

