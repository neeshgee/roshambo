function log(message) {
  document.write("<p>" + message + "</p>");
};

// Usage:
// var answer = prompt("What is the Answer to the Ultimate Question of Life, the Universe, and Everything?")
// log("You answered: " + answer);

function javascript_abort(){
  throw new Error("Aborting mission!");
}

var name = prompt("Enter your name");
if(name.length === 0){
  javascript_abort();
};

var userEngageScore = 0
var computerEngageScore = 0
var userBoutScore = 0
var computerBoutScore = 0
var userMatchScore = 0
var computerMatchScore = 0

// return 1 if the user wins, 2 for computer, 0 for tie;
var engagement = function(user, computer){
  // var user = []
  // var computer = []

  if(user == computer) {
    log("It's a tie!");
    return 0;
  } else if(user == "rock" && computer == "scissors") {
    log("Rock wins!");
    return 1;

  } else if (user == "scissors" && computer == "rock") {
    log("Rock wins!");
    return 2;

  } else if (user == "rock" && computer == "paper") {
    log("Paper wins!");
    return 2;

  } else if (user == "paper" && computer == "rock") {
    log("Paper wins!");
    return 1;

  } else if (user == "paper" && computer == "scissors") {
    log("Scissors win!");
    return 2;

  } else if (user == "scissors" && computer == "paper") {
    log("Scissors win!");
    return 1;

  }
  // var sum = 0
  // for( var i = 0; i < user.length; i++){
  // sum += arr[i];
  // }
  // return sum
  // for( var i = 0; i < computer.length; i++){
  // sum += arr[i];
  // }
  // return sum
  // if(user > computer){
  //   log("You win the engagement");
  // }
  // else {
  //   log("The computer wins the match");
  // }
}


var engage = 1
var bout = 0
var match = 0

  while (engage <= 9 ) {
  engage = engage + 1
  if( engage % 3) {
    bout++;
  }
  else if (bout == 3) {
    match == 1
  }


  var userChoice = prompt(name + ", Rock, Paper, or Scissors? ");
  var computer = Math.random();
  var computerAnswer = null;

  if(computer < .33){
    computerAnswer = "rock";
  }
  else if(computer >= .33 && computer <= .67){
    computerAnswer = "paper";
  }
  else {
    computerAnswer = "scissors";
  };
  console.log(computer);

  log("Computer chooses " + computerAnswer);

  var winner = engagement(userChoice, computerAnswer);

  if(winner == 1){
    log("You win the engagement");
    userEngageScore++;


  }
  else if(winner == 2) {
    log("The computer wins the engagement");
    computerEngageScore++;
  }

};



if( userEngageScore == 2 || 3 ) {
   userBoutScore++;
   log("You win the bout");
 }
 else if( computerEngageScore == 2 || 3) {
   computerBoutScore++;
   log("Computer wins the bout");
 }
 if (userBoutScore == 2 || 3 ) {
   userMatchScore == 1
   log("Congrats! You win the match!!!");
 }
 else if(computerBoutScore == 2 || 3 ) {
   computerMatchScore == 1
   log("The computer wins the match");
 }





// while engage <= 3 bout <= 3 while bout <= 3 match is <= 3
// if userScore = 2 || computerScore = 2 javascript_abort
// if userScore > computerScore log you win match else log computer wins match
// if userScore
// prompt("The winner is " + winner);
