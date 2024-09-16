//sky scrolling
let move_speed = 3;

//gravity contant
let gravity = 0.5;

//refrence for bat
let bat = document.querySelector(".bat");

//bat properties

//.getBoundingClientRect -- returns DOMRect object that contains info about size and position of an element
let bat_props = bat.getBoundingClientRect();
let background = document.querySelector(".background").getBoundingClientRect();

//refrence for score
let score_val = document.querySelector(".score_val");
let message = document.querySelector(".message");
let score_title = document.querySelector("score_title");

//start state
let game_state = "Start";

//event listener for keypress
document.addEventListener("keydown"),
  (e) => {
    // start game if enter pressed
    if (e.key == "Enter" && game_state != "Play") {
      document.querySelectorAll();
    }
  };

//start game if enter pressed

//play function

//bat death

//set up branches
