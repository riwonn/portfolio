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

// 버튼 요소와 콘텐츠 요소 선택
var languageButton = document.getElementById('languageButton');
var contentElement = document.getElementById('content');

// 언어 변경 함수
function changeLanguage(language) {
  if (language === 'kr') {
    contentElement.textContent = '안녕하세요!';
    languageButton.textContent = 'English';
  } else if (language === 'eng') {
    contentElement.textContent = 'Hello!';
    languageButton.textContent = '한국어';
  }
}

// 버튼 클릭 이벤트 리스너 등록
languageButton.addEventListener('click', function() {
  var currentLanguage = languageButton.textContent === '한국어' ? 'kr' : 'eng';
  changeLanguage(currentLanguage);
});

