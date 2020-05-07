(() => {
    // body > div:nth-child(148) is CSS-Selector from browser
    const uselessDivSelector = 'body > div[style="left: 9007200000000000px; width: 100%; height: 100%; position: fixed;"';
    const intervalTime = 100;
    let interval: number;

    const foundUselessDiv = (uselessDiv: Element) => (interval: number) => {
        uselessDiv.setAttribute('style', '');
        clearInterval(interval);

        console.log('Found and fixed div, ending');
    }
    try {
        console.log('Messenger detected, attempting to clear buggy div tag');
        interval = setInterval(() => {
            const uselessDiv = document.querySelector(uselessDivSelector);
            uselessDiv ? foundUselessDiv(uselessDiv)(interval) : null;
        }, intervalTime);
    } catch (error) {
        console.log(error);
    }
})();

(() => {
    const uselessDivSelector: string = 'body > div[style="left: 9007200000000000px; width: 100%; height: 100%; position: fixed;"';
    const body: HTMLBodyElement = document.querySelector('body');

    
    const observerConfig: object = { attributes: true, childList: true, subtree: true };
})();