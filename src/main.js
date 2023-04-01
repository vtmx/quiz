import './main.css';
import data from './az-900.json';

class Quiz {
  questionsCount = 0;
  maxQuestions = 20;
  isLastQuestion = false;
  randomQuestions = 0;

  suffleQuestions(array) {
    console.log(data);
  }

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
// console.log(data.title);
// console.log(data['questions'][0]['question']);
console.log(quiz.suffleArray(data['questions']));
quiz.suffleQuestions();
// console.log(quiz.suffleQuestions(data['questions']));
