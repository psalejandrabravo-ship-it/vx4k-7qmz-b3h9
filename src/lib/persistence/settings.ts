import { SCHEMA_VERSION, SETTINGS_KEY } from "../../data/config";
import type { Settings } from "../../types/game";

const defaults: Settings = {
  schemaVersion: SCHEMA_VERSION,
  participantCount: 8,
  soundEnabled: true,
};

export function loadSettings(): { settings: Settings; storageAvailable: boolean; recovered: boolean } {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return { settings: defaults, storageAvailable: true, recovered: false };
    const parsed = JSON.parse(raw) as Partial<Settings>;
    const count = Number(parsed.participantCount);
    const valid =
      parsed.schemaVersion === SCHEMA_VERSION &&
      Number.isInteger(count) &&
      count >= 1 &&
      count <= 40 &&
      typeof parsed.soundEnabled === "boolean";
    if (!valid) {
      localStorage.removeItem(SETTINGS_KEY);
      return { settings: defaults, storageAvailable: true, recovered: true };
    }
    return {
      settings: {
        schemaVersion: SCHEMA_VERSION,
        participantCount: count,
        soundEnabled: parsed.soundEnabled as boolean,
      },
      storageAvailable: true,
      recovered: false,
    };
  } catch {
    return { settings: defaults, storageAvailable: false, recovered: false };
  }
}

export function saveSettings(settings: Settings): boolean {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    return true;
  } catch {
    return false;
  }
}

export function clearSettings(): boolean {
  try {
    localStorage.removeItem(SETTINGS_KEY);
    return true;
  } catch {
    return false;
  }
}

export { defaults };
