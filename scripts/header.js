const menuBtn = document.querySelector("#menuButton");
const dropSound = new Audio('../assets/sounds/drop_001.ogg');
dropSound.volume = 0.5;

window.addEventListener('DOMContentLoaded', async() => {
    menuBtn.addEventListener("click", (event) => {
        if (menuBtn.checked) {
            dropSound.play();
        }
    });    
}); 
