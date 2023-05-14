const imageList = document.querySelector('.image-list');
const images = [
    {
      src: 'img/notWork/photo_1.jpg',
      alt: 'UX/UI design 1',
      category: 'uxui'
    },
    {
      src: 'img/notWork/photo_2.jpg',
      alt: 'UX/UI design 2',
      category: 'uxui'
    },
    {
      src: 'img/notWork/photo_3.jpg',
      alt: 'UX/UI design 2',
      category: 'uxui'
    },
    {
      src: 'img/notWork/photo_4.jpg',
      alt: 'UX/UI design 2',
      category: 'uxui'
    },
    {
      src: 'img/notWork/photo_9.jpg',
      alt: 'Graphic design 1',
      category: 'graphic'
    },
    {
      src: 'img/notWork/photo_10.jpg',
      alt: 'Graphic design 2',
      category: 'graphic'
    },
    {
      src: 'img/notWork/photo_11.jpg',
      alt: 'Graphic design 2',
      category: 'graphic'
    },
    {
      src: 'img/notWork/photo_12.jpg',
      alt: 'Graphic design 2',
      category: 'graphic'
    },
    {
      src: 'img/notWork/photo_5.jpg',
      alt: 'Photograph 1',
      category: 'photographs'
    },
    {
      src: 'img/notWork/photo_6.jpg',
      alt: 'Photograph 2',
      category: 'photographs'
    },
    {
      src: 'img/notWork/photo_7.jpg',
      alt: 'Photograph 2',
      category: 'photographs'
    },
    {
      src: 'img/notWork/photo_8.jpg',
      alt: 'Photograph 2',
      category: 'photographs'
    },
    {
      src: 'img/notWork/photo_13.jpg',
      alt: '3D design 1',
      category: '3d'
    },
    {
      src: 'img/notWork/photo_14.jpg',
      alt: '3D design 1',
      category: '3d'
    }, {
      src: 'img/notWork/photo_15.jpg',
      alt: '3D design 1',
      category: '3d'
    }, {
      src: 'img/notWork/photo_16.jpg',
      alt: '3D design 1',
      category: '3d'
    }
  ];
  
  let currentCategory = 'uxui';
  
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
        img.addEventListener('click', () => imgWide(img));
        li.appendChild(img);
        li.classList.add('image-item');
        imageList.appendChild(li);
      }
    });
  }
  
  function imgWide(image){
    let fullImg = document.getElementById("imageBox");
    fullImg.src = image.src;
  
    if(document.getElementById('fullImage').style.display==='none'){
      document.getElementById('fullImage').style.display='block';
    }else{
      document.getElementById('fullImage').style.display='none';
    }
  }
  
  function viewImg(){
    if(document.getElementById('fullImage').style.display==='block'){
        document.getElementById('fullImage').style.display='none';
    }else{
      document.getElementById('fullImage').style.display='block';
    } 
  }
  
  window.addEventListener('load', () => {
    initImageList();
  });
  