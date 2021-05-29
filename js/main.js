let changeGreet = window.document.querySelector(".name__intro h1");
let changeName = window.document.querySelector(".name-given");
window.addEventListener("resize", function () {
  if (window.innerWidth <= 319) {
    changeGreet.innerHTML = "Hi";
  } else if (window.innerWidth >= 320) {
    changeGreet.innerHTML = "Hello";
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth <= 525) {
    changeName.innerHTML = "JC";
  } else if (window.innerWidth >= 526) {
    changeName.innerHTML = "Julian Cris";
  }
});

let windowWidth = document.documentElement.clientWidth;
document.addEventListener(
  "keydown",
  function () {
    if (event.keyCode === 123) {
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
      return false;
    } else if (event.ctrlKey && event.keyCode === 85) {
      return false;
    }
  },
  false
);

if (document.addEventListener) {
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
} else {
  document.attachEvent("oncontextmenu", function () {
    window.event.returnValue = false;
  });
}

/* PORTFOLIO */
AOS.init({
  duration: 500,
  easing: "linear",
  offset: 120,
});
