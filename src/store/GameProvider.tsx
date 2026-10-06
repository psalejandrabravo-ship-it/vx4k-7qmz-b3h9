import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { cards } from "../data/cards";
import { drawCard, emptyDecks, rollCategory, type DeckState } from "../lib/game/decks";
import { sfx } from "../lib/audio/sfx";
import { clearSettings, loadSettings, saveSettings } from "../lib/persistence/settings";
import type { Card, Category, StepMark, View } from "../types/game";

interface GameValue {
  view: View;
  participantCount: number;
  draftCount: string;
  soundEnabled: boolean;
  storageNote: string;
  steps: StepMark[];
  activeCard: Card | null;
  dieCategory: Category | null;
  rolling: boolean;
  notice: string;
  setView: (view: View) => void;
  setDraftCount: (value: string) => void;
  adjustDraft: (delta: number) => void;
  beginPath: () => void;
  roll: () => void;
  confirm: () => void;
  toggleSound: () => void;
  restart: () => void;
  resetPreferences: () => void;
  playAgain: () => void;
}

const GameContext = createContext<GameValue | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const loaded = loadSettings();
  const [view, setView] = useState<View>("config");
  const [participantCount, setParticipantCount] = useState(loaded.settings.participantCount);
  const [draftCount, setDraftCount] = useState(String(loaded.settings.participantCount));
  const [soundEnabled, setSoundEnabled] = useState(loaded.settings.soundEnabled);
  const [storageNote, setStorageNote] = useState(
    loaded.storageAvailable ? "" : "Tus preferencias no se conservarán al cerrar esta página.",
  );
  const [decks, setDecks] = useState<Record<Category, DeckState>>(emptyDecks);
  const [steps, setSteps] = useState<StepMark[]>([]);
  const [activeCard, setActiveCard] = useState<Card | null>(null);
  const [dieCategory, setDieCategory] = useState<Category | null>(null);
  const [rolling, setRolling] = useState(false);
  const [notice, setNotice] = useState("");

  function persist(nextCount: number, nextSound: boolean) {
    const ok = saveSettings({ schemaVersion: 1, participantCount: nextCount, soundEnabled: nextSound });
    if (!ok && !storageNote) setStorageNote("Tus preferencias no se conservarán al cerrar esta página.");
  }

  const value = useMemo<GameValue>(() => ({
    view,
    participantCount,
    draftCount,
    soundEnabled,
    storageNote,
    steps,
    activeCard,
    dieCategory,
    rolling,
    notice,
    setView,
    setDraftCount,
    adjustDraft: (delta) => {
      const current = Number(draftCount);
      const base = Number.isInteger(current) ? current : participantCount;
      const next = Math.min(40, Math.max(1, base + delta));
      setDraftCount(String(next));
    },
    beginPath: () => {
      const count = Number(draftCount);
      if (!Number.isInteger(count) || count < 1 || count > 40) return;
      setParticipantCount(count);
      persist(count, soundEnabled);
      setDecks(emptyDecks());
      setSteps([]);
      setActiveCard(null);
      setDieCategory(null);
      setNotice("");
      setView("board");
    },
    roll: () => {
      if (rolling || activeCard || view !== "board") return;
      const category = rollCategory();
      setRolling(true);
      setDieCategory(category);
      if (soundEnabled) void sfx.dice();
      window.setTimeout(() => {
        const drawn = drawCard(decks, category);
        setDecks(drawn.decks);
        setActiveCard(drawn.card);
        setRolling(false);
        setNotice(`${drawn.card.id.startsWith("accion") ? "Acción" : drawn.card.id.startsWith("actuar") ? "Actuar" : "Responder"}. ${drawn.card.text}`);
        if (soundEnabled) void sfx.card();
      }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 200 : 1200);
    },
    confirm: () => {
      if (!activeCard || !dieCategory) return;
      const nextSteps = [...steps, { index: steps.length + 1, category: dieCategory }];
      setSteps(nextSteps);
      setActiveCard(null);
      setNotice("Milo avanza por el sendero. Sigamos avanzando juntos.");
      if (soundEnabled) void sfx.step();
      if (nextSteps.length >= participantCount) {
        if (soundEnabled) void sfx.goal();
        setNotice("Llegamos a la meta. ¡Lo logramos!");
        setView("closing");
      }
    },
    toggleSound: () => {
      const next = !soundEnabled;
      setSoundEnabled(next);
      persist(participantCount, next);
    },
    restart: () => {
      setDecks(emptyDecks());
      setSteps([]);
      setActiveCard(null);
      setDieCategory(null);
      setNotice("");
      setView("board");
    },
    resetPreferences: () => {
      clearSettings();
      setSoundEnabled(true);
      setParticipantCount(8);
      setDraftCount("8");
    },
    playAgain: () => {
      setDecks(emptyDecks());
      setSteps([]);
      setActiveCard(null);
      setDieCategory(null);
      setNotice("");
      setView("config");
    },
  }), [activeCard, decks, dieCategory, draftCount, notice, participantCount, rolling, soundEnabled, steps, storageNote, view]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const value = useContext(GameContext);
  if (!value) throw new Error("useGame fuera de proveedor");
  return value;
}

export const cardCount = cards.length;
