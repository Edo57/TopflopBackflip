// Welcome to user
alert ("Welcome to Quiz Ninja!");

const quiz = [
    ["What is Superman's real name ?","Clark Kent"],
    ["What is WonderWoman's real name ?","Dianna Prince"],
    ["What is Batman's real name ?","Bruce Wayne"]
];

let score = 0;

for(let i = 0, max = quiz.length; i < max; i++){
// get answer from user
let answer = prompt(quiz[i][0]);

// check if answer is correct
if(answer === quiz[i][1]){
    alert("Correct")
    score ++;
}else{
    alert("Invalid answer")
}
}