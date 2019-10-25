import document from 'document';
import {
  Murderer,
  roomArray,
  characterArray,
  weaponArray,
  mainScreen,
  roomScreen,
  guessScreen,
  characterScreen,
  weaponScreen,
  winScreen,
  wrongScreen,
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
}

export function newRoomTarget(guess: Murderer) {
  mainScreen.style.display = 'none';
  roomScreen.style.display = 'inline';

  let VTList: any = document.getElementById('room-list');
  const NUM_ELEMS: number = 10;

  VTList.delegate = {
    getTileInfo: function(index) {
      return {
        type: 'room-pool',
        value: 'Menu Item',
        index: index,
      };
    },
    configureTile: function(tile, info) {
      if (info.type == 'room-pool') {
        tile.getElementById('text').text = `${roomArray[info.index]}`;
        let touch = tile.getElementById('touch-me');
        touch.onclick = evt => {
          guess.room = tile.getElementById('text').text;
          roomScreen.style.display = 'none';
          mainScreen.style.display = 'inline';
          return guess;
        };
      }
    },
  };

  VTList.length = NUM_ELEMS;
  return guess;
}

export function guessCharacter(guess: Murderer, murderer: Murderer) {
  mainScreen.style.display = 'none';
  guessScreen.style.display = 'inline';
  characterScreen.style.display = 'inline';

  let VTList: any = document.getElementById('character-list');
  const NUM_ELEMS: number = 10;

  VTList.delegate = {
    getTileInfo: function(index) {
      return {
        type: 'character-pool',
        value: 'Menu Item',
        index: index,
      };
    },
    configureTile: function(tile, info) {
      if (info.type == 'character-pool') {
        tile.getElementById('text').text = `${characterArray[info.index]}`;
        let touch = tile.getElementById('touch-me');
        touch.onclick = evt => {
          guess.name = tile.getElementById('text').text;
          characterScreen.style.display = 'none';
          weaponScreen.style.display = 'inline';
          guessWeapon(guess, murderer);
          return guess;
        };
      }
    },
  };

  VTList.length = NUM_ELEMS;
  return guess;
}

export function guessWeapon(guess: Murderer, murderer: Murderer) {
  let VTList: any = document.getElementById('weapon-list');
  const NUM_ELEMS: number = 10;

  VTList.delegate = {
    getTileInfo: function(index) {
      return {
        type: 'weapon-pool',
        value: 'Menu Item',
        index: index,
      };
    },
    configureTile: function(tile, info) {
      if (info.type == 'weapon-pool') {
        tile.getElementById('text').text = `${weaponArray[info.index]}`;
        let touch = tile.getElementById('touch-me');
        touch.onclick = evt => {
          guess.weapon = tile.getElementById('text').text;
          weaponScreen.style.display = 'none';
          guessScreen.style.display = 'none';
          checkGuess(guess, murderer);
        };
      }
    },
  };

  VTList.length = NUM_ELEMS;
  return guess;
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
    winScreen.style.display = 'inline';
  } else {
    wrongScreen.style.display = 'inline';
  }

  const killerInfo: any = document.getElementById('killer-info');
  const roomInfo: any = document.getElementById('room-info');
  const weaponInfo: any = document.getElementById('weapon-info');

  if (!murdererName) {
    killerInfo.text = `${guess.name} is not the killer...continue looking!`;
  }

  if (!murdererRoom) {
    // Todo: room themed messages
    roomInfo.text = `${guess.room} was not where the murder happened...keep searching!`;
  }

  if (!murdererWeapon) {
    // ? weapon themed messages
    weaponInfo.text = `${guess.weapon} was not the weapon used.`;
  }

  return true;
}
