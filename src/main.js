import data from './az-900.json';

class Quiz {
  questionsCount = 0;
  maxQuestions = 20;
  isLastQuestion = false;

  start(questions) {
    this.loadQuestions(questions);
  }

  loadQuestions(questions) {
    fetch(questions).then((response) => {
      response.json().then((questions) => console.log(questions));
    });
  }

  createQuestions(questions) {}

  activeQuestion(question) {}

  changeQuiz(quiz) {}

  chooseOption(option) {}

  changeQuestion() {
    if (questionCount === maxQuestions) {
      lastQuestion = true;
    }
  }

  finish() {}

  reset() {}

  suffleArray(array) {
    let tempArray = [...array];
    let suffleArray = [];
    let randomItem = 0;

    for (let i = 0; i < array.length; i++) {
      randomItem = Math.floor(Math.random() * tempArray.length);
      suffleArray.push(tempArray[randomItem]);
      tempArray.splice(randomItem, 1);
    }

    return suffleArray;
  }
}

const quiz = new Quiz();
// quiz.start('az-900.json');
// console.log(data.title);
// console.log(data['questions'][0]['question']);
console.log(quiz.suffleArray(data['questions']));
