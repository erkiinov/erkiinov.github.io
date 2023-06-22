document.addEventListener("DOMContentLoaded", eyeball)
document.addEventListener("mousemove", eyeball)

function eyeball() {
    const eyes = document.querySelectorAll(".eyeball")
    let x = event.clientX * 100 / window.innerWidth / 1.4 + "%";
    let y = event.clientY * 100 / window.innerHeight / 2 + "%";

    for(let eye = 0; eye < 2; eye++){
        eyes[eye].style.left = x/2
        eyes[eye].style.top = y/2
        eyes[eye].style.transform = `translate(${x}, ${y})`
    }
}