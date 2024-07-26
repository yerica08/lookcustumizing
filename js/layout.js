"use strict";
console.log(window.innerHeight);
console.log(window.innerWidth);
document.getElementById("wide_photo_02").style.display = "none";
$("#button01").click(function () {
  var checked = $("#button01").is(":checked");
  if (checked) {
    document.getElementById("wide_photo_01").style.display = "none";
    document.getElementById("wide_photo_02").style.display = "block";
  }
});
$("#button02").click(function () {
  var checked = $("#button02").is(":checked");
  if (checked) {
    document.getElementById("wide_photo_02").style.display = "none";
    document.getElementById("wide_photo_01").style.display = "block";
  }
});

$(document).ready(function () {
  $(".photo01").slick({
    Infinity: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    variableWidth: false,
    // fade: true,
    speed: 400,
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
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".photo02",
  });
  $(".photo02").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: ".photo02_nav",
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    useCss: ".photo > div > img",
  });
});

$(document).ready(function () {
  var $slider = $(".wide_photo_01");
  var $progressBar = $(".progress");

  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide + 1) / slick.slideCount) * 100;

    $progressBar
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);
  });
});
