import './main.css';
import data from './az-900.json';

class Quiz {
  questions = data['questions'];
  questionsCount = 0;
  maxQuestions = 20;
  isLastQuestion = false;

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  randomizeQuestionsAndAnswers() {
    const randomQuestions = [...this.questions];

    for (let i = 0; i < randomQuestions.length; i++) {
      const question = randomQuestions[i];
      this.shuffleArray(question.answers);
    }

    this.shuffleArray(randomQuestions);

    return randomQuestions;
  }

  // shuffleArray(array) {
  //   let tempArray = [...array];
  //   let suffleArray = [];
  //   let randomItem = 0;

  //   for (let i = 0; i < array.length; i++) {
  //     randomItem = Math.floor(Math.random() * tempArray.length);
  //     suffleArray.push(tempArray[randomItem]);
  //     tempArray.splice(randomItem, 1);
  //   }

  //   return suffleArray;
  // }
}

const quiz = new Quiz();
// console.log(data.title);
// console.log(data['questions'][0]['question']);
// console.log(quiz.suffleArray(data['questions']));
// console.log(quiz.suffleQuestions(data['questions']));

quiz.randomizeQuestionsAndAnswers();
console.log(quiz.questions);
