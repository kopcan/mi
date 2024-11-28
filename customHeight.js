// Inside the iframe content
window.addEventListener('load', function () {
    function sendHeight() {
        const height = document.documentElement.scrollHeight;
        window.parent.postMessage({ type: 'setHeight', height: height }, '*');
    }

    sendHeight();

    // Optional: Monitor for content changes and send updates
    const observer = new MutationObserver(sendHeight);
    observer.observe(document.body, { childList: true, subtree: true });
});
