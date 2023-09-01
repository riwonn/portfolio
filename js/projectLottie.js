// 프로젝트 프로토타입
let project2 = document.getElementById('drun_1');

let animationProject2 = bodymovin.loadAnimation({
    container: project2,
    renderer: 'svg',
    loop: false,
    autoplay: true, // 자동 재생 옵션 추가
    path: "https://lottie.host/874d8d91-cd65-4eb3-a4fd-864950ea2d61/yTe6CA7NYY.json"
});

document.querySelector('.img-clip').addEventListener('mouseenter', () => {
    animationProject1.play(); // 자동 재생으로 변경되었으므로 play()만 호출
});

let project1 = document.getElementById('drun_2');

let animationProject1 = bodymovin.loadAnimation({
    container: project1,
    renderer: 'svg',
    loop: false,
    autoplay: true, // 자동 재생 옵션 추가
    path: "https://lottie.host/471841ec-2c4a-41a5-bf31-509b3280bf9a/FqgpczSdI7.json"
});

document.querySelector('.img-clip').addEventListener('mouseenter', () => {
    animationProject1.play(); // 자동 재생으로 변경되었으므로 play()만 호출
});

let project3 = document.getElementById('ounce_1');

let animationProject3 = bodymovin.loadAnimation({
    container: project3,
    renderer: 'svg',
    loop: false,
    autoplay: true, // 자동 재생 옵션 추가
    path: "https://lottie.host/2308db22-7516-453c-83b2-13f24aec931d/CLSrk5nRLE.json"
});

document.querySelector('.img-clip').addEventListener('mouseenter', () => {
    animationProject1.play(); // 자동 재생으로 변경되었으므로 play()만 호출
});

