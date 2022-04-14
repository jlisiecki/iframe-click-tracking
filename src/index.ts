interface Window {
    dataLayer: any[];
}
((w: Window, d: Document) => {
    w.dataLayer = w.dataLayer || [];
    let currentIframe: HTMLIFrameElement = null;
    d.querySelectorAll('iframe').forEach((iframe) => {
        iframe.addEventListener('mouseenter', () => {
            currentIframe = iframe;
        });
        iframe.addEventListener('mouseleave', () => {
            currentIframe = null;
            w.focus();
        });
    });
    w.addEventListener('blur', () => {
        if (currentIframe && currentIframe.id)
            w.dataLayer.push({
                event: 'adClicked',
                eventCategory: 'Kliknięcie w reklame',
                eventAction: currentIframe.id,
                eventLabel: undefined,
                eventValue: undefined
            });
        setTimeout(() => w.focus(), 0);
    });
})(window, document);
