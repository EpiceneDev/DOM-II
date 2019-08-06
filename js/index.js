/// COLOR TRANSITION in footer **mousemove
/// // Generate the color
let colorChg = document.querySelector(".footer");
function rgb() {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return `rgb(${getRndInteger(0, 255)},${getRndInteger(
    0,
    255
  )}, ${getRndInteger(0, 255)})`;
}
/// // Set time between change
setInterval(function() {
  colorChg.addEventListener(
    "mousemove",
    function(event) {
      colorChg.style.background = `${rgb(event)}`;
    },
    500
  );
});

// 
//  MOVE THE 'Welcome to Fun Bus!' **dblClick
let funBus = document.querySelector(".intro h2");
funBus.addEventListener("dblclick", incMargin);
let amtMargin = 0;
function incMargin() {
  amtMargin += 45;
  funBus.style.marginLeft = `${amtMargin}px`;
  funBus.style.color = "#AAAA00";
}

