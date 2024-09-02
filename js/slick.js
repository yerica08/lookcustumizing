/* 메인페이지(index) */
// 패션(Fashion) 슬라이더
$(".fashion_img").slick({
  dots: false,
  infinite: false,
  speed: 800,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true,
  cssEase: "linear",
  touchThreshold: 100,
});
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
  pauseOnFocus: true,
  pauseOnHover: true,
  vertical: true,
});
