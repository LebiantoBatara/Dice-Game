var person1 = "";
while (person1 === "" || person1 === null) {
  var person1 = prompt("Player 1's Name:");
}

var person2 = "";
while (person2 === "" || person2 === null) {
  var person2 = prompt("Player 2's Name:");
}

document.querySelector(".player1").innerHTML = person1;
document.querySelector(".player2").innerHTML = person2;


function rollTheDice(){
  var randomNumber1 = Math.floor((Math.random() * 6) +1);// create random number between 1 and 6
  var randomImage1 = "dice" + randomNumber1 + ".png";
  var randomImageLocation = "images/" + randomImage1;
  document.querySelectorAll("img")[0].setAttribute("src", randomImageLocation);

  var randomNumber2 = Math.floor((Math.random() * 6) + 1);
  var randomImageLocation = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageLocation);

  if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = person1 +" Wins";
  } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = person2 +" Wins";
  } else if(randomNumber1 === randomNumber2){
      document.querySelector("h1").innerHTML = "DRAW"
  }
}
