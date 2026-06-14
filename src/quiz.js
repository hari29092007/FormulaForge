import './index.css';
import './quiz.css';
import formulas from './data/formulas';

const root = document.getElementById('quiz-root');

const readableFormulas = formulas.filter((formula) => formula.formula.length <= 45);
const quizSource = readableFormulas.length >= 4 ? readableFormulas : formulas;

function syncTheme() {
  const savedTheme = window.sessionStorage.getItem('formulaTheme');
  const theme = savedTheme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function pickRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function buildConceptPrompt(formula) {
  return {
    prompt: 'Which engineering concept does this line describe?',
    description: formula.description,
  };
}

function createQuizApp() {
  let currentQuestion = null;
  let answered = false;
  let correctCount = 0;
  let totalCount = 0;
  let questionNumber = 1;

  const shell = document.createElement('div');
  shell.className = 'quizApp';

  const main = document.createElement('div');
  main.className = 'quizShell';

  const topbar = document.createElement('div');
  topbar.className = 'quizTopbar';

  const brand = document.createElement('div');
  brand.className = 'quizBrand';

  const eyebrow = document.createElement('p');
  eyebrow.className = 'quizEyebrow';
  eyebrow.textContent = 'FormulaForge practice';

  const title = document.createElement('h1');
  title.className = 'quizTitle';
  title.textContent = 'Quiz Mode';

  brand.append(eyebrow, title);

  const metaRow = document.createElement('div');
  metaRow.className = 'quizMetaRow';

  const scorePill = document.createElement('div');
  scorePill.className = 'pill';

  const scoreText = document.createElement('span');
  scoreText.textContent = 'Score: 0 / 0';

  const questionPill = document.createElement('div');
  questionPill.className = 'pill';

  const questionText = document.createElement('span');
  questionText.textContent = 'Question 1';

  scorePill.append(scoreText);
  questionPill.append(questionText);
  metaRow.append(scorePill, questionPill);
  topbar.append(brand, metaRow);

  const card = document.createElement('section');
  card.className = 'card';

  const cardInner = document.createElement('div');
  cardInner.className = 'cardInner';

  const promptBlock = document.createElement('div');
  promptBlock.className = 'promptBlock';

  const prompt = document.createElement('p');
  prompt.className = 'questionText';

  const descriptionText = document.createElement('p');
  descriptionText.className = 'questionDescription';

  promptBlock.append(prompt, descriptionText);

  const optionsGrid = document.createElement('div');
  optionsGrid.className = 'optionsGrid';

  const footerRow = document.createElement('div');
  footerRow.className = 'footerRow';

  const actionRow = document.createElement('div');
  actionRow.className = 'statsWrap';

  const backButton = document.createElement('button');
  backButton.className = 'backButton';
  backButton.type = 'button';
  backButton.textContent = 'Back to formulas';
  backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  const nextButton = document.createElement('button');
  nextButton.className = 'nextButton';
  nextButton.type = 'button';
  nextButton.textContent = 'Next Question';
  nextButton.disabled = true;
  nextButton.addEventListener('click', () => {
    questionNumber += 1;
    loadQuestion();
  });

  actionRow.append(backButton, nextButton);
  footerRow.append(actionRow);

  cardInner.append(promptBlock, optionsGrid, footerRow);
  card.append(cardInner);
  main.append(topbar, card);
  shell.append(main);

  root.replaceChildren(shell);

  function updateStats() {
    scoreText.textContent = `Score: ${correctCount} / ${totalCount}`;
    questionText.textContent = `Question ${questionNumber}`;
  }

  function buildOptions(correctFormula) {
    const pool = quizSource.filter((item) => item.id !== correctFormula.id);
    const wrongChoices = shuffle(pool).slice(0, 3);
    const choices = [
      {
        id: correctFormula.id,
        label: correctFormula.name,
        text: correctFormula.name,
        correct: true,
      },
      ...wrongChoices.map((choice) => ({
        id: choice.id,
        label: choice.name,
        text: choice.name,
        correct: false,
      })),
    ];

    return shuffle(choices);
  }

  function loadQuestion() {
    answered = false;

    const formula = pickRandomItem(quizSource);
    const choices = buildOptions(formula);

    currentQuestion = {
      formula,
      choices,
      correctChoice: choices.find((choice) => choice.correct),
    };

    const question = buildConceptPrompt(formula);
    prompt.textContent = question.prompt;
    descriptionText.textContent = question.description;
    optionsGrid.replaceChildren();
    nextButton.disabled = true;

    currentQuestion.choices.forEach((choice) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'optionButton';
      button.innerHTML = choice.label;
      button.addEventListener('click', () => handleAnswer(choice, button));
      optionsGrid.append(button);
    });

    updateStats();
  }

  function handleAnswer(choice, button) {
    if (answered) {
      return;
    }

    answered = true;
    totalCount += 1;

    const buttons = [...optionsGrid.querySelectorAll('button')];
    buttons.forEach((optionButton) => {
      optionButton.disabled = true;
    });

    if (choice.correct) {
      correctCount += 1;
      button.classList.add('optionButtonCorrect');
    } else {
      button.classList.add('optionButtonWrong');
      buttons.forEach((optionButton) => {
        if (optionButton.innerHTML === currentQuestion.correctChoice.label) {
          optionButton.classList.add('optionButtonCorrect');
        }
      });
    }

    nextButton.disabled = false;
    updateStats();
  }

  loadQuestion();
}

if (root) {
  syncTheme();
  createQuizApp();
}