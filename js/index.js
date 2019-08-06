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

/// Create the last button in Nav for document color scheme
let pBody = document.querySelector("body");
let lSwitch = document.createElement("button");
lSwitch.textContent = "🎨";
document.querySelector(".nav").append(lSwitch);
 
let pHeader = document.querySelector("header");
let pLink = document.querySelectorAll("a");

//*************************************** */
//// DARK MODE / LIGHT MODE / COLORED MODE
lSwitch.addEventListener("click", function() {
  if (pBody.style.color == "black") {
    // body
    pBody.style.color = "white";
    pBody.style.background = "black";
    //header
    pLink.forEach(elem => (elem.style.color = "white"));
    pHeader.style.color = "white";
    pHeader.style.background = "black";
  } else if (pBody.style.color == "white") {
    pBody.style.color = "yellow";
    pBody.style.background = "darkgreen";
    //header
    pLink.forEach(elem => (elem.style.color = "yellow"));
    pHeader.style.color = "yellow";
    pHeader.style.background = "darkgreen";
  } else {
    pBody.style.color = "black";
    pBody.style.background = "white";
    //header
    pLink.forEach(elem => (elem.style.color = "black"));
    TweenLite.to(pHeader, 3, { color: "black" });
    //pHeader.style.color = 'black'
    pHeader.style.background = "white";
  }
});
//*** DarkMode ****//
document.querySelector(".content-section .text-content").style.display = "none";
document.querySelector(".content-section").style.justifyContent = "center";
document
  .querySelector(".content-section")
  .addEventListener("mouseover", function() {
    document.querySelector(".content-section .text-content").style.display =
      "inline-block";
    document.querySelector(".content-section").style.justifyContent =
      "space-between";
  });
document
  .querySelector(".content-section")
  .addEventListener("mouseout", function() {
    document.querySelector(".content-section .text-content").style.display =
      "none";
    document.querySelector(".content-section").style.justifyContent = "center";
  });

document.querySelector(".inverse-content .text-content").style.display = "none";
document.querySelector(".inverse-content").style.justifyContent = "center";
document
  .querySelector(".inverse-content")
  .addEventListener("mouseover", function() {
    document.querySelector(".inverse-content .text-content").style.display =
      "inline-block";
    document.querySelector(".inverse-content").style.justifyContent =
      "space-between";
  });
document
  .querySelector(".inverse-content")
  .addEventListener("mouseout", function() {
    document.querySelector(".inverse-content .text-content").style.display =
      "none";
    document.querySelector(".inverse-content").style.justifyContent = "center";
  });


