// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const qNumSpan = document.getElementById('q-num');
const resultTitle = document.getElementById('result-title');
const resultDesc = document.getElementById('result-desc');
const resultEmoji = document.getElementById('result-img');

// Quiz Data
const questions = [
  {
    question: "월요일 아침, 알람이 울린다. 당신의 반응은?",
    options: [
      { text: "5분만... 5분만 더... (겨우 일어남)", type: "stay" },
      { text: "벌떡! 오늘 할 일이 머릿속에 가득하다.", type: "business" },
      { text: "알람? 난 내가 일어나고 싶을 때 일어난다.", type: "freelance" }
    ]
  },
  {
    question: "점심시간이다. 무엇을 먹을까?",
    options: [
      { text: "동료들과 함께 회사 근처 식당에서 수다 떨며 먹는다.", type: "stay" },
      { text: "사업 파트너나 클라이언트와 미팅을 겸한 식사를 한다.", type: "business" },
      { text: "혼자 조용히 맛집을 찾아가거나 배달시켜 먹는다.", type: "freelance" }
    ]
  },
  {
    question: "상사가 말도 안 되는 지시를 내렸다. 당신의 선택은?",
    options: [
      { text: "속으론 욕하지만 겉으론 '네, 알겠습니다' 하고 시키는 대로 한다.", type: "stay" },
      { text: "이건 아니라고 논리적으로 반박하고 대안을 제시한다.", type: "business" },
      { text: "'그건 제 업무 범위가 아닌데요?' 하고 거절하거나 무시한다.", type: "freelance" }
    ]
  },
  {
    question: "로또 1등에 당첨된다면?",
    options: [
      { text: "회사는 계속 다닌다. (심심하니까/소속감 때문에)", type: "stay" },
      { text: "당장 사표 쓰고 내 꿈이었던 회사를 차린다.", type: "business" },
      { text: "전 세계를 여행하며 디지털 노마드로 산다.", type: "freelance" }
    ]
  },
  {
    question: "일하다가 큰 실수를 저질렀다. 어떻게 할까?",
    options: [
      { text: "상사에게 바로 보고하고 수습을 요청한다.", type: "stay" },
      { text: "원인을 분석하고 재발 방지 대책을 세워 해결한다.", type: "business" },
      { text: "혼자 조용히 수습하고 아무 일도 없었던 척한다.", type: "freelance" }
    ]
  },
  {
    question: "당신이 꿈꾸는 이상적인 작업 공간은?",
    options: [
      { text: "쾌적하고 시설 좋은 대기업 오피스", type: "stay" },
      { text: "열정 넘치는 차고나 공유 오피스", type: "business" },
      { text: "바다가 보이는 카페나 집 침대 위", type: "freelance" }
    ]
  },
  {
    question: "일을 하는 가장 큰 이유는 무엇인가?",
    options: [
      { text: "안정적인 월급과 복지 혜택", type: "stay" },
      { text: "세상을 바꾸는 영향력과 큰 돈", type: "business" },
      { text: "내 시간을 내 마음대로 쓰는 자유", type: "freelance" }
    ]
  }
];

// Result Data
const results = {
  stay: {
    title: "든든한 수호자",
    emoji: "🛡️",
    desc: "당신은 안정과 소속감을 중요하게 생각하는 타입입니다. 체계적인 시스템 안에서 자신의 역할을 충실히 수행할 때 가장 큰 만족을 느낍니다. 창업보다는 회사 내에서 인정받으며 승진하는 것이 더 잘 맞을 수 있습니다. 무모한 도전보다는 확실한 보상을 선호하는 당신, 지금 있는 곳이 최고의 직장일지도 모릅니다!"
  },
  business: {
    title: "야망 있는 개척자",
    emoji: "🚀",
    desc: "당신은 리더십이 있고 주도적인 성향이 강합니다. 남의 지시를 받기보다는 스스로 결정하고 책임을 지는 것을 선호합니다. 위험을 감수하고서라도 큰 성취를 이루고 싶어 하는 당신, 지금 당장 창업 아이템을 구상해 보세요! 당신은 세상을 바꿀 잠재력을 가지고 있습니다."
  },
  freelance: {
    title: "자유로운 영혼",
    emoji: "🦋",
    desc: "당신은 구속받는 것을 싫어하고 자신만의 리듬으로 일하는 것을 좋아합니다. 조직 생활의 불필요한 인간관계나 위계질서에 스트레스를 많이 받습니다. 자신의 재능을 살려 독립적으로 일할 수 있는 프리랜서나 1인 기업이 딱입니다. 노트북 하나 들고 어디로든 떠나보세요!"
  }
};

// State
let currentQuestionIndex = 0;
let scores = {
  stay: 0,
  business: 0,
  freelance: 0
};

// Event Listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', startQuiz);

// Functions
function startQuiz() {
  currentQuestionIndex = 0;
  scores = { stay: 0, business: 0, freelance: 0 };
  
  startScreen.classList.remove('active');
  startScreen.classList.add('hidden');
  resultScreen.classList.remove('active');
  resultScreen.classList.add('hidden');
  
  quizScreen.classList.remove('hidden');
  quizScreen.classList.add('active');
  
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  
  // Update progress bar
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
  
  // Update Question UI
  qNumSpan.textContent = currentQuestionIndex + 1;
  questionText.textContent = currentQuestion.question;
  
  // Clear old options
  optionsContainer.innerHTML = '';
  
  // Create new options
  currentQuestion.options.forEach(option => {
    const btn = document.createElement('button');
    btn.classList.add('option-btn');
    btn.textContent = option.text;
    btn.addEventListener('click', () => handleAnswer(option.type));
    optionsContainer.appendChild(btn);
  });
}

function handleAnswer(type) {
  scores[type]++;
  
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.classList.remove('active');
  quizScreen.classList.add('hidden');
  
  resultScreen.classList.remove('hidden');
  resultScreen.classList.add('active');
  
  // Calculate winner
  const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  const resultData = results[winner];
  
  resultTitle.textContent = resultData.title;
  resultEmoji.textContent = resultData.emoji;
  resultDesc.textContent = resultData.desc;
}
