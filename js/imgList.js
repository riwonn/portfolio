const imageList = document.querySelector('.image-list');
const images = [
    {
      src: 'img/notWork/photo_1.jpg',
      alt: 'UX/UI design 1',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    {
      src: 'img/notWork/photo_2.jpg',
      alt: 'UX/UI design 2',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    {
      src: 'img/notWork/photo_3.jpg',
      alt: 'UX/UI design 2',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    {
      src: 'img/notWork/photo_4.jpg',
      alt: 'UX/UI design 2',
      category: 'uxui',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    {
      src: 'img/notWork/photo_9.jpg',
      alt: 'Graphic design 1',
      category: 'graphic',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    {
      src: 'img/notWork/photo_10.jpg',
      alt: 'Graphic design 2',
      category: 'graphic',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    {
      src: 'img/notWork/photo_11.jpg',
      alt: 'Graphic design 2',
      category: 'graphic',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    {
      src: 'img/notWork/photo_12.jpg',
      alt: 'Graphic design 2',
      category: 'graphic',
      projectName: 'uxui',
      projectCaption : 'project'
    },
    {
      src: 'img/notWork/photo_1.jpg',
      alt: 'Photograph 1',
      category: 'photographs',
      projectName: 'South Korea',
      projectCaption : 'Gyeongju'
    },
    {
      src: 'img/notWork/photo_2.jpg',
      alt: 'Photograph 2',
      category: 'photographs',
      projectName: 'South Korea',
      projectCaption : 'Busan'
    },
    {
      src: 'img/notWork/photo_3.jpg',
      alt: 'Photograph 3',
      category: 'photographs',
      projectName: 'South Korea',
      projectCaption : 'Busan'
    },
    {
      src: 'img/notWork/photo_4.jpg',
      alt: 'Photograph 4',
      category: 'photographs',
      projectName: 'South Korea',
      projectCaption : 'Busan'
    },
    {
      src: 'img/notWork/photo_5.jpg',
      alt: 'Photograph 5',
      category: 'photographs',
      projectName: 'Taiwan',
      projectCaption : 'Tamsui'
    },
    {
      src: 'img/notWork/photo_6.jpg',
      alt: 'Photograph 6',
      category: 'photographs',
      projectName: 'South Korea',
      projectCaption : 'Busan'
    },
    {
      src: 'img/notWork/photo_7.jpg',
      alt: 'Photograph 7',
      category: 'photographs',
      projectName: 'South Korea',
      projectCaption : 'Seoul'
    },
    {
      src: 'img/notWork/photo_8.jpg',
      alt: 'Photograph 8',
      category: 'photographs',
      projectName: 'South Korea',
      projectCaption : 'Seoul'
    },
    {
      src: 'img/notWork/photo_9.jpg',
      alt: 'Photograph 9',
      category: 'photographs',
      projectName: 'South Korea',
      projectCaption : 'Seoul'
    },
    {
      src: 'img/notWork/photo_10.jpg',
      alt: 'Photograph 10',
      category: 'photographs',
      projectName: 'South Korea',
      projectCaption : 'Seoul'
    },
    {
      src: 'img/notWork/photo_11.jpg',
      alt: 'Photograph 11',
      category: 'photographs',
      projectName: 'Taiwan',
      projectCaption : 'Tamsui'
    },
    {
      src: 'img/notWork/photo_12.jpg',
      alt: 'Photograph 12',
      category: 'photographs',
      projectName: 'Taiwan',
      projectCaption : 'Tamsui'
    },
    {
      src: 'img/notWork/photo_13.jpg',
      alt: 'Photograph 13',
      category: 'photographs',
      projectName: 'Taiwan',
      projectCaption : 'Tamsui'
    },
    {
      src: 'img/notWork/photo_14.jpg',
      alt: 'Photograph 14',
      category: 'photographs',
      projectName: 'Taiwan',
      projectCaption : 'Taipei'
    },
    {
      src: 'img/notWork/photo_15.jpg',
      alt: 'Photograph 15',
      category: 'photographs',
      projectName: 'Taiwan',
      projectCaption : 'Yeliou'
    },
    {
      src: 'img/notWork/photo_16.jpg',
      alt: 'Photograph 16',
      category: 'photographs',
      projectName: 'Taiwan',
      projectCaption : 'Yeliou'
    },
    {
      src: 'img/notWork/photo_17.jpg',
      alt: 'Photograph 17',
      category: 'photographs',
      projectName: 'Taiwan',
      projectCaption : 'Jinguashih'
    },
    {
      src: 'img/notWork/photo_18.jpg',
      alt: 'Photograph 18',
      category: 'photographs',
      projectName: 'Taiwan',
      projectCaption : 'Jinguashih'
    },
    {
      src: 'img/notWork/photo_19.jpg',
      alt: 'Photograph 19',
      category: 'photographs',
      projectName: 'Taiwan',
      projectCaption : 'Jiufen'
    },
    {
      src: 'img/notWork/photo_20.jpg',
      alt: 'Photograph 20',
      category: 'photographs',
      projectName: 'Taiwan',
      projectCaption : 'Jiufen'
    },
    {
      src: 'img/notWork/photo_21.jpg',
      alt: 'Photograph 21',
      category: 'photographs',
      projectName: 'Taiwan',
      projectCaption : 'Tamsui'
    },
    {
      src: 'img/notWork/photo_22.jpg',
      alt: 'Photograph 22',
      category: 'photographs',
      projectName: 'Taiwan',
      projectCaption : 'Tamsui'
    },
    {
      src: 'img/notWork/photo_23.jpg',
      alt: 'Photograph 23',
      category: 'photographs',
      projectName: 'Taiwan',
      projectCaption : 'Tamsui'
    },
    {
      src: 'img/notWork/photo_24.jpg',
      alt: 'Photograph 24',
      category: 'photographs',
      projectName: 'Taiwan',
      projectCaption : 'Tamsui'
    },
    {
      src: 'img/notWork/photo_25.jpg',
      alt: 'Photograph 25',
      category: 'photographs',
      projectName: 'Taiwan',
      projectCaption : 'Tamsui'
    },
    {
      src: 'img/notWork/photo_13.jpg',
      alt: '3D design 1',
      category: '3d',
      projectName: 'uxui',
      projectCaption : 'project',
    },
    {
      src: 'img/notWork/photo_14.jpg',
      alt: '3D design 1',
      category: '3d',
      projectName: 'uxui',
      projectCaption : 'project',
    }, {
      src: 'img/notWork/photo_15.jpg',
      alt: '3D design 1',
      category: '3d',
      projectName: 'uxui',
      projectCaption : 'project',
    }, {
      src: 'img/notWork/photo_16.jpg',
      alt: '3D design 1',
      category: '3d',
      projectName: 'uxui',
      projectCaption : 'project',
    }
  ];

  export default images;