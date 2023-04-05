import './main.css';
import data from './az-900.json';

class Quiz {
  titleQuiz = data['title'];
  questions = data['questions'];
  questionsCount = 1;
  maxQuestions = 20;

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  randomizeQuestions() {
    this.shuffleArray(this.questions);
    return this.questions;
  }

  randomizeAnswers() {
    for (let i = 0; i < this.questions.length; i++) {
      const question = this.questions[i];
      this.shuffleArray(question.answers);
    }
    return this.questions;
  }

  randomizeQuestionsAndAnswers() {
    for (let i = 0; i < this.questions.length; i++) {
      const question = this.questions[i];
      this.shuffleArray(question.answers);
    }
    this.shuffleArray(this.questions);
    return this.questions;
  }
}

const quiz = new Quiz();
// console.log(data.title);
// console.log(data['questions'][0]['question']);
quiz.randomizeQuestionsAndAnswers();
console.log(quiz.questions);
