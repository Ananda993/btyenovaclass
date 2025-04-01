document.addEventListener("DOMContentLoaded", function () {
    console.log("SAO Learning Hub is Live! Explore & Learn like Kirito!");

    createParticles(); // Memulai animasi partikel

    // Efek glitch saat hover
    document.querySelectorAll(".glitch-text").forEach((el) => {
        el.addEventListener("mouseover", () => {
            el.style.animation = "none";
            setTimeout(() => {
                el.style.animation = "glitch 1s infinite alternate";
            }, 100);
        });
    });
});

// Membuat bintang-bintang yang bergerak di background
function createParticles() {
    const particleContainer = document.getElementById("particle-container");
    for (let i = 0; i < 50; i++) {
        let particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = Math.random() * 100 + "vh";
        particle.style.animationDuration = Math.random() * 3 + 2 + "s";
        particleContainer.appendChild(particle);
    }
}

/* Tambahkan efek CSS untuk animasi bintang */
const style = document.createElement("style");
style.innerHTML = `
    .particle {
        position: absolute;
        width: 5px;
        height: 5px;
        background: rgba(0, 255, 255, 0.8);
        border-radius: 50%;
        animation: floatUp 4s linear infinite;
    }

    @keyframes floatUp {
        from { transform: translateY(0); opacity: 1; }
        to { transform: translateY(-100vh); opacity: 0; }
    }
`;
document.head.appendChild(style);
