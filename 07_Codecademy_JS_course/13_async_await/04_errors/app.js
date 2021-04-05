const cookBeanSouffle = require('./library.js');

async function hostDinnerParty(){
  try {
    let value = await cookBeanSouffle();
    console.log(`${value} is served!`);
  } catch(error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
}
hostDinnerParty();
