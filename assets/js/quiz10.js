// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz10");
const question = document.getElementById("question");
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
        question : "언니는 요리에 좋다",
        choiceA : "Ang aking kapatid na babae ay di marunong sa pagluluto",
        choiceB : "Ang aking kapatid na babae ay tamad sa pagluluto",
        choiceC : "Ang aking kapatid na babae ay mabuti sa pagluluto",
        choiceD : "Ang aking kapatid na babae at magaling sa pagluluto",
        correct : "C",
    },{
        question : "내 아버지는 좋은",
        choiceA : "Ang aking ama ay malinis",
        choiceB : "Ang aking ama ay makulit",
        choiceC : "Ang aking ama ay masaya",
        choiceD : "Ang aking ama ay mabuti",
        correct : "D",
    },{
        question : "아이들은 놀고 있었다",
        choiceA : "Ang mga bata ay naglalaro",
        choiceB : "Ang bata ay naglalaro",
        choiceC : "Ang naglalaro ay mga bata",
        choiceD : "Ang bata ay naglalaro",
        correct : "A",  
    },{
       question : "그는 똑똑하다",
        choiceA : "Siya ay ang Matalino",
        choiceB : "Siya ay Matalino",
        choiceC : "Siya’y Matalino",
        choiceD : "Siya ang Matalino",
        correct : "B",  
    },{
       question : "그녀는 아름답다",
        choiceA : "Siya ay ang Maganda",
        choiceB : "Siya ay ang Matalino",
        choiceC : "Siya ay ang Masipag",
        choiceD : "Siya ay ang Mabango",
        correct : "A",  
    },{
       question : "개는 배고프다",
        choiceA : "Ang aso ay nanghihina",
        choiceB : "Ang aso ay nagugutom",
        choiceC : "Ang aso ay mahina",
        choiceD : "Ang aso ay gutom",
        correct : "D",  
    },{
        question : "그녀는 수업 시간에 최선",
        choiceA : "Pinakamahusay ako sa klase",
        choiceB : "Pinakamahusay siya sa klase",
        choiceC : "Pinakamahusay ang kanyang kaklase",
        choiceD : "Siya ang pinakamahusay sa klase",
        correct : "B",  
    },{
        question : "아이는 하락",
        choiceA : "Nahulog ang ate",
        choiceB : "Nahulog ang sanggol",
        choiceC : "Nahulog ang bata",
        choiceD : "Nahulog ang kuya",
        correct : "C",  
    },{
        question : "나는 명랑 해요",
        choiceA : "Masaya ako",
        choiceB : "Ako ay masaya",
        choiceC : "Siya ay masaya",
        choiceD : "Siya ay malungkot",
        correct : "A",  
    },{
        question : "나는 슬펐다",
        choiceA : "Siya ay malungkot",
        choiceB : "Siya’y malungkot",
        choiceC : "Siya ay malungkot",
        choiceD : "Ako ay malungkot",
        correct : "D",  
    }
    
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150; 
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render question 
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question + "</p>";
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