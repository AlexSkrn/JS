/*
 * Programming Quiz: capitalize the first letter of the day
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here
for (let day of days) {
    console.log(day[0].toUpperCase() + day.substring(1));
}

// solution
for (const day of days) {
  var upperDay = day.charAt(0).toUpperCase() + day.slice(1);
  console.log(upperDay);
}
