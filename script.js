// ============================
// PRELOADER
// ============================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});


// ============================
// DARK/LIGHT MODE
// ============================

const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("light-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });
}


// ============================
// SMOOTH SCROLL
// ============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
