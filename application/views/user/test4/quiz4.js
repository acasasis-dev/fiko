// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz4");
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
        imgSrc : base_url+"/images/Eight.png",
        choiceA : "8",
        choiceB : "25",
        choiceC : "55",
        choiceD : "9",
        correct : "A",
    },{
        question : "",
        imgSrc : base_url+"/images/Fifteen.png",
        choiceA : "1",
        choiceB : "15",
        choiceC : "19",
        choiceD : "27",
        correct : "B",
    },{
        question : "",
        imgSrc : base_url+"/images/Five.png",
        choiceA : "7",
        choiceB : "9",
        choiceC : "5",
        choiceD : "10",
        correct : "C",  
    },{
       question : "",
        imgSrc : base_url+"/images/one.png",
        choiceA : "17",
        choiceB : "10",
        choiceC : "4",
        choiceD : "1",
        correct : "D",  
    },{
       question : "",
        imgSrc : base_url+"/images/seven.png",
        choiceA : "7",
        choiceB : "8",
        choiceC : "22",
        choiceD : "14",
        correct : "A",  
    },{
       question : "",
        imgSrc : base_url+"/images/Six.png",
        choiceA : "13",
        choiceB : "21",
        choiceC : "15",
        choiceD : "6",
        correct : "D",  
    },{
        question : "",
        imgSrc : base_url+"/images/Sixteen.png",
        choiceA : "18",
        choiceB : "16",
        choiceC : "27",
        choiceD : "20",
        correct : "B",  
    },{
        question : "",
        imgSrc : base_url+"/images/Thirteen.png",
        choiceA : "42",
        choiceB : "31",
        choiceC : "13",
        choiceD : "19",
        correct : "C",  
    },{
        question : "",
        imgSrc : base_url+"/images/Twenty.jpg",
        choiceA : "22",
        choiceB : "20",
        choiceC : "29",
        choiceD : "24",
        correct : "B",  
    },{
        question : "",
        imgSrc : base_url+"/images/Ten.png",
        choiceA : "17",
        choiceB : "11",
        choiceC : "10",
        choiceD : "19",
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