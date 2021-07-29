import _ from "lodash";
import printMe from "./print.js";
import moon from "./moon.png";
import "./style.css";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  const img = new Image();
  img.src = moon;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
