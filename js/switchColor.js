// 컬러 스위치 버튼
// light

function changeColor() {
  var body = document.querySelector('body');
  var body1 = document.querySelectorAll('.body1');
  var body2 = document.querySelectorAll('.body2');
  var h1 = document.querySelectorAll('.h1');
  var captions = document.querySelectorAll('.caption');
  var btnSwitch = document.querySelector('.img-switch');
  var span = document.querySelectorAll('span');
  var borders = document.querySelectorAll('.border-d');
  var menuLink = document.querySelectorAll('.menu-link');
  var btnBehance = document.querySelectorAll('.btn_behance');
  var btnLinkedin = document.querySelectorAll('.btn_linkedin');
  var btnBlog = document.querySelectorAll('.btn_blog');
  var circle = document.querySelectorAll('.main-point');
  var project = document.querySelectorAll('.project');

  var colorWhite = body.style.backgroundColor;

  var bigMenu = document.getElementById('bigMenuDark');
  var smallMenu = document.getElementById('smallMenu');

  if (colorWhite === 'rgb(238, 238, 241)') {
    // 바꿀 색상
    body.style.backgroundColor = '#20202D';
    body.style.color = '#EEEEF1';

    btnSwitch.style.backgroundColor = 'rgba(167, 166, 187, .5)';
    btnSwitch.style.backgroundImage = 'url("../img/btn_switch_dark.svg")';

    borders.forEach((border) => {
      border.style.backgroundColor = '#49495A';
    });

    body2.forEach((body2) => {
      body2.style.color = '#EEEEF1';
    });

    body1.forEach((body1) => {
      body1.style.color = '#EEEEF1';
    });

    h1.forEach((h1) => {
      h1.style.color = '#EEEEF1';
    });

    captions.forEach((caption) => {
      caption.style.color = '#EEEEF1';
    });

    menuLink.forEach((menuLink) => {
      menuLink.style.color = '#EEEEF1';
    });

    span.forEach((span) => {
      span.style.color = '#EEEEF1';
    });

    circle.forEach((circle) => {
      circle.style.border = '1px solid #EEEEF1';
    })

    project.forEach((project) => {
      project.style.border = '1px solid #EEEEF1';
    })

    var style = document.createElement('style');
    style.type = 'text/css';

    btnBehance.forEach((btn) => {
      btn.style.backgroundImage = 'url("/img/btn_main_behance_dark.svg")';
    });
    btnLinkedin.forEach((btn) => {
      btn.style.backgroundImage = 'url("/img/btn_main_linkedin_dark.svg")';
    });
    btnBlog.forEach((btn) => {
      btn.style.backgroundImage = 'url("/img/btn_main_blog_dark.svg")';
    });

    bigMenu.classList.replace('menu-light', 'menu-dark');
    smallMenu.classList.replace('menu-light', 'menu-dark');
  } else {
    // 기존 색상
    body.style.backgroundColor = '#EEEEF1';
    body.style.color = '#20202D';

    btnSwitch.style.backgroundColor = 'hsla(240, 17%, 15%, .1)';
    btnSwitch.style.backgroundImage = 'url("../img/btn_switch_light.svg")';

    borders.forEach((border) => {
      border.style.backgroundColor = '##49495A';
    });

    body2.forEach((body2) => {
      body2.style.color = '#20202D';
    });

    body1.forEach((body1) => {
      body1.style.color = '#20202D';
    });

    h1.forEach((h1) => {
      h1.style.color = '#20202D';
    });

    captions.forEach((caption) => {
      caption.style.color = '#20202D';
    });

    menuLink.forEach((menuLink) => {
      menuLink.style.color = '#20202D';
    });

    span.forEach((span) => {
      span.style.color = '#20202D';
    });

    circle.forEach((circle) => {
      circle.style.border = '1px solid #20202D';
    })

    project.forEach((project) => {
      project.style.border = '1px solid #C0C0CE';
    })

    var style = document.createElement('style');
    style.type = 'text/css';

    btnBehance.forEach((btn) => {
      btn.style.backgroundImage = 'url("/img/btn_main_behance_light.svg")';
    });
    btnLinkedin.forEach((btn) => {
      btn.style.backgroundImage = 'url("/img/btn_main_linkedin_light.svg")';
    });
    btnBlog.forEach((btn) => {
      btn.style.backgroundImage = 'url("/img/btn_main_blog_light.svg")';
    });

    bigMenu.classList.replace('menu-dark', 'menu-light');
    smallMenu.classList.replace('menu-dark', 'menu-light');
  }
}
