import {addScreen, dellScreen, blink} from './screen'
import {gondolaMotion} from './gondola'
import {blinkTime} from './variables'

export let lastId = 1;

export async function elevatorCall(id) {
  addScreen(id, id-lastId);
  if (lastId != id) {
    await gondolaMotion (id, id-lastId);
    blink (blinkTime);
  } else {
    dellScreen();
  }
  lastId = id;
}
