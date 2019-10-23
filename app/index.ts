import document from 'document';
import {
  Murderer,
  roomArray,
  titleScreen,
  mainScreen,
  roomScreen,
  newGame,
  roomSelect,
  roomTarget,
} from './gameVariables';
import { setMurderer } from './gameFunctions';
import { newRoomTarget } from './gameDisplay';

console.log(`Hello!!!! ${roomTarget}`);

newGame.onclick = evt => {
  const murderer: Murderer = setMurderer();
  titleScreen.style.display = 'none';
  mainScreen.style.display = 'inline';
};

let testTarget: string = '';
roomSelect.onclick = evt => {
  testTarget = newRoomTarget();
  console.log(`Target: ${testTarget}`);
};
