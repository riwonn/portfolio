
import images from './imgList.js';
  
let currentCategory = 'uxui';

function initImageList() {
  filterImages(currentCategory);
  // document.getElementById('fullImage').style.display = 'block'; // 추가된 코드
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


//  그리드 수정
function filterImages(category) {
  const imageItems = document.querySelectorAll('.image-item');
  imageItems.forEach(item => {
    if (item.parentNode) {
      item.parentNode.removeChild(item);
    }
  });

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
        img.addEventListener('click', () => imgWide(img, image));
        row.appendChild(img);
      }
    }
  }
}

let scrollPosition = 0;

// 스크롤 막기
function disableScroll() {
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
}

// 스크롤 활성화
function enableScroll() {
  document.body.style.overflow = 'auto';
  document.body.style.position = 'static';
  document.body.style.top = 'auto';
  window.scrollTo(0, scrollPosition);
}

function imgWide(image, data) {
  let fullImg = document.getElementById("imageBox");
  fullImg.src = image.src;

  let projectName = document.getElementById("projectName");
  projectName.textContent = data.projectName;

  let projectCaption = document.getElementById("projectCaption");
  projectCaption.textContent = data.projectCaption;

  let fullImage = document.getElementById('fullImage');
  let imgBg = document.querySelector('.img-bg');
  if (fullImage.style.display === 'block') {
    fullImage.style.opacity = '0';
    imgBg.style.opacity = '0';
    setTimeout(function () {
      fullImage.style.display = 'none';
      imgBg.style.display = 'none';
    }, 300); // 0.3초 후에 실행됨 (300ms)
    enableScroll();
  } else {
    fullImage.style.display = 'block';
    imgBg.style.display = 'block';
    setTimeout(function () {
      fullImage.style.opacity = '1';
      imgBg.style.opacity = '0.6';
    }, 100); // 0.1초 후에 실행됨 (100ms)
    disableScroll();
  }
}

function viewImg() {
  const fullImage = document.getElementById('fullImage');
  const imgBg = document.querySelector('.img-bg');
  fullImage.style.opacity = 0; // 이미지가 서서히 사라지는 효과
  imgBg.style.opacity = 0; // 배경이 서서히 사라지는 효과
  setTimeout(() => {
    fullImage.style.display = 'none';
    imgBg.style.display = 'none';
    fullImage.style.opacity = 1; // 다시 보이는 효과
    imgBg.style.opacity = 0.6; // 다시 보이는 효과
  }, 300); // 0.3초 후에 실행됨 (300ms)
  enableScroll();
}

document.querySelector('.btn-cancel').addEventListener('click', viewImg);

window.addEventListener('load', () => {
  initImageList();
});
