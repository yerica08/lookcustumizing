"use strict";
// // 전역 mousemove 이벤트
// document.addEventListener("mousemove", function (event) {
//   mouseX = event.clientX;
//   mouseY = event.clientY;

//   // 마우스 위치에 따라 커서 스타일 변경
//   const target = event.target;
//   if (
//     target.matches("a") ||
//     target.matches("button") ||
//     target.classList.contains("touch")
//   ) {
//     mouse.style.transform = "scale(2)";
//     mouse.style.mixBlendMode = "difference";
//   } else {
//     mouse.style.transform = "scale(1)";
//     mouse.style.mixBlendMode = "normal";
//   }
// });
$(function () {
  $(".login_select li").on("click", loginSelectFnc());
  function loginSelectFnc() {
    if ($(this).hasClass("emailId")) {
      // login_form을 보여주고 li css 변경
      $(".email").css({
        "border-width": "0px",
        "border-right-width": "1px",
        "background-color": "#fff",
      });
      $(".login_form").css({
        display: "flex",
      });
      $(".sns_login").css({
        display: "flex",
      });
      $(".oneTimePW").css({
        "border-width": "0px",
        "border-bottom-width": "1px",
        "border-right-width": "1px",
        "background-color": "#fbfbfb",
      });
    } else if ($(this).hasClass("oneTimePW")) {
      // 일회용 번호 폼을 보여주고 li css 변경
    } else if ($(this).hasClass("qrCode")) {
      // QR 코드 폼을 보여주고 li css 변경
    }
  }
});
