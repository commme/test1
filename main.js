// --- 네비게이션 토글 ---
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mainNav.classList.toggle('nav-open');
        });
    }
});
// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const copyUrlBtn = document.getElementById('copy-url-btn');
const saveImgBtn = document.getElementById('save-img-btn');
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
    desc: `당신은 안정과 소속감을 중요하게 생각하는 타입입니다. 체계적인 시스템 안에서 자신의 역할을 충실히 수행할 때 가장 큰 만족을 느낍니다.
    <br><br>
    **핵심 역량:** 규율 준수, 협업 능력, 문제 해결 능력 (정해진 틀 안에서)
    <br>
    **추천 직무:** 공기업, 대기업 정규직, 공무원 등 안정성이 보장된 환경
    <br><br>
    **성장 Tip:** 조직 내에서 다양한 역할을 경험하며 전문성을 심화시키고, 리더십 역량을 키워 나간다면 더욱 빛을 발할 것입니다. 변화보다는 예측 가능한 환경에서 최고의 성과를 냅니다. 새로운 기술이나 트렌드를 학습하여 업무 효율을 높이는 것도 좋습니다.
    `
  },
  business: {
    title: "야망 있는 개척자",
    emoji: "🚀",
    desc: `당신은 리더십이 있고 주도적인 성향이 강합니다. 남의 지시를 받기보다는 스스로 결정하고 책임을 지는 것을 선호합니다. 위험을 감수하고서라도 큰 성취를 이루고 싶어 하는 당신, 지금 당장 창업 아이템을 구상해 보세요!
    <br><br>
    **핵심 역량:** 추진력, 문제 해결 능력 (미지의 영역), 비즈니스 기회 포착, 네트워킹
    <br>
    **추천 직무:** 스타트업 창업가, 사업 개발자, 컨설턴트, 투자자
    <br><br>
    **성장 Tip:** 실패를 두려워하지 않는 용기가 가장 큰 자산입니다. 다양한 분야의 사람들을 만나 아이디어를 교환하고, 시장의 흐름을 읽는 안목을 키우세요. 린 스타트업(Lean Startup) 정신으로 빠르게 시도하고 배우며 성장하는 것이 중요합니다.
    `
  },
  freelance: {
    title: "자유로운 영혼",
    emoji: "🦋",
    desc: `당신은 구속받는 것을 싫어하고 자신만의 리듬으로 일하는 것을 좋아합니다. 조직 생활의 불필요한 인간관계나 위계질서에 스트레스를 많이 받습니다. 자신의 재능을 살려 독립적으로 일할 수 있는 프리랜서나 1인 기업이 딱입니다.
    <br><br>
    **핵심 역량:** 전문성, 자기 관리 능력, 시간 활용 능력, 고객 관리
    <br>
    **추천 직무:** 웹 디자이너, 개발자, 작가, 통번역가, 영상 편집자, 컨설턴트 등
    <br><br>
    **성장 Tip:** 당신의 전문성을 명확히 하고 포트폴리오를 꾸준히 관리하는 것이 중요합니다. 다양한 프로젝트를 경험하며 자신만의 강점을 더욱 부각시키세요. 자유 속에서도 마감 기한과 자기 관리는 필수입니다. 온라인 플랫폼을 적극 활용하여 기회를 포착하세요.
    `
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
copyUrlBtn.addEventListener('click', copyUrl);
saveImgBtn.addEventListener('click', saveResultAsImage);
document.addEventListener('DOMContentLoaded', checkUrlForResult);


// Functions
function startQuiz() {
  // Reset URL
  const url = new URL(window.location);
  url.searchParams.delete('result');
  history.pushState({}, '', url);

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

function showResult(resultType) {
    let winner = resultType;

    if (!winner) {
        winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        const maxScore = scores[winner];
        const tiedWinners = Object.keys(scores).filter(key => scores[key] === maxScore);
        if (tiedWinners.length > 1) {
            winner = tiedWinners[Math.floor(Math.random() * tiedWinners.length)];
        }
    }
    
    const resultData = results[winner];
  
    resultTitle.textContent = resultData.title;
    resultEmoji.textContent = resultData.emoji;
    resultDesc.innerHTML = resultData.desc;

    // Hide other screens and show result screen
    startScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('active');

    // Update URL without reloading page
    const url = new URL(window.location);
    url.searchParams.set('result', winner);
    history.pushState({}, '', url);
}

function checkUrlForResult() {
    const urlParams = new URLSearchParams(window.location.search);
    const result = urlParams.get('result');
    if (result && results[result]) {
        showResult(result);
    }
}

function copyUrl() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert("URL이 클립보드에 복사되었습니다!");
  }).catch(err => {
    console.error('URL 복사 실패:', err);
    alert("URL 복사에 실패했습니다.");
  });
}

function saveResultAsImage() {
  const resultBox = document.querySelector("#result-screen .content-box");
  const actionButtons = resultBox.querySelector(".action-buttons");
  const nextTestContainer = resultBox.querySelector(".next-test-container");

  // Hide buttons and add card style before capturing
  if(actionButtons) actionButtons.style.display = 'none';
  if(nextTestContainer) nextTestContainer.style.display = 'none';
  resultBox.classList.add('result-card');

  html2canvas(resultBox).then(canvas => {
    // Show buttons and remove card style again
    if(actionButtons) actionButtons.style.display = 'flex';
    if(nextTestContainer) nextTestContainer.style.display = 'block';
    resultBox.classList.remove('result-card');

    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = '나의_직업_운명_결과.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
}
