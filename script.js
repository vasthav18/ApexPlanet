// =================== Interactive Quiz ===================
const quizData = [
  { question: "What does CSS stand for?", a: "Cascading Style Sheets", b: "Creative Style System", correct: "a" },
  { question: "Which HTML tag is used for JavaScript?", a: "<script>", b: "<js>", correct: "a" },
  { question: "What is the default flex direction?", a: "row", b: "column", correct: "a" }
];

let currentQuiz = 0;
let score = 0;

const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");

function loadQuiz() {
  const q = quizData[currentQuiz];
  quizContainer.innerHTML = `
    <h3>${q.question}</h3>
    <label><input type="radio" name="answer" value="a"> ${q.a}</label><br>
    <label><input type="radio" name="answer" value="b"> ${q.b}</label>
  `;
}

nextBtn.addEventListener("click", () => {
  const answer = document.querySelector('input[name="answer"]:checked');
  if (answer && answer.value === quizData[currentQuiz].correct) {
    score++;
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quizContainer.innerHTML = `<h3>You scored ${score}/${quizData.length}</h3>`;
    nextBtn.style.display = "none";
  }
});

loadQuiz();

// =================== Fetch Weather API ===================
document.getElementById("getWeather").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }
  
  const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; 
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod === "404") {
        document.getElementById("weatherResult").innerHTML = "City not found.";
        return;
      }
      document.getElementById("weatherResult").innerHTML = `
        <p><strong>${data.name}</strong></p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="">
      `;
    })
    .catch(() => {
      document.getElementById("weatherResult").innerHTML = "Error fetching data.";
    });
});
