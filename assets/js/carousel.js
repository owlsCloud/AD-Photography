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

const changeSlide = (track, curr, target) => {
  track.style.transform = "translateX(-" + target.style.left + ")";
  curr.classList.remove("current-slide");
  target.classList.add("current-slide");
};

nextBtn.addEventListener("click", (e) => {
  const currSlide = track.querySelector(".current-slide");
  const nextSlide = currSlide.nextElementSibling;
  changeSlide(track, currSlide, nextSlide);
});

prevBtn.addEventListener("click", (e) => {
  const currSlide = track.querySelector(".current-slide");
  const prevSlide = currSlide.previousElementSibling;
  changeSlide(track, currSlide, prevSlide);
});
