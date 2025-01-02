const subtitle = document.querySelector("#subtitle");
const text = "Undergrad at IIT Kanpur";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        subtitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Adjust typing speed here
    }
}

typeEffect();

document.addEventListener("mousemove", (e) => {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${e.pageX}px`;
    star.style.top = `${e.pageY}px`;
    document.body.appendChild(star);

    // Remove the star after a short delay
    setTimeout(() => {
        star.remove();
    }, 1000);
});
