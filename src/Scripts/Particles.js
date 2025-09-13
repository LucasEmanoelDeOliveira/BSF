function createParticles() {
    const particlesContainer = document.getElementById("particles-container");
    if (!particlesContainer) {
        console.log("Container não achado");
        return;
    }

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // posição aleatória
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";

        // delay aleatório
        particle.style.animationDelay = Math.random() * 6 + "s";

        // tamanho aleatório
        const size = Math.random() * 4 + 2;
        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particlesContainer.appendChild(particle);
    }
}

// roda 5s depois que a página carregar
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        createParticles();
    }, 100);
});
