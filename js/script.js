document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
});

// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(255,255,255,0.95)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
        navbar.style.background = "rgba(255,255,255,0.85)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
    }
});



// SMOOTH SCROLL MENU

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {
            e.preventDefault();

            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});


// SEARCH FUNCTION

const searchInput = document.querySelector(".search-box input");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        const value = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".fav-card");

        cards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}


// ORDER BUTTON EFFECT

document.querySelectorAll(".fav-card button").forEach(btn => {
    btn.addEventListener("click", function() {

        this.innerText = "Added ✓";
        this.style.background = "#4caf50";

        setTimeout(() => {
            this.innerText = "Order";
            this.style.background = "";
        }, 1500);
    });
});


// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

// jalan saat load + scroll
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* LOGIN PAGE */

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (email === "user@gmail.com" && password === "12345") {
                window.location.href = "index.html";
            } else {
                alert("Email ou mot de passe incorrect !");
            }
        });
    }
});