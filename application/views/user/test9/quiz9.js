// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz9");
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
        question : "Ang kaibigan ko ay nag tuturo ng ingles.",
        choiceA : "가자. 쇼핑몰에 가자.",
        choiceB : "내 친구가 영어를 가르치고 있어요.",
        choiceC : "내 여자 친구가 아주 좋아.",
        choiceD : "거기에 갈 계획입니까?",
        correct : "B",
    },{
        question : "Ako ay bumili ng lapis sa tindahan",
        choiceA : "그것이 우리의 주소입니다.",
        choiceB : "여기 집에 방문 해주십시오.",
        choiceC : "나는 가게에서 연필을 샀다.",
        choiceD : "내 친구는 요리 잘한다.",
        correct : "C",
    },{
        question : "Sino ang may ari ng kwaderno na yan?",
        choiceA : "우리 어디에서 놀거야?",
        choiceB : "돈을 위해 당신의 비용은 얼마입니까",
        choiceC : "아직도 살아 있니?",
        choiceD : "누가 그 노트를 가지고 있니?",
        correct : "D",  
    },{
       question : "Ano ang pangalan ng nanay mo?",
        choiceA : "너의 어머니 이름이 뭐니?",
        choiceB : "어떤 요리를 요리 할 수 있습니까?",
        choiceC : "돈을 위해 당신의 비용은 얼마입니까?",
        choiceD : "우리와 함께 누구입니까?",
        correct : "A",  
    },{
       question : "Tara na maglaro na tayo, wala ng magawa eh",
        choiceA : "내 여자 친구가 아주 좋아.",
        choiceB : "가자. 쇼핑몰에 가자.",
        choiceC : "게임을하고, 할 일 없어요.",
        choiceD : "내 친구는 요리 잘한다.",
        correct : "C",  
    },{
       question : "San tayo mag lalaro ng dota?",
        choiceA : "우리 어디에서 놀거야?",
        choiceB : "우리와 함께 누구입니까?",
        choiceC : "돈을 위해 당신의 비용은 얼마입니까?",
        choiceD : "거기에 갈 계획입니까?",
        correct : "A",  
    },{
        question : "Sino ang mga kasama natin?",
        choiceA : "나는 그것을 놓쳤는가?",
        choiceB : "누가 그 노트를 가지고 있니?",
        choiceC : "아직도 살아 있니?",
        choiceD : "우리와 함께 누구입니까?",
        correct : "D",  
    },{
        question : "Kelan tayo pupunta ng beach?",
        choiceA : "돈을 위해 당신의?",
        choiceB : "우리는 어떻게 해변에 가야합니까?",
        choiceC : "어떤 요리를 요리 할 수?",
        choiceD : "거기에 갈 계획입니까?",
        correct : "B",  
    },{
        question : "Ang kaibigan ko ay magaling mag mag luto",
        choiceA : "그것이 우리의 주소입니다.",
        choiceB : "내 여자 친구가 아주 좋아.",
        choiceC : "가자. 쇼핑몰에 가자.",
        choiceD : "내 친구는 요리 잘한다.",
        correct : "D",  
    },{
        question : "San ka nakatira?",
        choiceA : "아직도 살아 있니?",
        choiceB : "가자. 쇼핑몰에 가자.",
        choiceC : "나는 가게에서 연필을 샀다.",
        choiceD : "그것이 우리의 주소입니다.",
        correct : "A",  
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
    let img = (scorePercent >= 8) ? "img/5.png" :
              (scorePercent >= 6) ? "img/4.png" :
              (scorePercent >= 4) ? "img/3.png" :
              (scorePercent >= 2) ? "img/2.png" :
              "img/1.png";
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>Your Score is:"+ scorePercent +"</p>"

}