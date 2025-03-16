let localLoadBtn = document.querySelector("#localBtn");
const errorSound = new Audio('../assets/sounds/error_004.ogg');
errorSound.volume = 0.5;

window.addEventListener('DOMContentLoaded', async() => {
    localLoadBtn.addEventListener("click", (event) => {
        feedSection.innerHTML = "";
        let jsonData = localStorage.getItem("feedJson");
        if (jsonData === null) {
            feedSection.innerHTML = `
                <p>No local storage, please fetch data remotely at least once!</p>
            `;
            errorSound.play();
        } else {
            jsonData = "[" + jsonData + "]";
            pending = true;
            populateFeed(jsonData);
            buttonSound.play();
        }
    });    
});

function populateFeed(jsonData) {
    const json = JSON.parse(jsonData)
    json.forEach(article => {
        window.articleItem = document.createElement("feed-card");
        window.articleItem.setAttribute("title", `${article.title}`);
        window.articleItem.setAttribute("subtitle", `${article.subtitle}`);
        window.articleItem.setAttribute("image-url", `${article.image_url}`);
        window.articleItem.setAttribute("description", `${article.description}`);
        window.articleItem.setAttribute("path", `${article.path}`);
        feedSection.appendChild(window.articleItem);
    });
    pending = false;
}