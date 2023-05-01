//toggle main buttons
function toggleImg1() {
    document.getElementById("notWork-img").src = "/img/img_temp2.png";
  }
  function toggleImg2() {
    document.getElementById("notWork-img").src = "/img/img_temp.png";
  }
  function toggleImg3() {
    document.getElementById("notWork-img").src = "/img/img_notwork_thumnail_photo.png";
  }
  function toggleImg4() {
    document.getElementById("notWork-img").src = "/img/img_temp4.png";
  }
  

function imgWide(smallImg){
    let fullImg = document.getElementById("imageBox");
    fullImg.src = smallImg.src;

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