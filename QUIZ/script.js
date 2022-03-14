// Welcome to user
(function () {
    "use strict";
function update(element,content,klass) {
    let p = element.firstChild || document.createElement("p");
    p.textContent = content;
    element.appendChild(p);
    if(klass){
        p.className = klass;
    }
}

//DOM REFERENCES//

const $question = document.getElementById("question");
const $score = document.getElementById("score");
const $feedback = document.getElementById("feedback");
const $start = document.getElementById("start");
const $form = document.getElementById("answer");
const $timer = document.getElementById("timer");

$start.addEventListener('click', function() { play(quiz) } , false);

const quiz = {
    "name": "Super Hero Name Quiz",
    "description": "How many superhero can you name ?",
    "question": "What is the real name of ",
    "questions":[
        {"question": "Superman", "answer": "Clark Kent"},
        {"question": "Batman", "answer": "Bruce Wayne"},
        {"question": "Wonder Woman", "answer": "Dianna Prince"}
    ]
};

let score = 0;
play(quiz);

function hide(element){
    element.style.display = "none";
}
function show(element){
    element.style.display = "block";
}
hide($form);

function play(quiz){
let time = 20;
update($timer,time);
let interval = window.setInterval(countDown, 1000);

    hide($start);
    show($form);
    update($score,score);
    $form.addEventListener("submit",function(event){
        event.preventDefault();
        check($form[0].value);
    },false);

    let i = 0;
    chooseQuestion();

        function chooseQuestion(){
            let question = quiz.questions[i].question;
            ask(question);
        }

        function ask(question){
            update($question, quiz.question + question);
            $form[0].value = "";
            $form[0].focus();

        }
        function check(answer){
            if(answer === quiz.questions[i].answer){
                update($feedback,"Correct!","right");
                score++;
                update($score,score);
            }else{
                update($feedback,"Wrong!","wrong");
                }
                i++;
                if(i === quiz.questions.length){
                    gameOver();
                }else{
                    chooseQuestion();
                }
        }
        function countDown() {
            time --;
            update($timer,time);
            if(time <= 0){
                gameOver();
            }
        }
        function gameOver(){
            update($question, "Game Over, you scored " + score + " points" );
            window.clearInterval(interval);
            gameOver();

        }


    }

    hide($form);
    show($start);
}())

console.log("chooseQuestion() invoked");
console.log("ask() invoked");
console.log("check() invoked");
console.log("gameOver() invoked")