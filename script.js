const container = document.getElementById("star-container");

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