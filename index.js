// const quizData = [
  
//     {
//       question: 'Which component is used to store electrical charge?',
//       options: ['Transistor', 'Resistor', 'Diode', 'Capacitor'],
//       answer: 'Capacitor'
//   },
//   {
//       question: 'What does LED stand for?',
//       options: ['Light Emitting Display', 'Low Energy Device', 'Light Emitting Diode', 'Linear Electronic Device'],
//       answer: 'Light Emitting Diode'
//   },
//   {
//       question: 'Which of these is not a type of resistor?',
//       options: ['Fixed', 'Variable', 'Thermal', 'Rotary'],
//       answer: 'Rotary'
//   },
//   {
//       question: 'What is the primary purpose of a transistor in electronic circuits?',
//       options: ['Amplification', 'Resistance', 'Induction', 'Capacitance'],
//       answer: 'Amplification'
//   },
//   {
//       question: 'Which of the following is a passive component?',
//       options: ['Operational Amplifier', 'Diode', 'Resistor', 'Transistor'],
//       answer: 'Resistor'
//   },
//   {
//       question: 'What does PCB stand for in electronics?',
//       options: ['Programmable Control Block', 'Printed Circuit Board', 'Parallel Circuit Bridge', 'Processor Control Bit'],
//       answer: 'Printed Circuit Board'
//   },
//   {
//       question: 'Which component converts electrical energy into mechanical movement?',
//       options: ['Capacitor', 'Transistor', 'Motor', 'Inductor'],
//       answer: 'Motor'
//   },
//   {
//       question: "What is Ohm's Law primarily used to calculate?",
//       options: ['Magnetic Fields', 'Current', 'Voltage Resistance Relationship', 'Capacitance'],
//       answer: 'Voltage Resistance Relationship'
//   }
  
//   ];
//   function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//   }
  
//   shuffle(quizData);
  
//   const quizContainer = document.getElementById('quiz');
//   const resultContainer = document.getElementById('result');
//   const submitButton = document.getElementById('submit');
//   const retryButton = document.getElementById('retry');
//   const showAnswerButton = document.getElementById('showAnswer');
  
//   let currentQuestion = 0;
//   let score = 0;
//   let incorrectAnswers = [];
  
//   function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }
  
//   function displayQuestion() {
//     const questionData = quizData[currentQuestion];
  
//     const questionElement = document.createElement('div');
//     questionElement.className = 'question';
//     questionElement.innerHTML = questionData.question;
  
//     const optionsElement = document.createElement('div');
//     optionsElement.className = 'options';
  
//     const shuffledOptions = [...questionData.options];
//     shuffleArray(shuffledOptions);
  
//     for (let i = 0; i < shuffledOptions.length; i++) {
//       const option = document.createElement('label');
//       option.className = 'option';
  
//       const radio = document.createElement('input');
//       radio.type = 'radio';
//       radio.name = 'quiz';
//       radio.value = shuffledOptions[i];
  
//       const optionText = document.createTextNode(shuffledOptions[i]);
  
//       option.appendChild(radio);
//       option.appendChild(optionText);
//       optionsElement.appendChild(option);
//     }
  
//     quizContainer.innerHTML = '';
//     quizContainer.appendChild(questionElement);
//     quizContainer.appendChild(optionsElement);
//   }
  
//   function checkAnswer() {
//     const selectedOption = document.querySelector('input[name="quiz"]:checked');
//     if (selectedOption) {
//       const answer = selectedOption.value;
//       if (answer === quizData[currentQuestion].answer) {
//         score++;
//       } else {
//         incorrectAnswers.push({
//           question: quizData[currentQuestion].question,
//           incorrectAnswer: answer,
//           correctAnswer: quizData[currentQuestion].answer,
//         });
//       }
//       currentQuestion++;
//       selectedOption.checked = false;
//       if (currentQuestion < quizData.length) {
//         displayQuestion();
//       } else {
//         displayResult();
//       }
//     }
//   }
  
//   function displayResult() {
//     quizContainer.style.display = 'none';
//     submitButton.style.display = 'none';
//     retryButton.style.display = 'inline-block';
//     showAnswerButton.style.display = 'inline-block';
//     resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
//   }
  
//   function retryQuiz() {
//     currentQuestion = 0;
//     score = 0;
//     incorrectAnswers = [];
//     quizContainer.style.display = 'block';
//     submitButton.style.display = 'inline-block';
//     retryButton.style.display = 'none';
//     showAnswerButton.style.display = 'none';
//     resultContainer.innerHTML = '';
//     displayQuestion();
//   }
  
//   function showAnswer() {
//     quizContainer.style.display = 'none';
//     submitButton.style.display = 'none';
//     retryButton.style.display = 'inline-block';
//     showAnswerButton.style.display = 'none';
  
//     let incorrectAnswersHtml = '';
//     for (let i = 0; i < incorrectAnswers.length; i++) {
//       incorrectAnswersHtml += `
//         <p>
//           <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
//           <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
//           <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
//         </p>
//       `;
//     }
  
//     resultContainer.innerHTML = `
//       <p>You scored ${score} out of ${quizData.length}!</p>
//       <p>Incorrect Answers:</p>
//       ${incorrectAnswersHtml}
//     `;
//   }
  
//   submitButton.addEventListener('click', checkAnswer);
//   retryButton.addEventListener('click', retryQuiz);
//   showAnswerButton.addEventListener('click', showAnswer);
  
//   displayQuestion();
const quizData = [
    {
              question: 'Which component is used to store electrical charge?',
              options: ['Transistor', 'Resistor', 'Diode', 'Capacitor'],
              answer: 'Capacitor'
          },
          {
              question: 'What does LED stand for?',
              options: ['Light Emitting Display', 'Low Energy Device', 'Light Emitting Diode', 'Linear Electronic Device'],
              answer: 'Light Emitting Diode'
          },
          {
              question: 'Which of these is not a type of resistor?',
              options: ['Fixed', 'Variable', 'Thermal', 'Rotary'],
              answer: 'Rotary'
          },
          {
              question: 'What is the primary purpose of a transistor in electronic circuits?',
              options: ['Amplification', 'Resistance', 'Induction', 'Capacitance'],
              answer: 'Amplification'
          },
          {
              question: 'Which of the following is a passive component?',
              options: ['Operational Amplifier', 'Diode', 'Resistor', 'Transistor'],
              answer: 'Resistor'
          },
          {
              question: 'What does PCB stand for in electronics?',
              options: ['Programmable Control Block', 'Printed Circuit Board', 'Parallel Circuit Bridge', 'Processor Control Bit'],
              answer: 'Printed Circuit Board'
          },
          {
              question: 'Which component converts electrical energy into mechanical movement?',
              options: ['Capacitor', 'Transistor', 'Motor', 'Inductor'],
              answer: 'Motor'
          },
          {
            question: 'Which component is commonly used to convert analog signals to digital signals in electronic devices',
            options: ['Diode', 'Capacitor', 'Inductor', 'Resistor'],
            answer: 'Op-amp '
          },
          {
            question: ' What electronic component is used to store and maintain electrical charge in a circuit?',
            options: ['Op-amp', 'Capacitor', 'Inductor', ' Microcontroller'],
            answer: ' Capacitor'
          },
          {
              question: "What is Ohm's Law primarily used to calculate?",
              options: ['Magnetic Fields', 'Current', 'Voltage Resistance Relationship', 'Capacitance'],
              answer: 'Voltage Resistance Relationship'
          }
          
    ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
        }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    // Create question and options elements
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    // Shuffle options
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    // Create and append radio buttons for options
    shuffledOptions.forEach((optionText) => {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = optionText;
  
      const optionTextNode = document.createTextNode(optionText);
  
      option.appendChild(radio);
      option.appendChild(optionTextNode);
      optionsElement.appendChild(option);
    });
  
    // Clear the quiz container and append the new question and options
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
        for (let i = 0; i < incorrectAnswers.length; i++) {
          incorrectAnswersHtml += `
            <p>
              <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
              <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
              <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
            </p>
          `;
        }
      
        resultContainer.innerHTML = `
          <p>You scored ${score} out of ${quizData.length}!</p>
          <p>Incorrect Answers:</p>
          ${incorrectAnswersHtml}
        `;
    }

  
  // Event listeners
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  // Initial question display
  displayQuestion();
  