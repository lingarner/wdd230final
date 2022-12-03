// select next slide button
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");
// Select all slides
const slides = document.querySelectorAll(".slide");
// current slide counter
let curSlide = 2;

// maximum number of slides
let maxSlide = slides.length - 1;

// loop through slides and set each slides translateX property to index * 100%
// slides.forEach((slide, indx) => {
//   slide.style.transform = `translateX(${indx * 100}%)`;
// });

// add event listener and next slide functionality
nextSlide.addEventListener("click", function () {
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });

  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
});

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
