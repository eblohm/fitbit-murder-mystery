import document from 'document';
import { mainScreen, roomScreen, roomArray } from './gameVariables';

export function newRoomTarget() {
  let newRoom: string = '';

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
          newRoom = tile.getElementById('text').text;
          roomScreen.style.display = 'none';
          mainScreen.style.display = 'inline';
          console.log(`In this: ${newRoom}`);
        };
      }
    },
  };

  VTList.length = NUM_ELEMS;
  console.log(`New Room ${newRoom}`);
  return newRoom;
}
