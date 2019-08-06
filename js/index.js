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

/// DARK MODE / LIGHT MODE / COLORED MODE
/// Create the last button in Nav for document color scheme
let lSwitch = document.createElement("button");
lSwitch.textContent = "🎨";
document.querySelector(".nav").append(lSwitch);

let pBody = document.querySelector("body");
let pHeader = document.querySelector("header");
let pLink = document.querySelectorAll("a");

/// Switch the colors in body and nav **click
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
    // body
    pBody.style.color = "#caa5d1";
    pBody.style.background = "purple";
    //header
    pLink.forEach(elem => (elem.style.color = "#caa5d1"));
    pHeader.style.color = "#caa5d1";
    pHeader.style.background = "purple";
  } else {
    // body
    pBody.style.color = "black";
    pBody.style.background = "white";
    //header
    pLink.forEach(elem => (elem.style.color = "black"));
        // TweenLite.to(pHeader, 3, { color: "black" });  //<== Animation!
    pHeader.style.color = 'black'
    pHeader.style.background = "white";
  }
});
//// HIDE/DISPLAY TEXT on **mouseover, **mouseout
//     Hide the text content and centering the pic
document.querySelector(".content-section .text-content").style.display = "none";
document.querySelector(".content-section").style.justifyContent = "center";

//     Show content on **mouseover
document
  .querySelector(".content-section")
  .addEventListener("mouseover", function() {
    document.querySelector(".content-section .text-content").style.display =
      "inline-block";
    document.querySelector(".content-section").style.justifyContent =
      "space-between";
  });
//     Hide the text content and centering the pic **mouseout
document
  .querySelector(".content-section")
  .addEventListener("mouseout", function() {
    document.querySelector(".content-section .text-content").style.display =
      "none";
    document.querySelector(".content-section").style.justifyContent = "center";
  });

document.querySelector(".inverse-content .text-content").style.display = "none";
document.querySelector(".inverse-content").style.justifyContent = "center";

//     Show content on **mouseover
document
  .querySelector(".inverse-content")
  .addEventListener("mouseover", function() {
    document.querySelector(".inverse-content .text-content").style.display =
      "inline-block";
    document.querySelector(".inverse-content").style.justifyContent =
      "space-between";
  });
  //     Hide the text content and centering the pic **mouseout
document
  .querySelector(".inverse-content")
  .addEventListener("mouseout", function() {
    document.querySelector(".inverse-content .text-content").style.display =
      "none";
    document.querySelector(".inverse-content").style.justifyContent = "center";
  });

      //USED prevent.default to stop entire context menu.
//// CLICK ALERT when right click (mouse menu) on body...Uncomment below to use (prevents Showing menu) 
// pBody.addEventListener("contextmenu", function() {
//   alert("A user interface is like a joke: If you have to explain it, it isn't that good.");
//   event.preventDefault();
// });

//// Change button colors when clicked. **Click
let buttons = Array.from(document.querySelectorAll(".content-pick .destination .btn"));
//console.log("buttons: ", buttons)
//// NOTE: Tried to addEventListener onto the array and stop propagation but not successful.
buttons[0].addEventListener("click", (e => {e.target.style.backgroundColor = "yellow"; }));
buttons[1].addEventListener("click", (e => {e.target.style.backgroundColor = "lavender"; }));
buttons[2].addEventListener("click", (e => {e.target.style.backgroundColor = "pink"; }));