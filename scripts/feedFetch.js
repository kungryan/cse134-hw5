let feedSection = document.querySelector("#feed-section");
let remoteLoadBtn = document.querySelector("#remoteBtn");
let pending = false;

window.addEventListener('DOMContentLoaded', async() => {
    remoteLoadBtn.addEventListener("click", (event) => {
        if (!pending) {
            pending = true;
            feedSection.innerHTML = "";
            getData();
        }
    });    
}); 

async function getData() {
    let url = "https://api.jsonbin.io/v3/b/67d48e408561e97a50ec123c/latest"
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-Master-Key": "$2a$10$mzxlaCP4a.Sj0VOCmVxeS.WKts2qEyQld2.R4T5vJPsQ99bd67C.a",
            },
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new TypeError("No JSON found!");
        }

        const jsonData = await response.json();
        const jsonArray = [];
        jsonData.record.forEach(article => {
            jsonArray.push(JSON.stringify(article));
            window.articleItem = document.createElement("feed-card");
            window.articleItem.setAttribute("title", `${article.title}`);
            window.articleItem.setAttribute("subtitle", `${article.subtitle}`);
            window.articleItem.setAttribute("image-url", `${article.image_url}`);
            window.articleItem.setAttribute("description", `${article.description}`);
            window.articleItem.setAttribute("path", `${article.path}`);
            feedSection.appendChild(window.articleItem);
        });
        localStorage.setItem("feedJson", jsonArray);
        pending = false;
    } catch(error) {
        console.log(error.message);
    }
}