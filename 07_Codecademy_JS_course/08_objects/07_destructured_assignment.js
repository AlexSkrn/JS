const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};
const residence = vampire.residence;
console.log(residence); // Prints 'Transylvania'

const { residence } = vampire;
console.log(residence); // Prints 'Transylvania'

const { day } = vampire.preferences; // grab nested properties
console.log(day); // Prints 'stay inside'
