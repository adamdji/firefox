(() => {
    const uselessDivSelector = 'div[style="left: 9007200000000000px; width: 100%; height: 100%; position: fixed;"';
    const foundUselessDiv = uselessDiv => interval => {
        uselessDiv.setAttribute('style', '');
        clearInterval(interval);
        console.log('Found and fixed div, ending');
    }
    const intervalTime = 10;
    let interval: number;
    try {
        interval = setInterval(() => {
            const uselessDiv = document.querySelector(uselessDivSelector);
            uselessDiv ? foundUselessDiv(uselessDiv)(interval) : console.log('div not found...');
        }, intervalTime);
    } catch (error) {
        console.log(error);
    }
})();
