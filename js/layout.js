"use strict";
$(function () {
  $(".wrapper").fadeIn(3000);
  /* 헤더 - 알림 */
  let result = 1;
  $(".heart_button").click(function () {
    if (result) {
      $(".heart_content").children("ul").css({ height: "500px", opacity: 1 });
      $(".heart_button > button").css({
        "background-image": "url('../img/icon/Result.png')",
        "background-position": "0px -1705px",
        filter: "brightness(0)",
        position: "absolute",
        "z-index": "500",
      });
      result = 0;
    } else {
      $(".heart_content > ul").css({ height: "0px", opacity: 0 });
      $(".heart_button > button").css({
        "background-image": "url('../img/icon/Result.png')",
        "background-position": "0px -1687px",
        filter: "brightness(1)",
      });
      result = 1;
    }
  });

  /* 헤더 - 우측 메뉴 */
  $(".menu_button").click(function () {
    $(".menu_content").css({
      opacity: 1,
      "z-index": 400,
    });
    $(".menu_wrap").css({
      transform: "translateX(0)",
    });
  });
  $(".close_button").click(function () {
    $(".menu_wrap").css({
      transform: "translateX(26vw)",
    });
    $(".menu_content").css({
      opacity: 0,
      "z-index": -1,
    });
  });

  /* 메인비주얼 */
  let page = 1;
  $(".white_arrow").click(function (e) {
    e.preventDefault();
    // 메인비주얼 텍스트 변수 선언
    let mainH3 = $(".main_visual h3");
    let mainH2 = $(".main_visual h2");
    let mainP = $(".main_p");
    let mainCopyright = $(".main_copy");
    page++;

    if (page == 1) {
      $(".text").fadeIn(2000);
      // 사진 주소 변경
      $(".full_photo > img").attr(
        "src",
        "./img/photo/main_visual/main_people01.jpg"
      );
      // 텍스트 변경
      mainH3.text("플레체 : PLETZE");
      // mainH2.innerText = "플레체 예배당 포토스팟";
      // mainP.innerText = "카제로스 레이드<br />붉여진 백야의 나선 2관문";
      // mainCopyright.innerText = "&copy; 프로틴초코볼";

      // 스테이터스 바 변경
      $(".page2").css("background-color", "#fff");
      $(".state > div").css({
        width: "0%",
      });

      console.log("1", page);
    } else if (page == 2) {
      $(".text").fadeIn(2000);
      // 사진 주소 변경
      $(".full_photo > img").attr(
        "src",
        "./img/photo/main_visual/main_people02.jpg"
      );

      // 텍스트 변경
      mainH3.text("dffsd");
      // mainH2.innerText = "dqdqfd팟";
      // mainP.innerText = "qsdfqwefaef<br/>adqdfa";
      // mainCopyright.innerText = "&copy; dqdtdqdf";

      // 스테이터스 바 변경
      $(".page3").css("background-color", "#fff");
      $(".state > div").css({
        width: "50%",
      });
      console.log("2", page);
    } else if (page == 3) {
      // 사진 주소 변경
      $(".full_photo > img").attr(
        "src",
        "./img/photo/main_visual/main_people03.jpg"
      );

      // 텍스트 변경
      // mainH3.innerText = "fkffkf";
      // mainH2.innerText = "dqdqfd팟";
      // mainP.innerText = "qsdfqwefaef<br/>adqdfa";
      // mainCopyright.innerText = "&copy; dqdtdqdf";

      // 스테이터스 바 변경
      $(".page3").css("background-color", "#fff");
      $(".state > div").css({
        width: "100%",
      });

      console.log("3", page);
    }
    if (page == 3) page = 0;
  });

  /* 섹션 이동 스크롤 박스 이동 */
  const $openBox = $(".open_box");
  const $boxes = $openBox.children();
  let isElseExecuted = false; // else 문이 실행되었는지 확인하는 변수

  /* 메인 비주얼 스크롤 */
  $(".main_visual").on("wheel", function (event) {
    event.preventDefault(); // 기본 스크롤 방지
    const scrollAmount = event.originalEvent.deltaY;

    if (scrollAmount > 0) {
      // 스크롤을 내릴 때
      $("html, body").animate({ scrollTop: 1073 }, 600);
    } else {
      // 스크롤 올릴 때
      $("html, body").animate({ scrollTop: 0 }, 1200);
    }
  });

  /* 배경 스크롤 */
  $(".view").on("wheel", function (event) {
    event.preventDefault(); // 기본 스크롤 방지
    const scrollAmount = event.originalEvent.deltaY;

    if (scrollAmount > 0) {
      // 스크롤을 내릴 때
      if (isElseExecuted) {
        // 첫 스크롤이 선행됐다면 다음 섹션으로 넘어감
        $("html, body").animate({ scrollTop: 2146 }, 600, function () {
          isElseExecuted = false; // 다음 스크롤을 위해 초기화
        });
      } else {
        // 배경 섹션에 들어오고 첫 스크롤

        // 첫 번째 박스 왼쪽으로 이동
        $boxes.eq(0).css({
          transform: "translateX(-100%)",
          transition: "1s linear",
        });

        // 두 번째 박스 오른쪽으로 이동
        $boxes.eq(1).css({
          transform: "translateX(100%)",
          transition: "1s linear",
        });

        // 텍스트 사라짐
        $("#viewText").css({
          opacity: "0",
          "z-index": "-1",
          transition: "0.8s",
        });

        // 1초 후 애니메이션 종료
        setTimeout(function () {
          // 움지이는 박스 사라짐
          $(".view .open_box").css({ opacity: "0", "z-index": "-1" });
          // 첫 스크롤 선행 됨
          isElseExecuted = true;
          // 버튼 나타남
          $(".view_box .diamond").css({ opacity: "1", transition: "1s" });
        }, 1000);
      }
    } else {
      // 스크롤을 올릴 때
      $("html, body").animate({ scrollTop: 0 }, 600, function () {
        isElseExecuted = false; // 다음 스크롤을 위해 초기화

        // 상태 초기화
        $(".view .open_box").css({ opacity: "1", "z-index": "50" });

        // 첫 번째 박스 원래 위치로
        $boxes
          .eq(0)
          .css({ transform: "translateX(0)", transition: "transform 0s" });

        // 두 번째 박스 원래 위치로
        $boxes
          .eq(1)
          .css({ transform: "translateX(0)", transition: "transform 0s" });
        $("#viewText").css({ opacity: "1", "z-index": "100" });
        $(".view_box .diamond").css({ opacity: "0", transition: "0s" });
      });
    }
  });

  /* 패션 스크롤*/
  $(".fashion").on("wheel", function (event) {
    event.preventDefault(); // 기본 스크롤 방지
    const scrollAmount = event.originalEvent.deltaY;

    if (scrollAmount > 0) {
      // 스크롤을 내릴 때
      $("html, body").animate({ scrollTop: 3219 }, 600);
    } else {
      // 스크롤을 올릴 때
      $("html, body").animate({ scrollTop: 1073 }, 600);
    }
  });

  /* 세번째 섹션 - 패션(Fashion) */

  /* 패션 슬라이더 */
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

  */ 
});
