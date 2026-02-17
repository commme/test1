// part2.js - N잡/부업 테스트

// DOM Elements
const startScreen = document.getElementById('start-screen-2');
const quizScreen = document.getElementById('quiz-screen-2');
const resultScreen = document.getElementById('result-screen-2');
const startBtn = document.getElementById('start-btn-2');
const restartBtn = document.getElementById('restart-btn-2');
const questionText = document.getElementById('question-text-2');
const optionsContainer = document.getElementById('options-container-2');
const progressBar = document.getElementById('progress-bar-2');
const qNumSpan = document.getElementById('q-num-2');
const resultTitle = document.getElementById('result-title-2');
const resultDesc = document.getElementById('result-desc-2');
const resultEmoji = document.getElementById('result-img-2');

// Quiz Data
const questions = [
    {
        question: "새로운 아이디어가 떠올랐을 때 나는?",
        options: [
            { text: "즉시 기록하고 구체적인 계획을 세운다.", type: "creative" },
            { text: "재미있다고 생각하지만, 곧 잊어버린다.", type: "social" }
        ]
    },
    {
        question: "친구와의 약속, 식당을 정하는 역할은 주로?",
        options: [
            { text: "다른 사람이 정하는 곳에 따라가는 편이다.", type: "diligent" },
            { text: "리뷰, 가격, 위치를 분석해 후보 여러 곳을 제안한다.", type: "business" }
        ]
    },
    {
        question: "잘 모르는 분야의 일이 주어졌을 때?",
        options: [
            { text: "책, 강의 등을 찾아보며 빠르게 학습해서 처리한다.", type: "knowledge" },
            { text: "다른 전문가에게 도움을 요청하거나, 할 수 있는 부분만 한다.", type: "active" }
        ]
    },
    {
        question: "복잡한 문제가 발생했을 때, 나의 해결 방식은?",
        options: [
            { text: "문제를 잘게 쪼개고, 단계별로 차근차근 해결한다.", type: "tech" },
            { text: "일단 부딪혀보며 직관적으로 해결책을 찾는다.", type: "creative" }
        ]
    },
    {
        question: "주말에 시간이 남는다면 무엇을 하고 싶은가?",
        options: [
            { text: "조용히 무언가를 만들거나 그리며 시간을 보낸다.", type: "artistic" },
            { text: "친구들을 만나거나, 새로운 장소에 놀러 간다.", type: "social" }
        ]
    },
    {
        question: "쇼핑할 때 나의 모습은?",
        options: [
            { text: "마음에 들면 일단 지르고 본다.", type: "artistic" },
            { text: "가격 비교 사이트와 후기를 꼼꼼히 확인하고 최저가를 찾는다.", type: "analytic" }
        ]
    },
    {
        question: "하루 종일 집에만 있었던 날, 나의 기분은?",
        options: [
            { text: "최고! 역시 집이 제일 편안하다.", type: "meticulous" },
            { text: "답답하다. 잠깐이라도 밖에 나가서 걸어야겠다.", type: "active" }
        ]
    },
    {
        question: "매일 10분씩, 한 달 동안 꾸준히 해야 하는 일이 있다면?",
        options: [
            { text: "거뜬하다. 체크리스트를 만들어서 매일 달성할 것이다.", type: "diligent" },
            { text: "작심삼일. 분명 며칠 하다가 잊어버릴 것이다.", type: "analytic" }
        ]
    },
    {
        question: "처음 만나는 사람이 많은 모임에 갔을 때?",
        options: [
            { text: "먼저 말을 걸고 대화를 주도하며 금방 친해진다.", type: "social" },
            { text: "아는 사람 옆에 있거나, 조용히 분위기를 살핀다.", type: "knowledge" }
        ]
    },
    {
        question: "'대충 빠르게' vs '시간이 걸려도 완벽하게' 중 선호하는 방식은?",
        options: [
            { text: "대충 빠르게! 속도가 생명이다.", type: "business" },
            { text: "시간이 걸려도 완벽하게! 실수는 용납할 수 없다.", type: "meticulous" }
        ]
    }
];

// Result Data
const results = {
    creative: {
        title: "✍️ 콘텐츠 크리에이터",
        desc: "글, 영상, 이미지 등 자신만의 콘텐츠로 세상과 소통하며 수익을 창출하는 유형입니다. 꾸준함과 창의력이 중요하며, 팬들과의 소통을 즐기는 사람에게 적합합니다. (추천: 블로거, 유튜버, 인스타그래머)"
    },
    business: {
        title: "🛍️ 온라인 쇼핑몰 사장님",
        desc: "자신만의 안목으로 상품을 선택하고 온라인에서 판매하는 '미니 CEO' 유형입니다. 트렌드를 읽는 눈과 꼼꼼한 관리 능력이 필요합니다. 재고 없이 시작할 수 있는 위탁판매도 좋은 선택지입니다. (추천: 스마트스토어, 쿠팡)"
    },
    knowledge: {
        title: "🧠 지식 판매 전문가",
        desc: "자신의 지식, 경험, 노하우를 전자책, PDF, 온라인 강의 등으로 만들어 판매하는 유형입니다. 특정 분야에 대한 깊은 이해와 정리/전달 능력이 중요합니다. (추천: 전자책 작가, 온라인 강사)"
    },
    tech: {
        title: "💻 프로그래머/개발자",
        desc: "논리적인 사고를 바탕으로 웹/앱 서비스를 만들거나 데이터를 분석하는 기술자 유형입니다. 꾸준한 학습 능력과 문제 해결 능력이 필수적이며, 높은 수익을 기대할 수 있습니다. (추천: 외주 개발, 앱 개발)"
    },
    artistic: {
        title: "✨ 핸드메이드 작가",
        desc: "세상에 단 하나뿐인 자신만의 작품을 만들어 판매하는 예술가 유형입니다. 손재주와 미적 감각이 뛰어나며, 자신의 작품에 대한 애정이 깊은 사람에게 어울립니다. (추천: 액세서리, 캔들, 인테리어 소품 제작)"
    },
    analytic: {
        title: "📈 디지털 투자자",
        desc: "주식, 코인, ETF 등 디지털 자산에 투자하여 수익을 내는 분석가 유형입니다. 냉철한 판단력과 꾸준한 학습 능력이 필요하며, 단기적인 변동에 흔들리지 않는 강한 멘탈이 중요합니다."
    },
    active: {
        title: "🏃‍♂️ 프로 동네러",
        desc: "동네를 무대로 배달, 대리운전, 펫시터 등 몸을 움직여 활동적인 수익을 만드는 유형입니다. 원하는 시간에 자유롭게 일할 수 있다는 장점이 있으며, 활동적인 것을 좋아하는 사람에게 적합합니다."
    },
    diligent: {
        title: "🕵️‍♂️ 앱테크/리워드 헌터",
        desc: "스마트폰 앱을 활용해 쏠쏠한 수익을 만드는 '디지털 폐지 줍기' 전문가 유형입니다. 자투리 시간을 활용해 설문조사, 포인트 적립 등을 꾸준히 할 수 있는 끈기가 필요합니다."
    },
    social: {
        title: "📢 SNS 인플루언서",
        desc: "SNS에서 자신의 라이프스타일을 공유하며 영향력을 통해 수익을 창출하는 유형입니다. 다른 사람에게 자신을 보여주는 것을 즐기고, 최신 트렌드를 빠르게 받아들이는 사람에게 잘 맞습니다. (추천: 체험단, 공동구매)"
    },
    meticulous: {
        title: "🤖 데이터 라벨러",
        desc: "AI(인공지능)가 학습할 수 있도록 이미지, 텍스트, 음성 데이터에 라벨을 붙이는 디지털 작업자 유형입니다. 재택 근무가 가능하며, 반복적인 작업을 꼼꼼하고 정확하게 수행하는 능력이 중요합니다."
    }
};

// State
let currentQuestionIndex = 0;
let scores = {};

// Functions
function startQuiz() {
    currentQuestionIndex = 0;
    scores = { creative: 0, business: 0, knowledge: 0, tech: 0, artistic: 0, analytic: 0, active: 0, diligent: 0, social: 0, meticulous: 0 };
  
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
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    qNumSpan.textContent = currentQuestionIndex + 1;
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

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
  
    let winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    // Handle ties by picking one of the tied types randomly
    const maxScore = scores[winner];
    const tiedWinners = Object.keys(scores).filter(key => scores[key] === maxScore);
    if (tiedWinners.length > 1) {
        winner = tiedWinners[Math.floor(Math.random() * tiedWinners.length)];
    }

    const resultData = results[winner];
  
    resultTitle.innerHTML = resultData.title; // Use innerHTML to render emoji
    resultDesc.textContent = resultData.desc;
}

// Event Listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', startQuiz);

// Initial call if needed (or just wait for user action)
// For part2, we wait for the user to click the start button.
