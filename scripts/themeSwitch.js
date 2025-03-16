const themeSwitcher = document.querySelector("#themeSwitch");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const audio = new Audio('../assets/sounds/mixkit-typewriter-soft-click-1125.mp3');
audio.volume = 0.5;


themeSwitcher.addEventListener("click", (event) => {
    toggleTheme();
    audio.play();
});

function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        sun.classList = "active";
        moon.classList = "hidden";
        setTheme('theme-light');
    } else {
        moon.classList = "active";
        sun.classList = "hidden";
        setTheme('theme-dark');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        moon.classList = "active";
        sun.classList = "hidden";
        setTheme('theme-dark');
    } else {
        sun.classList = "active";
        moon.classList = "hidden";
        setTheme('theme-light');
    }
 })();