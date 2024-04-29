// масив обектов
let questions = [
    {
        question: " Какое событие произошло в России 9 мая 1945 года?",
        options: ["Празднование победы в Великой Отечественной войне", "распад ссср", "великая отечественная война"],
        correctAnswer: "Празднование победы в Великой Отечественной войне"
    },
    {
        question: " Какой акт завершился 9 мая 1945 года?",
        options: ["Капитуляция нацистской Германии", "распад ссср", "начало коммунизма"],
        correctAnswer: "Капитуляция нацистской Германии"
    },
    {
        question: " Какое название носит парад, проводимый в Москве 9 мая?",
        options: ["Парад Победы", "Парад литвина", "Парад сша"],
        correctAnswer: "Парад Победы"
    },
    {
        question: "Какая цифра наряжается красной георгиевской лентой в День",
        correctAnswer: "9"
    },
    {
        question: " В каких странах празднуется День Победы 9 мая?",
        options: ["Россия", "Беларусь", "Италия"],
        correctAnswer: "Россия"
    },
    {
        question: " Как называется традиционный символ Дня Победы?",
        options: [" Георгиевская лента", "лента", "Z"],
        correctAnswer: " Георгиевская лента"
    },
    {
        question: " Какая музыкальная композиция является неофициальным гимном Дня Победы?",
        options: ["Песня День Победы", "победа", "катюша",],
        correctAnswer: "Песня День Победы"
    },
    {
        question: " Какая традиция существует в России в День Победы?",
        options: ["Парад ветеранов и военных образований", "игры на пруду", "есть блены"],
        correctAnswer: "Парад ветеранов и военных образований"
    }

]
let currentQuestion = 0 // текущий вопрос 
let correctAnswer = 0 // пр ответы 


// функция для отображения вопроса варианта ответа
function displayQuestion() {
    let questionElement = document.getElementById("question");
    // размещяем вопрос на станице
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
    let optionsElement = document.getElementById("options"); // получиь для размищения кнрогпок
    optionsElement.innerHTML = ""; // очещяет содержитмаоеа блоук 

    // получить массив ответов 
    let optionsArray = questions[currentQuestion].options;

    // создать кнопки с вароиантами ответами  и привизать к ним ФУНКЦИЮ 

    optionsArray.forEach((option) => {
        let button = document.createElement("button");
        optionsElement.append(button);
        button.textContent = option;
        button.classList.add('glow-on-hover')
    })

    // добдвляенпм в аброботчик событи\я на блоук с кнопками 
    optionsElement.addEventListener('click', (e) => {
        // запись в переменнную в элемент накоторую тыкунулои 
        let target = e.target;
        console.log(target.textContent);
        //вызвать функцию переходиим к следущиму вопросу 
        nextQuestion(target.textContent);

    }, { once: true });
}
// функция перехода к следущиму вопатосу 

function nextQuestion(answer) {
    //если  кликнуть на правельный отвкет то  поделитсчяы 6на один сечтик правельтных ответогв 
    if (answer === questions[currentQuestion].correctAnswer) {
        correctAnswer++;
    }
    currentQuestion++; // перейти кследущему вопросу
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

if ('optioons' in questions[currentQuestion]) {
    let optionsArray = questions[currentQuestions].options

    optionsArray.fuorEach((option) => {

        let button = document.createElement('button')
        optionsElement.append(button)
        button.textContent = option
        button.classList.add('btnOp')
    })
} else {
    let input = document.createElement('input')
    let btn = document.createElement('button')
    btn.textContent = 'отправить ответ'
    answerInput.classList.add(answerInput4)
    input.classList.add('inp')
    optionsElement.classList.remove('options')
    btn.addEventListener('click', () => {
        nextQuestion(answerInput.value.tolowerCase)
    })
}


// фунция отобразженеие результата теста ата
function displayResult() {
    let questionElement = document.getElementById("question");
    let optionsElement = document.getElementById("options");
    let resultElement = document.getElementById("result");
    questionElement.style.display = "none"; // выключить видимось блоков ответов 
    optionsElement.style.display = "none"; // выключить видимось блоков ответов 
    resultElement.textContent = `Правильных ответов ${correctAnswer} из ${questions.length}`;
}

displayQuestion();