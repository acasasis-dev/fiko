// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz5");
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
        imgSrc : base_url+"/images/horse.jpg",
        choiceA : "말",
        choiceB : "사슴",
        choiceC : "개",
        choiceD : "악어",
        correct : "A",
    },{
        question : "",
        imgSrc : base_url+"/images/cat.jpg",
        choiceA : "염소",
        choiceB : "고양이",
        choiceC : "고릴라",
        choiceD : "캥거루",
        correct : "B",
    },{
        question : "",
        imgSrc : base_url+"/images/Dog.jpg",
        choiceA : "오리",
        choiceB : "치킨",
        choiceC : "개",
        choiceD : "기린",
        correct : "C",  
    },{
       question : "",
        imgSrc : base_url+"/images/Gorilla.jpg",
        choiceA : "사슴",
        choiceB : "소",
        choiceC : "곰",
        choiceD : "고릴라",
        correct : "D",  
    },{
       question : "",
        imgSrc : base_url+"/images/Snake.jpg",
        choiceA : "뱀",
        choiceB : "돼지",
        choiceC : "앵무새",
        choiceD : "늑대",
        correct : "A",  
    },{
       question : "",
        imgSrc : base_url+"/images/pig.jpg",
        choiceA : "토끼",
        choiceB : "양",
        choiceC : "염소",
        choiceD : "돼지",
        correct : "D",  
    },{
        question : "",
        imgSrc : base_url+"/images/Wolf.jpg",
        choiceA : "말",
        choiceB : "늑대",
        choiceC : "올빼미",
        choiceD : "캥거루",
        correct : "B",  
    },{
        question : "",
        imgSrc : base_url+"/images/Elephant.jpg",
        choiceA : "소",
        choiceB : "토끼",
        choiceC : "코끼리",
        choiceD : "무한 궤도",
        correct : "C",  
    },{
        question : "",
        imgSrc : base_url+"/images/cow.jpg",
        choiceA : "카라 보",
        choiceB : "소",
        choiceC : "지네",
        choiceD : "타조",
        correct : "B",  
    },{
        question : "",
        imgSrc : base_url+"/images/Owl.jpg",
        choiceA : "오리",
        choiceB : "사슴",
        choiceC : "올빼미",
        choiceD : "악어",
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
              base_url+"images/1.png";
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>Your Score is:"+ scorePercent +"</p>"

}