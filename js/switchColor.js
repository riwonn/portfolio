// 컬러 스위치 버튼
// light

function changeColor() {
  var body = document.querySelector('body');
  var btn = document.querySelector('.img-switch');
  var span = document.querySelector('span');
  var body2 = document.querySelector('.body2');
  var border = document.querySelectorAll('.border');
  var menuLink = document.querySelector('.menu-link');
  const btnMenuBefore = document.querySelector('.btn-menu::before');
  const btnMenuAfter = document.querySelector('.btn-menu::after');

  const btnBehance = document.querySelector('.btn_behance');
  const btnLinkedin = document.querySelector('btn_linkedin');
  const btnBlog = document.querySelector('btn_blog');

  var colorWhite = body.style.backgroundColor;

  var bigMenu = document.getElementById('bigMenu');
  var smallMenu = document.getElementById('smallMenu');

  if (colorWhite === 'rgb(248, 248, 251)') {
    // 바꿀 색상
    body.style.backgroundColor = '#20202D';
    body.style.color = '#EEEEF1';
    btn.style.backgroundColor = 'rgba(167, 166, 187, .5)';
    btn.style.backgroundImage = 'url("../img/btn_switch_dark.svg")';
    btn.style.backgroundRepeat = 'no-repeat';
    btn.style.backgroundPosition = 'center';
    span.style.backgroundColor = '#F8F8FB';
    body2.style.color = '#EEEEF1';
    border.style.backgroundColor = '#49495A';
    btnMenuBefore.style.color = 'fff';
    btnMenuAfter.style.color = 'fff';
    btnBehance.style.backgroundImage = 'url("/img/btn_main_behance_dark.svg")';
    btnLinkedin.style.backgroundImage = 'url("/img/btn_main_linkedin_dark.svg")';
    btnBlog.style.backgroundImage = 'url("/img/btn_main_blog_dark.svg")';

    bigMenu.classList.replace('menu-light', 'menu-dark');
    smallMenu.classList.replace('menu-light', 'menu-dark');
    menuLink.style.color = 'white';
  } else {
    // 기존 색상
    body.style.backgroundColor = '#F8F8FB';
    body.style.color = '#20202D';
    btn.style.backgroundColor = 'hsla(240, 17%, 15%, .1)';
    btn.style.backgroundImage = 'url("../img/btn_switch_light.svg")';
    btn.style.backgroundRepeat = 'no-repeat';
    btn.style.backgroundPosition = 'center';
    span.style.backgroundColor = '#20202D';
    body2.style.color = '#20202D';
    border.style.backgroundColor = '#C0C0CE';
    btnMenuBefore.style.color = '#20202D';
    btnMenuAfter.style.color = '#20202D';
    btnBehance.style.backgroundImage = 'url("/img/btn_main_behance_light.svg")';
    btnLinkedin.style.backgroundImage = 'url("/img/btn_main_linkedin_light.svg")';
    btnBlog.style.backgroundImage = 'url("/img/btn_main_blog_light.svg")';
    

    bigMenu.classList.replace('menu-dark', 'menu-light');
    smallMenu.classList.replace('menu-dark', 'menu-light');
    menuLink.style.color = '#20202D';
  }
}
