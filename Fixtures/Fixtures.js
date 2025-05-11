// Wait until the entire page is loaded before running the code
window.addEventListener('DOMContentLoaded', () => {
    // ================================
    // 1. Sort the adult tournaments
    // ================================

    // Get the match list inside the adult tournaments section
    const adultMatchList = document.querySelector('#adult-tournaments .match-list');

    // Get all the match tickets in that section
    const adultTickets = Array.from(adultMatchList.querySelectorAll('.match-ticket'));

    // Sort the match tickets by date (most recent first)
    adultTickets.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        return dateB - dateA;
    });

    // Remove all current match tickets, and add back the sorted ones
    adultMatchList.innerHTML = '';
    adultTickets.forEach(ticket => adultMatchList.appendChild(ticket));


    // ================================
    // 2. Toggle match list visibility
    // ================================

    // This function shows/hides the match list or content when you click the section title
    const toggleMatches = (element) => {
        // Find the whole section (like a month group)
        const parentSection = element.closest('.month-section');

        // Find the content inside it (either .match-list or .program-content)
        const content = parentSection.querySelector('.match-list, .program-content');

        // Find the arrow icon
        const arrow = element.querySelector('.arrow');

        // If it's showing, hide it and rotate the arrow down
        if (content.style.display === 'block') {
            content.style.display = 'none';
            arrow.textContent = '▼';
        } 
        // If it's hidden, show it and rotate the arrow up
        else {
            content.style.display = 'block';
            arrow.textContent = '▲';
        }
    };

    // Get all the section titles (month titles)
    const monthTitles = document.querySelectorAll('.month-title');

    // Add a click event to each title that runs the toggleMatches function
    monthTitles.forEach(title => {
        title.addEventListener('click', () => toggleMatches(title));
    });


    // ================================
    // 3. Simple image slider (carousel)
    // ================================

    let currentIndex = 0; // Start at the first slide

    // This function shows the slide at the current index
    function showSlide(index) {
        const slides = document.querySelectorAll(".slide");

        // If index is too high, go back to the first slide
        if (index >= slides.length) currentIndex = 0;

        // If index is too low, go to the last slide
        if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        // Hide all the slides
        slides.forEach(slide => slide.style.display = "none");

        // Show the current slide
        slides[currentIndex].style.display = "block";
    }

    // Show the next slide
    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    // Show the previous slide
    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Start by showing the first slide
    showSlide(currentIndex);

    // Optional: if you have next/prev buttons, hook them up
    // document.getElementById("nextBtn").addEventListener("click", nextSlide);
    // document.getElementById("prevBtn").addEventListener("click", prevSlide);
});
