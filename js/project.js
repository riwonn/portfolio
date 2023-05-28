$(document).ready(function() {
  var projects = [];

  // 프로젝트 리스트 정의
  if (window.location.href.indexOf("project1.html") > -1) {
    projects = [
      {
        src: '../img/notWork/photo_2.jpg',
        title: "Project Title 2",
        desc: "Description of Project 2",
        year: "2024",
        location: "Location 2",
        company: "Company 2",
        url: "project2.html"
      },
      {
        src: '../img/notWork/photo_3.jpg',
        title: "Project Title 3",
        desc: "Description of Project 3",
        year: "2025",
        location: "Location 3",
        company: "Company 3",
        url: "project3.html"
      },
      // {
      //   src: '../img/notWork/photo_4.jpg',
      //   title: "Project Title 4",
      //   desc: "Description of Project 4",
      //   year: "2025",
      //   location: "Location 4",
      //   company: "Company 4",
      //   url: "project4.html"
      // }
    ];
  } else if (window.location.href.indexOf("project2.html") > -1) {
    projects = [
      {
        src: '../img/notWork/photo_1.jpg',
        title: "Project Title 1",
        desc: "Description of Project 1",
        year: "2023",
        location: "Location 1",
        company: "Company 1",
        url: "project1.html"
      },
      {
        src: '../img/notWork/photo_3.jpg',
        title: "Project Title 3",
        desc: "Description of Project 3",
        year: "2025",
        location: "Location 3",
        company: "Company 3",
        url: "project3.html"
      },
      // {
      //   src: '../img/notWork/photo_4.jpg',
      //   title: "Project Title 4",
      //   desc: "Description of Project 4",
      //   year: "2025",
      //   location: "Location 4",
      //   company: "Company 4",
      //   url: "project4.html"
      // }
    ];
  } else if (window.location.href.indexOf("project3.html") > -1) {
    projects = [
      {
        src: '../img/notWork/photo_1.jpg',
        title: "Project Title 1",
        desc: "Description of Project 1",
        year: "2023",
        location: "Location 1",
        company: "Company 1",
        url: "project1.html"
      },
      {
        src: '../img/notWork/photo_2.jpg',
        title: "Project Title 2",
        desc: "Description of Project 2",
        year: "2024",
        location: "Location 2",
        company: "Company 2",
        url: "project2.html"
      },
      // {
      //   src: '../img/notWork/photo_4.jpg',
      //   title: "Project Title 4",
      //   desc: "Description of Project 4",
      //   year: "2025",
      //   location: "Location 4",
      //   company: "Company 4",
      //   url: "project4.html"
      // }
    ];
  } 
  // else if (window.location.href.indexOf("project4.html") > -1) {
  //   projects = [
  //     {
  //       src: '../img/notWork/photo_1.jpg',
  //       title: "Project Title 1",
  //       desc: "Description of Project 1",
  //       year: "2023",
  //       location: "Location 1",
  //       company: "Company 1",
  //       url: "project1.html"
  //     },
  //     {
  //       src: '../img/notWork/photo_2.jpg',
  //       title: "Project Title 2",
  //       desc: "Description of Project 2",
  //       year: "2024",
  //       location: "Location 2",
  //       company: "Company 2",
  //       url: "project2.html"
  //     },
  //     {
  //       src: '../img/notWork/photo_3.jpg',
  //       title: "Project Title 3",
  //       desc: "Description of Project 3",
  //       year: "2025",
  //       location: "Location 3",
  //       company: "Company 3",
  //       url: "project3.html"
  //     }
  //   ];
  // }

  // 썸네일 리스트 생성
  for (var i = 0; i < projects.length; i++) {
    (function(index) {
      var item = $("<div class='card-item-project' style='background-image: url(" + projects[index].src + ");'></div>");
      var img = $("<div class='card-img'></div>");
      var title = $("<div class='card-title'></div>");
      var h1 = $("<div class='h1'>" + projects[index].title + "</div>");
      var desc = $("<div class='body2 white'>" + projects[index].desc + "</div>");
      item.css("width", "100%");
      title.append(h1);
      title.append(desc);
      img.append(title);
      var info = $("<div class='card-info body2'>" + projects[index].year + "<br>" + projects[index].location + ", " + projects[index].company + "</div>");
      img.append(info);
      item.append(img);

      // 클릭 이벤트 추가
      item.click(function() {
        window.location.href = projects[index].url;
      });

      $(".card-triple").append(item);
    })(i);
  }
});

// 설정한 비밀번호
var password = "1234";

// 비밀번호 입력 함수
function enterPassword() {
  var input = document.getElementById("passwordInput").value;
  if (input === password) {
    unlockPage();
  } else {
    alert("The password is incorrect.");
  }
}

// 페이지 잠금 해제 함수
function unlockPage() {
  document.getElementById("lockedContent").style.display = "none";
  document.getElementById("unlockedContent").style.display = "block";
}

// 비밀번호 입력 요소 가져오기
var passwordInput = document.getElementById("passwordInput");
var enterButton = document.getElementById("enterButton");

// 버튼에 클릭 이벤트 추가
enterButton.addEventListener('click', enterPassword);


// 비밀번호 입력 요소 가져오기
var passwordInput = document.getElementById("passwordInput");
var enterButton = document.getElementById("enterButton");

// 입력값이 변경될 때마다 버튼 상태 업데이트
passwordInput.addEventListener('input', function() {
  var input = passwordInput.value;
  if (input.trim().length > 0) {
    enterButton.disabled = false;
  } else {
    enterButton.disabled = true;
  }
});

// 페이지 로드 시 버튼 상태 업데이트
window.addEventListener('load', function() {
  enterButton.disabled = true;
});


const backButton = document.querySelector('.btn-back');

backButton.addEventListener('click', () => {
  history.back();
});
