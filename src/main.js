import './main.css';
import data from './az-900.json';

class Quiz {
  constructor(amountQuestions = 20) {
    this.title = data['title'];
    this.questions = data['questions'];
    this.randomQuestionsAndAnswers = this.randomizeQuestionsAndAnswers();
    this.randomQuestions = this.randomizeQuestions();
    this.randomAnswers = this.randomizeAnswers();
    this.amountQuestions = amountQuestions;
    this.currentQuestionNumber = 3;
    this.lastQuestionNumber = 10;
    this.questionsCount = 1;
  }

  init() {
    const anwsersRadios = document.querySelectorAll('.anwsers input[type="radio"]');

    anwsersRadios.forEach(element => {
      element.addEventListener('click', event => {
        this.uncheckRadios(anwsersRadios);
        event.target.checked = true;
      });
    });
  }

  uncheckRadios(elements) {
    elements.forEach(element => {
      element.checked = true;
    });
  }

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
    const randomQuestions = [...this.questions];
    for (let i = 0; i < randomQuestions.length; i++) {
      const question = randomQuestions[i];
      this.shuffleArray(question.answers);
    }
    this.shuffleArray(randomQuestions);
    return randomQuestions;
  }

  render(component) {
    document.querySelector('#app').insertAdjacentHTML('afterbegin', component);
  }
}

const quiz = new Quiz();

quiz.render(`
<div id="quiz">
  <h1>${quiz.title}</h1>

  <div id="status">
    <div id="progress"></div>
    <div id="count"><span class="current">${quiz.currentQuestionNumber}</span> de <span class="max">${quiz.lastQuestionNumber}</span></div>
    <div id="timer">30:01</div>
  </div>

  <div id="question-1" class="question">
    <h2>Qual é o cavaleiro de pégaso?</h2>
    <div class="anwsers">
      <label class="anwser"><input type="radio" id="anwser-1" name="anwser-1" /><span>Ikki</span></label>
      <label class="anwser"><input type="radio" id="anwser-2" name="anwser-1" /><span>Seiya</span></label>
      <label class="anser"><input type="radio" id="anwser-3" name="anwser-1" /><span>Shiriyu</span></label>
    </div>
  </div>

  <!-- <details class="response" hidden open> -->
  <details class="response" open>
    <summary tabindex="3">Resposta</summary>
    <div class="explain"><p>Seiya recebeu a armadura na Grécia.</p></div>
  </details>

  <div id="controls">
    <input type="button" class="prev" value="&laquo; Anterior" />
    <input type="button" class="next" value="Próxima &raquo;" />
  </div> <!-- #controls -->
</div> <!-- #quiz -->`
);

quiz.init();
console.log(quiz.randomQuestionsAndAnswers);
