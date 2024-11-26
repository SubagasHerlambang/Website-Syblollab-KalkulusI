const navbarMenu = document.querySelector(".navigasi .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Show login popup
// showPopupBtn.addEventListener("click", () => {
//   document.body.classList.toggle("show-popup");
// });

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList[link.id === "signup-link" ? "add" : "remove"](
      "show-signup"
    );
  });
});
var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}

// var testimonialItems = document.querySelectorAll(".item label");
// var timer;
// function cycleTestimonials(index) {
//   timer = setTimeout(function () {
//     var evt;
//     if (document.createEvent) {
//       //If browser = IE, then polyfill
//       evt = document.createEvent("MouseEvent");
//       evt.initMouseEvent(
//         "click",
//         true,
//         true,
//         window,
//         0,
//         0,
//         0,
//         0,
//         0,
//         false,
//         false,
//         false,
//         false,
//         0,
//         null
//       );
//     } else {
//       //If Browser = modern, then create new MouseEvent
//       evt = new MouseEvent("click", {
//         view: window,
//         bubbles: true,
//         cancelable: true,
//         clientX: 20,
//       });
//     }
//     var ele = "." + testimonialItems[index].className;
//     var ele2 = document.querySelector(ele);
//     ele2.dispatchEvent(evt);
//     index++; // Increment the index
//     if (index >= testimonialItems.length) {
//       index = 0; // Set it back to `0` when it reaches `3`
//     }
//     cycleTestimonials(index); // recursively call `cycleTestimonials()`
//     document
//       .querySelector(".testimonials")
//       .addEventListener("click", function () {
//         clearTimeout(timer); //stop the carousel when someone clicks on the div
//       });
//   }, 2000); //adjust scroll speed in miliseconds
// }
//run the function
// cycleTestimonials(0);



//fungsi kalkulator

function randomInput() {
  var randomValue = [
    "f(x)=x^2+3x^3+2",
    "f(x)=7x^4",
    "f(x)=6x^3-4x^2+2x",
    "f(x)=e^x^2",
  ];
  var randomExpression = Math.floor(Math.random() * randomValue.length);
  document.getElementById("expression").value = randomValue[randomExpression];
  userInput();
}
function userInput() {
  try {
    var input = document.getElementById("expression").value;
    var derivative = math.derivative(input, "x");
    document.getElementById("derivative").innerHTML = `\`y' = ${derivative}\``;
    MathJax.Hub.Typeset();
  } catch (error) {
    alert(error);
  }
}
MathJax = window.MathJax;
MathJax.Hub.processSectionDelay = 0;
MathJax.Hub.Config({
  messageStyle: "none",
});
window.onload = randomInput();
document.getElementById("form").onsubmit = function (event) {
  event.preventDefault();
  userInput();
};
