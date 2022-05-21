const slide = document.querySelectorAll('.all-video-slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let i = 0;
slide[i].style.display = "block";
next.addEventListener('click', () => {
  slide[i].style.display = "none";
  slide[i].style.transition = "display 0.9s ease";
  i++;
  if (i >= slide.length) {
    i = 0;
    slide[i].style.display = "block";
    slide[i].style.transition = "display 0.9s ease";
  }
  slide[i].style.display = "block";
  slide[i].style.transition = "display 0.9s ease";
})

prev.addEventListener('click', () => {
  slide[i].style.display = "none";
  slide[i].style.transition = "display 0.9s ease";
  i--;
  if(i < 0){
    i = slide.length - 1;
    slide[i].style.display = 'block';
    slide[i].style.transition = "display 0.9s ease";
  } 
  slide[i].style.display = 'block';
  slide[i].style.transition = "display 0.9s ease";
})
