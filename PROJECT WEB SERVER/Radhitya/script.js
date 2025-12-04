// Animasi muncul setelah load
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.style.opacity = "1";
        }, i * 150);
    });
});
