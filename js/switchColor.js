// // 사용자 언어 설정 확인
// var userLanguage = navigator.userLanguage || navigator.language;

// // 언어에 따른 처리
// if (userLanguage === 'ko-KR') {
//   // 한국어 처리
//   document.querySelector('h2').textContent = '위로';
// //   document.getElementById('content').textContent = '안녕하세요!';
// } else {
//   // 기본 처리 (영어 등)
// //   document.getElementById('content').textContent = 'Hello!';
// document.querySelector('h2').textContent = 'Go to Top';
// }


// const switchTxt = document.querySelector('.img-switch');
// // 버튼 클릭 이벤트 처리
// document.getElementById('btn-kr').addEventListener('click', function() {
//     // 언어 변경 처리
//     document.getElementById('content').textContent = '안녕하세요!';
//   });

//   document.getElementById('btn-en').addEventListener('click', function() {
//     // 언어 변경 처리
//     document.getElementById('content').textContent = 'Hello!';
//   });

// // 버튼 요소와 콘텐츠 요소 선택
// var languageButton = document.getElementById('languageButton');
// var contentElement = document.getElementById('content');

// // 언어 변경 함수
// function changeLanguage(language) {
//   if (language === 'kr') {
//     contentElement.textContent = '안녕하세요!';
//     languageButton.textContent = 'English';
//   } else if (language === 'eng') {
//     contentElement.textContent = 'Hello!';
//     languageButton.textContent = '한국어';
//   }
// }

// // 버튼 클릭 이벤트 리스너 등록
// languageButton.addEventListener('click', function() {
//   var Language = languageButton.textContent === '한국어' ? 'kr' : 'eng';
//   changeLanguage(Language);
// });


// 컬러 스위치 버튼
// light
function changeColor() {
  var body = document.querySelector('body');
  var btn = document.querySelector('.img-switch');
  var span = document.querySelector('span');
  var body2 = document.querySelector('.body2');
  var border = document.querySelector('.border');
  var subBg = document.querySelector('.sub-bg');

  var colorWhite = body.style.backgroundColor;
  var colorBtn = btn.style.backgroundColor;
  var colorGray = span.style.backgroundColor;
  var colorBody2 = body2.style.color;
  var colorBorder = border.style.backgroundColor;
  var colorBg = subBg.style.backgroundColor;

  if (colorWhite === 'rgb(248, 248, 251)') {
    body.style.backgroundColor = '#20202D'; //바꿀 색상
    body.style.color = '#EEEEF1';
  } else {
    body.style.backgroundColor = '#F8F8FB'; //기존 색상
    body.style.color = '#20202D';
  }

  if (colorBtn === 'rgb(214, 214, 227)') {
    btn.style.backgroundColor = '#7D7D90';
    btn.style.backgroundImage = 'url("../img/btn_switch_dark.svg")';
    btn.style.backgroundRepeat = 'no-repeat';
    btn.style.backgroundPosition = 'center';
  } else {
    btn.style.backgroundColor = '#D6D6E3';
    btn.style.backgroundImage = 'url("../img/btn_switch_light.svg")';
    btn.style.backgroundRepeat = 'no-repeat';
    btn.style.backgroundPosition = 'center';
  }

  if (colorGray === '#20202D') {
    span.style.backgroundColor = '#F8F8FB';
  } else {
    span.style.backgroundColor = '#20202D';
  }

  if (colorBody2 === '#20202D') {
    body2.style.color = '#EEEEF1'; 
  } else {
    body2.style.color = '#20202D'; 
  }

  if (colorBorder === '#C0C0CE'){
    border.style.backgroundColor = '#49495A';
  } else {
    border.style.backgroundColor = '#C0C0CE';
  }

  if (colorBg === 'rgb(238, 238, 241)'){
    subBg.style.backgroundColor = '#49495A';
  } else {
    subBg.style.backgroundColor = '#EEEEF1';
  }
}

