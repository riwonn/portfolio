$(document).ready(function() {
    var projects = [
    //   {
    //     src: 'img/notWork/photo_1.jpg',
    //     title: "Project Title 1",
    //     desc: "Description of Project 1",
    //     year: "2023",
    //     location: "Location 1",
    //     company: "Company 1",
    //     url: "project1.html"
    //   },
      {
        src: 'img/notWork/photo_2.jpg',
        title: "Project Title 2",
        desc: "Description of Project 2",
        year: "2024",
        location: "Location 2",
        company: "Company 2",
        url: "project2.html"
      },
      {
        src: 'img/notWork/photo_3.jpg',
        title: "Project Title 3",
        desc: "Description of Project 3",
        year: "2025",
        location: "Location 3",
        company: "Company 3",
        url: "project3.html"
      },
      {
        src: 'img/notWork/photo_4.jpg',
        title: "Project Title 4",
        desc: "Description of Project 4",
        year: "2025",
        location: "Location 4",
        company: "Company 4",
        url: "project4.html"
      }
    ];
  
    for (var i = 0; i < projects.length; i++) {
      var item = $("<div class='card-item-project' style='background-image: url(" + projects[i].src + ");'></div>");
      var img = $("<div class='card-img'></div>");
      var title = $("<div class='card-title'></div>");
      var h1 = $("<div class='h1'>" + projects[i].title + "</div>");
      var desc = $("<div class='body2 white'>" + projects[i].desc + "</div>");
      title.append(h1);
      title.append(desc);
      img.append(title);
      var info = $("<div class='card-info body2'>" + projects[i].year + "<br>" + projects[i].location + ", " + projects[i].company + "</div>");
      img.append(info);
      item.append(img);
  
      // 클릭 이벤트 추가
      item.click(function() {
        window.location.href = projects[i].url;
      });
  
      $(".card-triple").append(item);
    }
  });