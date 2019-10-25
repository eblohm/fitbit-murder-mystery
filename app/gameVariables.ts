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

const houseDistance: number[][] = [
  [0, 1000, 1500, 2000, 2250, 2500, 2750, 3000, 3250, 3500],
  [1000, 0, 750, 1500, 1750, 2000, 2500, 2250, 3000, 2650],
  [1500, 750, 0, 2342, 1254, 1832, 2984, 3210, 521, 1423],
  [3423, 1342, 2342, 0, 4102, 910, 1359, 2341, 1005, 2610],
  [1235, 2355, 1348, 793, 0, 3153, 1554, 1876, 1357, 2354],
  [3648, 1320, 863, 1578, 3327, 0, 2930, 1864, 1492, 2583],
  [4158, 2135, 1869, 1935, 730, 1264, 0, 2186, 1836, 793],
  [3186, 2430, 1820, 1362, 2469, 694, 1264, 0, 2189, 1569],
  [2846, 1568, 1892, 1735, 2358, 3549, 543, 1836, 0, 2058],
  [5632, 2158, 3157, 1548, 1358, 935, 2594, 1595, 1843, 0],
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

// Tile List Variables
const makeGuessText: any = document.getElementById('make-guess');

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
  makeGuessText,
};
