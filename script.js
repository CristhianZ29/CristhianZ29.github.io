window.addEventListener("load", () => {
    const elements = document.querySelectorAll(".hero h1, .hero p, button");

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.transition = "all 1s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 300);
    });
});

document.getElementById("btn").addEventListener("click", () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
});
