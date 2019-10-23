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
const gameOverScreen: any = document.getElementById('gameover-screen');

// Button Variables
const newGame: any = document.getElementById('start-button');
const roomSelect: any = document
  .getElementById('room-travel')
  .getElementById('button');
const makeGuess: any = document
  .getElementById('make-guess')
  .getElementById('button');
const prevGuess: any = document
  .getElementById('prev-guess')
  .getElementById('button');

// Game Variables
let roomTarget: any = '';

export {
  Murderer,
  roomArray,
  characterArray,
  weaponArray,
  titleScreen,
  mainScreen,
  roomScreen,
  gameOverScreen,
  newGame,
  roomSelect,
  makeGuess,
  prevGuess,
  roomTarget,
};
