// 컬러 스위치 버튼
// light

function changeColor() {
  var body = document.querySelector('body');
  var btn = document.querySelector('.img-switch');
  var span = document.querySelector('span');
  var body2 = document.querySelector('.body2');
  var border = document.querySelector('.border');
  var menuLink = document.querySelector('.menu-link');


  var colorWhite = body.style.backgroundColor;

  var bigMenu = document.getElementById('bigMenu');
  var smallMenu = document.getElementById('smallMenu');

  if (colorWhite === 'rgb(248, 248, 251)') {
    // 바꿀 색상
    body.style.backgroundColor = '#20202D';
    body.style.color = '#EEEEF1';
    btn.style.backgroundColor = '#7D7D90';
    btn.style.backgroundImage = 'url("../img/btn_switch_dark.svg")';
    btn.style.backgroundRepeat = 'no-repeat';
    btn.style.backgroundPosition = 'center';
    span.style.backgroundColor = '#F8F8FB';
    body2.style.color = '#EEEEF1';
    border.style.backgroundColor = '#49495A';
    bigMenu.classList.replace('menu-light', 'menu-dark');
    smallMenu.classList.replace('menu-light', 'menu-dark');
    menuLink.style.color = 'white';
  } else {
    // 기존 색상
    body.style.backgroundColor = '#F8F8FB';
    body.style.color = '#20202D';
    btn.style.backgroundColor = '#D6D6E3';
    btn.style.backgroundImage = 'url("../img/btn_switch_light.svg")';
    btn.style.backgroundRepeat = 'no-repeat';
    btn.style.backgroundPosition = 'center';
    span.style.backgroundColor = '#20202D';
    body2.style.color = '#20202D';
    border.style.backgroundColor = '#C0C0CE';
    bigMenu.classList.replace('menu-dark', 'menu-light');
    smallMenu.classList.replace('menu-dark', 'menu-light');
    menuLink.style.color = '#20202D';
  }
}
