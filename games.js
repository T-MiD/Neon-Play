const container = document.getElementById("star-container");

// =========================
// STARS
// =========================

for (let i = 0; i < 250; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    const size = Math.random() * 3;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    star.style.setProperty(
        "--duration",
        `${2 + Math.random() * 4}s`
    );

    container.appendChild(star);
}

// =========================
// SEARCH FILTER
// =========================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".game-card");

    cards.forEach(card => {

        const title =
            card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});