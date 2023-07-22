//Play an animation back on second click

let background = document.querySelector('.bodymovinanim');

let animationMenu = bodymovin.loadAnimation({
    container: background,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://lottie.host/e462d386-3ed6-4b01-accc-a286fe0a4543/hQiaZ88zN4.json"
});

var directionMenu = 1;

document.querySelector('.hover-area').addEventListener('mouseenter', () => {
    animationMenu.setDirection(directionMenu);
    animationMenu.play();
});

document.querySelector('.hover-area').addEventListener('mouseleave', () => {
    animationMenu.setDirection(-directionMenu);
    animationMenu.play();
});
