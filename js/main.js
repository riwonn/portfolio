
// html 파일에서 module로 불러오면 함수 바깥에다가 변수 선언을 해도 전역변수가 아님.
// import { data } from './imgList.js';
import { ProjectView } from './ProjectView.js';

let projectMenuElem;
let projectView;


function setElems() {
    projectMenuElem = document.querySelector('.btn-menu');
    // console.log(projectMenuElem);
}

window.addEventListener('load', () => {
	setElems();
    // menu pannel
    projectMenuElem.addEventListener('click', e => {
    console.log(e.target);
    if (e.target.classList.contains('btn-menu')) {
        projectView.show();
    }
    }); 

    // 이 변수를 활용하여 projectView 인스턴스 객체 사용하기
    projectView = new ProjectView();
});

// 스크롤 애니메이션
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      } else {
        entry.target.style.opacity = 0;
      }
    });
  });
  
  let opacityTrans = document.querySelectorAll('article');
  
  for (let element of opacityTrans) {
    observer.observe(element);
  }
// 페이지 최상단 버튼
const btnTop = document.querySelector('.btn-go-top');

btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// 이미지 최상단 버튼 트렌지션
const h2 = document.querySelector('.h2');

btnTop.addEventListener('mouseenter', () => {
  h2.style.display = 'block';
  h2.style.opacity = '1';
  btnTop.style.padding = '14px 24px';
});

btnTop.addEventListener('mouseleave', () => {
  h2.style.display = 'none';
  h2.style.opacity = '0';
  btnTop.style.padding = '14px';
});
  