import images from './imgList.js';

let currentCategory = 'uxui';
let currentIndex = 0;

function initImageList() {
  filterImages(currentCategory);
}

const categoryBtns = document.querySelectorAll('.category-btn');

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.getAttribute('data-category');
    currentCategory = category;
    filterImages(category);
  });
});

function filterImages(category) {
  const grid = document.querySelector('.notWork-grid');
  grid.innerHTML = '';

  const rows = Math.ceil(images.length / 3);
  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row', 'item-notWork');
    grid.appendChild(row);

    for (let j = i * 3; j < i * 3 + 3; j++) {
      if (j >= images.length) {
        break;
      }

      const image = images[j];
      if (category === image.category) {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.style.opacity = '0'; // 초기에 투명도 0으로 설정
        row.appendChild(img);

        // 이미지가 로드되었을 때 투명도 트랜지션 효과 적용
        img.addEventListener('load', () => {
          img.style.transition = 'opacity 0.3s ease-in-out';
          img.style.opacity = '1';
        });

        img.addEventListener('click', () => imgWide(img, image));
      }
    }
  }
}

let scrollPosition = 0;

// 스크롤 막기
function disableScroll() {
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  document.body.style.overflow = 'hidden';
}

// 스크롤 활성화
function enableScroll() {
  document.body.style.overflow = 'auto';
  window.scrollTo(0, scrollPosition);
}

function imgWide(image, data) {
  let fullImg = document.getElementById('imageBox');
  fullImg.src = image.src;

  let projectName = document.getElementById('projectName');
  projectName.textContent = data.projectName;

  let projectCaption = document.getElementById('projectCaption');
  projectCaption.textContent = data.projectCaption;

  let fullImage = document.getElementById('fullImage');
  if (fullImage.style.display === 'block') {
    fullImage.style.opacity = '0';
    setTimeout(function () {
      fullImage.style.display = 'none';
    }, 300); // 0.3초 후에 실행됨 (300ms)
    disableScroll();
  } else {
    fullImage.style.display = 'block';
    setTimeout(function () {
      fullImage.style.opacity = '1';
    }, 100); // 0.1초 후에 실행됨 (100ms)
    disableScroll();
  }
}

function viewImg() {
  const fullImage = document.getElementById('fullImage');
  fullImage.style.opacity = 0; // 이미지가 서서히 사라지는 효과
  setTimeout(() => {
    fullImage.style.display = 'none';
    fullImage.style.opacity = 1; // 다시 보이는 효과
  }, 300); // 0.3초 후에 실행됨 (300ms)
  enableScroll();
}

// 이미지 돌리기
function rotateImgLeft() {
  const imgLoading = document.querySelector('.img-loading');
  imgLoading.style.transition = '0.6s';
  imgLoading.style.transform += ' rotate(-180deg)';
}

function rotateImgRight() {
  const imgLoading = document.querySelector('.img-loading');
  imgLoading.style.transition = '0.6s';
  imgLoading.style.transform += ' rotate(180deg)';
}

document
  .querySelector('.btn-details.cancel')
  .addEventListener('click', viewImg);

document
  .querySelector('.btn-details.left')
  .addEventListener('click', () => {
    changeImage(-1);
    rotateImgLeft();
  }
  );
  
document
  .querySelector('.btn-details.right')
  .addEventListener('click', () => {
    changeImage(1);
    rotateImgRight();
  });

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  const image = images[currentIndex];
  const img = document.getElementById('imageBox');
  img.src = image.src;

  let projectName = document.getElementById('projectName');
  projectName.textContent = image.projectName;

  let projectCaption = document.getElementById('projectCaption');
  projectCaption.textContent = image.projectCaption;
}

window.addEventListener('load', () => {
  initImageList();
});

const projectImg = document.querySelector('.imageBox');
projectImg.addEventListener('load', () => {
  adjustImageSize(projectImg);
});

// 이미지 비율에 따라 보이는 크기가 달라지는 코드
function adjustImageSize(img) {
  const maxWidth = 300; // 최대 너비 설정
  const maxHeight = 300; // 최대 높이 설정

  const width = img.naturalWidth;
  const height = img.naturalHeight;

  let newWidth, newHeight;

  // 이미지의 비율을 계산하여 크기를 조정
  if (width > height) {
    newWidth = maxWidth;
    newHeight = Math.floor((height / width) * maxWidth);
  } else {
    newHeight = maxHeight;
    newWidth = Math.floor((width / height) * maxHeight);
  }

  // 이미지 크기 조정
  projectImg.style.width = `${95}%`;
  projectImg.style.height = `${95}%`;
}

// 버튼 그룹 위치 조절
const targetElement = document.querySelector('.notWork-btns');
const bgTrans = document.querySelector('.bg-trans');
const targetPosition = 360; // 고정할 위치의 y 좌표

// 페이지 최상단 버튼
const btnTop = document.querySelector('.btn-go-top');

btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// 이미지 최상단 버튼 트렌지션
const h2 = document.querySelector('.h2');

btnTop.addEventListener('mouseenter', () => {
  h2.style.display = 'block';
  h2.style.opacity = '1';
  btnTop.style.padding = '14px 24px';
});

btnTop.addEventListener('mouseleave', () => {
  h2.style.display = 'none';
  h2.style.opacity = '0';
  btnTop.style.padding = '14px';
});



window.addEventListener('scroll', () => {
  const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
  console.log(window.pageYOffset);
  const btnTop = document.querySelector('.btn-go-top');

  if (currentPosition > 300) {
    setTimeout(function () {
      btnTop.style.display = 'fixed';
    }, 300); // 0.3초 후에 실행됨 (300ms)
  } else {
    setTimeout(function () {
      btnTop.style.display = 'none';
    }, 300); // 0.3초 후에 실행됨 (300ms)
  }

  if (currentPosition >= targetPosition) {
    targetElement.style.position = 'fixed';
    targetElement.style.top = '9%';
    targetElement.style.background = 'hsla(240, 17%, 15%, 1)';
    targetElement.style.borderBottom = '1px solid rgba(125, 125, 144, 0.6)';
    targetElement.style.transition = 'background .3s ease-in-out, border-bottom .3s ease-in-out';
    bgTrans.style.background = 'hsla(240, 17%, 15%, 1)';
    bgTrans.style.transition = 'background .3s ease-in-out';
  } else {
    targetElement.style.position = 'absolute';
    targetElement.style.top = '50%';
    targetElement.style.background = 'none';
    targetElement.style.borderBottom = 'none';
    targetElement.style.transition = 'background .2s ease-in-out, border-bottom .2s ease-in-out';
    bgTrans.style.background = 'none';
    bgTrans.style.transition = 'background .2s';
  }
});

