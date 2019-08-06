/// Color transition on mouseover in footer:

let colorChg = document.querySelector("footer");

function generateRGB(min, max) {
    var min		= min || 0;
    var max		= min || 255;
    var color	= [];
    for (var i = 0; i < 3; i++) {
        var num = random(min, max);
        color.push(num);
    }
    return color;
}


colorChg.addEventListener("mousemove", ((e) => {
    colorChg.style.background = `${rgb(event)}`;
}))
('mousemove', e => {

}