console.log("Hello Royals!");

// gets the current date from the computer
const today = new Date();

console.log(today);

function checkForFriday(day){
  if(day.getDay() === 5){ //checks if the day is friday
    document.querySelector('#answer').innerHTML = 'YES!';
  } else {
    document.querySelector('#answer').innerHTML = 'No :(';
  }

}// end of checkForFriday

checkForFriday(today);
