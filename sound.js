let sound;

class Sound {
  constructor(wave) {
    this.wave = wave;
  }

  setup() {
    this.sound = loadSound(this.wave);
  }
}
