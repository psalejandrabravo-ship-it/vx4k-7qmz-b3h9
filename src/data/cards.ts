import type { Card } from "../types/game";

const alt = (scene: string) =>
  `${scene}. Ilustración de cerámica del bosque, sin una única emoción correcta.`;

export const cards: Card[] = [
  { id: "accion-01", category: "accion", text: "Abraza a un compañero/a que esté a tu lado.", image: "/assets/illustrations/cards/accion-01.svg", alt: alt("Dos compañeros se acercan para un abrazo") },
  { id: "accion-02", category: "accion", text: "Dile una palabra amable a la persona más cercana a ti.", image: "/assets/illustrations/cards/accion-02.svg", alt: alt("Un niño se inclina hacia otro para hablarle") },
  { id: "accion-03", category: "accion", text: "Dale un aplauso especial a alguien que lo necesite hoy.", image: "/assets/illustrations/cards/accion-03.svg", alt: alt("Una niña aplaude mirando a un compañero") },
  { id: "accion-04", category: "accion", text: "Ofrece ayudar a guardar los materiales de un compañero.", image: "/assets/illustrations/cards/accion-04.svg", alt: alt("Dos niños junto a una caja de materiales") },
  { id: "accion-05", category: "accion", text: "Dile a alguien \"puedes contar conmigo\".", image: "/assets/illustrations/cards/accion-05.svg", alt: alt("Un niño ofrece la mano a una compañera") },
  { id: "accion-06", category: "accion", text: "Comparte algo real que tengas con un compañero.", image: "/assets/illustrations/cards/accion-06.svg", alt: alt("Una niña extiende un objeto hacia un compañero") },
  { id: "accion-07", category: "accion", text: "Dale las gracias a alguien que te ayudó esta semana.", image: "/assets/illustrations/cards/accion-07.svg", alt: alt("Dos compañeros frente a frente, uno con la mano al pecho") },
  { id: "accion-08", category: "accion", text: "Haz una sonrisa grande y dásela a un compañero.", image: "/assets/illustrations/cards/accion-08.svg", alt: alt("Una niña mira a un compañero con el rostro abierto") },
  { id: "accion-09", category: "accion", text: "Dile a un compañero \"¡tú puedes!\".", image: "/assets/illustrations/cards/accion-09.svg", alt: alt("Un niño anima a otro con el brazo extendido") },
  { id: "accion-10", category: "accion", text: "Invita a jugar a alguien que esté cerca de ti.", image: "/assets/illustrations/cards/accion-10.svg", alt: alt("Una niña invita con la mano a un compañero cercano") },
  { id: "accion-11", category: "accion", text: "Dile a un compañero algo bueno que notaste que hizo hoy.", image: "/assets/illustrations/cards/accion-11.svg", alt: alt("Dos niños conversan sentados en el claro") },
  { id: "accion-12", category: "accion", text: "Ofrece ayudar a un compañero a cargar sus cosas.", image: "/assets/illustrations/cards/accion-12.svg", alt: alt("Un niño ayuda a levantar una mochila") },
  { id: "accion-13", category: "accion", text: "Pregúntale a alguien \"¿cómo estás hoy?\" y escucha su respuesta.", image: "/assets/illustrations/cards/accion-13.svg", alt: alt("Una niña escucha a un compañero sentado a su lado") },

  { id: "actuar-01", category: "actuar", text: "Simula que ayudas a un amigo que se cayó y no puede levantarse.", image: "/assets/illustrations/cards/actuar-01.svg", alt: alt("Dos niños representan cómo ayudar a levantarse") },
  { id: "actuar-02", category: "actuar", text: "Haz como si consolaras a un amigo que perdió su juguete favorito.", image: "/assets/illustrations/cards/actuar-02.svg", alt: alt("Una niña se acerca a un compañero junto a un juguete") },
  { id: "actuar-03", category: "actuar", text: "Representa cómo ayudarías a alguien que está asustado.", image: "/assets/illustrations/cards/actuar-03.svg", alt: alt("Un niño acompaña a otro que se cubre los oídos") },
  { id: "actuar-04", category: "actuar", text: "Simula compartir tu colación con alguien que no trajo nada.", image: "/assets/illustrations/cards/actuar-04.svg", alt: alt("Dos niños representan compartir una colación") },
  { id: "actuar-05", category: "actuar", text: "Actúa como si ayudaras a alguien que no alcanza algo.", image: "/assets/illustrations/cards/actuar-05.svg", alt: alt("Una niña estira el brazo hacia un estante alto") },
  { id: "actuar-06", category: "actuar", text: "Haz de cuenta que calmas a un amigo que está llorando.", image: "/assets/illustrations/cards/actuar-06.svg", alt: alt("Un niño se sienta junto a un compañero con la mirada baja") },
  { id: "actuar-07", category: "actuar", text: "Representa cómo invitarías a jugar a alguien que está solo.", image: "/assets/illustrations/cards/actuar-07.svg", alt: alt("Una niña invita a un niño sentado aparte") },
  { id: "actuar-08", category: "actuar", text: "Simula prestar un lápiz a alguien que lo necesita.", image: "/assets/illustrations/cards/actuar-08.svg", alt: alt("Un niño ofrece un lápiz a una compañera") },
  { id: "actuar-09", category: "actuar", text: "Representa cómo ayudarías a un amigo que no entiende la tarea.", image: "/assets/illustrations/cards/actuar-09.svg", alt: alt("Dos niños miran juntos una hoja") },
  { id: "actuar-10", category: "actuar", text: "Haz como si ayudaras a levantar algo que se le cayó a un amigo.", image: "/assets/illustrations/cards/actuar-10.svg", alt: alt("Una niña se agacha a recoger algo del suelo") },
  { id: "actuar-11", category: "actuar", text: "Representa cómo animarías a alguien que perdió un juego.", image: "/assets/illustrations/cards/actuar-11.svg", alt: alt("Un niño anima a un compañero sentado") },
  { id: "actuar-12", category: "actuar", text: "Simula ayudar a un compañero nuevo a sentirse bienvenido.", image: "/assets/illustrations/cards/actuar-12.svg", alt: alt("Una niña da la bienvenida a otra junto al grupo") },
  { id: "actuar-13", category: "actuar", text: "Actúa cómo reaccionarías si ves a alguien siendo molestado.", image: "/assets/illustrations/cards/actuar-13.svg", alt: alt("Un niño se coloca junto a un compañero con postura de cuidado") },
  { id: "actuar-14", category: "actuar", text: "Simula ayudar a limpiar algo que un amigo derramó por accidente.", image: "/assets/illustrations/cards/actuar-14.svg", alt: alt("Dos niños se agachan junto a un charco pequeño") },

  { id: "responder-01", category: "responder", text: "Juan se cayó en el patio y le duele la rodilla. ¿Cómo lo podrías ayudar?", image: "/assets/illustrations/cards/responder-01.svg", alt: alt("Un niño en el suelo se sostiene la rodilla y otro se acerca") },
  { id: "responder-02", category: "responder", text: "Javiera perdió su juguete favorito y está muy triste. ¿Qué le dirías?", image: "/assets/illustrations/cards/responder-02.svg", alt: alt("Una niña mira el suelo donde faltaba un juguete") },
  { id: "responder-03", category: "responder", text: "Pedro está solo en el recreo y nadie juega con él. ¿Qué harías?", image: "/assets/illustrations/cards/responder-03.svg", alt: alt("Un niño sentado aparte y otro que se acerca") },
  { id: "responder-04", category: "responder", text: "Ana se asustó porque sonó muy fuerte un trueno. ¿Cómo la ayudarías?", image: "/assets/illustrations/cards/responder-04.svg", alt: alt("Una niña se cubre los oídos y un compañero está a su lado") },
  { id: "responder-05", category: "responder", text: "Tomás no trajo colación hoy. ¿Qué podrías hacer?", image: "/assets/illustrations/cards/responder-05.svg", alt: alt("Un niño sin lonchera junto a un compañero que tiene la suya") },
  { id: "responder-06", category: "responder", text: "Martina lloró porque un amigo le dijo algo feo. ¿Qué le dirías tú?", image: "/assets/illustrations/cards/responder-06.svg", alt: alt("Una niña con la mirada baja y otra sentada a su lado") },
  { id: "responder-07", category: "responder", text: "Agustín no puede alcanzar su mochila en el estante. ¿Qué harías?", image: "/assets/illustrations/cards/responder-07.svg", alt: alt("Un niño estira el brazo hacia un estante alto") },
  { id: "responder-08", category: "responder", text: "Valentina llegó nueva al curso y no conoce a nadie. ¿Cómo la ayudarías a sentirse bien?", image: "/assets/illustrations/cards/responder-08.svg", alt: alt("Una niña nueva de pie junto a un compañero que la recibe") },
  { id: "responder-09", category: "responder", text: "Benjamín perdió un juego y está frustrado. ¿Qué le dirías?", image: "/assets/illustrations/cards/responder-09.svg", alt: alt("Un niño sentado tras un juego y otro que se acerca") },
  { id: "responder-10", category: "responder", text: "Camila se le cayeron sus lápices al suelo. ¿Qué podrías hacer?", image: "/assets/illustrations/cards/responder-10.svg", alt: alt("Lápices en el suelo y dos compañeros agachados") },
  { id: "responder-11", category: "responder", text: "Diego está triste porque se peleó con su mejor amigo. ¿Cómo lo ayudarías?", image: "/assets/illustrations/cards/responder-11.svg", alt: alt("Dos niños separados en un banco del bosque") },
  { id: "responder-12", category: "responder", text: "Isidora no entiende la tarea y está preocupada. ¿Qué le dirías?", image: "/assets/illustrations/cards/responder-12.svg", alt: alt("Una niña mira una hoja y un compañero se sienta a su lado") },
  { id: "responder-13", category: "responder", text: "Joaquín vio que un compañero estaba siendo molestado. ¿Qué debería hacer?", image: "/assets/illustrations/cards/responder-13.svg", alt: alt("Un niño se acerca con calma a un compañero en el patio") },
];

export const categoryMeta = {
  accion: { label: "Acción", hint: "hacemos algo real", color: "#E07A5F" },
  actuar: { label: "Actuar", hint: "representamos una escena", color: "#E6B84C" },
  responder: { label: "Responder", hint: "pensamos juntos", color: "#2B2155" },
} as const;
