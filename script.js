// Scroll reveal
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const visible = 100;

        if (elementTop < windowHeight - visible) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Scroll suave botón
document.getElementById("btn").addEventListener("click", () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
});

// Animar barras de progreso
function animateSkills() {
    const progresses = document.querySelectorAll(".progress");

    progresses.forEach(bar => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
    });
}

window.addEventListener("scroll", animateSkills);

// Contador animado
const counter = document.querySelector(".counter");
let started = false;

function animateCounter() {
    if (started) return;

    const rect = counter.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        started = true;
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const update = () => {
            count++;
            counter.innerText = count;
            if (count < target) {
                requestAnimationFrame(update);
            }
        };

        update();
    }
}

window.addEventListener("scroll", animateCounter);
