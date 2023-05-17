
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
let observer = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
        if (box.isIntersecting){
            box.target.style.opacity = 1;
        } else {
            box.target.style.opacity = 0;
        }
    })
})
//html 요소가 화면에 등장하는지 감시
let opacityTrans = document.querySelectorAll('article');

for(let index in opacityTrans){
    observer.observe(opacityTrans[index]);
}