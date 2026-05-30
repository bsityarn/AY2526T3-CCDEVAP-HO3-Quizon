let num1, num2, operator, correctAnswer;
let score = 0;
const operators = ["+","-","*"];

function generateQuestion(){
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    // random index
    operator = operators[Math.floor(Math.random() * 3)];
    document.getElementById("question").innerHTML = num1 + " " + operator + " " + num2;

    if(operator == "+"){
        correctAnswer = num1 + num2;
    }else if(operator == "-"){
        correctAnswer = num1 - num2;
    }else if(operator == "*"){
        correctAnswer = num1 * num2;
    }
}

function checkAnswer(){
    
    if(document.getElementById("answer").value == correctAnswer){
        document.getElementById("message").innerHTML = "Correct!"
        document.getElementById("message").style.color = "#2afe00"
        score += 1
        document.getElementById("score").innerHTML = score
    }else{
        document.getElementById("message").innerHTML = "Wrong! Correct answer was " + correctAnswer
        document.getElementById("message").style.color = "#fe0000"
    }
    
    generateQuestion()
    if(score == 5){
        document.getElementById("div-questions").style.display = "none"
        document.getElementById("div-success").style.display = "block"
    }
}

function playAgain(){
    score = 0
    document.getElementById("message").innerHTML = ""
    document.getElementById("answer").value = ""
    document.getElementById("score").innerHTML = 0


    document.getElementById("div-questions").style.display = "block"
    document.getElementById("div-success").style.display = "none"


}