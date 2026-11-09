import confetti from 'canvas-confetti';

/**
 * Fires celebration star confetti
 */
export const triggerConfetti = () => {
  // Center burst
  confetti({
    particleCount: 50,
    spread: 60,
    origin: { y: 0.65 },
    colors: ['#F59E0B', '#38BDF8', '#FDE68A', '#0284C7', '#FEF3C7'],
    shapes: ['star', 'circle']
  });

  // Secondary side bursts
  setTimeout(() => {
    confetti({
      particleCount: 30,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#F59E0B', '#FDE68A']
    });
    confetti({
      particleCount: 30,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#38BDF8', '#0284C7']
    });
  }, 200);
};

/**
 * Subtle star chime sound using Web Audio API (works completely offline, no external file needed)
 */
export const playSparkleSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

      gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.08);
      osc.stop(ctx.currentTime + idx * 0.08 + 0.45);
    });
  } catch (e) {
    // Audio context may be restricted by autoplay policy before user gesture
  }
};

