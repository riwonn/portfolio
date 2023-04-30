new ProjectViwe();


function toggleImg1() {
  document.getElementById("notWork-img").src = "img/img_temp2.png";
}
function toggleImg2() {
  document.getElementById("notWork-img").src = "img/img_temp.png";
}
function toggleImg3() {
  document.getElementById("notWork-img").src = "img/img_notwork_thumnail_photo.png";
}
function toggleImg4() {
  document.getElementById("notWork-img").src = "img/img_temp4.png";
}


// notWork 이미지 확대
function imgWide(smallImg){
  let fullImg = document.getElementById("imageBox");
  fullImg.src = smallImg.src;

  if(document.getElementById('fullImage').style.display==='none'){
    document.getElementById('fullImage').style.display='block';
}else{
    document.getElementById('fullImage').style.display='none';
}
}

// notwork 이미지 보이기
function viewImg(){
  if(document.getElementById('fullImage').style.display==='block'){
      document.getElementById('fullImage').style.display='none';
  }else{
      document.getElementById('fullImage').style.display='block';
  }
}

// 윈도우 사이즈에 따른 메뉴 스타일 변경
function handleWindowSize() {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 800) {
    document.getElementById("bigMenu").style.display ='none';		
    document.getElementById("smallMenu").style.display ='flex';
    console.log('800 이하!');
  } else {
    document.getElementById("smallMenu").style.display ='none';		
    document.getElementById("bigMenu").style.display ='flex';
    console.log('800 초과!');
  }
}
window.addEventListener("resize", handleWindowSize);
