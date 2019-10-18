import document from 'document';
import {
  Murderer,
  roomArray,
  characterArray,
  weaponArray,
} from './gameVariables';

export function setMurderer() {
  let murdererInfo: Murderer = {
    name: '',
    room: '',
    weapon: '',
  };

  murdererInfo.name =
    characterArray[Math.floor(Math.random() * characterArray.length)];
  murdererInfo.room = roomArray[Math.floor(Math.random() * roomArray.length)];
  murdererInfo.weapon =
    weaponArray[Math.floor(Math.random() * weaponArray.length)];

  return murdererInfo;
  console.log('hi');
}

export function checkGuess(guess: Murderer, murderer: Murderer) {
  let murdererName: boolean = false;
  let murdererRoom: boolean = false;
  let murdererWeapon: boolean = false;

  // Check if the character was right
  if (guess.name === murderer.name) {
    murdererName = true;
  }

  // Check if the room was right
  if (guess.room === murderer.room) {
    murdererRoom = true;
  }

  // Check if the weapon was right
  if (guess.weapon === murderer.weapon) {
    murdererWeapon = true;
  }

  if (murdererName && murdererRoom && murdererWeapon) {
    return `You caught the killer!`;
  }

  if (!murdererName) {
    return `${guess.name} is not the killer...continue looking!`;
  }

  if (!murdererRoom) {
    return `${guess.room} was not where the murder happened...keep searching!`;
  }

  if (!murdererWeapon) {
    return `${guess.weapon} was not the weapon used.`;
  }
}
