export function getFeedCardCSS() {
    return `
        feed-card {
            max-width: 50rem;
            margin-inline: auto;
            padding: var(--slight-padding);
            display: flex;
            flex-flow: column wrap;
        }

        feed-card h2 {
            font-size: var(--size-2);
        }

        feed-card p, feed-card a {
            margin: var(--slight-margin);
            padding: var(--slight-padding);
            font-size: var(--size-0);
        }

        feed-card picture {
            max-width: var(--default-max-width);
            height: auto;
            display: flex;
        }
    `;
}