// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz11");
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
        question : "If you cannot do great things, do small things in a great way.",
        choiceA : "우리가 내면에서 달성 한 것은 바깥 세상을 바꿀 것입니다.",
        choiceB : "생각을 바꾸면 세상이 바뀝니다.",
        choiceC : "네가 할 수 있다고 믿으면 네가 거기에있다.",
        choiceD : "위대한 일을 할 수 없다면 작은 일을 훌륭한 방법으로하십시오.",
        correct : "D",
    },{
        question : "Let us sacrifice our today so that our children can have a better tomorrow.",
        choiceA : "단일 장미는 내 정원이 될 수 있습니다. 단 하나 친구, 나의 세계.",
        choiceB : "우리 아이들이 더 나은 내일을 가질 수 있도록 오늘 우리를 희생합시다.",
        choiceC : "유일한 진실한 지혜는 당신이 아무것도 알지 못한다는 것입니다.",
        choiceD : "사랑은 두 몸에 사는 한 영혼으로 이루어져 있습니다.",
        correct : "B",
    },{
        question : "All that we see or seem is but a dream within a dream.",
        choiceA : "네가 할 수 있다고 믿으면 네가 거기에있다.",
        choiceB : "진정한 우정보다 소중히 더 많은이 세상에서 아무것도 없다.",
        choiceC : "우리가 보거나 보게되는 모든 것은 꿈 속에있는 꿈입니다.",
        choiceD : "우리가 보거나 것 모든 것은 꿈에서 꿈에 불과하다.",
        correct : "C",  
    },{
       question : "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love. ",
        choiceA : "주님, 저를 주님의 평안의 도구로 삼으십시오. 증오가있는 곳에 사랑을 뿌리 자.",
        choiceB : "누구든지 행복하면 다른 사람들도 행복하게 할 것입니다.",
        choiceC : "사랑은 두 몸에 사는 한 영혼으로 이루어져 있습니다.",
        choiceD : "우리가 내면에서 달성 한 것은 바깥 세상을 바꿀 것입니다.",
        correct : "A",  
    },{
       question : "Think in the morning. Act in the noon. Eat in the evening. Sleep in the night. ",
        choiceA : "친구들은 행복이 아닌 고난의시기에 그들의 사랑을 보여줍니다.",
        choiceB : "유일한 진실한 지혜는 당신이 아무것도 알지 못한다는 것입니다.",
        choiceC : "아침에 생각 해봐. 정오에 행동하십시오. 저녁에 먹어. 밤에 잠을 자.",
        choiceD : "유일한 진실한 지혜는 당신이 아무것도 알지 못한다는 것입니다.",
        correct : "C",  
    },{
       question : "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        choiceA : "아침에 생각 해봐. 정오에 행동하십시오. 저녁에 먹어. 밤에 잠을 자.",
        choiceB : "나에게 말하면 잊어 버린다. 나에게 가르치 라. 나는 기억한다. 나를 참여 시켜라.",
        choiceC : "인생은 자신을 찾는 것이 아닙니다. 인생은 자신을 창조하는 것입니다.",
        choiceD : "친구들은 행복이 아닌 고난의시기에 그들의 사랑을 보여줍니다.",
        correct : "B",  
    },{
        question : "There is nothing on this earth more to be prized than true friendship.",
        imgSrc : "img/",
        choiceA : "이 땅에는 진정한 우정보다 더 소중하게 여기는 것이 하나도 없습니다.",
        choiceB : "사랑은 두 몸에 사는 한 영혼으로 이루어져 있습니다.",
        choiceC : "네가 할 수 있다고 믿으면 네가 거기에있다.",
        choiceD : "누구든지 행복하면 다른 사람들도 행복하게 할 것입니다.",
        correct : "A",  
    },{
        question : "Always remember that you are absolutely unique. Just like everyone else.",
        choiceA : "우리 아이들이 더 나은 내일을 가질 수 있도록 우리가 오늘을 희생하자.",
        choiceB : "우리가 보거나 것 모든 것은 꿈에서 꿈에 불과하다.",
        choiceC : "진정한 우정보다 소중히 더 많은이 세상에서 아무것도 없다.",
        choiceD : "항상 당신이 절대적으로 유일하다는 것을 기억하십시오. 다른 사람들과 마찬가지로.",
        correct : "D",  
    },{
        question : "We love life, not because we are used to living but because we are used to loving.",
        choiceA : "생각을 바꾸면 세상이 바뀝니다.",
        choiceB : "네가 할 수 있다고 믿으면 네가 거기에있다.",
        choiceC : "우리는 삶을 사랑합니다. 왜냐하면 우리가 살기에 익숙하지 않기 때문에가 아니라 사랑에 익숙하기 때문입니다.",
        choiceD : "사랑은 두 몸에 사는 한 영혼으로 이루어져 있습니다.",
        correct : "C",  
    },{
        question : "Life isn’t about finding yourself. Life is about creating yourself.",
        choiceA : "인생은 자신을 찾는 것이 아닙니다. 인생은 자신을 창조하는 것입니다.",
        choiceB : "유일한 진실한 지혜는 당신이 아무것도 알지 못한다는 것입니다.",
        choiceC : "유일한 진실한 지혜는 당신이 아무것도 알지 못한다는 것입니다.",
        choiceD : "우리가 내면에서 달성 한 것은 바깥 세상을 바꿀 것입니다.",
        correct : "A",  
    }
    
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 15;
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