const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const prevBtn = document.querySelector(".carousel__button--left");
const nextBtn = document.querySelector(".carousel__button--right");

//get dimension of slide------------------------
const slideWidth = slides[0].getBoundingClientRect().width;

// arrange slides next to each other
const setSlidePosition = (slide, idx) => {
  slide.style.left = slideWidth * idx + "px";
};
slides.forEach(setSlidePosition);
