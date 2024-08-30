$(function () {
  // 페이지 로드 시 해시가 있는 경우 해당 섹션으로 스크롤
  if (window.location.hash) {
    const target = window.location.hash; // 해시 값 가져오기
    const targetOffset = $(target).offset().top; // 타겟 섹션의 위치 계산

    // 부드러운 스크롤 애니메이션 실행
    $("html, body").animate({ scrollTop: targetOffset }, 600);
  }

  // small 이미지를 클릭하면 large 이미지 변경
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
    largeImg.attr({ value: $(this).attr("value") });
    if (largeImg.attr("value") == "page1") {
      $(".circle").css({ "background-color": "#fff" });
      $(".page1").css({ "background-color": "#111" });
      $(".state div").css({ height: "0px" });
    } else if (largeImg.attr("value") == "page2") {
      $(".circle").css({ "background-color": "#111" });
      $(".page3").css({ "background-color": "#fff" });
      $(".state div").css({ height: "50%" });
    } else if (largeImg.attr("value") == "page3") {
      $(".circle").css({ "background-color": "#111" });
      $(".state div").css({ height: "100%" });
    }
  });

  // small img 에 애니메이션 적용

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
        complete: function () {
          isAnimating = false; // 애니메이션 상태 해제
          startScrolling(); // 반복 실행
        },
      }
    );
  }

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
