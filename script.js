const quizData = [
  {
    question: "Which artwork is known for its mysterious smile?",
    a: "The Last Supper",
    b: "The Birth of Venus",
    c: "Mona Lisa",
    d: "Girl with a Pearl Earring",
    correct: "c",
  },
  {
    question: "Which painting depicts melting clocks in a surreal landscape?",
    a: "The Scream",
    b: "The Persistence of Memory",
    c: "Guernica",
    d: "The Garden of Earthly Delights",
    correct: "b",
  },
  {
    question: "Which artwork was painted by Edvard Munch?",
    a: "The Kiss",
    b: "American Gothic",
    c: "The Starry Night",
    d: "The Scream",
    correct: "d",
  },
  {
    question: "Who created the artwork 'Girl with a Pearl Earring'?",
    a: "Vermeer",
    b: "Rembrandt",
    c: "Picasso",
    d: "Da Vinci",
    correct: "a",
  },
  {
    question:
      "Which artwork is a large black-and-white mural portraying the tragedy of war?",
    a: "Guernica",
    b: "The Night Watch",
    c: "The Creation of Adam",
    d: "Nighthawks",
    correct: "a",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  const answerEls = document.querySelectorAll(".answer");
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      return answerEl.id;
    }
  });
  return undefined;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz]) {
    }
  }
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert("You finished! Get yourself a Orange Lemonda");
  }
});
