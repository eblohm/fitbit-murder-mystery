import document from 'document';

interface Murderer {
  name: string;
  room: string;
  weapon: string;
}

const roomArray: string[] = [
  'Kitchen',
  'Bedroom',
  'Office',
  'Library',
  'Bathroom',
  'Basement',
  'Garage',
  'Den',
  'Attic',
  'Backyard',
];

const characterArray: string[] = [
  'The Boss',
  'The Developer',
  'The Chef',
  'The Rabbit',
  'The Janitor',
  'The Homeowner',
  'The Athlete',
  'The Driver',
  'The Dog',
  'The Couch Potato',
];

const weaponArray: string[] = [
  'Knife',
  'Rope',
  'Saw',
  'Tree Branch',
  'Fork',
  'Dinner Plate',
  'Frying Pan',
  'Lamp',
  'Keyboard',
  'Steel Toe Boots',
];

// Screen Variables
const titleScreen: any = document.getElementById('title-screen');
const mainScreen: any = document.getElementById('home-screen');
const roomScreen: any = document.getElementById('room-screen');
const guessScreen: any = document.getElementById('guess-screen');
const characterScreen: any = document.getElementById('character-list');
const weaponScreen: any = document.getElementById('weapon-list');
const noticeScreen: any = document.getElementById('notice-screen');
const winScreen: any = document.getElementById('win-screen');
const wrongScreen: any = document.getElementById('wrong-screen');

// Button Variables
const newGame: any = document.getElementById('start-button');
const playAgain: any = document.getElementById('play-again');
const returnButton: any = document.getElementById('return-button');
const roomSelect: any = document
  .getElementById('room-travel')
  .getElementById('button');
const makeGuess: any = document
  .getElementById('make-guess')
  .getElementById('button');
const prevGuess: any = document
  .getElementById('prev-guess')
  .getElementById('button');
const dataLog: any = document
  .getElementById('log-stuff')
  .getElementById('button');

export {
  Murderer,
  roomArray,
  characterArray,
  weaponArray,
  titleScreen,
  mainScreen,
  roomScreen,
  guessScreen,
  characterScreen,
  weaponScreen,
  noticeScreen,
  winScreen,
  wrongScreen,
  newGame,
  playAgain,
  returnButton,
  roomSelect,
  makeGuess,
  prevGuess,
  dataLog,
};
