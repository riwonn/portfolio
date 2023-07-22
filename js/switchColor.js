// 컬러 스위치 버튼
// light

function changeColor() {
  var body = document.querySelector('body');
  var btn = document.querySelector('.img-switch');
  var span = document.querySelector('span');
  var borders = document.querySelectorAll('.border-d');
  var captions = document.querySelectorAll('.caption');
  var menuLink = document.querySelector('.menu-link');

  var btnBehance = document.querySelectorAll('.btn_behance');
  var btnLinkedin = document.querySelectorAll('.btn_linkedin');
  var btnBlog = document.querySelectorAll('.btn_blog');

  var colorWhite = body.style.backgroundColor;

  var bigMenu = document.getElementById('bigMenuDark');
  var smallMenu = document.getElementById('smallMenu');

  if (colorWhite === 'rgb(248, 248, 251)') {
    // 바꿀 색상
    body.style.backgroundColor = '#20202D';
    body.style.color = '#EEEEF1';
    span.style.backgroundColor = '#F8F8FB';

    btn.style.backgroundColor = 'rgba(167, 166, 187, .5)';
    btn.style.backgroundImage = 'url("../img/btn_switch_dark.svg")';

    borders.forEach((border) => {
      border.style.backgroundColor = '#49495A';
    });

    captions.forEach((caption) => {
      caption.style.color = '#EEEEF1';
    });

    // Create a new style rule for the pseudo-elements
    var pseudoElementStyle = `
      .btn-menu::before, .btn-menu::after {
        color: #fff;
      }
    `;
    // Add the new style rule to the document
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(pseudoElementStyle));
    document.head.appendChild(style);

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
    menuLink.style.color = 'white';
  } else {
    // 기존 색상
    body.style.backgroundColor = '#F8F8FB';
    body.style.color = '#20202D';
    span.style.backgroundColor = '#20202D';

    btn.style.backgroundColor = 'hsla(240, 17%, 15%, .1)';
    btn.style.backgroundImage = 'url("../img/btn_switch_light.svg")';

    borders.forEach((border) => {
      border.style.backgroundColor = '#C0C0CE';
    });

    captions.forEach((caption) => {
      caption.style.color = '#20202D';
    });

    // Create a new style rule for the pseudo-elements
    var pseudoElementStyle = `
      .btn-menu::before, .btn-menu::after {
        color: #20202D;
      }
    `;
    // Add the new style rule to the document
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(pseudoElementStyle));
    document.head.appendChild(style);

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
    menuLink.style.color = '#20202D';
  }
}
