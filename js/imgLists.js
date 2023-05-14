const imageList = document.querySelector('.image-list');
const images = [
    {
      src: 'img/notWork/photo_1.jpg',
      alt: 'UX/UI design 1',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
      location: 'Seoul'
    },
    {
      src: 'img/notWork/photo_2.jpg',
      alt: 'UX/UI design 2',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
      location: 'Seoul'
    },
    {
      src: 'img/notWork/photo_3.jpg',
      alt: 'UX/UI design 2',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
      location: 'Seoul'
    },
    {
      src: 'img/notWork/photo_4.jpg',
      alt: 'UX/UI design 2',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
      location: 'Seoul'
    },
    {
      src: 'img/notWork/photo_9.jpg',
      alt: 'Graphic design 1',
      category: 'graphic',
      projectName: 'uxui',
      projectCaption : 'project',
      location: 'Seoul'
    },
    {
      src: 'img/notWork/photo_10.jpg',
      alt: 'Graphic design 2',
      category: 'graphic',
      projectName: 'uxui',
      projectCaption : 'project',
      location: 'Seoul'
    },
    {
      src: 'img/notWork/photo_11.jpg',
      alt: 'Graphic design 2',
      category: 'graphic',
      projectName: 'uxui',
      projectCaption : 'project',
      location: 'Seoul'
    },
    {
      src: 'img/notWork/photo_12.jpg',
      alt: 'Graphic design 2',
      category: 'graphic',
      projectName: 'uxui',
      projectCaption : 'project',
      location: 'Seoul'
    },
    {
      src: 'img/notWork/photo_5.jpg',
      alt: 'Photograph 1',
      category: 'photographs',
      projectName: 'uxui',
      projectCaption : 'project',
      location: 'Seoul'
    },
    {
      src: 'img/notWork/photo_6.jpg',
      alt: 'Photograph 2',
      category: 'photographs',
      projectName: 'uxui',
      projectCaption : 'project',
      location: 'Seoul'
    },
    {
      src: 'img/notWork/photo_7.jpg',
      alt: 'Photograph 2',
      category: 'photographs',
      projectName: 'uxui',
      projectCaption : 'project',
      location: 'Seoul'
    },
    {
      src: 'img/notWork/photo_8.jpg',
      alt: 'Photograph 2',
      category: 'photographs',
      projectName: 'uxui',
      projectCaption : 'project',
      location: 'Seoul'
    },
    {
      src: 'img/notWork/photo_13.jpg',
      alt: '3D design 1',
      category: '3d',
      projectName: 'uxui',
      projectCaption : 'project',
      location: 'Seoul'
    },
    {
      src: 'img/notWork/photo_14.jpg',
      alt: '3D design 1',
      category: '3d',
      projectName: 'uxui',
      projectCaption : 'project',
      location: 'Seoul'
    }, {
      src: 'img/notWork/photo_15.jpg',
      alt: '3D design 1',
      category: '3d',
      projectName: 'uxui',
      projectCaption : 'project',
      location: 'Seoul'
    }, {
      src: 'img/notWork/photo_16.jpg',
      alt: '3D design 1',
      category: '3d',
      projectName: 'uxui',
      projectCaption : 'project',
      location: 'Seoul'
    }
  ];
  
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
  
  function filterImages(category) {
    const imageItems = document.querySelectorAll('.image-item');
    imageItems.forEach(item => {
      if (item.parentNode) {
        item.parentNode.removeChild(item);
      }
    });
    images.forEach(image => {
      if (category === image.category) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.addEventListener('click', () => imgWide(img, image));
        li.appendChild(img);
        li.classList.add('image-item');
        imageList.appendChild(li);
      }
    });
  }

  function imgWide(image, data){
    let fullImg = document.getElementById("imageBox");
    fullImg.src = image.src;
  
    let projectName = document.getElementById("projectName");
    projectName.textContent = data.projectName;
  
    let projectCaption = document.getElementById("projectCaption");
    projectCaption.textContent = data.projectCaption;
  
    let location = document.getElementById("location");
    location.textContent = data.location;
  
    let fullImage = document.getElementById('fullImage');
    if(fullImage.style.display === 'block'){
      fullImage.style.display='none';
    } else {
      fullImage.style.opacity = '0';
      fullImage.style.display='block';
      setTimeout(function() {
        fullImage.style.opacity = '1';
      }, 100);
    }
  }
  
function viewImg() {
  const fullImage = document.getElementById('fullImage');
  fullImage.style.opacity = 0; // 이미지가 서서히 사라지는 효과
  setTimeout(() => {
    fullImage.style.display = 'none';
    fullImage.style.opacity = 1; // 다시 보이는 효과
  }, 100); // 0.1초 후에 실행됨 (100ms)
}
document.querySelector('.btn-cancel').addEventListener('click', viewImg);

window.addEventListener('load', () => {
  initImageList();
});
  