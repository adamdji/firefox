new MutationObserver(function (mutationList, observer) {
    mutationList.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
            if (node.nodeName === 'DIV' && node.nodeType === Node.ELEMENT_NODE) {
                var foundDiv = node;
                if (foundDiv.style.left === '9007200000000000px') {
                    foundDiv.setAttribute('style', '');
                    observer.disconnect();
                }
            }
        });
    });
}).observe(document.querySelector('body'), { attributes: false, childList: true, subtree: false, attributeOldValue: false, characterDataOldValue: false });
//# sourceMappingURL=messenger-fix.js.map