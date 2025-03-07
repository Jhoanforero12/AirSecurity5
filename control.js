const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));



// Cerrar el menú si se hace clic fuera de él
document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
});

// Cerrar el menú al hacer scroll en dispositivos móviles
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
    lastScrollY = window.scrollY;
});



document.addEventListener("DOMContentLoaded", () => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    const headerTop = document.querySelector(".header-top");
    const header = document.querySelector(".header");
    const navMenu = document.querySelector(".nav-menu"); 

    if (!headerTop || !header || !navMenu) {
        console.error("Uno o más elementos no se encontraron en el DOM.");
        return;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > lastScrollY) {
                
                    headerTop.classList.add("hidden");
                    header.classList.add("fixed");
                    navMenu.style.top = "70px";
                } else {
                  
                    headerTop.classList.remove("hidden");
                    header.classList.remove("fixed");
                    navMenu.style.top = "110px"; 
                }

                lastScrollY = window.scrollY;
                ticking = false;
            });

            ticking = true;
        }
    });
});

lucide.createIcons(); // Cargar los iconos

