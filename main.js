const body = document.body;

let onBeat = true;
let lightMode = true;
/**
 * Switches the filename from filename1 to filename2 if onBeat and filename2 to filename1 if not onBeat.
 * 
 * @param {string} svgname the name of svg to modify
 * @param {string} filename1 valid file path, contains a unique 1 in the name
 * @param {string} filename2 valid file path, contains a unique 2 in the name
 */
function blinkSun() {
    svg = document.getElementById('Sun');
    console.log('blinked!');
    if (lightMode) {
        if (onBeat) {
            svg.setAttribute('src','./SVGs/moonSprite2.svg');
            onBeat = false;
        }
        else { 
            svg.setAttribute('src','./SVGs/moonSprite1.svg');
            onBeat = true;
        }
    }
    else {
        if (onBeat) {
            svg.setAttribute('src','./SVGs/sunSprite2.svg');
            onBeat = false;
        }
        else { 
            svg.setAttribute('src','./SVGs/sunSprite1.svg');
            onBeat = true;
        }
    }
}
setInterval(blinkSun, 400)

svg = document.getElementById('Sun')

svg.addEventListener('click', () => {
    console.log('clicked!');
    lightMode = !lightMode;
    blinkSun;
    body.classList.toggle('dark-mode');
})