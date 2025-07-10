let firstName = "Jeruel";
const lastName = "Richard";
var internName = firstName + " " + lastName;
console.log(internName)

const taskOne = 10;
const taskTwo = 8;
const taskThree = 6;
let totalScore = taskOne+taskTwo+taskThree;
let averageScore = totalScore/3;
console.log(totalScore)
console.log(averageScore)

let grade;
if (averageScore >= 8) {
  grade = "A"
} else if (averageScore >= 7) {
  grade = "B"
} else if (averageScore >=6) {
  grade = "C"
} else if (averageScore >=5) {
  grade = "D"
} else if (averageScore < 5) {
  grade = "E"
} else {
  grade = "F"
}

console.log(`Intern Name: ${internName}`);
console.log(`Task One score: ${taskOne}`);
console.log(`Task Two score: ${taskTwo}`);
console.log(`Task Three score: ${taskThree}`);
console.log(`Total Score: ${totalScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Final Grade: ${grade}`);

switch(grade) {
  case "A":
    console.log("Feedback: Excellent performance!");
    break;
  case "B":
    console.log("Feedback: Great Job! Keep aiming high.");
    break;
  case "C":
    console.log("Feedback: Good effort! Try to improve.");
    break;
  case "D":
    console.log("Feedback: You're close. Keep working at it.");
    break;
  case "E":
    console.log("Feedback: Don't give up! You can do better next time.");
    break;
  default:
  console.log("Invalid Grade.");
}