// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz6");
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
        imgSrc : base_url+"/images/Truck.jpg",
        choiceA : "트럭",
        choiceB : "비행기",
        choiceC : "버스",
        choiceD : "배",
        correct : "A",
    },{
        question : "",
        imgSrc : base_url+"/images/Airplane.jpg",
        choiceA : "기차",
        choiceB : "비행기",
        choiceC : "모터",
        choiceD : "차",
        correct : "B",
    },{
        question : "",
        imgSrc : base_url+"/images/Train.jpg",
        choiceA : "열기구",
        choiceB : "버스",
        choiceC : "기차",
        choiceD : "인력거",
        correct : "C",  
    },{
       question : "",
        imgSrc : base_url+"/images/Bicycle.jpg",
        choiceA : "트럭",
        choiceB : "기차",
        choiceC : "스쿠터",
        choiceD : "자전거",
        correct : "D",  
    },{
       question : "",
        imgSrc : base_url+"/images/Ship.jpg",
        choiceA : "배",
        choiceB : "보트",
        choiceC : "트럭",
        choiceD : "열기구",
        correct : "A",  
    },{
       question : "",
        imgSrc : base_url+"/images/Bus.jpg",
        choiceA : "보트",
        choiceB : "모터",
        choiceC : "배",
        choiceD : "버스",
        correct : "D",  
    },{
        question : "",
        imgSrc : base_url+"/images/Rickshaw.jpg",
        choiceA : "트럭",
        choiceB : "인력거",
        choiceC : "트롤리",
        choiceD : "비행기",
        correct : "B",  
    },{
        question : "",
        imgSrc :base_url+"/images/Car.jpg",
        choiceA : "열기구",
        choiceB : "모터",
        choiceC : "차",
        choiceD : "기차",
        correct : "C",  
    },{
        question : "",
        imgSrc : base_url+"/images/HotAirBallon.jpg",
        choiceA : "트럭",
        choiceB : "열기구",
        choiceC : "인력거",
        choiceD : "기차",
        correct : "B",  
    },{
        question : "",
        imgSrc : base_url+"/images/Helicopter.jpg",
        choiceA : "보트",
        choiceB : "비행기",
        choiceC : "헬리콥터",
        choiceD : "버스",
        correct : "C",  
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