let onBeat = true;
/**
 * Switches the filename from filenameK to filename(1-K)
 * 
 * @param {string} svgname the name of svg to modify
 * @param {string} filename1 valid file path, contains a unique 1 in the name
 * @param {string} filename2 valid file path, contains a unique 2 in the name
 */
function blinkSun() {
    svg = document.getElementById('Sun');
    console.log('blinked!');
        if (onBeat) {
            svg.setAttribute('src','./SVGs/sunSprite2.svg');
            onBeat = false;
        }
        else { 
            svg.setAttribute('src','./SVGs/sunSprite1.svg');
            onBeat = true;
        };
}
setInterval(blinkSun, 400)