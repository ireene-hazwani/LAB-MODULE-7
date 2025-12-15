// Automatic Slideshow
let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // 3 seconds
}
showSlides();

// Progress Bar Animation
function moveProgress(id, width){
  let elem = document.getElementById(id);
  let w=0;
  let idInterval = setInterval(frame, 20);
  function frame(){
    if(w>=width) clearInterval(idInterval);
    else { w++; elem.style.width = w + "%"; }
  }
}
moveProgress("progressHTML", 90);
moveProgress("progressCSS", 80);
moveProgress("progressJS", 70);

// Collapsible Sections
let coll = document.getElementsByClassName("collapsible");
for(let i=0;i<coll.length;i++){
  coll[i].addEventListener("click", function(){
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
}
