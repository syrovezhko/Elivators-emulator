import {delay} from './delay'
import {lastId} from './elevatorCall'

export let floorHeightG = 400;

export function setFloorHeight (value) {
  floorHeightG = value;
}

export function heightChange (f) {
  document.getElementsByClassName('gondola-position')[0].style.top = `${f +"px"}`;
}

export async function gondolaMotion (id, direction) {
  for (let m = 100 * Math.abs(id-lastId); m > 0; m--) {
    await delay (10);
    if (direction > 0) floorHeightG--;
    else floorHeightG++;
    heightChange (floorHeightG);
  }
}

