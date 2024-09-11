$(function () {
  /* 메인페이지(index) */
  // 패션(Fashion) 슬라이더
  // $(".customizing_img").slick({
  //   dots: false,
  //   infinite: false,
  //   speed: 800,
  //   slidesToShow: 1,
  //   centerMode: false,
  //   variableWidth: true,
  //   cssEase: "linear",
  //   touchThreshold: 100,
  // });
  // lcm_sns 슬라이더
  $("#lcm_instagram").slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 0.2,
    infinite: true,
    speed: 12000,
    slidesToShow: 1,
    centerMode: false,
    cssEase: "linear",
    pauseOnHover: true,
    vertical: true,
  });

  // best_page 슬라이더
  $(".large_img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 1500,
    asNavFor: ".small_img",
  });
  $(".small_img").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: ".large_img",
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 1500,
    cssEase: "linear",
    pauseOnHover: true,
    vertical: true,
    verticalSwiping: true,
  });
});
