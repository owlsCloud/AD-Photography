const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const prevBtn = document.querySelector(".carousel__button--left");
const nextBtn = document.querySelector(".carousel__button--right");

//get dimension of slide------------------------
const slideHeight = slides[0].getBoundingClientRect().height;

// arrange slides next to each other
const setSlidePosition = (slide, idx) => {
  slide.style.top = slideHeight * idx + "px";
};

slides.forEach(setSlidePosition);

const changeSlide = (track, curr, target) => {
  track.style.transform = "translateY(-" + target.style.top + ")";
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
