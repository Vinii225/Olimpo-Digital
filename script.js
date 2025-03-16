let lastScrollY = window.scrollY;
let scrolledToSection = false;

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navegacao");

    if (!scrolledToSection) {
        if (window.scrollY < lastScrollY) {
            navbar.classList.add("visible");
            navbar.classList.remove("hidden");
        } else {
            navbar.classList.add("hidden");
            navbar.classList.remove("visible");
        }
    }

    lastScrollY = window.scrollY;
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", (event) => {
        scrolledToSection = true;
        const targetId = event.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            setTimeout(() => {
                scrolledToSection = false;
            }, 1000);
        }
    });
});
