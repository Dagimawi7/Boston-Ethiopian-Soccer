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
}