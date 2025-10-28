const questions = [
    {
        question: "Ngày kỉ niệm tụi mình quen nhau?",
        answers: [
            { text: "19/07/2024", correct: true},
            { text: "18/07/2024", correct: false},
            { text: "25/05/2024", correct: false},
            { text: "19/06/2024", correct: false},
        ]
    },
    {
        question: "Sinh nhật của anh?",
        answers: [
            { text: "25/02/2003", correct: false},
            { text: "21/01/2004", correct: false},
            { text: "25/02/2004", correct: true},
            { text: "19/06/2004", correct: false},
        ]
    },
    {
        question: "Ai là nóc nhà?",
        answers: [
            { text: "Anh", correct: false},
            { text: "Em", correct: true},
            { text: "Bố", correct: false},
            { text: "Thịnh", correct: false},
        ]
    },
    {
        question: "Ai dễ thương?",
        answers: [
            { text: "Anh", correct: false},
            { text: "Em", correct: true},
            { text: "Không có ai", correct: false},
            { text: "Cả hai", correct: false},
        ]
    },
    {
        question: "Nếu anh, em và mẹ anh rớt xuống nước, anh sẽ cứu ai?",
        answers: [
            { text: "Em", correct: true},
            { text: "Mẹ anh", correct: false},
            { text: "Cứu cả hai", correct: false},
            { text: "Anh", correct: false},
        ]
    },
    {
        question: "Tính đến hiện tại tụi mình yêu nhau được bao nhiêu ngày?",
        answers: [
            { text: "400", correct: false},
            { text: "440", correct: true},
            { text: "390", correct: false},
            { text: "410", correct: false},
        ]
    },
    {
        question: "Bé hun anh được bao nhiêu cái?",
        answers: [
            { text: "Nhiều hong nhớ", correct: true},
            { text: "Hong có cái nào", correct: false},
            { text: "3 cái", correct: false},
            { text: "1 cái", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");  
const nextButton = document.getElementById("next-btn"); 

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Bạn đã trả lời đúng ${score} trên ${questions.length} câu!`;
    nextButton.innerHTML = "Chơi lại";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex <questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();