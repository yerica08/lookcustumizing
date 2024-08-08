"use strict";
console.log(window.innerHeight);
console.log(window.innerWidth);

$(document).ready(function () {
  $(".wide_photo_01").slick({
    Infinity: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    variableWidth: false,
    fade: true,
    speed: 800,
    dots: true,
    cssEase: "linear",
    arrows: true,
    useCss: ".photo > div > img",
  });
});
$(document).ready(function () {
  $(".photo02_nav").slick({
    Infinity: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    fade: true,
    speed: 800,
    asNavFor: ".wide_photo_02",
  });
  $(".wide_photo_02").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    asNavFor: ".photo02_nav",
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    speed: 800,
    cssEase: "linear",
    useCss: ".photo > div > img",
  });
});

$(document).ready(function () {
  var $slider = $(".wide_photo_01");
  var $progressBar = $(".progress01");

  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide + 1) / slick.slideCount) * 100;

    $progressBar
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);
  });
});
$(document).ready(function () {
  var $slider = $(".photo02_nav");
  var $progressBar = $(".progress02");

  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide + 1) / slick.slideCount) * 100;

    $progressBar
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);
  });
});

const viewPhoto = document.querySelectorAll(".photo01");
const viewButton01 = document.querySelector("#view_button01");
const viewButton02 = document.querySelector("#view_button02");

viewButton01.onclick = function () {
  let n = 1;
  for (let i = 0; i < viewPhoto.length; i++) {
    viewPhoto[i].setAttribute(
      "src",
      "./img/photo/view/photo_0" + n + "_wide.jpg"
    );
    n++;
  }
};
viewButton02.onclick = function () {
  let n = 5;
  for (let i = 0; i < viewPhoto.length; i++) {
    viewPhoto[i].setAttribute("src", "./img/photo/view/photo_0" + n + ".jpg");
    n++;
  }
};
const $cursor = document.querySelector(".cursor");

let cursorX = 0;

let cursorY = 0;

let mouseX = 0;

let mouseY = 0;

document.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;

  mouseY = e.clientY;
});

function updateCursor() {
  const deltaX = (mouseX - cursorX - 30) / 3;
  const deltaY = (mouseY - cursorY - 30) / 3;
  cursorX += deltaX + 7;
  cursorY += deltaY + 7;
  $cursor.style.left = cursorX + "px";
  $cursor.style.top = cursorY + "px";
  requestAnimationFrame(updateCursor);
}

updateCursor();
