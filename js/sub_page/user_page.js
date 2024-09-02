"use strict";
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
