// =========================================
// COUNTDOWN
// =========================================

const weddingDate = new Date("December 29, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
        document.querySelector(".countdown-heading").textContent =
            "The Wedding Celebration Has Begun!";
        document.querySelector(".countdown-timer").style.display = "none";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


// =========================================
// SCROLL-REVEAL (one screen per section)
// =========================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                // Keep observing so re-entering can re-trigger if desired.
                // Remove the next line if you want each section to animate only once.
                // observer.unobserve(entry.target);
            } else {
                // Remove class when leaving viewport so animation can replay
                entry.target.classList.remove("visible");
            }
        });
    },
    {
        threshold: 0.5  // section must be half visible before animating
    }
);

sections.forEach((section) => observer.observe(section));

// Trigger the cover animation immediately on load
window.addEventListener("load", () => {
    const cover = document.querySelector(".cover");
    if (cover) cover.classList.add("visible");
});