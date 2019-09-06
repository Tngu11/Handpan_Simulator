const game = new Game();
const handpan = new Handpan();
const background = new Background();

const sound1 = new Sound("assets/Handpan_Sound/hang-drum-1.wav");
const sound2 = new Sound("assets/Handpan_Sound/hang-drum-2.wav");
const sound3 = new Sound("assets/Handpan_Sound/hang-drum-3.wav");
const sound4 = new Sound("assets/Handpan_Sound/hang-drum-4.wav");
const sound5 = new Sound("assets/Handpan_Sound/hang-drum-5.wav");
const sound6 = new Sound("assets/Handpan_Sound/hang-drum-6.wav");
const sound7 = new Sound("assets/Handpan_Sound/hang-drum-7.wav");
const sound8 = new Sound("assets/Handpan_Sound/hang-drum-8.wav");
const sound9 = new Sound("assets/Handpan_Sound/hang-drum-9.wav");

const backgroundSound = new Sound("assets/Handpan_Sound/background.mp3 ");

// function preload() {
// backgroundSound.preload();
// }

function setup() {
  createCanvas(1260, 666);
  game.setup();
  // textFont(font);
  // textSize(fontsize);
  // textAlign(CENTER, CENTER);
  backgroundSound.setup();
  // backgroundSound.play();
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
  //console.log(score);
  clear();
  background.draw();
  // textSize(22);
  // text(`Score: ${game.score}`, 30, 500);
  // fill("white");
  // textAlign(RIGHT);
  // drawWords(width * 0.75);
  // text("Play the Rythm");
  // textSize(22);
  // fill("242, 245, 250");
  handpan.draw();
  game.draw();
  if (keyIsDown(32)) {
    //spacebar
    circle(500, 322, 30);
    let c = color("darkred");
    fill(c);
  } else if (keyIsDown(77)) {
    circle(513, 513, 30);
    //m
    let c = color("darkblue");
    fill(c);
  } else if (keyIsDown(67)) {
    circle(374, 464, 30);
    //c
    let c = color("indigo");
    fill(c);
  } else if (keyIsDown(75)) {
    circle(644, 447, 30);
    //k
    let c = color("turquoise");
    fill(c);
  } else if (keyIsDown(68)) {
    circle(322, 344, 30);
    //d
    let c = color("red");
    fill(c);
  } else if (keyIsDown(73)) {
    circle(688, 311, 30);
    //i
    let c = color("green");
    fill(c);
  } else if (keyIsDown(69)) {
    circle(362, 202, 30);
    //e
    let c = color("purple");
    fill(c);
  } else if (keyIsDown(56)) {
    circle(618, 188, 30);
    //8
    let c = color("orange");
    fill(c);
  } else if (keyIsDown(52)) {
    //4
    circle(488, 144, 30);
    let c = color("gold");
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
  } else if (keyCode === 77) {
    //m
    sound2.sound.play();
    game.gamePatter.push("yellow");
  } else if (keyCode === 67) {
    //c
    sound3.sound.play();
    game.gamePatter.push("green");
  } else if (keyCode === 75) {
    //k
    sound5.sound.play();
    game.gamePatter.push("orange");
  } else if (keyCode === 68) {
    //d
    sound7.sound.play();
    game.gamePatter.push("magenta");
  } else if (keyCode === 73) {
    //i
    sound8.sound.play();
    game.gamePatter.push("blue");
  } else if (keyCode === 69) {
    //e
    sound9.sound.play();
    game.gamePatter.push("turquoise");
  } else if (keyCode === 56) {
    //8
    sound6.sound.play();
    game.gamePatter.push("red");
  } else if (keyCode === 52) {
    //4
    sound4.sound.play();
    game.gamePatter.push("purple");
  } else if (keyCode === 13) {
    //enter
    backgroundSound.sound.play();
  } else if (keyCode === 16) {
    //shift right
    backgroundSound.sound.stop();
  }
}

// function drawWords() {
//   fill("242, 245, 250");
//   text("Play the Rythm");
// }
