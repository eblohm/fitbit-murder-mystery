import document from 'document';
import { Murderer } from './gameVariables';
import { setMurderer } from './gameFunctions';

// Variables
const newGame = document.getElementById('start-button');
const titleScreen: any = document.getElementById('title-screen');
const mainScreen: any = document.getElementById('home-screen');
const homeList = document.getElementById('game-options');
const homeListItems = homeList.getElementsByClassName('option-item');

newGame.onclick = function(evt) {
  const murderer: Murderer = setMurderer();
  titleScreen.style.display = 'none';
  mainScreen.style.display = 'inline';
  console.log('hi');
};

homeListItems.forEach((element, index) => {
  let touch = element.getElementById('touch-me');
  touch.onclick = evt => {
    console.log(`touched: ${index}`);
  };
});

const test = document.getElementById('room-travel').getElementById('touch-me');

test.onclick = evt => {
  console.log('kliked2');
};
