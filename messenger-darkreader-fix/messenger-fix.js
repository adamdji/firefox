(() => {
    // body > div:nth-child(148) is CSS-Selector from browser
    const uselessDivSelector = 'div[style="left: 9007200000000000px; width: 100%; height: 100%; position: fixed;"';
    const intervalTime = 100;
    let interval;
    const foundUselessDiv = (uselessDiv) => (interval) => {
        uselessDiv.setAttribute('style', '');
        clearInterval(interval);
        console.log('Found and fixed div, ending');
    };
    try {
        console.log('Messenger detected, attempting to clear buggy div tag');
        interval = setInterval(() => {
            const uselessDiv = document.querySelector(uselessDivSelector);
            uselessDiv ? foundUselessDiv(uselessDiv)(interval) : null;
        }, intervalTime);
    }
    catch (error) {
        console.log(error);
    }
})();
//# sourceMappingURL=messenger-fix.js.map