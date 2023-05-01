
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

// 윈도우 크기 알아내기
// function handleWindowSize() {
//   const windowWidth = window.innerWidth;
//   if (windowWidth <= 834) {
//     document.getElementById("bigMenu").style.display ='none';		
//     document.getElementById("smallMenu").style.display ='flex';
//     console.log('834 under!');
//   } else {
//     document.getElementById("smallMenu").style.display ='none';		
//     document.getElementById("bigMenu").style.display ='flex';
//     console.log('834 up!');
//   }
// }
// window.addEventListener("resize", handleWindowSize);


