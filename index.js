import { characters } from "./character.js";

console.log(characters);

let pass1 = document.getElementById("password1");

let pass2 = document.getElementById("password2");

let PassBtn = document.getElementById("btn");

let secondClick = false;

PassBtn.addEventListener("click", function () {
  Render();
  secondClick = true;
});

function Render() {
  if (secondClick) {
    pass1.textContent = "";
    pass2.textContent = "";
    for (let i = 0; i < 15; i++) {
      let random1 = Math.floor(Math.random() * characters.length);
      let random2 = Math.floor(Math.random() * characters.length);

      pass1.textContent += characters[random1];
      pass2.textContent += characters[random2];
      console.log(i);
      secondClick = true;
    }
  } else {
    for (let i = 0; i < 15; i++) {
      let random1 = Math.floor(Math.random() * characters.length);
      let random2 = Math.floor(Math.random() * characters.length);

      pass1.textContent += characters[random1];
      pass2.textContent += characters[random2];
      console.log(i);
      secondClick = true;
    }
  }
}
