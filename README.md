# Sendero de la Amistad

Juego web psicoeducativo de MIRARIM para niñas y niños de 4 a 7 años, mediado por una persona facilitadora. Cierra la trilogía Mirar → Comprender → Cuidar. No evalúa, no asigna puntaje y no guarda datos de participantes.

## Instalación

```bash
npm install
npm run dev
```

## Comprobación y compilación

```bash
npm run typecheck
npm run build
npm run preview
```

`npm run build` ejecuta `tsc --noEmit && vite build` y genera `dist/`. No usa base de datos, secretos ni variables de entorno.

## Despliegue en Vercel

Conectar el repositorio y usar el directorio del proyecto. Comando de build: `npm run build`. Directorio de salida: `dist`. No hace falta configurar variables de entorno.

## Video de cierre

Editar `src/data/config.ts` y pegar el ID del archivo de Google Drive en `DRIVE_FILE_ID`. El archivo debe estar compartido como "Cualquier persona con el enlace puede ver". Si el ID está vacío, el botón permanece oculto. El reproductor no usa autoplay.

## Persistencia

Clave `mirarim-sendero-amistad-settings`. Solo guarda el último N (1–40), la preferencia de sonido y la versión de esquema. No guarda progreso, respuestas ni nombres.

## Pruebas ejecutadas

En esta entrega se ejecutaron de verdad, sobre una copia íntegra del código:

- `npm install` (68 paquetes)
- `npm run typecheck` (sin errores)
- `npm run build` (genera `dist/`)
- `npm run preview` (respondió HTTP 200 en `/` y en una tarjeta SVG)

El dado usa `crypto.getRandomValues` módulo 3. Una muestra de 30.000 lanzamientos dio 9.995 / 10.022 / 9.983.

No se desplegó en GitHub ni en Vercel. No hay archivos de audio grabados: los efectos se sintetizan en el navegador.

## Limitaciones

- Las 46 ilustraciones son SVG originales de cerámica mate (inicio, tablero, meta, 3 poses de Milo y 40 tarjetas). No son renders fotográficos.
- El botón de video permanece oculto hasta completar `DRIVE_FILE_ID`.
- La primera instalación dentro de la carpeta montada del entorno tardó y fue interrumpida; la verificación válida es la de arriba. En un computador normal, `npm install` en esta carpeta es el procedimiento.

## Recursos

- Marca oficial: `public/assets/brand/`
- Ilustraciones SVG: `public/assets/illustrations/`
- Sonido: síntesis con Web Audio API en `src/lib/audio/sfx.ts` (no hay archivos de audio externos)
