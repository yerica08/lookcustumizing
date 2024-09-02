$(function () {
  // 페이지 로드 시 해시가 있는 경우 해당 섹션으로 스크롤
  if (window.location.hash) {
    const target = window.location.hash; // 해시 값 가져오기
    const targetOffset = $(target).offset().top; // 타겟 섹션의 위치 계산

    // 부드러운 스크롤 애니메이션 실행
    $("html, body").animate({ scrollTop: targetOffset }, 600);
  }

  let smallImg = $(".small_img img");
  let largeImg = $(".large_img img");
  let smallImgContainer = $(".small_img");
  let totalHeight = 0; // 총 높이
  let isAnimating = false; // 애니메이션 상태 추적

  // 모든 div의 높이를 더하여 총 높이를 계산
  smallImgContainer.find("div").each(function () {
    totalHeight += $(this).outerHeight(true); // true를 사용하여 margin 포함
  });

  // 애니메이션을 1초 후에 실행
  setTimeout(startScrolling, 1000); // 1초 후에 애니메이션 시작

  function startScrolling() {
    if (isAnimating) return; // 이미 애니메이션 중이면 리턴

    isAnimating = true; // 애니메이션 상태 설정
    smallImgContainer.animate(
      { scrollTop: totalHeight }, // 스크롤 위치를 총 높이로 애니메이션
      {
        duration: 30000, // 30초 동안 애니메이션
        easing: "linear", // 애니메이션 효과
        step: function (now) {
          // 현재 스크롤 위치에 따라 상태 업데이트
          let scrollPercent = now / totalHeight;

          if (scrollPercent > 0.2) {
            // 세 번째 이미지 상태
            $(".circle").css({ "background-color": "#111" });
            $(".state div").css({ height: "100%" });
            largeImg.attr({ src: $(".page3").attr("data-img") });
            largeImg.attr({ value: $(".page3").attr("value") });
          } else if (scrollPercent > 0.1 && scrollPercent <= 0.2) {
            // 두 번째 이미지 상태
            $(".circle").css({ "background-color": "#111" });
            $(".page3").css({ "background-color": "#fff" });
            $(".state div").css({ height: "50%" });
            largeImg.attr({ src: $(".page2").attr("data-img") });
            largeImg.attr({ value: $(".page2").attr("value") });
          } else {
            // 첫 번째 이미지 상태
            $(".circle").css({ "background-color": "#fff" });
            $(".page1").css({ "background-color": "#111" });
            $(".state div").css({ height: "0px" });
            largeImg.attr({ src: $(".page1").attr("data-img") });
            largeImg.attr({ value: $(".page1").attr("value") });
          }
        },
        complete: function () {
          isAnimating = false; // 애니메이션 상태 해제
          startScrolling(); // 반복 실행
        },
      }
    );
  }

  // 마우스 오버 또는 포커스 시 스크롤 멈추기
  smallImgContainer.on("mouseover focus", function () {
    smallImgContainer.stop(); // 애니메이션 멈춤
    isAnimating = false; // 애니메이션 상태 해제
  });

  // 마우스 아웃 또는 포커스 아웃 시 다시 시작
  smallImgContainer.on("mouseout blur", function () {
    if (!isAnimating) {
      startScrolling(); // 애니메이션 재시작
    }
  });

  // 클릭 이벤트
  smallImg.on("click", function () {
    largeImg.attr({ src: $(this).attr("data-img") });
    largeImg.attr({ value: $(this).attr("value") });

    // 클릭 시 스크롤을 해당 위치로 이동
    let targetValue = largeImg.attr("value");
    if (targetValue == "page1") {
      smallImgContainer.animate({ scrollTop: 0 }, 600); // 첫 번째 이미지 위치로 스크롤
    } else if (targetValue == "page2") {
      smallImgContainer.animate({ scrollTop: totalHeight / 2 }, 600); // 두 번째 이미지 위치로 스크롤
    } else if (targetValue == "page3") {
      smallImgContainer.animate({ scrollTop: totalHeight }, 600); // 세 번째 이미지 위치로 스크롤
    }
  });

  // 부모 요소에 이벤트 리스너 추가
  smallImgContainer.parent().on("mouseenter", function () {
    smallImgContainer.stop(); // 애니메이션 정지
    isAnimating = false; // 애니메이션 상태 해제
  });

  smallImgContainer.parent().on("mouseleave", function () {
    startScrolling(); // 애니메이션 재개
  });

  // 리포터 픽 - 포스터 제목
  let titleH3 = $(".contents_wrap .title h3");
  let postImg = $(".contents_wrap img");
  let nickName = $(".nick_name");
  nickName.each(function () {
    $(this).text(
      "[ " + $(this).parent().parent().prev().attr("data-nick-name") + " ]"
    );
  });
  titleH3.each(function () {
    $(this).text($(this).parent().prev().attr("alt"));
  });

  $(".contents_wrap .post").hover(
    function () {
      $(this).children("div").css({ opacity: 1, transition: "0.5s" });
    },
    function () {
      $(this).children("div").css({ opacity: 0, transition: "0.5s" });
    }
  );
});
