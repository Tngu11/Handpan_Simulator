var score = 0;
class Game {
  constructor() {
    this.gamePatter = [];

    this.patterns = [
      [
        {
          color: "gold",
          function: this.gold,
          delay: 500
        },
        {
          color: "green",
          function: this.green,
          delay: 500
        },
        {
          color: "orange",
          function: this.orange,
          delay: 500
        },
        {
          color: "blue",
          function: this.blue,
          delay: 500
        }
      ],
      [
        {
          color: "magenta",
          function: this.magenta,
          delay: 400
        },
        {
          color: "green",
          function: this.green,
          delay: 400
        },
        {
          color: "turquoise",
          function: this.turquoise,
          delay: 400
        },
        {
          color: "gold",
          function: this.gold,
          delay: 400
        },
        {
          color: "orange",
          function: this.orange,
          delay: 400
        },
        {
          color: "red",
          function: this.red,
          delay: 400
        }
      ][
        ({
          color: "magenta",
          function: this.magenta,
          delay: 400
        },
        {
          color: "green",
          function: this.green,
          delay: 400
        },
        {
          color: "gold",
          function: this.gold,
          delay: 400
        },
        {
          color: "purple",
          function: this.purple,
          delay: 400
        },
        {
          color: "yelllow",
          function: this.yellow,
          delay: 400
        },
        {
          color: "red",
          function: this.red,
          delay: 400
        },
        {
          color: "gold",
          function: this.gold,
          delay: 400
        },
        {
          color: "blue",
          function: this.blue,
          delay: 400
        })
      ]
    ];
  }

  setup() {
    let button = createButton("Play");
    button.position(50, 50);
    button.mousePressed(this.playPatter);
    this.button = button;
  }

  draw() {
    if (this.circle) {
      fill(this.circle.color);
      circle(this.circle.x, this.circle.y, 30);
    }
    if (this.patter && this.gamePatter.length === this.patter.length) {
      for (let i = 0; i < this.patter.length; i++) {
        if (this.patter[i] !== this.gamePatter[i]) {
          console.log("Try it again 😉");

          return "Try it again 😉";
        }
      }
      console.log("You got the Rythm");
      score += 1;
      return "You got the Rythm";

      // if (this.patter1.equals(this.gamePatter) === true) {

      //   console.log("Nice Rythm");
      // }
    }
  }

  playPatter = () => {
    this.gamePatter = [];

    this.patter = this.patterns[
      Math.floor(Math.random() * this.patterns.length)
    ];

    let totalDelay = 0;
    this.patter.forEach(sound => {
      totalDelay += sound.delay;
      setTimeout(sound.function, totalDelay);
    });

    setTimeout(() => {
      this.circle = null;
      this.button.mousePressed(this.playPatter);
    }, totalDelay + 1000);
  };

  // playPatter2 = () => {
  //   this.gamePatter = [];
  //   this.patter = ["purple", "gold", "yellow", "magenta"];
  //   setTimeout(this.purple, 500);
  //   setTimeout(this.gold, 1000);
  //   setTimeout(this.yellow, 1500);
  //   setTimeout(this.magenta, 2000);
  //   setTimeout(() => {
  //     this.circle = null;
  //     this.button.mousePressed(this.playPatter);
  //   }, 3000);
  // };

  gold = () => {
    let c = color("gold");
    sound1.sound.play();
    this.circle = {
      color: c,
      x: 397,
      y: 271
    };
    // fill(c);
    // circle(397, 271, 30);
  };

  yellow = () => {
    let c = color("yellow");
    sound2.sound.play();
    this.circle = {
      color: c,
      x: 399,
      y: 455
    };
  };
  //cmd (right hand side)

  green = () => {
    let c = color("green");
    sound3.sound.play();
    this.circle = {
      color: c,
      x: 528,
      y: 404
    };
  };
  //alt (right hand side)

  purple = () => {
    let c = color("purple");
    sound4.sound.play();
    this.circle = {
      color: c,
      x: 577,
      y: 294
    };
  };
  //.

  orange = () => {
    let c = color("orange");
    sound5.sound.play();
    this.circle = {
      color: c,
      x: 553,
      y: 177
    };
  };
  //,

  red = () => {
    let c = color("red");
    sound6.sound.play();
    this.circle = {
      color: c,
      x: 467,
      y: 103
    };
  };
  //x

  magenta = () => {
    let c = color("magenta");
    sound7.sound.play();
    this.circle = {
      color: c,
      x: 394,
      y: 100
    };
  };
  //y

  blue = () => {
    let c = color("blue");
    sound8.sound.play();
    this.circle = {
      color: c,
      x: 241,
      y: 202
    };
  };
  //alt (left hand side)

  turquoise = () => {
    let c = color("turquoise");
    sound9.sound.play();
    this.circle = {
      color: c,
      x: 263,
      y: 381
    };
  };
  //cmd (left hand side)
}
