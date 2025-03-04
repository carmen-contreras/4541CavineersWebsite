import wixWindow from 'wix-window';
import wixData from 'wix-data';

let lastWindowHeight = 0;
let lastWindowWidth = 0;

$w.onReady(function () {
	
    for (var i = 0; i < 1; i++)
        setTimeout(responsifyPage, 100)
});

function responsifyPage() {
    wixWindow.getBoundingRect()
        .then((windowSizeInfo) => {
            lastWindowWidth = windowSizeInfo.window.width;
            lastWindowHeight = windowSizeInfo.window.height;
            var num;
            num = 0;
            num = (lastWindowWidth / lastWindowHeight).toFixed(2)
            let toInsert = {
                "height": lastWindowHeight,
                "width": lastWindowWidth,
                "ratio": num
            };
            wixData.insert("PageSize", toInsert)
            if (lastWindowWidth >= 1750) {
                console.log(num)
            } else {
                console.log(`${lastWindowWidth}/${lastWindowHeight}`)
            }
        })

}