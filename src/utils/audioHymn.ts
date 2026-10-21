// Web Audio API Synthesizer for romantic acoustic ceremony chime
class RomanticAudioSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private intervalId: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Plays a gentle, serene acoustic bell note
  private playBellNote(freq: number, startTime: number, duration: number = 2.5) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.08, startTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  public play() {
    try {
      this.initContext();
      if (!this.ctx) return;
      this.isPlaying = true;

      // Soft Pentatonic Romance Arpeggio (C, D, E, G, A)
      const notes = [261.63, 329.63, 392.00, 440.00, 523.25, 392.00];
      let step = 0;

      const playPattern = () => {
        if (!this.isPlaying || !this.ctx) return;
        const now = this.ctx.currentTime;
        const freq = notes[step % notes.length];
        this.playBellNote(freq, now, 3.0);
        step++;
      };

      playPattern();
      this.intervalId = window.setInterval(playPattern, 1800);
    } catch {
      // Audio autoplay policy handled silently
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public getStatus() {
    return this.isPlaying;
  }
}

export const romanticAudio = new RomanticAudioSynthesizer();
