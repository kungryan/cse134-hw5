import { getFeedCardCSS } from "./feedCardCSS.js";

class FeedCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const style = document.createElement('style');
        style.textContent = getFeedCardCSS();

        const title = this.getAttribute('title') || "Article";
        const subtitle = this.getAttribute('subtitle') || "";
        const imageUrl = this.getAttribute('image-url') || "";
        const description = this.getAttribute('description') || "";
        const path = this.getAttribute('path') || "";
        console.log(imageUrl);
        this.innerHTML = '';
        this.innerHTML += `
            <hgroup>
                <h2>${title}</h2>
                <p>${subtitle}</p>
            </hgroup>
            <picture>
                <img src="${imageUrl}" alt="${title}">
            </picture>
            <p>${description}</p>
            <a href="${path}">Read More</a>
        `;
        this.append(style);
    }
}

customElements.define('feed-card', FeedCard);