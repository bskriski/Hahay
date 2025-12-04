// Script ini untuk animasi fade-in kanan
document.addEventListener("DOMContentLoaded", () => {
    const rightSide = document.querySelector(".right");
    rightSide.style.opacity = "0";
    rightSide.style.transform = "translateX(40px)";

    setTimeout(() => {
        rightSide.style.transition = "0.8s";
        rightSide.style.opacity = "1";
        rightSide.style.transform = "translateX(0)";
    }, 200);
});
