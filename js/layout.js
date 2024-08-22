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

  /* 섹션 이동 스크롤 박스 이동 */
  const $openBox = $(".open_box");
  const $boxes = $openBox.children();
  let isElseExecuted = false; // else 문이 실행되었는지 확인하는 변수
  // 스크롤할 섹션
  const view = $(".view");
  const fashion = $(".fashion");
  const lcm_sns = $(".lcm_sns");
  const banner = $(".banner");
  const footer = $(".footer");

  /* 메인 비주얼 스크롤 */
  $(".main_visual").on("wheel", function (event) {
    event.preventDefault();
    const scrollAmount = event.originalEvent.deltaY;

    if (scrollAmount > 0) {
      // 스크롤을 내릴 때
      $("html, body").animate({ scrollTop: view.offset().top }, 600);
    } else {
      // 스크롤 올릴 때
      $("html, body").animate({ scrollTop: 0 }, 1200);
    }
  });

  /* 배경 스크롤 */
  $(".view").on("wheel", function (event) {
    event.preventDefault();
    const scrollAmount = event.originalEvent.deltaY;

    if (scrollAmount > 0) {
      // 스크롤을 내릴 때
      if (isElseExecuted) {
        // 첫 스크롤이 선행됐다면 다음 섹션으로 넘어감
        $("html, body").animate(
          { scrollTop: fashion.offset().top },
          600,
          function () {
            isElseExecuted = false; // 다음 스크롤을 위해 초기화
          }
        );
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
    event.preventDefault();
    const scrollAmount = event.originalEvent.deltaY;

    if (scrollAmount > 0) {
      // 스크롤을 내릴 때
      $("html, body").animate({ scrollTop: lcm_sns.offset().top }, 600);
    } else {
      // 스크롤을 올릴 때
      $("html, body").animate({ scrollTop: view.offset().top }, 600);
    }
  });

  /* sns 스크롤 */
  let sns; // 푸터 구경하러 갔을 때 lcm_sns에서 마우스 휠을 올렸을 경우를 위한 변수
  $(".lcm_sns").on("wheel", function (event) {
    event.preventDefault();
    const scrollAmount = event.originalEvent.deltaY;
    if (scrollAmount > 0) {
      // 스크롤을 내릴 때
      $("html, body").animate({ scrollTop: banner.offset().top }, 700);
      sns = true;
    } else {
      // 스크롤을 올릴 때
      if (sns) {
        $("html, body").animate({ scrollTop: lcm_sns.offset().top }, 700);
        sns = false;
      } else {
        $("html, body").animate({ scrollTop: fashion.offset().top }, 600);
      }
    }
  });
  /* 이벤트 & 푸터 스크롤 */
  $(".event").on("wheel", function (event) {
    event.preventDefault();
    const scrollAmount = event.originalEvent.deltaY;
    if (scrollAmount > 0) {
      // 스크롤을 내릴 때
      $("html, body").animate({ scrollTop: footer.offset().top }, 600);
    } else {
      // 스크롤을 올릴 때
      $("html, body").animate({ scrollTop: lcm_sns.offset().top }, 600);
    }
  });
  $("footer").on("wheel", function (event) {
    event.preventDefault();
    const scrollAmount = event.originalEvent.deltaY;

    if (scrollAmount > 0) {
      // 스크롤을 내릴 때
      $("html, body").animate({ scrollTop: footer.offset().top }, 600);
    } else {
      // 스크롤을 올릴 때
      $("html, body").animate({ scrollTop: lcm_sns.offset().top }, 600);
    }
  });

  /* slick slider */

  /* 패션(Fashion) 슬라이더 */
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
  /* lcm_sns 슬라이더 */
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

  /* 마우스 커서 */
  let page = 1;

  const $mouse = $(".mouse");

  function updateCursorStyle(
    mouseX,
    mouseY,
    rotation = 0,
    background = "",
    scale = 1
  ) {
    $mouse.css({
      left: mouseX - $mouse.width() / 2 + "px", // 중앙 정렬
      top: mouseY - $mouse.height() / 2 + "px", // 중앙 정렬
      background: background,
      transform: `rotate(${rotation}deg) scale(${scale})`, // 회전 및 스케일 설정
      width: "80px", // 고정된 크기
      height: "80px", // 고정된 크기
      opacity: 1, // 보이게 설정
    });
  }
  $("header, section")
    .on("mousemove", function (event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // event.target을 사용하여 현재 마우스가 위치한 요소를 확인
      if ($(event.target).is("a") || $(event.target).is("button")) {
        updateCursorStyle(
          mouseX,
          mouseY,
          0,
          "rgba(255, 0, 0, 0.3)", // 빨간색 배경
          0.8
        );
      } else {
        updateCursorStyle(
          mouseX,
          mouseY,
          0,
          "rgba(255, 255, 255, 0.3)", // 어두운 배경
          0.4
        );
      }
    })
    .on("mouseleave", function () {
      // 마우스가 나갈 때 기본 커서 스타일로 복원
      resetCursorStyle();
    });

  // 기본 커서 스타일로 복원하는 함수
  function resetCursorStyle() {
    $mouse.css({
      opacity: 0, // 커서를 숨김
    });
  }
  // 메인비주얼 마우스 커서
  $(".main_visual")
    .on("mousemove", function (event) {
      const windowWidth = $(window).width();
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      if (mouseX < windowWidth / 4) {
        // 왼쪽
        updateCursorStyle(
          mouseX,
          mouseY,
          -90,
          "url(../img/icon/arrow.png) no-repeat, linear-gradient(-90deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 100%)",
          1
        );
      } else if (mouseX <= windowWidth / 2) {
        // 중앙 왼쪽
        updateCursorStyle(mouseX, mouseY, -90, "rgba(18, 18, 18, 0.3)", 0.4);
      } else if (mouseX <= windowWidth / 1.5) {
        // 중앙 오른쪽
        updateCursorStyle(mouseX, mouseY, 90, "rgba(18, 18, 18, 0.3)", 0.4);
      } else {
        // 오른쪽
        updateCursorStyle(
          mouseX,
          mouseY,
          90,
          "url(../img/icon/arrow.png) no-repeat, linear-gradient(-90deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 100%)",
          1
        );
      }
    })
    .trigger("mousemove");
  // .main_visual 클릭 시 페이지 전환
  $(".main_visual").click(function (e) {
    e.preventDefault();

    // 현재 마우스 위치
    const mouseX = e.clientX;
    const windowWidth = $(window).width();

    // 페이지 전환 로직
    if (mouseX < windowWidth / 4) {
      // 왼쪽 클릭 - 이전 페이지
      page--;
      if (page < 1) page = 3; // 페이지 3으로 돌아가기
    } else if (mouseX > windowWidth / 1.5) {
      // 오른쪽 클릭 - 다음 페이지
      page++;
      if (page > 3) page = 1; // 페이지 1로 돌아가기
    }

    // 메인비주얼 텍스트 변수 선언
    let mainH3 = $(".main_visual h3");
    let $fullPhoto = $(".full_photo > img");
    let newImageSrc;

    // 페이지 내용 업데이트
    switch (page) {
      case 1:
        newImageSrc = "./img/photo/main_visual/main_people01.jpg";
        mainH3.text("플레체 : PLETZE");
        $(".page2").css("background-color", "#fff");
        $(".state > div").css({ width: "0%" });
        break;
      case 2:
        newImageSrc = "./img/photo/main_visual/main_people02.jpg";
        mainH3.text("dffsd");
        $(".page3").css("background-color", "#fff");
        $(".state > div").css({ width: "50%" });
        break;
      case 3:
        newImageSrc = "./img/photo/main_visual/main_people03.jpg";
        $(".page3").css("background-color", "#fff");
        $(".state > div").css({ width: "100%" });
        break;
    }

    // 새로운 이미지를 미리 로드한 후 페이드 전환
    const $newImage = $("<img>")
      .attr("src", newImageSrc)
      .css({ display: "none" });

    $newImage.on("load", function () {
      // 새로운 이미지가 로드되면 이전 이미지를 유지하고 새로운 이미지를 보여줌
      $fullPhoto.stop(true, true).fadeOut(500, function () {
        $(this).attr("src", newImageSrc).fadeIn(500);
      });
    });

    // 새로운 이미지를 DOM에 추가하여 미리 로드
    $("body").append($newImage);
  });
});
