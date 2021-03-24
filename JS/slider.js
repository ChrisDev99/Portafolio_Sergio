const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = document.querySelectorAll(".slide-container");

let currentIndex = 0;

nextButton.addEventListener("click", () => {
    if (currentIndex == slides.length - 1) {
        currentIndex = 0;
        document.querySelector(".active").classList.remove("active");
        slides[currentIndex].classList.add("active");

        return;
    } else {
        if (currentIndex < slides.length) {
            document.querySelector(".active").classList.remove("active");
            currentIndex++;
            slides[currentIndex].classList.add("active");
        }
    }
});

prevButton.addEventListener("click", () => {
    if (currentIndex == 0) {
        currentIndex = slides.length - 1;
        document.querySelector(".active").classList.remove("active");
        slides[currentIndex].classList.add("active");

        return;
    } else {
        if (currentIndex < slides.length) {
            document.querySelector(".active").classList.remove("active");
            currentIndex--;
            slides[currentIndex].classList.add("active");
        }
    }
});