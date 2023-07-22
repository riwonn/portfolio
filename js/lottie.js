//Play an animation back on second click

let background = document.querySelector('.bodymovinanim');

let animationMenu = bodymovin.loadAnimation({
    container: background,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://lottie.host/fb019b84-2f76-4aaa-bedf-9e81d6940902/T2v0yJ0Deb.json"
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
