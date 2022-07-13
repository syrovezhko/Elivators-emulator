import {nextStopScreen, removeScreen} from './variables'
import {delay} from './delay'
export function addScreen(id, direction) {
  let arrow;
  if (direction > 0) arrow = '🠕';
  else arrow = '🠗';
  let screen = document.createElement("div");
  screen.innerHTML = `${arrow} ${id}`;
  screen.className = "screen";
  nextStopScreen.appendChild(screen);
}

export function dellScreen() {
  nextStopScreen.removeChild(removeScreen[0]);
}

export async function blink (t) {
  for (let i = 0; i < 3; i++) {
    await delay (t*1000);  
    nextStopScreen.classList.add("gondola-opacity");
    await delay (t*1000);
    nextStopScreen.classList.remove("gondola-opacity");  
  }
  dellScreen();
}