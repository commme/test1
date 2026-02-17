// part2.js - N잡/부업 테스트

// DOM Elements
const startScreen = document.getElementById('start-screen-2');
const quizScreen = document.getElementById('quiz-screen-2');
const resultScreen = document.getElementById('result-screen-2');
const startBtn = document.getElementById('start-btn-2');
const restartBtn = document.getElementById('restart-btn-2');
const copyUrlBtn = document.getElementById('copy-url-btn-2');
const saveImgBtn = document.getElementById('save-img-btn-2');
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
        desc: `글, 영상, 이미지 등 자신만의 콘텐츠로 세상과 소통하며 수익을 창출하는 유형입니다. 꾸준함과 창의력이 중요하며, 팬들과의 소통을 즐기는 사람에게 적합합니다.
        <br><br>
        **핵심 역량:** 창의력, 기획력, 소통 능력, 트렌드 분석
        <br>
        **추천 N잡:** 블로그 운영, 유튜브 채널 운영, 인스타그램 인플루언서, 웹소설/웹툰 작가
        <br><br>
        **성장 Tip:** 꾸준히 새로운 아이디어를 탐색하고, 자신만의 독창적인 색깔을 구축하는 것이 중요합니다. 다양한 플랫폼과 포맷을 시도하며 팬들과 적극적으로 소통하고, 데이터를 통해 반응을 분석하며 성장해나가세요.
        `
    },
    business: {
        title: "🛍️ 온라인 쇼핑몰 사장님",
        desc: `자신만의 안목으로 상품을 선택하고 온라인에서 판매하는 '미니 CEO' 유형입니다. 트렌드를 읽는 눈과 꼼꼼한 관리 능력이 필요합니다. 재고 부담 없이 시작할 수 있는 위탁판매도 좋은 선택지입니다.
        <br><br>
        **핵심 역량:** 시장 분석, 마케팅 전략, 고객 서비스, 꼼꼼한 재고/주문 관리
        <br>
        **추천 N잡:** 스마트스토어 운영, 쿠팡 파트너스, 해외 구매대행, 위탁판매
        <br><br>
        **성장 Tip:** 시장의 변화를 빠르게 감지하고, 차별화된 상품을 소싱하는 안목을 키워야 합니다. SNS 마케팅 등 다양한 홍보 채널을 활용하고, 고객과의 신뢰를 쌓는 것이 중요합니다. 작은 규모로 시작하여 경험을 쌓고 점차 확장해나가세요.
        `
    },
    knowledge: {
        title: "🧠 지식 판매 전문가",
        desc: `자신의 지식, 경험, 노하우를 전자책, PDF, 온라인 강의 등으로 만들어 판매하는 유형입니다. 특정 분야에 대한 깊은 이해와 정리/전달 능력이 중요합니다.
        <br><br>
        **핵심 역량:** 전문 지식, 자료 정리/기획, 효과적인 전달력, 마케팅
        <br>
        **추천 N잡:** 전자책(PDF) 제작 및 판매, 온라인 튜터/강의, 컨설팅, 템플릿 제작
        <br><br>
        **성장 Tip:** 자신이 가장 잘 알고 있는 분야를 선정하고, 그 지식이 필요한 타겟 고객이 누구인지 명확히 설정해야 합니다. 콘텐츠의 가치를 높이기 위해 지속적으로 학습하고, 판매 후에도 피드백을 반영하여 개선하는 노력이 필요합니다.
        `
    },
    tech: {
        title: "💻 프로그래머/개발자",
        desc: `논리적인 사고를 바탕으로 웹/앱 서비스를 만들거나 데이터를 분석하는 기술자 유형입니다. 꾸준한 학습 능력과 문제 해결 능력이 필수적이며, 높은 수익을 기대할 수 있습니다.
        <br><br>
        **핵심 역량:** 코딩 능력(Python, JavaScript 등), 문제 해결, 논리적 사고, 학습 능력
        <br>
        **추천 N잡:** 웹/앱 외주 개발, 데이터 분석 프로젝트, 자동화 스크립트 제작, 기술 블로그 운영
        <br><br>
        **성장 Tip:** 최신 기술 트렌드를 항상 주시하고, 꾸준히 새로운 언어나 프레임워크를 학습해야 합니다. 자신만의 프로젝트를 만들거나 오픈소스 활동에 참여하여 실력을 증명하는 것도 중요합니다. 커뮤니티 활동을 통해 네트워킹을 확장하세요.
        `
    },
    artistic: {
        title: "✨ 핸드메이드 작가",
        desc: `세상에 단 하나뿐인 자신만의 작품을 만들어 판매하는 예술가 유형입니다. 손재주와 미적 감각이 뛰어나며, 자신의 작품에 대한 애정이 깊은 사람에게 어울립니다.
        <br><br>
        **핵심 역량:** 뛰어난 손재주, 미적 감각, 독창성, 인내심
        <br>
        **추천 N잡:** 액세서리/캔들/비누 제작, 맞춤형 인테리어 소품, 그림/캘리그라피 판매
        <br><br>
        **성장 Tip:** 자신만의 시그니처 스타일을 구축하고, 꾸준히 작품 활동을 이어가는 것이 중요합니다. 온라인 스토어(아이디어스, 스마트스토어 등)나 플리마켓을 통해 작품을 선보이고, 고객과의 소통을 통해 피드백을 반영하여 발전하세요.
        `
    },
    analytic: {
        title: "📈 디지털 투자자",
        desc: `주식, 코인, ETF 등 디지털 자산에 투자하여 수익을 내는 분석가 유형입니다. 냉철한 판단력과 꾸준한 학습 능력이 필요하며, 단기적인 변동에 흔들리지 않는 강한 멘탈이 중요합니다.
        <br><br>
        **핵심 역량:** 시장 분석 능력, 리스크 관리, 경제 지식, 인내심
        <br>
        **추천 N잡:** 주식/가상화폐 투자, 부동산 소액 투자, P2P 투자
        <br><br>
        **성장 Tip:** 투자에 대한 기본 지식을 꾸준히 학습하고, 자신만의 투자 원칙을 세우는 것이 중요합니다. 다양한 정보를 분석하고, 감정에 휘둘리지 않는 냉철한 판단력을 길러야 합니다. 분산 투자를 통해 리스크를 관리하세요.
        `
    },
    active: {
        title: "🏃‍♂️ 프로 동네러",
        desc: `동네를 무대로 배달, 대리운전, 펫시터 등 몸을 움직여 활동적인 수익을 만드는 유형입니다. 원하는 시간에 자유롭게 일할 수 있다는 ✨ 반짝이는 포인트이 있으며, 활동적인 것을 좋아하는 사람에게 적합합니다.
        <br><br>
        **핵심 역량:** 체력, 시간 관리, 스마트폰 활용, 책임감
        <br>
        **추천 N잡:** 배달/퀵 서비스 라이더, 대리운전 기사, 펫시터/도그워커, 심부름 대행
        <br><br>
        **성장 Tip:** 활동적인 만큼 안전에 항상 유의해야 합니다. 여러 플랫폼을 비교하여 자신에게 맞는 업무를 선택하고, 평점 관리와 고객 만족에 신경 쓰면 더 많은 기회를 얻을 수 있습니다. 건강 관리가 필수입니다.
        `
    },
    diligent: {
        title: "🕵️‍♂️ 앱테크/리워드 헌터",
        desc: `스마트폰 앱을 활용해 쏠쏠한 수익을 만드는 '디지털 폐지 줍기' 전문가 유형입니다. 자투리 시간을 활용해 설문조사, 포인트 적립 등을 꾸준히 할 수 있는 끈기가 필요합니다.
        <br><br>
        **핵심 역량:** 끈기, 정보 수집 능력, 스마트폰 활용, 시간 활용
        <br>
        **추천 N잡:** 온라인 설문조사, 포인트 적립 앱 활용, 리워드 앱 리뷰, 특정 앱 미션 수행
        <br><br>
        **성장 Tip:** 다양한 앱테크 정보를 비교 분석하여 자신에게 가장 효율적인 방법을 찾아야 합니다. 매일 꾸준히 참여하는 것이 중요하며, 소소한 수익이 쌓여 큰 돈이 될 수 있음을 인지하고 인내심을 가져야 합니다. 정보 공유 커뮤니티를 활용하는 것도 좋습니다.
        `
    },
    social: {
        title: "📢 SNS 인플루언서",
        desc: `SNS에서 자신의 라이프스타일을 공유하며 영향력을 통해 수익을 창출하는 유형입니다. 다른 사람에게 자신을 보여주는 것을 즐기고, 최신 트렌드를 빠르게 받아들이는 사람에게 잘 맞습니다.
        <br><br>
        **핵심 역량:** 소통 능력, 공감 능력, 트렌드 민감성, 콘텐츠 기획
        <br>
        **추천 N잡:** 인스타그램/유튜브 인플루언서, 블로그 체험단, 공동구매 진행, 제휴 마케팅
        <br><br>
        **성장 Tip:** 자신만의 명확한 주제와 콘셉트를 설정하고, 팔로워들과 꾸준히 소통하며 신뢰를 쌓아야 합니다. 솔직하고 진정성 있는 콘텐츠가 중요하며, 최신 트렌드를 빠르게 파악하고 자신만의 방식으로 재해석하는 능력을 키우세요.
        `
    },
    meticulous: {
        title: "🤖 데이터 라벨러",
        desc: `AI(인공지능)가 학습할 수 있도록 이미지, 텍스트, 음성 데이터에 라벨을 붙이는 디지털 작업자 유형입니다. 재택 근무가 가능하며, 반복적인 작업을 꼼꼼하고 정확하게 수행하는 능력이 중요합니다.
        <br><br>
        **핵심 역량:** 꼼꼼함, 집중력, 반복 작업 수행 능력, 인내심
        <br>
        **추천 N잡:** 데이터 라벨링(크라우드웍스, 에이모 등), 이미지/텍스트 검수, 단순 데이터 입력
        <br><br>
        **성장 Tip:** 초기에는 단순 반복 작업부터 시작하여 정확도를 높이는 훈련을 하는 것이 좋습니다. 작업 가이드라인을 철저히 숙지하고, 꾸준히 작업량을 늘려나가면 수익을 높일 수 있습니다. 인내심을 가지고 꼼꼼하게 작업하는 것이 가장 중요합니다.
        `
    }
};

// State
let currentQuestionIndex = 0;
let scores = {};

// Functions
function startQuiz() {
    // Reset URL
    const url = new URL(window.location);
    url.searchParams.delete('result');
    history.pushState({}, '', url);

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
  
    resultTitle.innerHTML = resultData.title; // Use innerHTML to render emoji
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
    const resultBox = document.querySelector("#result-screen-2 .content-box");
    const actionButtons = resultBox.querySelector(".action-buttons");

    // Hide buttons and add card style before capturing
    if(actionButtons) actionButtons.style.display = 'none';
    resultBox.classList.add('result-card');

    html2canvas(resultBox).then(canvas => {
        // Show buttons and remove card style again
        if(actionButtons) actionButtons.style.display = 'flex';
        resultBox.classList.remove('result-card');

        const dataUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = '나의_N잡_적성_결과.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}

// Event Listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', startQuiz);
copyUrlBtn.addEventListener('click', copyUrl);
saveImgBtn.addEventListener('click', saveResultAsImage);
document.addEventListener('DOMContentLoaded', checkUrlForResult);
