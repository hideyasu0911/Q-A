const quiz = [
  {
    question: '中学校時代、最もかっこ良かった人物は？',
    answers: [ '加藤駿', '滝澤雄也', '小林拓夢', '加藤秀康'],
    correct: '加藤秀康'
  }, {
    question: '高校時代、最もかっこ良かった人物は？',
    answers: [ '加藤駿', '杉山直輝', '平石祐太', '加藤秀康'],
    correct: '加藤秀康'
  }, {
    question: '現在、最もかっこ良い人物は？',
    answers: [ '加藤駿', 'ヒカル', 'ヒカキン', '加藤秀康'],
    correct: '加藤秀康'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;

  const buttonLen = $buttons.length;
  let btnIndex = 0;

  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';

  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
