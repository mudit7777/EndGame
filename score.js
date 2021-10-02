var readlineSync = require("readline-sync");
var userName = readlineSync.question("What's your name? ");
console.log("Welcome "+ userName + " to Do You Know Mudit");
var score = 0;
// play function 
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer) {
    console.log("Right!");
    score = score + 1;
    console.log("current score is: " + score);
  } else {
    console.log("Wrong");
  }
}


var questions = [
  {
  question: "Where do I Live ",
  answer: "Panipat"
},{
  question: "Who is my favourite superhero ",
  answer: "Batman"
}, {
  question: "Where do I Work ",
  answer: "Student"
}];
for(var i = 0 ; i < questions.length; i++) {
  var currentQues = questions[i];
  play(currentQues.question, currentQues.answer);
}
console.log("YAY! Your end game score is: "+ score);