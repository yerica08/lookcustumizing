$(function () {
  let bestImg = $(".best_img");
  bestImg.scroll({
    top: 0,
    left: 100,
    behavior: "smooth",
  });
  let smallImg = $(".small_img img");
  let largeImg = $(".large_img img");

  smallImg.on("click", function () {
    largeImg.attr({ src: $(this).attr("data-img") });
  });
  //   smallImg.on("click", function () {
  //     let newSrc = $(this).attr("data-img");

  //     // 새로운 이미지를 미리 로드
  //     $("<img>")
  //       .attr("src", newSrc)
  //       .on("load", function () {
  //         largeImg.stop(true, true).fadeOut(200, function () {
  //           // fadeOut이 완료된 후에 src 속성 변경
  //           largeImg.attr("src", newSrc).fadeIn(200);
  //         });
  //       });
  //   });
});
