(function () {
    var uselessDivSelector = 'div[style="left: 9007200000000000px; width: 100%; height: 100%; position: fixed;"';
    var foundUselessDiv = function (uselessDiv) { return function (interval) {
        uselessDiv.setAttribute('style', '');
        clearInterval(interval);
        console.log('Found and fixed div, ending');
    }; };
    var intervalTime = 10;
    var interval;
    try {
        interval = setInterval(function () {
            var uselessDiv = document.querySelector(uselessDivSelector);
            uselessDiv ? foundUselessDiv(uselessDiv)(interval) : console.log('div not found...');
        }, intervalTime);
    }
    catch (error) {
        console.log(error);
    }
})();
