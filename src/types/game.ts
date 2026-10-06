export type Category = "accion" | "actuar" | "responder";

export interface Card {
  id: string;
  category: Category;
  text: string;
  image: string;
  fallback?: string;
  alt: string;
}

export interface StepMark {
  index: number;
  category: Category;
}

export type View = "start" | "config" | "instructions" | "board" | "closing" | "goal";

export interface Settings {
  schemaVersion: 1;
  participantCount: number;
  soundEnabled: boolean;
}
