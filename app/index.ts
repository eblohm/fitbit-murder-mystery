import document from 'document';
import {
  Murderer,
  roomArray,
  titleScreen,
  mainScreen,
  roomScreen,
  newGame,
  roomSelect,
  dataLog,
  makeGuess,
  playAgain,
  winScreen,
  returnButton,
  wrongScreen,
  makeGuessText,
} from './gameVariables';
import {
  setMurderer,
  guessCharacter,
  checkGuess,
  newRoomTarget,
  generateHouse,
} from './gameFunctions';

let murderer: Murderer = { name: '', room: '', weapon: '' };
let guess: Murderer = { name: '', room: '', weapon: '' };
let prevGuessses: Array<Murderer> = [];
let house = {
  kitchen: '',
  bedroom: '',
  office: '',
  library: '',
  bathroom: '',
  basement: '',
  garage: '',
  den: '',
  attic: '',
  backyard: '',
};

newGame.onclick = evt => {
  murderer = setMurderer();
  generateHouse();
  titleScreen.style.display = 'none';
  mainScreen.style.display = 'inline';
  console.log(JSON.stringify(murderer));
};

playAgain.onclick = evt => {
  murderer = setMurderer();
  winScreen.style.display = 'none';
  mainScreen.style.display = 'inline';
  console.log(`New Killer: ${JSON.stringify(murderer)}`);
};

returnButton.onclick = evt => {
  prevGuessses.push({
    name: guess.name,
    room: guess.room,
    weapon: guess.weapon,
  });
  guess.name = '';
  guess.room = '';
  guess.weapon = '';
  wrongScreen.style.display = 'none';
  mainScreen.style.display = 'inline';
};

roomSelect.onclick = evt => {
  guess = newRoomTarget(guess);
  makeGuessText.style.display = 'none';
};

makeGuess.onclick = evt => {
  guess = guessCharacter(guess, murderer);
};

dataLog.onclick = evt => {
  console.log(`Data: ${JSON.stringify(guess)}`);
  console.log(`Prev Guesses: ${JSON.stringify(prevGuessses)}`);
};
