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

  createQuestions(questions) {

  }

  activeQuestion(question) {

  }

  changeQuiz(quiz) {

  }

  chooseOption(option) {

  }

  changeQuestion() {
    if (questionCount === maxQuestions) {
      lastQuestion = true;
    }
  }

  finish() {

  }

  reset() {

  }
}

const quiz = new Quiz();
// quiz.start('az-900.json');
console.log(data.title);
console.log(data['questions'][0]['question']);



