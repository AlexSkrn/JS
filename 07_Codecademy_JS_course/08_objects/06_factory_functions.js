const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    }
  }
};
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'


const monsterFactory = (name, age) => {
  return {
    name: name,
    age: age
  }
};
const monsterFactory = (name, age) => {
  return {
    name,
    age
  }
};
