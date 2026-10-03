# Inventario de ilustraciones — Sendero de la Amistad

Estado actual en `main`: SVG esquemáticos provisionales. No son el arte definitivo.
La rama `revision-visual` espera PNG o WebP locales con el mismo nombre. No se convirtieron los SVG planos.

SVG que se conservan (no narrativos): logotipos oficiales en `public/assets/brand/` y la franja del sendero dibujada en código (`Path.tsx`).

## Milo

| Nombre previsto | Ruta prevista | Uso | Proporción | Transparencia |
| --- | --- | --- | --- | --- |
| milo-espera.webp | public/assets/illustrations/guide/milo-espera.webp | Círculo central en reposo | 1:1, mínimo 1024 px | No. Escena completa; el círculo recorta las esquinas. |
| milo-camina.webp | public/assets/illustrations/guide/milo-camina.webp | Ficha sobre el sendero | Alto libre, ancho útil cerca de 256 px | Sí. Fondo transparente alrededor del personaje. |
| milo-celebra.webp | public/assets/illustrations/guide/milo-celebra.webp | Pose de meta, si no va horneada en el cierre | Alto libre | Sí, si se superpone. No, si solo se usa dentro de meta.webp. |

Hoy el código de la ficha usa solo la pose de avance. La pose de espera va al círculo. La de celebración puede ir dentro de la panorámica de cierre.

## Pantallas

| Nombre previsto | Ruta prevista | Pantalla | Proporción | Transparencia |
| --- | --- | --- | --- | --- |
| inicio.webp | public/assets/illustrations/cover/inicio.webp | Inicio | 16:9 | No |
| bosque.webp | public/assets/illustrations/board/bosque.webp | Fondo del tablero | 16:9, área central despejada | No. Sin peldaños, sin colores de turno y sin Milo. |
| meta.webp | public/assets/illustrations/closing/meta.webp | Meta | 16:9 | No |

## Tarjetas

Todas: 1:1, mínimo 1024×1024. Sin transparencia. Rostros, manos y acción dentro del círculo central. Sin texto ni logo.

| Archivo | Categoría | Texto |
| --- | --- | --- |
| cards/accion-01.jpg | Acción | Abraza a un compañero/a que esté a tu lado. |
| cards/accion-02.jpg | Acción | Dile una palabra amable a la persona más cercana a ti. |
| cards/accion-03.jpg | Acción | Dale un aplauso especial a alguien que lo necesite hoy. |
| cards/accion-04.jpg | Acción | Ofrece ayudar a guardar los materiales de un compañero. |
| cards/accion-05.jpg | Acción | Dile a alguien "puedes contar conmigo". |
| cards/accion-06.jpg | Acción | Comparte algo real que tengas con un compañero. |
| cards/accion-07.jpg | Acción | Dale las gracias a alguien que te ayudó esta semana. |
| cards/accion-08.jpg | Acción | Haz una sonrisa grande y dásela a un compañero. |
| cards/accion-09.jpg | Acción | Dile a un compañero "¡tú puedes!". |
| cards/accion-10.jpg | Acción | Invita a jugar a alguien que esté cerca de ti. |
| cards/accion-11.webp | Acción | Dile a un compañero algo bueno que notaste que hizo hoy. |
| cards/accion-12.webp | Acción | Ofrece ayudar a un compañero a cargar sus cosas. |
| cards/accion-13.webp | Acción | Pregúntale a alguien "¿cómo estás hoy?" y escucha su respuesta. |
| cards/actuar-01.webp | Actuar | Simula que ayudas a un amigo que se cayó y no puede levantarse. |
| cards/actuar-02.webp | Actuar | Haz como si consolaras a un amigo que perdió su juguete favorito. |
| cards/actuar-03.webp | Actuar | Representa cómo ayudarías a alguien que está asustado. |
| cards/actuar-04.webp | Actuar | Simula compartir tu colación con alguien que no trajo nada. |
| cards/actuar-05.webp | Actuar | Actúa como si ayudaras a alguien que no alcanza algo. |
| cards/actuar-06.webp | Actuar | Haz de cuenta que calmas a un amigo que está llorando. |
| cards/actuar-07.webp | Actuar | Representa cómo invitarías a jugar a alguien que está solo. |
| cards/actuar-08.webp | Actuar | Simula prestar un lápiz a alguien que lo necesita. |
| cards/actuar-09.webp | Actuar | Representa cómo ayudarías a un amigo que no entiende la tarea. |
| cards/actuar-10.webp | Actuar | Haz como si ayudaras a levantar algo que se le cayó a un amigo. |
| cards/actuar-11.webp | Actuar | Representa cómo animarías a alguien que perdió un juego. |
| cards/actuar-12.webp | Actuar | Simula ayudar a un compañero nuevo a sentirse bienvenido. |
| cards/actuar-13.webp | Actuar | Actúa cómo reaccionarías si ves a alguien siendo molestado. |
| cards/actuar-14.webp | Actuar | Simula ayudar a limpiar algo que un amigo derramó por accidente. |
| cards/responder-01.webp | Responder | Juan se cayó en el patio y le duele la rodilla. ¿Cómo lo podrías ayudar? |
| cards/responder-02.webp | Responder | Javiera perdió su juguete favorito y está muy triste. ¿Qué le dirías? |
| cards/responder-03.webp | Responder | Pedro está solo en el recreo y nadie juega con él. ¿Qué harías? |
| cards/responder-04.webp | Responder | Ana se asustó porque sonó muy fuerte un trueno. ¿Cómo la ayudarías? |
| cards/responder-05.webp | Responder | Tomás no trajo colación hoy. ¿Qué podrías hacer? |
| cards/responder-06.webp | Responder | Martina lloró porque un amigo le dijo algo feo. ¿Qué le dirías tú? |
| cards/responder-07.webp | Responder | Agustín no puede alcanzar su mochila en el estante. ¿Qué harías? |
| cards/responder-08.webp | Responder | Valentina llegó nueva al curso y no conoce a nadie. ¿Cómo la ayudarías a sentirse bien? |
| cards/responder-09.webp | Responder | Benjamín perdió un juego y está frustrado. ¿Qué le dirías? |
| cards/responder-10.webp | Responder | Camila se le cayeron sus lápices al suelo. ¿Qué podrías hacer? |
| cards/responder-11.webp | Responder | Diego está triste porque se peleó con su mejor amigo. ¿Cómo lo ayudarías? |
| cards/responder-12.webp | Responder | Isidora no entiende la tarea y está preocupada. ¿Qué le dirías? |
| cards/responder-13.webp | Responder | Joaquín vio que un compañero estaba siendo molestado. ¿Qué debería hacer? |

Las tarjetas accion-01 a accion-10 usan JPG definitivo y esa ruta tiene prioridad. Las otras 30 tarjetas siguen con SVG provisional y no reutilizan estas ilustraciones. No hay portada aprobada: falta public/assets/illustrations/cover/inicio.webp.
