import images from './imgList.js';

let currentCategory = 'uxui';
let currentIndex = 0;

function initImageList() {
  filterImages(currentCategory);
}

const categoryBtns = document.querySelectorAll('.category-btn');

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(btn => {
      btn.classList.remove('active');
      btn.querySelector('.selected').style.display = 'none'; // 모든 버튼의 selected-line을 숨김
    });

    btn.classList.add('active');
    const selectedLine = btn.querySelector('.selected');
    if (selectedLine) {
      selectedLine.style.display = 'block'; // 선택된 버튼의 selected-line을 표시
    }

    const category = btn.getAttribute('data-category');
    currentCategory = category;
    filterImages(category);
  });
});

// 맨 처음에 선택된 카테고리 버튼 처리
const initialCategoryBtn = document.querySelector('.category-btn.active');
if (initialCategoryBtn) {
  const initialSelectedLine = initialCategoryBtn.querySelector('.selected');
  if (initialSelectedLine) {
    initialSelectedLine.style.display = 'block'; // 처음에 선택된 카테고리의 selected-line을 표시
  }
}





// 그리드 
function filterImages(category) {
  const grid = document.querySelector('.notWork-grid');
  grid.innerHTML = '';

  const filteredImages = images.filter(image => category === image.category);
  const uniqueImages = [];

  filteredImages.forEach(image => {
    const isDuplicate = uniqueImages.some(uniqueImage => uniqueImage.src === image.src);
    if (!isDuplicate) {
      uniqueImages.push(image);
    }
  });

  // const columnCount = Math.min(3, uniqueImages.length); // 최대 3개의 열(column)
  const columnCount = Math.min(3, uniqueImages.length); // 최대 3개의 열(column)
  const rowCount = Math.ceil(uniqueImages.length / columnCount); // 행(row)은 갯수의 제한 없음

  for (let i = 0; i < rowCount; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row', 'item-notWork');
    grid.appendChild(row);

    const startIndex = i * columnCount;
    const endIndex = Math.min(startIndex + columnCount, uniqueImages.length);
    for (let j = startIndex; j < endIndex; j++) {
      const image = uniqueImages[j];
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
  const imgLoading = document.querySelector('.btn-loading');
  imgLoading.style.transition = '0.6s';
  imgLoading.style.transform += ' rotate(-180deg)';
}

function rotateImgRight() {
  const imgLoading = document.querySelector('.btn-loading');
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
  });

document
  .querySelector('.btn-details.right')
  .addEventListener('click', () => {
    changeImage(1);
    rotateImgRight();
  });


  function changeImage(direction) {
    const filteredImages = images.filter(image => currentCategory === image.category);
    const imageCount = filteredImages.length;
  
    if (imageCount === 0) {
      return; // No images in the current category
    }
  
    currentIndex += direction;
  
    if (currentIndex < 0) {
      currentIndex = imageCount - 1;
    } else if (currentIndex >= imageCount) {
      currentIndex = 0;
    }
  
    const image = filteredImages[currentIndex];
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
// const imageElement = document.getElementById('.imageBox');
adjustImageSize(projectImg);

function adjustImageSize(img) {
  const maxWidth = `${85}%`;// 최대 너비 설정
  const maxHeight = `${85}%`;// 최대 높이 설정

  const width = img.naturalWidth;
  const height = img.naturalHeight;

  let newWidth, newHeight;

  // 이미지의 비율을 계산하여 크기를 조정
  if (width > height) {
    newWidth = maxWidth;
    newHeight = 'auto';
  } else {
    newHeight = maxHeight;
    newWidth = 'auto';
  }

  // 이미지 크기 조정
  const projectImg = document.querySelector('.imageBox img');
  projectImg.style.width = newWidth;
  projectImg.style.height = newHeight;
}



// 버튼 그룹 위치 조절(위치 상단 고정)
const targetElement = document.querySelector('.notWork-btns');
const targetPosition = 360; // 고정할 위치의 y 좌표
const bgTrans = document.querySelector('.bg-trans');

// 트랜지션 속성 추가
targetElement.style.transition = 'background .3s ease-in-out, borderBottom .3s ease-in-out';
bgTrans.style.transition = 'opacity .3s ease-in-out'

window.addEventListener('scroll', () => {
  const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
  // console.log(window.pageYOffset);

  if (currentPosition >= targetPosition) {
    targetElement.style.position = 'fixed';
    targetElement.style.top = '10%';
    bgTrans.style.opacity = 1;

    // 스타일 변경
    targetElement.style.background = 'hsla(240, 17%, 15%, 1)';
    targetElement.style.borderBottom = '1px solid rgba(125, 125, 144, 0.6)';
  } else {
    targetElement.style.position = 'absolute';
    targetElement.style.top = '50%';
    bgTrans.style.opacity = 0;

    // 스타일 변경
    targetElement.style.background = 'none';
    targetElement.style.borderBottom = 'none';
  }
});


// // 영상 자동 재생
// var video = document.querySelector('video');
// video.muted = true;
