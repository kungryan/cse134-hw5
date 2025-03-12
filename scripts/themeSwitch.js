const themeSwitcher = document.querySelector("#themeSwitch");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");


themeSwitcher.addEventListener("click", (event) => {
    toggleTheme();
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