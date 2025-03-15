export function getFeedCardCSS() {
    return `
        feed-card {
            margin: var(--default-margin);
            padding: var(--slight-padding);
        }

        feed-card h2 {
            font-size: var(--size-2);
        }

        feed-card p, feed-card a {
            margin: var(--slight-margin);
            padding: var(--slight-padding);
            font-size: var(--size-0);
        }
    `;
}