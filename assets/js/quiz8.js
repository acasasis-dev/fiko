// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz8");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv= document.getElementById("scoreContainer");

// create questions
let questions = [
    {
        question : "",
        imgSrc : base_url+"/images/MG.jpg",
        choiceA : "안녕하세요.",
        choiceB : "안녕하세요.",
        choiceC : "아무것도",
        choiceD : "좋은 밤",
        correct : "D",
    },{
        question : "",
        imgSrc : base_url+"/images/YW.jpg",
        choiceA : "기억하십시오.",
        choiceB : "잘 지냈어요",
        choiceC : "아무것도",
        choiceD : "좋은 밤",
        correct : "C",
    },{
        question : "",
        imgSrc : base_url+"/images/IK.jpg",
        choiceA : "안녕히",
        choiceB : "기억하십시오.",
        choiceC : "고마워",
        choiceD : "아무것도",
        correct : "B",  
    },{
       question : "",
        imgSrc : base_url+"/images/T.jpg",
        choiceA : "고마워.",
        choiceB : "아무것도",
        choiceC : "기억하십시오.",
        choiceD : "좋은 밤",
        correct : "A",  
    },{
       question : "",
        imgSrc : base_url+"/images/IKM.jpg",
        choiceA : "좋은 일본어",
        choiceB : "기억하십시오.",
        choiceC : "만나서 반갑습니다.",
        choiceD : "아무것도",
        correct : "C",  
    },{
       question : "",
        imgSrc : base_url+"/images/SKK.jpg",
        choiceA : "좋은 밤",
        choiceB : "너 어디서 살니?",
        choiceC : "좋은 일본어",
        choiceD : "잘 지냈어요?",
        correct : "B",  
    },{
        question : "",
        imgSrc : base_url+"/images/K.jpg",
        choiceA : "너 어디서 살니?",
        choiceB : "고마워.",
        choiceC : "안녕히",
        choiceD : "잘 지냈어요?",
        correct : "D",  
    },{
        question : "",
        imgSrc : base_url+"/images/P.jpg",
        choiceA : "안녕히",
        choiceB : "좋은 밤",
        choiceC : "기억하십시오.",
        choiceD : "고마워.",
        correct : "A",  
    },{
        question : "",
        imgSrc : base_url+"/images/MU.jpg",
        choiceA : "좋은 밤",
        choiceB : "좋은 일본어",
        choiceC : "고마워.",
        choiceD : "굿모닝",
        correct : "D",  
    },{
        question : "",
        imgSrc : base_url+"/images/MH.jpg",
        choiceA : "고마워.",
        choiceB : "좋은 일본어",
        choiceC : "좋은 밤",
        choiceD : "굿모닝",
        correct : "B",  
    }
    
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 5;
const gaugeWidth = 150; 
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render question 
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question + "</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,900);
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; 
        qIndex++){
            progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }    
}

//counter render 

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }    
}

// checkAnswer

function checkAnswer(answer){
    if ( answer == questions[runningQuestion].correct){
         // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
        
    }
}

// answer is Correct
function answerIsCorrect(){
    
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePercent = Math.round(10 * score/questions.length);
    
    //choose the image based on the scorePerCent
    let img = (scorePercent >= 8) ? base_url+"/images/5.png" :
              (scorePercent >= 6) ? base_url+"/images/4.png" :
              (scorePercent >= 4) ? base_url+"/images/3.png" :
              (scorePercent >= 2) ? base_url+"/images/2.png" :
              base_url+"/images/1.png";
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>Your Score is:"+ scorePercent +"</p>"

}