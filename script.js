// Efek hover pada foto profil
const profileImage = document.querySelector("header img");

profileImage.addEventListener("mouseover", () => {
    profileImage.style.transform = "scale(1.1)";
});

profileImage.addEventListener("mouseout", () => {
    profileImage.style.transform = "scale(1)";
});

// Animasi mengetik otomatis pada nama
const text = "Almunajat Amirul Soleh";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typed-name").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Notifikasi saat ikon sosial media diklik
document.querySelectorAll(".social-icons a").forEach(link => {
    link.addEventListener("click", (event) => {
        alert("Membuka: " + event.currentTarget.href);
    });
});
