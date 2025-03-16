const invader = document.querySelector("#bgAnimation");
const invader2 = document.querySelector("#bgAnimation2");
const invader3 = document.querySelector("#bgAnimation3");
const invaderSound = new Audio("../assets/sounds/toggle_002.ogg");
invaderSound.volume = 0.5;
const indexMain = document.querySelector("main");
let game = true;

window.addEventListener('DOMContentLoaded', async() => {
    const invaderStyle = document.createElement("style");
    invaderStyle.innerHTML = "";
    invaderStyle.innerHTML += `
        @media screen and (min-width: 1281px) {
            #bgAnimation.alive {
                animation: 10s infinite bgAnimation alternate;
                animation-timing-function: linear;
            }

            #bgAnimation2.alive {
                animation: 6s infinite bgAnimation alternate;
                animation-timing-function: linear;
            }

            #bgAnimation3.alive {
                animation: 3s infinite bgAnimation2 alternate;
                animation-timing-function: linear;
            }

            @keyframes bgAnimation {
                from {
                    translate: 0 0;
                }

                to {
                    translate: 120vw 0;
                }
            }

            @keyframes bgAnimation2 {
                to {
                    translate: 0 0;
                }

                from {
                    translate: 120vw 0;
                }
            }
        }
    `
    document.head.appendChild(invaderStyle);

    let score = "0";
    if (localStorage.getItem("highscore")) {
        score = localStorage.getItem("highscore");
    }
    const scoreDisplay = document.createElement('section');
    scoreDisplay.innerHTML = "";
    scoreDisplay.innerHTML += `
        <h2>High Score</h2>
        <p style="margin: var(--default-margin); margin-bottom: 0; margin-top: 0;">${score}</p>
        <button id="gameToggle" style="max-width:5rem; margin: var(--default-margin);">Toggle Game</button>
    `;
    indexMain.appendChild(scoreDisplay);

    invader.addEventListener("click", (event) => {
        if (invader.classList.contains("alive")) {
            invader.classList = "dead";
            if (localStorage.getItem("highscore")) {
                let score = Number(localStorage.getItem("highscore")) + 1000;
                localStorage.setItem("highscore", score);
            } else {
                localStorage.setItem("highscore", 1000);
            }
            scoreDisplay.querySelector("p").innerText = localStorage.getItem("highscore");
            invaderSound.play();
        }

        
        setTimeout(() => {
            if (game) {
                invader.classList = "alive";
            }
        }, 2000);
    });

    invader2.addEventListener("click", (event) => {
        if (invader2.classList.contains("alive")) {
            invader2.classList = "dead";
            if (localStorage.getItem("highscore")) {
                let score = Number(localStorage.getItem("highscore")) + 1000;
                localStorage.setItem("highscore", score);
            } else {
                localStorage.setItem("highscore", 1000);
            }
            scoreDisplay.querySelector("p").innerText = localStorage.getItem("highscore");
            invaderSound.play();
        }

        setTimeout(() => {
            if (game) {
                invader.classList = "alive";
            }
        }, 2000);
    });   

    invader3.addEventListener("click", (event) => {
        if (invader3.classList.contains("alive")) {
            invader3.classList = "dead";
            if (localStorage.getItem("highscore")) {
                let score = Number(localStorage.getItem("highscore")) + 1000;
                localStorage.setItem("highscore", score);
            } else {
                localStorage.setItem("highscore", 1000);
            }
            scoreDisplay.querySelector("p").innerText = localStorage.getItem("highscore");
            invaderSound.play();
        }

        setTimeout(() => {
            if (game) {
                invader.classList = "alive";
            }
        }, 2000);
    });      
    
    scoreDisplay.querySelector("button").addEventListener("click", (event) => {
        if (localStorage.getItem('game') === 'off') {
            game = true;
            localStorage.setItem('game', 'on');
            invader.classList = "alive";
            invader2.classList = "alive";
            invader3.classList = "alive";
        } else {
            localStorage.setItem('game', 'off');
            game = false;
            invader.classList = "dead";
            invader2.classList = "dead";
            invader3.classList = "dead";
        }
    });
});

(function () {
    if (localStorage.getItem('game') === 'off') {
        game = false;
        invader.classList = "dead";
        invader2.classList = "dead";
        invader3.classList = "dead";
    }
 })();
