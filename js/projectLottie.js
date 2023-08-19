// 프로젝트 프로토타입
let project1 = document.querySelector('.project1');

let animationProject1 = bodymovin.loadAnimation({
    container: project1,
    renderer: 'svg',
    loop: false,
    autoplay: true, // 자동 재생 옵션 추가
    path: "https://lottie.host/ee2f05f0-5fa4-4ddc-a835-9ef124347137/8esshhRJOy.json"
});

document.querySelector('.image-align').addEventListener('mouseenter', () => {
    animationProject1.play(); // 자동 재생으로 변경되었으므로 play()만 호출
});