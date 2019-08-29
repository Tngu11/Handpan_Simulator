let img;
let bg;

function preload() {
  img = loadImage("assets/handpan.png");
  bg = loadImage("assets/background1.png");
}

class Handpan {
  constructor() {
    this.Handpan = 0;
  }

  setup() {
    // image(img, 0, 0, width, height);
  }

  draw() {
    image(img, 0, 5, width, height);
  }

  imageLoaded(img) {
    image(img, 800, 800);
  }
}

class Background {
  constructor() {
    this.background = 0;
  }

  draw() {
    image(bg, 0, 0, width, height);
  }
}
