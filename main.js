const game = new Game();
const handpan = new Handpan();
const background = new Background();

const sound1 = new Sound(
  "assets/HangDrum_Sound/380504__jimthecab__hang-drum-1.wav"
);
const sound2 = new Sound(
  "assets/HangDrum_Sound/380503__jimthecab__hang-drum-2.wav"
);
const sound3 = new Sound(
  "assets/HangDrum_Sound/380502__jimthecab__hang-drum-3.wav"
);
const sound4 = new Sound(
  "assets/HangDrum_Sound/380501__jimthecab__hang-drum-4.wav"
);
const sound5 = new Sound(
  "assets/HangDrum_Sound/380508__jimthecab__hang-drum-5.wav"
);
const sound6 = new Sound(
  "assets/HangDrum_Sound/380507__jimthecab__hang-drum-6.wav"
);
const sound7 = new Sound(
  "assets/HangDrum_Sound/380506__jimthecab__hang-drum-7.wav"
);
const sound8 = new Sound(
  "assets/HangDrum_Sound/380505__jimthecab__hang-drum-8.wav"
);
const sound9 = new Sound(
  "assets/HangDrum_Sound/380509__jimthecab__hang-drum-9.wav"
);

function setup() {
  createCanvas(800, 540, width);
  game.setup();
  sound1.setup();
  sound2.setup();
  sound3.setup();
  sound4.setup();
  sound5.setup();
  sound6.setup();
  sound7.setup();
  sound8.setup();
  sound9.setup();
  handpan.setup();
}

function draw() {
  console.log("hier mein score:", score);
  clear();
  background.draw();
  handpan.draw();
  game.draw();
  if (keyIsDown(32)) {
    //spacebar
    circle(397, 271, 30);
    let c = color("gold");
    fill(c);
  } else if (keyIsDown(93)) {
    circle(399, 455, 30);
    //cmd (right hand side)
    let c = color("yellow");
    fill(c);
  } else if (keyIsDown(18)) {
    circle(528, 404, 30);
    //alt (right hand side)
    let c = color("green");
    fill(c);
  } else if (keyIsDown(190)) {
    circle(577, 294, 30);
    //.
    let c = color("purple");
    fill(c);
  } else if (keyIsDown(188)) {
    circle(553, 177, 30);
    //,
    let c = color("orange");
    fill(c);
  } else if (keyIsDown(67)) {
    circle(467, 103, 30);
    //c
    let c = color("red");
    fill(c);
  } else if (keyIsDown(88)) {
    circle(349, 100, 30);
    //x
    let c = color("magenta");
    fill(c);
  } else if (keyIsDown(89)) {
    circle(241, 202, 30);
    //y
    let c = color("blue");
    fill(c);
  } else if (keyIsDown(91)) {
    //cmd (left hand side)
    circle(263, 381, 30);
    let c = color("turquoise");
    fill(c);
  }
}

function mousePressed() {
  console.log(mouseX, mouseY);
}

function keyPressed() {
  if (keyCode === 32) {
    //spacebar
    // console.log("hey");
    sound1.sound.play();
    game.gamePatter.push("gold");
  } else if (keyCode === 93) {
    //cmd (right hand side)
    sound2.sound.play();
    game.gamePatter.push("yellow");
  } else if (keyCode === 18) {
    //alt (right hand side)
    sound3.sound.play();
    game.gamePatter.push("green");
  } else if (keyCode === 190) {
    //.
    sound4.sound.play();
    game.gamePatter.push("purple");
  } else if (keyCode === 188) {
    //,
    sound5.sound.play();
    game.gamePatter.push("orange");
  } else if (keyCode === 67) {
    //c
    sound6.sound.play();
    game.gamePatter.push("red");
  } else if (keyCode === 88) {
    //yx
    sound7.sound.play();
    game.gamePatter.push("magenta");
  } else if (keyCode === 89) {
    //y
    sound8.sound.play();
    game.gamePatter.push("blue");
  } else if (keyCode === 91) {
    //cmd (left hand side)
    sound9.sound.play();
    game.gamePatter.push("turquoise");
  }
}
