let context: AudioContext | null = null;

function ctx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!context) {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    context = new Ctx();
  }
  return context;
}

function tone(frequency: number, start: number, duration: number, type: OscillatorType, gainValue: number) {
  const audio = ctx();
  if (!audio) return;
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, audio.currentTime + start);
  gain.gain.setValueAtTime(0.0001, audio.currentTime + start);
  gain.gain.exponentialRampToValueAtTime(gainValue, audio.currentTime + start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + start + duration);
  osc.connect(gain);
  gain.connect(audio.destination);
  osc.start(audio.currentTime + start);
  osc.stop(audio.currentTime + start + duration + 0.02);
}

export async function ensureAudio() {
  const audio = ctx();
  if (audio && audio.state === "suspended") await audio.resume();
}

export const sfx = {
  async dice() {
    await ensureAudio();
    tone(180, 0, 0.12, "triangle", 0.08);
    tone(240, 0.08, 0.1, "triangle", 0.06);
    tone(320, 0.16, 0.14, "sine", 0.07);
  },
  async card() {
    await ensureAudio();
    tone(520, 0, 0.18, "sine", 0.06);
    tone(780, 0.06, 0.2, "sine", 0.04);
  },
  async step() {
    await ensureAudio();
    tone(200, 0, 0.09, "triangle", 0.07);
    tone(140, 0.05, 0.1, "sine", 0.05);
  },
  async goal() {
    await ensureAudio();
    tone(392, 0, 0.28, "sine", 0.05);
    tone(494, 0.12, 0.3, "sine", 0.045);
    tone(587, 0.24, 0.4, "sine", 0.04);
  },
};
