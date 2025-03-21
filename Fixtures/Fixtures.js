/* script.js */
function toggleMatches(element) {
    const matchList = element.nextElementSibling;
    const arrow = element.querySelector(".arrow");
    if (matchList.style.display === "none" || matchList.style.display === "") {
        matchList.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    } else {
        matchList.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    }
    let currentIndex = 0;
function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;
    slides.forEach(slide => slide.style.display = "none");
    slides[currentIndex].style.display = "block";
}
function nextSlide() { showSlide(currentIndex + 1); }
function prevSlide() { showSlide(currentIndex - 1); }
document.addEventListener("DOMContentLoaded", () => showSlide(currentIndex));

}