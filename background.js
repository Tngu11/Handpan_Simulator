let img;
let bg;
// let font,
//   fontsize = 22;

function preload() {
  img = loadImage("assets/handpan_img.png");
  bg = loadImage("assets/background.jpg");
  // font = loadFont("assets/KaushanScript-Regular.otf");
}

class Handpan {
  constructor() {
    this.Handpan = 0;
  }

  setup() {}

  draw() {
    image(img, 200, 35, 600, 600);
  }

  imageLoaded(img) {
    image(img, 0, 0);
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
