class Game {
  constructor() {
    this.gamePatter = [];
    // this.score = 0;
    this.patterns = [
      [
        {
          color: "darkred",
          function: this.darkred,
          delay: 500
        },
        {
          color: "darkblue",
          function: this.darkblue,
          delay: 500
        },
        {
          color: "indigo",
          function: this.indigo,
          delay: 500
        },
        {
          color: "turquoise",
          function: this.turquoise,
          delay: 500
        },
        {
          color: "red",
          function: this.red,
          delay: 500
        },
        {
          color: "green",
          function: this.green,
          delay: 500
        },
        {
          color: "purple",
          function: this.purple,
          delay: 500
        },
        {
          color: "orange",
          function: this.orange,
          delay: 500
        },
        {
          color: "gold",
          function: this.gold,
          delay: 500
        }
      ],
      [
        {
          color: "darkred",
          function: this.darkred,
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
      ],
      [
        {
          color: "indigo",
          function: this.indigo,
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
          color: "yellow",
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
        }
      ]
    ];
  }

  setup() {
    let button = createButton("Play");
    // let col = color("");
    button.position(50, 50);
    button.mousePressed(this.playPatter);
    this.button = button;
    // button.style("background-color", col);
  }

  draw() {
    if (this.circle) {
      fill(this.circle.color);
      circle(this.circle.x, this.circle.y, 30);
    }
    if (this.pattern && this.gamePatter.length === this.pattern.length) {
      for (let i = 0; i < this.pattern.length; i++) {
        if (this.pattern[i] !== this.gamePatter[i]) {
          console.log("Try it again 😉");

          return "Try it again 😉";
        } else {
          // this.score += 1;
        }
      }
      console.log("You got the Rythm");
      return "You got the Rythm";

      // if (this.patter1.equals(this.gamePatter) === true) {
      //   console.log("Keep playing");
      // }
    }
  }

  playPatter = () => {
    this.gamePatter = [];

    this.patter = this.patterns[
      Math.floor(Math.random() * this.patterns.length)
    ]; // random array of patterns from patterns

    let totalDelay = 0;
    this.patter.forEach(sound => {
      totalDelay += sound.delay;
      setTimeout(sound.function, totalDelay);
    });

    // totalDelay += this.patter.delay;
    // setTimeout(this.patter.function, totalDelay);

    setTimeout(() => {
      this.circle = null;
      // this.button.mousePressed(this.playPatter);
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

  darkred = () => {
    let c = color("darkred");
    sound1.sound.play();
    this.circle = {
      color: c,
      x: 500,
      y: 322
    };
  };
  //spacebar

  darkblue = () => {
    let c = color("darkblue");
    sound2.sound.play();
    this.circle = {
      color: c,
      x: 513,
      y: 513
    };
  };
  //m

  indigo = () => {
    let c = color("indigo");
    sound3.sound.play();
    this.circle = {
      color: c,
      x: 374,
      y: 464
    };
  };
  //c

  turquoise = () => {
    let c = color("turquoise");
    sound4.sound.play();
    this.circle = {
      color: c,
      x: 644,
      y: 447
    };
  };
  //k

  red = () => {
    let c = color("red");
    sound5.sound.play();
    this.circle = {
      color: c,
      x: 322,
      y: 344
    };
  };
  //d

  green = () => {
    let c = color("green");
    sound6.sound.play();
    this.circle = {
      color: c,
      x: 688,
      y: 311
    };
  };
  //i

  purple = () => {
    let c = color("purple");
    sound7.sound.play();
    this.circle = {
      color: c,
      x: 362,
      y: 202
    };
  };
  //e

  blue = () => {
    let c = color("blue");
    sound8.sound.play();
    this.circle = {
      color: c,
      x: 618,
      y: 188
    };
  };
  //8

  gold = () => {
    let c = color("gold");
    sound9.sound.play();
    this.circle = {
      color: c,
      x: 488,
      y: 144
    };
  };
  //4
}
