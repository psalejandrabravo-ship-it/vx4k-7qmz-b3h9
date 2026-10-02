import type { Card, Category } from "../../types/game";
import { cards } from "../../data/cards";

export interface DeckState {
  queue: string[];
  last: string | null;
}

export function emptyDecks(): Record<Category, DeckState> {
  return {
    accion: { queue: [], last: null },
    actuar: { queue: [], last: null },
    responder: { queue: [], last: null },
  };
}

function shuffle(ids: string[]): string[] {
  const copy = ids.slice();
  const random = new Uint32Array(copy.length);
  crypto.getRandomValues(random);
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = random[i] % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function drawCard(
  decks: Record<Category, DeckState>,
  category: Category,
): { card: Card; decks: Record<Category, DeckState> } {
  const current = decks[category];
  let queue = current.queue.slice();
  if (queue.length === 0) {
    const pool = cards.filter((card) => card.category === category && card.id !== current.last).map((card) => card.id);
    queue = shuffle(pool.length > 0 ? pool : cards.filter((card) => card.category === category).map((card) => card.id));
  }
  const id = queue.shift() as string;
  const card = cards.find((item) => item.id === id) as Card;
  return {
    card,
    decks: { ...decks, [category]: { queue, last: id } },
  };
}

export function rollCategory(): Category {
  const sample = new Uint32Array(1);
  crypto.getRandomValues(sample);
  const bucket = sample[0] % 3;
  if (bucket === 0) return "accion";
  if (bucket === 1) return "actuar";
  return "responder";
}
