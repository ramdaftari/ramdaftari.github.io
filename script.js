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
