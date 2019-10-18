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

export { Murderer, roomArray, characterArray, weaponArray };
