const imageList = document.querySelector('.image-list');
const images = [
    {
      src: 'img/notWork/uxui_1.webp',
      alt: 'UX/UI design 1',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    {
      src: 'img/notWork/uxui_2.webp',
      alt: 'UX/UI design 2',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    {
      src: 'img/notWork/uxui_3.webp',
      alt: 'UX/UI design 2',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    {
      src: 'img/notWork/uxui_4.webp',
      alt: 'UX/UI design 2',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    {
      src: 'img/notWork/uxui_5.webp',
      alt: 'UX/UI design 2',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    {
      src: 'img/notWork/uxui_6.webp',
      alt: 'UX/UI design 2',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    {
      src: 'img/notWork/uxui_7.webp',
      alt: 'UX/UI design 2',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    {
      src: 'img/notWork/uxui_8.webp',
      alt: 'UX/UI design 2',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    {
      src: 'img/notWork/uxui_9.webp',
      alt: 'UX/UI design 2',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    {
      src: 'img/notWork/uxui_10.webp',
      alt: 'UX/UI design 2',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    // photographs
    {
      src: 'img/notWork/photo_11.webp',
      alt: 'Photograph 11',
      category: 'photographs',
      projectName: 'Tainan',
      projectCaption : '2023'
    },
    {
      src: 'img/notWork/photo_19.webp',
      alt: 'Photograph 19',
      category: 'photographs',
      projectName: 'Jiufen',
      projectCaption : '2023'
    },
    {
      src: 'img/notWork/photo_13.webp',
      alt: 'Photograph 13',
      category: 'photographs',
      projectName: 'Tamsui',
      projectCaption : '2023'
    },
    {
      src: 'img/notWork/photo_14.webp',
      alt: 'Photograph 14',
      category: 'photographs',
      projectName: 'Taipei',
      projectCaption : '2023'
    },
    {
      src: 'img/notWork/photo_15.webp',
      alt: 'Photograph 15',
      category: 'photographs',
      projectName: 'Yeliou',
      projectCaption : '2023'
    },
    {
      src: 'img/notWork/photo_16.webp',
      alt: 'Photograph 16',
      category: 'photographs',
      projectName: 'Yeliou',
      projectCaption : '2023'
    },
    {
      src: 'img/notWork/photo_17.webp',
      alt: 'Photograph 17',
      category: 'photographs',
      projectName: 'Jinguashih',
      projectCaption : '2023'
    },
    {
      src: 'img/notWork/photo_18.webp',
      alt: 'Photograph 18',
      category: 'photographs',
      projectName: 'Jinguashih',
      projectCaption : '2023'
    },
    {
      src: 'img/notWork/photo_12.webp',
      alt: 'Photograph 12',
      category: 'photographs',
      projectName: 'Tamsui',
      projectCaption : '2023'
    },
    {
      src: 'img/notWork/photo_23.webp',
      alt: 'Photograph 23',
      category: 'photographs',
      projectName: 'Tamsui',
      projectCaption : '2023'
    },
    {
      src: 'img/notWork/photo_21.webp',
      alt: 'Photograph 21',
      category: 'photographs',
      projectName: 'Tamsui',
      projectCaption : '2023'
    },
    {
      src: 'img/notWork/photo_22.webp',
      alt: 'Photograph 22',
      category: 'photographs',
      projectName: 'Tamsui',
      projectCaption : '2023'
    },
    {
      src: 'img/notWork/photo_20.webp',
      alt: 'Photograph 20',
      category: 'photographs',
      projectName: 'Jiufen',
      projectCaption : '2023'
    },
    {
      src: 'img/notWork/photo_24.webp',
      alt: 'Photograph 24',
      category: 'photographs',
      projectName: 'Tamsui',
      projectCaption : '2023'
    },
    {
      src: 'img/notWork/photo_25.webp',
      alt: 'Photograph 25',
      category: 'photographs',
      projectName: 'Tamsui',
      projectCaption : '2023'
    },
    {
      src: 'img/notWork/photo_5.webp',
      alt: 'Photograph 5',
      category: 'photographs',
      projectName: 'Tamsui',
      projectCaption : '2023'
    },
    {
      src: 'img/notWork/photo_2.webp',
      alt: 'Photograph 2',
      category: 'photographs',
      projectName: 'Busan',
      projectCaption : '2022'
    },
    {
      src: 'img/notWork/photo_3.webp',
      alt: 'Photograph 3',
      category: 'photographs',
      projectName: 'Busan',
      projectCaption : '2022'
    },
    {
      src: 'img/notWork/photo_1.webp',
      alt: 'Photograph 1',
      category: 'photographs',
      projectName: 'Jeonju',
      projectCaption : '2022'
    },
    {
      src: 'img/notWork/photo_4.webp',
      alt: 'Photograph 4',
      category: 'photographs',
      projectName: 'Busan',
      projectCaption : '2022'
    },
    {
      src: 'img/notWork/photo_6.webp',
      alt: 'Photograph 6',
      category: 'photographs',
      projectName: 'Busan',
      projectCaption : '2022'
    },
    {
      src: 'img/notWork/photo_7.webp',
      alt: 'Photograph 7',
      category: 'photographs',
      projectName: 'Seoul',
      projectCaption : '2022'
    },
    {
      src: 'img/notWork/photo_8.webp',
      alt: 'Photograph 8',
      category: 'photographs',
      projectName: 'Seoul',
      projectCaption : '2022'
    },
    {
      src: 'img/notWork/photo_9.webp',
      alt: 'Photograph 9',
      category: 'photographs',
      projectName: 'Seoul',
      projectCaption : '2022'
    },
    {
      src: 'img/notWork/photo_10.webp',
      alt: 'Photograph 10',
      category: 'photographs',
      projectName: 'Seoul',
      projectCaption : '2022'
    },
    // graphic
    {
      src: 'img/notWork/img_graphic_1.webp',
      alt: 'Graphic design 1',
      category: 'graphic',
      projectName: '사물 공통점 보고서',
      projectCaption : '2021',
    },
    {
      src: 'img/notWork/img_graphic_2.webp',
      alt: 'Graphic design 1',
      category: 'graphic',
      projectName: '사물 공통점 보고서',
      projectCaption : '2021',
    },
    {
      src: 'img/notWork/img_graphic_3.webp',
      alt: 'Graphic design 1',
      category: 'graphic',
      projectName: '경험 : 습관',
      projectCaption : '2020',
    },
    {
      src: 'img/notWork/img_graphic_4.webp',
      alt: 'Graphic design 1',
      category: 'graphic',
      projectName: '경험 : 습관',
      projectCaption : '2020',
    },
    {
      src: 'img/notWork/img_graphic_5.webp',
      alt: 'Graphic design 2',
      category: 'graphic',
      projectName: '경험 : 습관',
      projectCaption : '2020',
    },
    {
      src: 'img/notWork/img_graphic_6.webp',
      alt: 'Graphic design 2',
      category: 'graphic',
      projectName: '빌리엘리어트',
      projectCaption : '2019',
    },
    {
      src: 'img/notWork/img_graphic_7.webp',
      alt: 'Graphic design 2',
      category: 'graphic',
      projectName: '감정 프로젝트',
      projectCaption : '2018'
    },
    // 3d
    {
      src: 'img/notWork/img_3d_1.webp',
      alt: '3d design 2',
      category: 'graphic',
      projectName: '산학협력(게임)',
      projectCaption : '2021'
    },
    {
      src: 'img/notWork/img_3d_2.webp',
      alt: '3d design 2',
      category: 'graphic',
      projectName: '산학협력(게임)',
      projectCaption : '2021'
    }, 
    {
      src: 'img/notWork/img_3d_3.webp',
      alt: '3d design 2',
      category: 'graphic',
      projectName: '산학협력(게임)',
      projectCaption : '2021'
    }, 
    {
      src: 'img/notWork/img_3d_4.webp',
       alt: '3d design 2',
      category: 'graphic',
      projectName: '산학협력(게임)',
      projectCaption : '2021'
    }, 
    {
      src: 'img/notWork/img_3d_5.webp',
       alt: '3d design 2',
      category: 'graphic',
      projectName: '산학협력(게임)',
      projectCaption : '2021'
    }, 
    {
      src: 'img/notWork/img_3d_6.webp',
       alt: '3d design 2',
      category: 'graphic',
      projectName: '창작 동화 [정글]',
      projectCaption : '2019'
    }
  ];

  export default images;