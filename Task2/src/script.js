// scripts/script.js

document.addEventListener("DOMContentLoaded", () => {
    const questionElement = document.getElementById("question");
    const options = [
      document.getElementById("option1"),
      document.getElementById("option2"),
      document.getElementById("option3"),
      document.getElementById("option4")
    ];
    const submitButton = document.getElementById("submit");
    const resetButton = document.getElementById("reset");
    const retryButton = document.getElementById("retry");
  
    const resultSection = document.getElementById("result");
    const resultScoreElement = document.getElementById("result-score");
    const resultRemarkElement = document.getElementById("result-remark");
  
    const quizData = [
      {
        question: "What is the capital of Pakistan?",
        options: ["Lahore", "Islamabad", "Waziristan", "Mujhe kia pata"],
        correctAnswer: "Islamabad"
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        correctAnswer: "Jupiter"
      },
      {
        question: "Which flower is national flower of Pakistan",
        options: ["Jasmine", "Rose", "Sun flower", "Lavendar"],
        correctAnswer: "Jasmine"
      },
      {
        question: "Who wrote 'مجھ سے پہلی سی محبت'",
        options: ["Zia Mohyeddin", "Behzad Lakhnavi", "Faiz Ahmed Faiz", "Naiyara Noor"],
        correctAnswer: "Faiz Ahmed Faiz"
      },
      {
        question: "The severity of 2005 earthquake in Pakistan on Richter scale was ?",
        options: ["6.9", "7.6", "7.1", "None"],
        correctAnswer: "7.6"
      },
      {
        question: "The exact time taken by the earth for single rotation on its own axis is?",
        options: ["24 hours", "24 hours and 35 seconds", "23 hours 50 minutes and 7 seconds", "23 hours 56 minutes and 4.09 seconds"],
        correctAnswer: "23 hours 56 minutes and 4.09 seconds"
      },
      {
        question: "You're 4th place right now in a race. What place will you be in when you pass the person in 3rd place?",
        options: ["1st", "2nd", "3rd", "9th"],
        correctAnswer: "3rd"
      },
      {
        question: "Which country were involved in 100 year war?",
        options: ["Turkey and Austria", "England and France", "Palestine and Israel", "Germany and Russia"],
        correctAnswer: "England and France"
      },
      {
        question: "Python is a?",
        options: ["Snake", "Programming Language", "Both A and B", "What's a Python?"],
        correctAnswer: "Programming Language"
      },
      {
        question: "The full form of HTML is?",
        options: ["Hyper Text Mzaay ki Language", "Hyper Text Markup Language", "Hyper Toy Makup Language", "Hello That's My Lecturer"],
        correctAnswer: "Hyper Text Markup Language"
      }
    ];
  
    let currentQuestionIndex = 0;
    let score = 0;
  
    function loadQuestion() {
      const currentQuestion = quizData[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
      options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
      });
    }
  
    function resetQuiz() {
      const selectedOption = document.querySelector('input[name="answer"]:checked');
      if (selectedOption) {
        selectedOption.checked = false;
      }
    }
  
    function showResult() {
      const totalQuestions = quizData.length;
      let remark;
      if (score === totalQuestions) {
        remark = "Excellent!";
      } else if (score >= totalQuestions / 2) {
        remark = "Good job!";
      } else {
        remark = "Better luck next time!";
      }
      resultScoreElement.textContent = `You scored ${score} out of ${totalQuestions}.`;
      resultRemarkElement.textContent = remark;
      document.getElementById("quiz").classList.add("hidden");
      resultSection.classList.remove("hidden");
    }
  
    submitButton.addEventListener("click", () => {
      const selectedOption = document.querySelector('input[name="answer"]:checked');
      if (!selectedOption) {
        alert("Please select an option!");
        return;
      }
  
      const selectedAnswer = options.find(option => option.htmlFor === selectedOption.id).textContent;
      const currentQuestion = quizData[currentQuestionIndex];
      if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
      }
  
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        resetQuiz();
        loadQuestion();
      } else {
        showResult();
      }
    });
  
    resetButton.addEventListener("click", resetQuiz);
  
    retryButton.addEventListener("click", () => {
      currentQuestionIndex = 0;
      score = 0;
      resetQuiz();
      loadQuestion();
      resultSection.classList.add("hidden");
      document.getElementById("quiz").classList.remove("hidden");
    });
  
    loadQuestion();
  });