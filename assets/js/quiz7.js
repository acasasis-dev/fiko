// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz7");
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
        imgSrc : base_url+"/images/MBT.jpg",
        choiceA : "행복한 축하",
        choiceB : "해피 뉴 이어",
        choiceC : "축하한다",
        choiceD : "해피 뉴 이어",
        correct : "B",
    },{
        question : "",
        imgSrc : base_url+"/images/BBT.jpg",
        choiceA : "부활의 일요일",
        choiceB : "해피 뉴 이어",
        choiceC : "부활의 일요일",
        choiceD : "섣달 그믐 날",
        correct : "D",
    },{
        question : "",
        imgSrc : base_url+"/images/MPW.jpg",
        choiceA : "축하한다.",
        choiceB : "금요일 성자",
        choiceC : "행복한 축하",
        choiceD : "해피 뉴 이어",
        correct : "C",  
    },{
       question : "",
        imgSrc : base_url+"/images/BK.jpg",
        choiceA : "축하한다.",
        choiceB : "부활의 일요일",
        choiceC : "생일 축하해.",
        choiceD : "행복한 축하",
        correct : "A",  
    },{
       question : "",
        imgSrc : base_url+"/images/MP.jpg",
        choiceA : "해피 크리스마스",
        choiceB : "섣달 그믐 날",
        choiceC : "축하한다.",
        choiceD : "금요일 성자",
        correct : "A",  
    },{
       question : "",
        imgSrc : base_url+"/images/BS.jpg",
        choiceA : "마음의 행복한 날",
        choiceB : "해피 뉴 이어",
        choiceC : "생일 축하해.",
        choiceD : "금요일 성자",
        correct : "D",  
    },{
        question : "",
        imgSrc : base_url+"/images/MLP.jpg",
        choiceA : "해피 크리스마스",
        choiceB : "행복한 축하",
        choiceC : "부활의 일요일",
        choiceD : "섣달 그믐 날",
        correct : "C",  
    },{
        question : "",
        imgSrc : base_url+"/images/MAP.jpg",
        choiceA : "해피 뉴 이어",
        choiceB : "생일 축하해.",
        choiceC : "부활의 일요일",
        choiceD : "마음의 행복한 날",
        correct : "D",  
    },{
        question : "",
        imgSrc : base_url+"/images/MK.jpg",
        choiceA : "생일 축하해.",
        choiceB : "부활의 일요일",
        choiceC : "섣달 그믐 날",
        choiceD : "축하한다.",
        correct : "A",  
    },{
        question : "",
        imgSrc : base_url+"/images/MBT.jpg",
        choiceA : "축하한다.",
        choiceB : "금요일 성자",
        choiceC : "해피 뉴 이어",
        choiceD : "생일 축하해.",
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