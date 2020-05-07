new MutationObserver((mutationList: MutationRecord[], observer: MutationObserver): void => {
    mutationList.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeName === 'DIV' && node.nodeType === Node.ELEMENT_NODE) {
                const foundDiv: HTMLDivElement = node as HTMLDivElement;
                if (foundDiv.style.left === '9007200000000000px') {
                    foundDiv.setAttribute('style', '');
                    observer.disconnect();
                }
            }
        });
    });
}).observe(document.querySelector('body'), { attributes: false, childList: true, subtree: false, attributeOldValue: false, characterDataOldValue: false });