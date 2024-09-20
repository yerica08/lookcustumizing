/*
  ---- 목차 ----

  1. 기본 스타일
    1-1. 마우스 커서 스타일
    1-2. header - 알림
    1-3. header - 메뉴
    1-4. 새로고침시 스크롤 초기화

  2. 페이지별 스타일
    2-1. 메인 페이지(index)
      2-1-1. 메인페이지 스크롤
      2-1-2. 페이지 전환
      2-1-3. 메인페이지 베스트 뷰(best_view)

    2-2. 서브 페이지(sub_page)
      2-2-1. 스크롤 이벤트
      2-2-2. post 내용 보여주고 숨기기
      2-2-3. 베스트 페이지(best_page)
      2-2-4. 뷰 포럼(view_forum)
      2-2-5. 뷰 인포(view_info)
      2-2-6. 커뮤니티(community)
      2-2-7. 커스텀마이징 정보(customizing info)

    2-3. 유저 페이지(user_page)
      2-3-1. 유저 페이지 초기화
      2-3-1. 로그인 페이지(login)

  3. 페이지 로드 시 초기화
  
*/

// 1. 기본스타일 --------------------------------------------------------

/* 1-1. 마우스 커서 스타일 
const mouse = document.querySelector(".mouse");
const windowWidth = window.innerWidth;
let mouseX = 0;
let mouseY = 0;

// 커서 스타일 업데이트 함수
function updateCursorStyle() {
  mouse.style.left = `${mouseX - mouse.offsetWidth / 2}px`; // 중앙 정렬
  mouse.style.top = `${mouseY - mouse.offsetHeight / 2}px`; // 중앙 정렬
  mouse.style.opacity = "1"; // 항상 보이게 설정

  requestAnimationFrame(updateCursorStyle); // 다음 애니메이션 프레임 요청
}

// 전역 mousemove 이벤트
document.addEventListener("mousemove", function (event) {
  mouseX = event.clientX;
  mouseY = event.clientY;

  // 마우스 위치에 따라 커서 스타일 변경
  const target = event.target;
  if (
    target.matches("a") ||
    target.matches("button") ||
    target.classList.contains("touch")
  ) {
    mouse.style.transform = "scale(2)";
    mouse.style.mixBlendMode = "difference";
  } else {
    mouse.style.transform = "scale(1)";
    mouse.style.mixBlendMode = "normal";
  }
});
*/
// 메뉴 마우스 커서
const menuContent = document.querySelector(".menu_content");
/*menuContent.addEventListener("mousemove", function (event) {
  mouseX = event.clientX;
  const target = event.target;

  if (
    target.matches("a") ||
    target.matches("button") ||
    target.classList.contains("touch")
  ) {
    mouse.style.mixBlendMode = "difference";
    mouse.style.transform = "scale(2)";
    mouse.style.backgroundColor = "#fff";
  } else {
    mouse.style.mixBlendMode = "normal";
    mouse.style.transform = "scale(1)";
    mouse.style.backgroundColor = "#111";
  }
});

menuContent.addEventListener("mouseleave", function () {
  mouse.style.mixBlendMode = "difference";
});

// 메인비주얼 마우스 커서
const mainVisual = document.querySelector(".main_visual");
mainVisual.addEventListener("mousemove", function (event) {
  mouseX = event.clientX;

  if (mouseX > windowWidth / 4 && mouseX < windowWidth / 1.5) {
    mouse.style.mixBlendMode = "normal";
    mouse.style.transform = "scale(1)";
  } else {
    mouse.style.mixBlendMode = "difference";
    mouse.style.transform = "scale(2)";
  }
});

mainVisual.addEventListener("mouseleave", function () {
  mouse.style.mixBlendMode = "difference";
});

// 초기화
document.addEventListener("DOMContentLoaded", function () {
  mouse.style.opacity = "1"; // 페이지 로드 시 커서 보이게 설정
  updateCursorStyle(); // 커서 스타일 업데이트 시작
});*/

// 1-2. header
const heartButtons = document.querySelectorAll(
  ".heart_button, .heart_button button"
);
const heartContent = document.querySelector(".heart_content");
const heartButton = document.querySelector(".heart_button > button");

heartButtons.forEach((button) => {
  button.addEventListener("mouseover", handleMouseOver);
  button.addEventListener("focus", handleMouseOver);
  button.addEventListener("mouseleave", handleMouseLeave);
  button.addEventListener("blur", handleMouseLeave);
});

function handleMouseOver() {
  heartContent.querySelector("ul").style.height = "500px";
  heartContent.querySelector("ul").style.opacity = "1";
  heartButton.style.backgroundPosition = "0px -1705px";
}

function handleMouseLeave() {
  heartContent.querySelector("ul").style.height = "0px";
  heartContent.querySelector("ul").style.opacity = "0";
  heartButton.style.backgroundPosition = "0px -1687px";
}

// 1-3. header - 메뉴
const menuButton = document.querySelector(".menu_button");
const closeButton = document.querySelector(".close_button");
const menuWrap = document.querySelector(".menu_wrap");

menuButton.addEventListener("click", function () {
  menuContent.style.opacity = "1";
  menuContent.style.zIndex = "400";
  menuWrap.style.transform = "translateX(0)";
});

closeButton.addEventListener("click", function () {
  menuWrap.style.transform = "translateX(26vw)";
  menuContent.style.opacity = "0";
  menuContent.style.zIndex = "-1";
});

// 1-4. 새로고침시 스크롤 초기화
window.onload = function () {
  setTimeout(() => {
    scrollTo(0, 0);
  }, 100);
};

// 2. 페이지 스타일 --------------------------------------------------------

// 2-1. 메인 페이지(index)
function mainPage() {
  const wrapper = document.querySelector(".wrapper");
  wrapper.style.opacity = "1"; // fadeIn 효과를 위해 opacity 설정

  const openBox = document.querySelector(".view .open_box");
  const boxes = openBox.children;
  const view = document.querySelector(".view");
  const customizing = document.querySelector(".customizing");
  const lcm_sns = document.querySelector(".lcm_sns");
  const banner = document.querySelector(".banner");
  const footer = document.querySelector("footer");
  const box1 = document.querySelector(".customizing_img.box1");
  const box2 = document.querySelector(".customizing_img.box2");
  const moreBtn = document.querySelector(".customizing .more_button");
  const snsH3 = document.querySelector(".lcm_sns h3");
  const snsH2 = document.querySelector(".lcm_sns h2");
  let verticalScroll = 20; // customizing 페이지 좌우 스크롤

  // 2-1-1. 메인페이지 스크롤
  // 메인비주얼 스크롤
  document
    .querySelector(".main_visual")
    .addEventListener("wheel", function (event) {
      event.preventDefault();
      const scrollAmount = event.deltaY;

      if (scrollAmount > 0) {
        // 스크롤을 내릴 때
        window.scrollTo({ top: view.offsetTop, behavior: "smooth" });

        const viewTextH2 = document.querySelector(".view .text_h2");
        const customizingTextH2 = document.querySelector(
          ".customizing .text_h2"
        );
        const h2Elements = Array.from(viewTextH2.children);
        // 각 h2 요소에 대해 스타일 적용
        h2Elements.forEach((h2, index) => {
          // 각 h2 요소에 대해 지연 시간을 두고 스타일 적용
          setTimeout(() => {
            h2.style.opacity = 1;
            h2.style.transform = "translateY(0)";
          }, index * 300); // 각 요소에 대해 300ms의 지연 시간
        });
        setTimeout(function () {
          // 첫 번째 박스 왼쪽으로 이동
          boxes[0].style.transform = "translateX(-100%)";
          boxes[0].style.transition = "1s linear";

          // 두 번째 박스 오른쪽으로 이동
          boxes[1].style.transform = "translateX(100%)";
          boxes[1].style.transition = "1s linear";

          // 텍스트 사라짐
          const viewText = document.getElementById("viewText");
          viewText.style.opacity = "0";
          viewText.style.zIndex = "-1";
          viewText.style.transition = "0.8s";

          // 1초 후 애니메이션 종료
          setTimeout(function () {
            openBox.style.opacity = "0";
            openBox.style.zIndex = "-1";

            // 모든 diamond 요소의 opacity를 1로 설정
            const diamonds = document.querySelectorAll(".view_box .diamond");
            diamonds.forEach((diamond) => {
              diamond.style.opacity = "1"; // 모든 diamond의 opacity를 1로 설정
              diamond.style.transition = "0.5s";
            });
          }, 1000);
        }, 2000);
      } else {
        // 스크롤 올릴 때
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });

  // 배경섹션 스크롤
  view.addEventListener("wheel", function (event) {
    event.preventDefault();
    const scrollAmount = event.deltaY;

    if (scrollAmount > 0) {
      // 스크롤을 내릴 때
      window.scrollTo({ top: customizing.offsetTop, behavior: "smooth" });
      const textH2 = document.querySelector(".customizing .text_h2");
      const h2Elements = Array.from(textH2.children);
      const box1 = document.querySelector(".customizing_img.box1");
      const box2 = document.querySelector(".customizing_img.box2");

      // 각 h2 요소에 대해 스타일 적용
      function textMoving() {
        h2Elements.forEach((h2, index) => {
          // 각 h2 요소에 대해 지연 시간을 두고 스타일 적용
          setTimeout(() => {
            h2.style.opacity = 1;
            h2.style.transform = "translateY(0)";
          }, index * 100); // 각 요소에 대해 200ms의 지연 시간

          // 모든 글자가 나타난 후 openBox를 사라지게 함
          setTimeout(() => {
            textH2.style.transform = "translate(-50%, -340%)";
          }, h2Elements.length * 100 + 600);

          setTimeout(() => {
            box1.style.transform = "translateX(50%)";
            box2.style.transform = "translateX(-50%)";
          }, h2Elements.length * 100 + 700);
        });
      }
      textMoving();
    } else {
      // 스크롤을 올릴 때
      window.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(function () {
        // 상태 초기화
        openBox.style.opacity = "1";
        openBox.style.zIndex = "50";

        // 첫 번째 박스 원래 위치로
        boxes[0].style.transform = "translateX(0)";
        boxes[0].style.transition = "transform 0s";

        // 두 번째 박스 원래 위치로
        boxes[1].style.transform = "translateX(0)";
        boxes[1].style.transition = "transform 0s";
        viewText.style.opacity = 1;
        viewText.style.zIndex = "100";
        // 모든 diamond 요소의 opacity를 초기화
        const diamonds = document.querySelectorAll(".view_box .diamond");
        const viewTextH2 = document.querySelector(".view .text_h2");
        Array.from(viewTextH2.children).forEach((h2) => {
          h2.style.opacity = 0;
          h2.style.transform = "translateY(-50%)";
        });
        diamonds.forEach((diamond) => {
          diamond.style.opacity = "0"; // 모든 diamond의 opacity를 0으로 설정
          diamond.style.transition = "0s";
        });
      }, 500);
    }
  });
  // 커스텀마이징섹션 스크롤
  customizing.addEventListener("wheel", function (event) {
    event.preventDefault();
    const scrollAmount = event.deltaY;

    if (scrollAmount > 0) {
      //스크롤 내릴 때
      if (verticalScroll >= 120) {
        window.scrollTo({ top: lcm_sns.offsetTop, behavior: "smooth" });
        setTimeout(() => {
          snsH3.style.transform = "translate(0)";
          snsH3.style.opacity = 1;
        }, 500);
        setTimeout(() => {
          snsH2.style.transform = "translate(0)";
          snsH2.style.opacity = 1;
        }, 1000);
      } else {
        verticalScroll += 20;
        if (verticalScroll <= 80) {
          box1.style.transform = "translateX(" + (50 + verticalScroll) + "%)";
          box2.style.transform = "translateX(-" + (50 + verticalScroll) + "%)";
          if (verticalScroll == 80) {
            setTimeout(() => {
              moreBtn.style.transform = "translateY(0)";
            }, 200);
          }
        }
      }
    } else {
      // 스크롤 올릴 때
      if (verticalScroll < 0) {
        window.scrollTo({ top: view.offsetTop, behavior: "smooth" });
        const textH2 = document.querySelector(".customizing .text_h2");
        Array.from(textH2.children).forEach((h2) => {
          h2.style.opacity = 0;
          h2.style.transform = "translateY(-50%)";
        });
        textH2.style.transform = "translate(-50%, -50%)";
        box1.style.transform = "translateX(0%)";
        box2.style.transform = "translateX(0%)";
        moreBtn.style.transform = "translateY(50%)";
      } else {
        verticalScroll -= 20;
        if (verticalScroll >= 20) {
          box1.style.transform = "translateX(" + (50 + verticalScroll) + "%)";
          box2.style.transform = "translateX(-" + (50 + verticalScroll) + "%)";
          if (verticalScroll == 0) {
            moreBtn.style.transform = "translateY(50%)";
          }
        }
      }
    }
  });

  // sns섹션 스크롤
  let sns; // 푸터 구경하러 갔을 때 lcm_sns에서 마우스 휠을 올렸을 경우를 위한 변수
  lcm_sns.addEventListener("wheel", function (event) {
    event.preventDefault();
    const scrollAmount = event.deltaY;
    if (scrollAmount > 0) {
      // 스크롤 내릴 때
      window.scrollTo({ top: banner.offsetTop, behavior: "smooth" });
      sns = true;
    } else {
      // 스크롤 올릴 때
      if (sns) {
        window.scrollTo({ top: lcm_sns.offsetTop, behavior: "smooth" });
        sns = false;
      } else {
        window.scrollTo({ top: customizing.offsetTop, behavior: "smooth" });
        snsH3.style.transform = "translateY(-50%)";
        snsH3.style.opacity = 0;
        snsH2.style.transform = "translateY(-50%)";
        snsH2.style.opacity = 0;
      }
    }
  });

  // 이벤트 & 푸터섹션 스크롤
  banner.addEventListener("wheel", function (event) {
    event.preventDefault();
    const scrollAmount = event.deltaY;
    if (scrollAmount > 0) {
      window.scrollTo({ top: footer.offsetTop, behavior: "smooth" });
    } else {
      window.scrollTo({ top: lcm_sns.offsetTop, behavior: "smooth" });
    }
  });

  footer.addEventListener("wheel", function (event) {
    event.preventDefault();
    const scrollAmount = event.deltaY;

    if (scrollAmount > 0) {
      window.scrollTo({ top: footer.offsetTop, behavior: "smooth" });
    } else {
      window.scrollTo({ top: lcm_sns.offsetTop, behavior: "smooth" });
    }
  });

  // 2-1-2. 페이지 전환
  let page = 1;
  const windowWidth = window.innerWidth;

  document
    .querySelector(".main_visual")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const mouseX = event.clientX;

      // 페이지 전환 로직
      if (mouseX < windowWidth / 3) {
        page--;
        if (page < 1) page = 3; // 페이지 3으로 돌아가기
      } else if (mouseX > windowWidth / 1.5) {
        page++;
        if (page > 3) page = 1; // 페이지 1로 돌아가기
      }

      // 메인비주얼 텍스트 변수 선언
      const mainH3 = document.querySelector(".main_visual h3");
      const fullPhoto = document.querySelector(".full_photo > img");
      let newImageSrc;
      const mainText = document.querySelector(".text_wrap");

      // 페이지 내용 업데이트
      switch (page) {
        case 1:
          newImageSrc = "./img/photo/main_visual/main_people01.jpg";
          mainH3.textContent = "플레체 : PLETZE";
          break;
        case 2:
          newImageSrc = "./img/photo/main_visual/main_people02.jpg";
          mainH3.textContent = "dffsd";
          break;
        case 3:
          newImageSrc = "./img/photo/main_visual/main_people03.jpg";
          break;
      }

      // 새로운 이미지를 미리 로드한 후 페이드 전환
      const newImage = document.createElement("img");
      newImage.src = newImageSrc;
      newImage.style.display = "none";

      newImage.onload = function () {
        // 새로운 이미지가 로드되면 이전 이미지를 유지하고 새로운 이미지를 보여줌
        fullPhoto.style.transition = "opacity 0.3s";
        fullPhoto.style.opacity = "0";
        setTimeout(function () {
          fullPhoto.src = newImageSrc;
          fullPhoto.style.opacity = "1";
        }, 300);
        mainText.style.opacity = "0";
        setTimeout(function () {
          mainText.style.opacity = "1";
        }, 300);
      };

      document.body.appendChild(newImage); // 이미지 로드
    });
}

// 2-1-3. 메인페이지 베스트 뷰(best_view)
function bestViewPage() {
  // 이미지 세트 정의
  const imageSets = {
    1: [
      "../../img/photo/view/fief/fief_1.jpg",
      "../../img/photo/view/fief/fief_2.jpg",
      "../../img/photo/view/fief/fief_3.jpg",
      "../../img/photo/view/fief/fief_4.jpg",
      "../../img/photo/view/fief/fief_5.jpg",
    ],
    2: [
      "../../img/photo/view/continent/continent_1.jpg",
      "../../img/photo/view/continent/continent_2.jpg",
      "../../img/photo/view/continent/continent_3.jpg",
      "../../img/photo/view/continent/continent_4.jpg",
      "../../img/photo/view/continent/continent_5.jpg",
    ],
    3: [
      "../../img/photo/view/dongeon/dongeon_1.jpeg",
      "../../img/photo/view/dongeon/dongeon_2.jpg",
      "../../img/photo/view/dongeon/dongeon_3.jpeg",
      "../../img/photo/view/dongeon/dongeon_4.jpg",
      "../../img/photo/view/dongeon/dongeon_5.jpg",
    ],
    4: [
      "../../img/photo/view/island/island_1.jpg",
      "../../img/photo/view/island/island_2.jpg",
      "../../img/photo/view/island/island_3.jpg",
      "../../img/photo/view/island/island_4.jpg",
      "../../img/photo/view/island/island_5.jpg",
    ],
  };
  // URL에서 쿼리 파라미터 가져오기
  const urlParams = new URLSearchParams(window.location.search);
  const setNumber = urlParams.get("set");

  // 이미지 세트에 따라 이미지 표시
  const imageContainer = document.querySelector(".show_view");
  const imageBoxes = imageContainer.querySelectorAll(".bg");
  if (setNumber in imageSets) {
    imageSets[setNumber].forEach((imageSrc, index) => {
      if (index < imageBoxes.length) {
        imageBoxes[index].style.backgroundImage = `linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.6) 0%,
                rgba(0, 0, 0, 0.3) 100%
            ), url(${imageSrc})`;
      }
    });
  }
  //웹페이지에 있는 모든 섹션(부분)을 찾아서 저장
  const sections = document.querySelectorAll(".view_content");
  // 배경 이미지들을 찾아서 저장
  const images = document.querySelectorAll(".bg");
  // outerWrappers와 innerWrappers: 섹션을 감싸고 있는 요소들을 찾아서 저장
  const outerWrappers = gsap.utils.toArray(".outer");
  const innerWrappers = gsap.utils.toArray(".inner");

  // 이벤트 실행
  document.addEventListener("wheel", handleWheel);
  document.addEventListener("touchstart", handleTouchStart);
  document.addEventListener("touchmove", handleTouchMove);
  document.addEventListener("touchend", handleTouchEnd);

  let listening = false, // 현재 스크롤이나 터치를 감지하고 있는지
    direction = "down", // 스크롤 방향을 저장해. 처음에는 아래로 스크롤한다고 가정
    current, // 현재 보고 있는 섹션의 인덱스
    next = 0; // 다음에 보여줄 섹션의 인덱스

  // 터치 시작 위치와 이동한 거리를 저장
  /* 
    터치의 의미: 
    사용자가 화면을 손가락으로 터치하는 행동을 의미한다. 
    이 객체는 사용자가 터치한 위치와 이동한 거리를 기록하여 스크롤 방향을 결정하는 데 사용된다.*/
  const touch = {
    startX: 0, // 터치가 시작된 X축 위치 (가로 위치).
    startY: 0, // 터치가 시작된 Y축 위치 (세로 위치).
    dx: 0, // 터치가 이동한 X축 거리. (터치 시작 위치와 현재 위치의 차이)
    dy: 0, // 터치가 이동한 Y축 거리. (터치 시작 위치와 현재 위치의 차이)
    startTime: 0, // 터치가 시작된 시간 (밀리초 단위).
    dt: 0, // 터치가 시작된 이후 경과한 시간 (밀리초 단위).
  };

  // 애니메이션의 기본 설정. 천천히 부드럽게 움직이도록
  const tlDefaults = {
    ease: "slow.inOut",
    duration: 1.25,
  };

  gsap.set(outerWrappers, { yPercent: 100 });
  gsap.set(innerWrappers, { yPercent: -100 });

  // 아래로 스크롤했을 때 다음 섹션이 부드럽게 나타나도록 하는 함수
  function slideIn() {
    // 현재 섹션이 정의되어 있으면 그 섹션의 인덱스 번호를 0으로 설정하여 다른 섹션 위에 보이도록 함.
    if (current !== undefined) gsap.set(sections[current], { zIndex: 0 });

    // gsap.set = 초기 상태 설정
    gsap.set(sections[next], { autoAlpha: 1, zIndex: 1 }); // autoAlpah 1 = 다음섹션 보이게, zIndex:1 다음 섹션을 가장 위에 보이게
    gsap.set(images[next], { yPercent: 0 }); //y축 위치

    // 다음 섹션의 배경 이미지와 제목 글자의 초기 상태 설정
    const tl = gsap
      //애니메이션 타임라인 생성
      .timeline({
        paused: true, // 처음에는 애니메이션이 정지된 상태로 시작
        defaults: tlDefaults, // 위에 천천히 부드럽게 이동하도록 변수 설정되어있음

        // 애니메이션이 끝나면 listening을 true로 바꾸고 현재 섹션을 업데이트
        onComplete: () => {
          listening = true;
          current = next;
        },
      })
      // tl.to 는 애니메이션을 추가한다는 의미
      .to(
        // outerWrappers[next], innerWrappers[next]을 다음섹션 위로 슬라이드 인
        [outerWrappers[next], innerWrappers[next]],
        { yPercent: 0 },
        0
      )
      .from(
        // 배경 이미지를 아래에서 위로 슬라이드 인
        images[next],
        { yPercent: 15 },
        0
      );

    // 현재 섹션이 있을 경우, 현재 섹션을 위로 슬라이드 아웃 시키는 애니메이션 추가
    if (current !== undefined) {
      tl.add(
        gsap.to(images[current], {
          yPercent: -15,
          ...tlDefaults,
        }),
        0
      ).add(
        gsap
          .timeline()
          .set(outerWrappers[current], { yPercent: 100 })
          .set(innerWrappers[current], { yPercent: -100 })
          .set(images[current], { yPercent: 0 })
          .set(sections[current], { autoAlpha: 0 })
      );
    }
    // 애니메이션 재생
    tl.play(0);
  }

  // 위로 스크롤했을 때 현재 섹션이 부드럽게 사라지도록 하는 함수
  function slideOut() {
    // 현재 섹션의 z-index를 1로 설정해 위에 보이게 하고, 다음 섹션은 z-index를 0으로 설정
    gsap.set(sections[current], { zIndex: 1 });
    gsap.set(sections[next], { autoAlpha: 1, zIndex: 0 });
    // 제목 글자와 배경 이미지의 초기 상태를 설정
    gsap.set(splitHeadings[next].chars, { autoAlpha: 0, yPercent: 100 });
    gsap.set([outerWrappers[next], innerWrappers[next]], { yPercent: 0 });
    gsap.set(images[next], { yPercent: 0 });

    gsap
      // 애니메이션 타임라인을 생성
      .timeline({
        // 타임라인 애니메이션에서 기본 설정을 지정하는 부분. 이 설정은 타임라인에 추가되는 모든 애니메이션에 적용됨.
        defaults: tlDefaults,
        onComplete: () => {
          listening = true;
          current = next;
        },
      })
      // 현재 섹션을 위로 슬라이드 아웃 시키고, 다음 섹션의 배경 이미지를 아래에서 위로 슬라이드 인
      .to(outerWrappers[current], { yPercent: 100 }, 0)
      .to(innerWrappers[current], { yPercent: -100 }, 0)
      .to(images[current], { yPercent: 15 }, 0)
      .from(images[next], { yPercent: -15 }, 0)
      // 현재 섹션의 배경 이미지를 원래 위치로 설정
      .set(images[current], { yPercent: 0 });
  }

  // 사용자가 스크롤 방향에 따라 어떤 섹션이 다음에 보여질지 결정
  function handleDirection() {
    listening = false; // 스크롤이나 터치를 감지하지 않도록 설정

    // 아래로 스크롤 했을 때
    if (direction === "down") {
      next = current + 1; // 다음 섹션의 인덱스를 증가
      // 마지막 섹션을 지나면 처음으로 돌아감
      if (next >= sections.length) next = 0;
      // 다음 섹션을 슬라이드 인
      slideIn();
    }

    // 위로 스크롤했을 때
    if (direction === "up") {
      next = current - 1; // 다음 섹션의 인덱스를 감소
      // 첫 번째 섹션을 지나면 마지막 섹션으로 돌아감.
      if (next < 0) next = sections.length - 1;
      slideOut(); // 현재 섹션을 슬라이드 아웃
    }
  }

  // 마우스 휠을 사용할 때 호출되는 함수
  function handleWheel(e) {
    if (!listening) return; // 현재 스크롤을 감지하지 않으면 함수를 종료
    // 마우스 휠의 방향을 확인해서 아래로 스크롤인지 위로 스크롤인지 결정
    direction = e.wheelDeltaY < 0 ? "down" : "up";
    handleDirection(); // 방향에 따라 섹션을 변경
  }

  // 터치가 시작될 때 호출되는 함수
  function handleTouchStart(e) {
    if (!listening) return; // 현재 스크롤을 감지하지 않으면 함수를 종료
    const t = e.changedTouches[0]; // 터치한 위치의 정보를 가져옴
    // 터치 시작 위치를 저장
    touch.startX = t.pageX;
    touch.startY = t.pageY;
  }

  // 터치가 이동할 때 호출되는 함수
  function handleTouchMove(e) {
    if (!listening) return; // 현재 스크롤을 감지하지 않으면 함수를 종료
    e.preventDefault(); // 기본 스크롤 동작을 방지
  }

  // 터치가 끝날 때 호출되는 함수
  function handleTouchEnd(e) {
    if (!listening) return; // 현재 스크롤을 감지하지 않으면 함수를 종료
    const t = e.changedTouches[0]; // 터치한 위치의 정보를 가져옴
    // 터치 이동 거리를 저장
    touch.dx = t.pageX - touch.startX;
    touch.dy = t.pageY - touch.startY;
    // 아래로 스크롤했을 경우 방향을 설정
    if (touch.dy > 10) direction = "up";
    // 위로 스크롤했을 경우 방향을 설정
    if (touch.dy < -10) direction = "down";
    handleDirection(); // 방향에 따라 섹션을 변경
  }

  // 페이지가 처음 로드될 때 첫 번째 섹션을 보여주는 함수
  slideIn();
  scroll();
  function scroll() {
    const state = document.querySelector(".state div");
    if (next == 0) {
      state.style.width = "0%";
    } else if (next == 1) {
      document.querySelector(".page2").style.backgroundColor = "#fff";
      state.style.width = "25%";
    }
  }
}

// 2-2. 서브 페이지

/* 2-2-1. 스크롤 이벤트 */
function subScroll() {
  const scrollTexts = document.querySelectorAll(".main_title");
  const select = document.querySelectorAll(".select");
  const bestImg = document.querySelectorAll(".best_img");
  const event = document.querySelectorAll(".event");
  const article = document.querySelectorAll("article");
  const contentsWrap = document.querySelector(".contents_wrap");

  // 초기 스타일 설정을 위한 배열
  const bestPaeElements = [
    { el: scrollTexts[0], delay: "2s" },
    { el: select[0], delay: "2.5s" },
    { el: bestImg[0], delay: "3s" },
  ];
  const normalPageElements = [
    { el: scrollTexts[0], delay: "2s" },
    { el: select[0], delay: "2.5s" },
    { el: contentsWrap, delay: "3s" },
    { el: event[1], delay: "3.5s" },
  ];
  let pathName = window.location.pathname;

  if (pathName.includes("best_page.html")) {
    // 초기 스타일 적용
    bestPaeElements.forEach(({ el, delay }) => {
      el.style.transitionDelay = delay;
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
    });
    // 스크롤 이벤트 리스너
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      // 스타일 설정 함수
      const setStyles = (el, threshold, up, down) => {
        el.style.transform = scrollY >= threshold ? up : down;
        el.style.opacity = scrollY >= threshold ? "1" : "0";
      };

      // 각 요소의 스타일 설정
      setStyles(event[1], 100, "translateY(0)", "translateY(-10%)");
      setStyles(scrollTexts[1], 500, "translateY(0)", "translateY(-50%)");
      setStyles(select[1], 650, "translateY(0)", "translateY(-50%)");
      setStyles(article[0], 1050, "translateY(0)", "translateY(-3%)");
    });
  } else {
    // 초기 스타일 적용
    normalPageElements.forEach(({ el, delay }) => {
      el.style.transitionDelay = delay;
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
    });
  }
}
// 2-2-2. post 내용 보여주고 숨기기
function showPost() {
  const titleH3 = document.querySelectorAll(".post .title h3");
  const nickName = document.querySelectorAll(".nick_name");

  nickName.forEach(function (name) {
    name.textContent =
      "[ " +
      name
        .closest(".post")
        .querySelector("img")
        .getAttribute("data-nick-name") +
      " ]";
  });

  titleH3.forEach(function (h3) {
    h3.textContent = h3
      .closest(".post")
      .querySelector("img")
      .getAttribute("alt");
  });

  const posts = document.querySelectorAll(".post");
  posts.forEach(function (post) {
    post.addEventListener("mouseenter", function () {
      this.querySelector("div").style.opacity = "1";
      this.querySelector("div").style.transition = "0.5s";
    });

    post.addEventListener("mouseleave", function () {
      this.querySelector("div").style.opacity = "0"; // 원래 상태로 돌아가기
      this.querySelector("div").style.transition = "0.5s";
    });
  });
}

/* 2-2-3. 서브페이지 - 베스트 페이지(best_page) */
function bestPage() {
  // 페이지 로드 시 해시가 있는 경우 해당 섹션으로 스크롤
  if (window.location.hash) {
    const target = window.location.hash; // 해시 값 가져오기
    const targetElement = document.querySelector(target); // 타겟 섹션 선택
    if (targetElement) {
      // 타겟 섹션이 존재하는지 확인
      const targetOffset = targetElement.offsetTop; // 타겟 섹션의 위치 계산

      // 부드러운 스크롤 애니메이션 실행
      window.scrollTo({ top: targetOffset, behavior: "smooth" });
    }
  }
  // select 클릭시 ui 및 이미지 변경
  document.querySelector(".best_customizing").addEventListener("click", () => {
    const images = document.querySelectorAll(".best_img img");
    document.querySelector(".best_view").classList.remove("click_first");
    document.querySelector(".best_customizing").classList.add("click_second");
    images.forEach((img) => {
      img.src = img.getAttribute("data-customizing-img"); // customizing 이미지로 변경
    });
  });

  document.querySelector(".best_view").addEventListener("click", () => {
    const images = document.querySelectorAll(".best_img img");
    document.querySelector(".best_view").classList.add("click_first");
    document
      .querySelector(".best_customizing")
      .classList.remove("click_second");
    images.forEach((img) => {
      img.src = img.getAttribute("data-view-img"); // view 이미지로 변경
    });
  });
}

/* 2-2-4. 서브페이지 - 뷰 포럼(view_forum) */
function viewForum() {
  let filterList = document.querySelector(".filter_list");
  let listInLi = document.querySelectorAll(".list li");
  let listName = document.querySelectorAll(".list_name");

  // list 를 클릭하면 filter_list에 새로운 li 생성
  for (let i = 0; i < listInLi.length; i++) {
    listInLi[i].addEventListener("click", appendList);
  }
  function appendList() {
    if (this.classList.contains("addfilter")) return false; // 필터에 중복으로 들어가는 것 방지
    this.classList.add("addfilter");
    let newList = document.createElement("li"); // 새로운 li 태그 생성
    let newbtn = document.createElement("div"); // 새로운 li 태그 생성
    let text = this.innerText; // 추가할 내용 선택

    // newText에 사용자가 클릭한 li의 text를 createTextNode로 생성
    let newText = document.createTextNode(text);
    // newList에 newText 추가
    newList.appendChild(newText);
    newList.appendChild(newbtn);
    newList.classList.add("new_list");
    filterList.appendChild(newList); // ul 안에 동적으로 생성한 li 넣기

    // delete 버튼을 클릭하면 필터에서 삭제
    newList.addEventListener("click", deleteFnc);
    function deleteFnc() {
      // 중복을 막기위해 넣은 클레스 addfilter 삭제
      for (let i = 0; i < listInLi.length; i++) {
        if (this.innerText == listInLi[i].innerText) {
          listInLi[i].classList.remove("addfilter");
        }
      }
      this.parentElement.removeChild(this);
    }
  }

  // list_name 클릭하면 list_wrap의 li에 클레스 active 넣기
  for (let i = 0; i < listName.length; i++) {
    listName[i].addEventListener("click", active);
  }
  function active() {
    for (let i = 0; i < listName.length; i++) {
      listName[i].parentElement.classList.remove("active");
    }
    this.parentElement.classList.toggle("active");
  }
}

/* 2-2-5. 서브페이지 - 뷰 인포(view_info) */
function viewInfo() {
  const continentButtons = document.querySelectorAll(
    'input[name="continent_btn"]'
  ); // continet 버튼
  const bg = document.querySelector(".bg"); // background
  const mainWhich = document.querySelector(".main_which");
  const subWhich = document.querySelector(".sub_which");
  const explan = document.querySelector(".explan");
  const closeBtn = document.querySelector(".explan .close"); // close 버튼
  const detailBtn = document.querySelector(".detail_btns");

  closeBtn.addEventListener("click", function () {
    // 설명란 숨김
    explan.style.display = "none";
    // 모든 라벨이 생김
    const labels = document.querySelectorAll(".continent_btn_wrap label");
    labels.forEach((label) => {
      label.style.display = "block";
    });
    // 지도 원상복귀
    bg.style.background =
      "url(../../img/photo/view/maps/continent/main_map.jpg) no-repeat center / cover";

    detailBtn.style.display = "none";
  });

  // continent 버튼을 클릭하면
  continentButtons.forEach((button) => {
    button.addEventListener("change", () => {
      const thisLabel = button.nextElementSibling; // 클릭한 버튼의 label
      const labels = button.parentElement.querySelectorAll("label"); // 모든 label
      // 모든 라벨이 사라짐
      labels.forEach((label) => {
        label.style.display = "none";
      });

      // 설명란 나타남
      explan.style.display = "block";

      // 클릭한 라벨에 맞춰 백그라운드 이미지 변경
      const labelClass = thisLabel.className;
      bg.style.background =
        "url(../../img/photo/view/maps/continent/background/" +
        labelClass +
        ".png) no-repeat center / cover";

      // 클릭한 라벨만 남음
      detailBtn.classList.add(labelClass);
      detailBtn.style.display = "block";

      mainWhich.textContent = thisLabel.textContent;
    });
  });
  const postWrap = document.querySelector(".post_wrap");

  const handleWheel = (event) => {
    event.preventDefault();
    postWrap.scrollLeft += event.deltaY; // Y축 이동량을 X축으로 이동
  };

  // 마우스가 요소 위에 있을 때만 스크롤 작동
  postWrap.addEventListener("mouseenter", () => {
    postWrap.addEventListener("wheel", handleWheel);
  });

  // 마우스가 요소를 떠날 때 스크롤 작동 중지
  postWrap.addEventListener("mouseleave", () => {
    postWrap.removeEventListener("wheel", handleWheel);
  });

  const radioButtons = document.querySelectorAll(
    '.detail_btns input[type="radio"]'
  );
  const subTitle = document.querySelector(".sub_title");
  const mapImg = document.querySelector(".map_img");

  // 대륙 클릭 후 라벨 이름 및 설명 텍스트 변경
  function setInitialValue() {
    // 체크된 라디오 버튼 찾기
    const checkedRadio = document.querySelector(
      '.detail_btns input[type="radio"]:checked'
    );

    if (checkedRadio) {
      const label = checkedRadio.nextElementSibling; // 해당 radio의 nextElementSibling인 label
      subTitle.textContent = label.textContent; // label의 텍스트로 sub_which의 텍스트 변경
      subWhich.textContent = label.textContent;
      // 기존 클래스 제거
      mapImg.classList.forEach((className) => {
        if (className !== "map_img") {
          // map_img 클래스는 유지
          mapImg.classList.remove(className);
        }
      });
      label.classList.forEach((className) => {
        if (className !== "yorn") {
          // map_img 클래스는 유지
          mapImg.classList.add(className);
        }
      });
    }
  }

  // 세부지도(map_img) 이미지 변경
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        const label = radio.nextElementSibling; // 해당 radio의 nextElementSibling인 label
        subTitle.textContent = label.textContent; // label의 텍스트로 sub_which의 텍스트 변경
        subWhich.textContent = label.textContent;
        // 기존 클래스 제거
        mapImg.classList.forEach((className) => {
          if (className !== "map_img") {
            // map_img 클래스는 유지
            mapImg.classList.remove(className);
            mapImg.classList.remove(className);
          }
        });
        label.classList.forEach((className) => {
          if (className !== "yorn") {
            // map_img 클래스는 유지
            mapImg.classList.add(className);
          }
        });
      }
    });
  });

  // 페이지 로드 시 초기값 설정
  setInitialValue();
}

/* 2-2-6. 서브페이지 - 커뮤니티(community) */
function community() {
  const communityList = document.querySelector(".left_nav .community");
  const noticeList = document.querySelector(".left_nav .notice");
  const selectForum = document.querySelector(".select #forum");
  const selectNotice = document.querySelector(".select #notice");
  const sortBy = document.querySelector(".sort_by");
  const mainBoard = document.querySelector(".main_board");
  const pagination = document.getElementById("pagination");
  const likesHeader = document.getElementById("likesHeader");
  const freeBoard = document.querySelector(".free_board");
  const tipBoard = document.querySelector(".tip_board");
  const promotionBoard = document.querySelector(".promotion_board");
  const noticeBoard = document.querySelector(".notice_board");
  const serviceBoard = document.querySelector(".service_board");
  const eventBoard = document.querySelector(".event_board");

  let currentMode = "forum"; // 초기 모드 설정
  let currentPage = 1; // 현재 페이지 번호 저장

  // 포스트 제목 및 내용
  const forumTitles = [
    "패치전까지 그림 그려드립니다~",
    "웃기고 귀여운거 있길래 가져와봤습니다",
    "로스트아크 더현대 팝업 만화",
    "로아 화보 촬영 찰칵 ㅇ.<",
    "이거하려고 필보간다...",
    "하멘 4관에서 일어난 일.jpg",
    "직장인으로서 지금 플탐이 제일 좋은데..",
    "모코코 도와주셔서 감사합니다!!",
    "로아가 다시 재밌어졌어ㅋㅋ",
    "오늘 점심메뉴 추천",
    "아니 근데 진짜 어려워요",
    "서포터 보석 세팅 봐주세요",
    "랏딜 너무 좋다~",
    "새벽에 엘릭서 잘못깎았다는 사람인데",
    "북미 베히모스 보는거 재밌다! 같이 볼사람?",
    "1590 창술 vs 1620 리퍼",
    "9/4 ~ 9/12 아브렐슈드 딜폿 비율",
    "6주년 아바타 언제 나오나ㅠㅠ",
    "닉네임1348",
    "이 아바타 이름이 뭔가요?",
  ];

  const forumNicknames = [
    "난치기먹물",
    "켈시온",
    "유자차",
    "문산",
    "TAk77",
    "무쎄요",
    "Ann",
    "Shin세리",
    "트렌드",
    "포즈머스",
    "anicka",
    "닉네임이모야",
    "도스터",
    "라쿠라쿠",
    "포로롱",
    "착한말이쁜말",
    "감자깎이",
    "오늘점심토마토",
    "닉네임1348",
    "초승별",
  ];

  const noticeTitles = [
    "LCM 운영정책 개정을 안내 드립니다.",
    "커스텀마이징 게시판에 새로운 카테고리가 추가됐습니다!",
    "추석 연휴 이벤트 공지",
    "게시판 첨부파일 이용 기간 변경 안내",
    "정보 시스템 업데이트 (8/1(목) 10:00 ~ 13:00)",
    "오늘의 LCM - 베스트 커마를 선택해주세요!",
    "정보 시스템 업데이트 (7/29(월) 10:00 ~ 13:00)",
    "알려진 이슈를 안내해드립니다. (7/17(수) 개정)",
    "정보 시스템 업데이트 (7/1(월) 10:00 ~ 13:00)",
    "썸머타임 수영복 커스텀마이징 대회를 개최합니다!",
    "LCM 유저 여러분들의 계정보호를 위해 안내드립니다.",
    "악성코드 감염 예방을 위한 보안 수칙 안내",
    "6/28(금) LCM 임시점검 완료 및 수정 사항 안내",
    "정보 시스템 업데이트 (6/10(월) 10:00 ~ 13:00)",
    "현충일 이벤트 안내",
    "정보 시스템 업데이트 (5/20(월) 10:00 ~ 13:00)",
    "가정의 달 기념 이벤트 안내",
    "정보 시스템 업데이트 (5/6(월) 10:00 ~ 13:00)",
    "불량 이용자 조치내역 안내",
    "개인정보처리방침 변경 안내",
  ];

  const noticeNicknames = Array(20).fill("LCM");

  // 모드에 따라 게시글 데이터를 업데이트
  function updatePosts(mode) {
    if (mode === "forum") {
      // 커뮤니티를 선택했을 경우
      posts = Array.from({ length: 20 }, (_, i) => ({
        number: 20 - i,
        title: forumTitles[i],
        user: forumNicknames[i],
        date: new Date(),
        views: Math.floor(Math.random() * 1000) + 1,
        likes: Math.floor(Math.random() * 1000) + 1,
        type: ["자유", "정보", "홍보"][Math.floor(Math.random() * 3)],
      }));
    } else if (mode === "notice") {
      // 공지사항을 선택했을 경우
      posts = Array.from({ length: 20 }, (_, i) => ({
        number: 20 - i,
        title: noticeTitles[i],
        user: noticeNicknames[i],
        date: new Date(),
        views: Math.floor(Math.random() * 1000) + 1,
        likes: Math.floor(Math.random() * 1000) + 1,
        type: ["공지", "이벤트", "서비스/기능"][Math.floor(Math.random() * 3)],
      }));
    }
  }

  // 포스트 날짜(오늘인 경우 시간만 그렇지 않을 경우 월/일표시)
  function formatDate(date) {
    return date.toDateString() === new Date().toDateString()
      ? date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      : `${date.getMonth() + 1}월 ${date.getDate()}일`;
  }

  // 포스트를 배열로 저장, 한번에 보여줄 포스트 개수 10개로 지정
  let posts = [];
  const postsPerPage = 10;
  const postTable = document.getElementById("postTable");

  function renderPosts() {
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;

    while (postTable.rows.length > 1) postTable.deleteRow(1);
    // 현재 페이지에 해당하는 게시글을 잘라서 보여줌
    posts.slice(start, end).forEach((post) => {
      const row = postTable.insertRow();
      row.innerHTML =
        currentMode === "forum"
          ? // 커뮤니티를 선택했을 경우 자식요소로 들어가는 내용
            `<td class="number">${post.number}</td><td class="type">${
              post.type
            }</td><td class="title">${post.title}</td><td class="user">${
              post.user
            }</td><td class="view">${formatDate(
              post.date
            )}</td><td class="view">${post.views}</td><td class="recode">${
              post.likes
            }</td>`
          : // 공지사항을 선택했을 경우 자식요소로 들어가는 내용
            `<td class="number">${post.number}</td><td class="type">${
              post.type
            }</td><td class="title">${post.title}</td><td class="user">${
              post.user
            }</td><td class="view">${formatDate(
              post.date
            )}</td><td class="view">${
              post.views
            }</td><td class="recode" style="display: none;">${post.likes}</td>`;
    });
  }

  let totalPages, filterBoard;

  // 포스트 페이지 및 좌우 넘기는 버튼 생성
  function renderPagination() {
    // 게시물 필터링
    if (filterBoard == "free") {
      posts = posts.filter((post) => post.type === "자유");
    } else if (filterBoard == "tip") {
      posts = posts.filter((post) => post.type === "정보");
    } else if (filterBoard == "promotion") {
      posts = posts.filter((post) => post.type === "홍보");
    } else if (filterBoard == "notice") {
      posts = posts.filter((post) => post.type === "공지");
    } else if (filterBoard == "service") {
      posts = posts.filter((post) => post.type === "서비스/기능");
    } else if (filterBoard == "event") {
      posts = posts.filter((post) => post.type === "이벤트");
    }
    totalPages = Math.ceil(posts.length / postsPerPage);
    pagination.innerHTML = "";

    const createArrow = (direction) => {
      const arrow = document.createElement("div");
      arrow.className = "line_arrow";
      arrow.onclick = () => {
        if (
          (direction === "left" && currentPage > 1) ||
          (direction === "right" && currentPage < totalPages)
        ) {
          currentPage += direction === "left" ? -1 : 1;
          renderPosts();
          updateActivePage();
        }
      };
      return arrow;
    };

    pagination.appendChild(createArrow("left"));
    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.innerText = i;
      li.onclick = () => {
        currentPage = i;
        renderPosts();
        updateActivePage();
        noticeColor();
      };
      pagination.appendChild(li);
    }
    pagination.appendChild(createArrow("right"));
  }

  // 클릭한 페이지 번호를 토글 ative를 활용하여 보여줌
  function updateActivePage() {
    document.querySelectorAll(".page_number li").forEach((item) => {
      item.classList.toggle("active", parseInt(item.innerText) === currentPage);
    });
  }

  // th 추천수 공지사항으로 넘어가면 삭제
  function toggleColumnVisibility() {
    likesHeader.style.display = currentMode === "forum" ? "table-cell" : "none";
  }

  // 현재 모드에 맞게 게시글을 업데이트하고, 페이지네이션 및 ui 요소를 다시 랜더링
  function updateUI() {
    updatePosts(currentMode); // 현재 모드에 맞는 포스트 업데이트
    totalPages = Math.ceil(posts.length / postsPerPage); // 총 페이지 수 업데이트
    renderPosts();
    renderPagination();
    updateActivePage(); // 페이지 활성화 업데이트
  }

  // 클릭 이벤트로 모드를 변경 및 UI 업데이트
  selectForum.addEventListener("click", function () {
    currentMode = "forum"; // 클릭 시 currentMode 업데이트
    selectForum.classList.add("click_first");
    selectNotice.classList.remove("click_second");
    communityList.style.display = "block";
    sortBy.style.display = "flex";
    noticeList.style.display = "none";
    mainBoard.style.marginTop = "0px";
    updateUI();
    toggleColumnVisibility();
  });
  // 커뮤니티 left_nav 클릭이벤트
  forumBoardEvent();
  function forumBoardEvent() {
    freeBoard.addEventListener("click", function () {
      setTimeout(() => {
        let textTypes = document.querySelectorAll(".type");
        textTypes.forEach((element) => {
          if (element.innerText === "자유" || element.innerText === "종류") {
            element.parentElement.style.display = "";
          } else {
            element.parentElement.style.display = "none";
          }
        });
      }, 100);
      filterBoard = "free";
      currentPage = 1; // 첫 페이지로 초기화
      updateUI();
    });

    tipBoard.addEventListener("click", function () {
      setTimeout(() => {
        let textTypes = document.querySelectorAll(".type");
        textTypes.forEach((element) => {
          if (element.innerText === "정보" || element.innerText === "종류") {
            element.parentElement.style.display = "";
          } else {
            element.parentElement.style.display = "none";
          }
        });
      }, 100);
      filterBoard = "tip";
      currentPage = 1; // 첫 페이지로 초기화
      updateUI();
    });

    promotionBoard.addEventListener("click", function () {
      setTimeout(() => {
        let textTypes = document.querySelectorAll(".type");
        textTypes.forEach((element) => {
          if (element.innerText === "홍보" || element.innerText === "종류") {
            element.parentElement.style.display = "";
          } else {
            element.parentElement.style.display = "none";
          }
        });
      }, 100);
      filterBoard = "promotion";
      currentPage = 1; // 첫 페이지로 초기화
      updateUI();
    });
  }

  selectNotice.addEventListener("click", function () {
    currentMode = "notice"; // 클릭 시 currentMode 업데이트
    selectForum.classList.remove("click_first");
    selectNotice.classList.add("click_second");
    noticeList.style.display = "block";
    communityList.style.display = "none";
    sortBy.style.display = "none";
    mainBoard.style.marginTop = "33px";
    updateUI();
    noticeColor();
    toggleColumnVisibility();
  });

  noticeBoardEvent();
  function noticeBoardEvent() {
    noticeBoard.addEventListener("click", function () {
      setTimeout(() => {
        let textTypes = document.querySelectorAll(".type");
        textTypes.forEach((element) => {
          if (element.innerText === "공지" || element.innerText === "종류") {
            element.parentElement.style.display = "";
          } else {
            element.parentElement.style.display = "none";
          }
        });
      }, 100);
      filterBoard = "notice";
      currentPage = 1; // 첫 페이지로 초기화
      updateUI();
      noticeColor();
    });

    serviceBoard.addEventListener("click", function () {
      setTimeout(() => {
        let textTypes = document.querySelectorAll(".type");
        textTypes.forEach((element) => {
          if (
            element.innerText === "서비스/기능" ||
            element.innerText === "종류"
          ) {
            element.parentElement.style.display = "";
          } else {
            element.parentElement.style.display = "none";
          }
        });
      }, 100);
      filterBoard = "service";
      currentPage = 1; // 첫 페이지로 초기화
      updateUI();
      toggleColumnVisibility();
      noticeColor();
    });

    eventBoard.addEventListener("click", function () {
      setTimeout(() => {
        let textTypes = document.querySelectorAll(".type");
        textTypes.forEach((element) => {
          if (element.innerText === "이벤트" || element.innerText === "종류") {
            element.parentElement.style.display = "";
          } else {
            element.parentElement.style.display = "none";
          }
        });
      }, 100);
      filterBoard = "event";
      currentPage = 1; // 첫 페이지로 초기화
      updateUI();
      toggleColumnVisibility();
      noticeColor();
    });
  }

  // 종류(type) 색상 바꾸기
  function noticeColor() {
    setTimeout(() => {
      let textTypes = document.querySelectorAll(".type");
      textTypes.forEach((element) => {
        if (element.innerText === "공지") {
          element.style.color = "#F13030";
        } else if (element.innerText === "종류") {
          element.style.color = "#111";
        } else if (
          element.innerText === "서비스/기능" ||
          element.innerText === "이벤트"
        ) {
          element.style.color = "#5CA3E4";
        } else {
          element.style.color = "#787878";
        }
      });
    }, 100);
  }
  document.querySelectorAll(".select li").forEach((tab) => {
    tab.onclick = () => {
      currentMode = tab.id;
      updateUI();
      document.querySelector(".select .active")?.classList.remove("active");
      tab.classList.add("active");
    };
  });
  // 초기 데이터 렌더링
  updateUI();
}
/* 2-2-7. 서브페이지 - 커스텀마이징 정보(customizing info) */
function customizingInfo() {
  // checkbox와 radio 버튼을 클릭시 checking 안 div 생성
  const jobRadioBtn = document.querySelectorAll("input[name='character']");
  const partsCheckBox = document.querySelectorAll('input[type="checkbox"]');
  const checking = document.querySelector(".checking");
  const job = document.querySelector(".job");
  const dummy = document.querySelector(".middel_part img");
  const avartarFrame = document.querySelectorAll(".avartar_frame");

  // radio 버튼 관련 기능
  radioBtn();
  function radioBtn() {
    let maleDummy = dummy.setAttribute(
      "src",
      "../../img/photo/customizing/customizing_info/avartar_m.png"
    );
    let femaleDummy = dummy.setAttribute(
      "src",
      "../../img/photo/customizing/customizing_info/avartar_f.png"
    );
    let specialistDummy = dummy.setAttribute(
      "src",
      "../../img/photo/customizing/customizing_info/avartar_sp.png"
    );

    // radio 버튼 클릭시 job 안의 텍스트 변경
    jobRadioBtn.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (radio.checked) {
          job.textContent = "#" + radio.nextElementSibling.textContent;

          let characterType;
          if (radio.value.includes("specialist")) {
            console.log("sp");
            specialistDummy;
            characterType = "캐릭터(여)";
          } else if (radio.value.includes("female")) {
            console.log("female");
            femaleDummy;
            characterType = "캐릭터(여)";
          } else if (radio.value.includes("male")) {
            console.log("male");
            maleDummy;
            characterType = "캐릭터(남)";
          }
          // 필터링된 frame 목록
          const filteredFrames = [];

          avartarFrame.forEach((frame) => {
            const jobData = frame.querySelector("img").getAttribute("data-job");
            const jobKeyword = frame
              .querySelector("img")
              .getAttribute("data-job-keyword");

            // 조건에 맞는 경우에만 display block, 나머지는 none
            if (
              jobData === characterType ||
              jobKeyword === radio.getAttribute("id")
            ) {
              frame.parentElement.style.display = "block";
              filteredFrames.push(frame); // 필터링된 frame 추가
            } else {
              frame.parentElement.style.display = "none";
            }
          });

          // 페이지 수 및 포스트 업데이트
          currentPage = 1; // 첫 페이지로 초기화
          totalPages = Math.ceil(filteredFrames.length / postsPerPage); // 총 페이지 수 업데이트
          console.log(totalPages);
          renderPosts(filteredFrames); // 필터링된 포스트 렌더링
          renderPagination(); // 페이지네이션 렌더링
          updateActivePage(); // active 페이지 업데이트
        }
      });
    });
  }

  // checkbox 버튼 관련 기능
  checkBoxBtn();
  function checkBoxBtn() {
    // checkbox 버튼 클릭시 div 생성, 삭제 기능 추가
    partsCheckBox.forEach((box) => {
      box.addEventListener("change", () => {
        if (box.checked) {
          // 체크 상태로 변했을 경우
          let partDiv = document.createElement("div");
          partDiv.classList.add("part");
          partDiv.innerText = "#" + box.value;
          partDiv.addEventListener("click", function () {
            this.parentNode.removeChild(this);
            box.checked = false;
          });
          checking.appendChild(partDiv);
        } else {
          // 체크가 해제됐을 경우
          const part = document.querySelectorAll(".part");
          for (let i = 0; i < part.length; i++) {
            if (part[i].textContent == "#" + box.value) {
              part[i].parentNode.removeChild(part[i]);
            }
          }
        }
      });
    });
  }

  // 이미지 제목 입력하기
  imgTitle();
  function imgTitle() {
    const avartarImg = document.querySelectorAll(".avartar_frame img");
    avartarImg.forEach((img) => {
      let job = img.getAttribute("data-job");
      let part = img.getAttribute("data-part");
      let place = img.getAttribute("data-place");
      let name = img.getAttribute("alt");
      let chidrenText = img.parentElement.nextElementSibling.children;
      chidrenText[0].textContent = job + " / " + part;
      chidrenText[1].textContent = name;
      chidrenText[2].textContent = Math.floor(Math.random() * 1000) + 1;
    });
  }

  const pagination = document.getElementById("pagination");
  const postTable = document.querySelector(".avartars_wrap");
  const articles = postTable.querySelectorAll("article"); // 모든 article 요소 선택
  let currentPage = 1; // 현재 페이지 번호 저장
  const postsPerPage = 16; // 한 페이지에 보여줄 포스트 개수

  // function renderPosts() {
  //   // 모든 article 요소를 숨김
  //   articles.forEach((article, index) => {
  //     article.style.display =
  //       Math.floor(index / postsPerPage) === currentPage - 1 ? "block" : "none";
  //   });
  // }

  // renderPosts 함수 수정
  function renderPosts(filteredFrames) {
    // 모든 article 요소를 숨김
    articles.forEach((article) => {
      article.style.display = "none"; // 기본적으로 숨김
    });

    // 필터링된 프레임에 따라 보여줄 포스트 설정
    filteredFrames.forEach((frame, index) => {
      if (Math.floor(index / postsPerPage) === currentPage - 1) {
        frame.parentElement.style.display = "block"; // 현재 페이지에 해당하는 프레임만 보이기
      }
    });
  }
  function renderPagination() {
    const totalPages = Math.ceil(articles.length / postsPerPage);
    pagination.innerHTML = ""; // 기존 페이지 번호 초기화

    const createArrow = (direction) => {
      const arrow = document.createElement("div");
      arrow.className = "line_arrow";
      arrow.innerText = direction === "left" ? "<" : ">";
      arrow.onclick = () => {
        if (
          (direction === "left" && currentPage > 1) ||
          (direction === "right" && currentPage < totalPages)
        ) {
          currentPage += direction === "left" ? -1 : 1;
          renderPosts();
          updateActivePage(totalPages);
        }
      };
      return arrow;
    };

    pagination.appendChild(createArrow("left")); // 좌측 화살표 추가

    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.innerText = i;
      li.onclick = () => {
        currentPage = i;
        renderPosts();
        updateActivePage(totalPages);
      };
      pagination.appendChild(li);
    }

    pagination.appendChild(createArrow("right")); // 우측 화살표 추가
  }

  function updateActivePage(totalPages) {
    const pageItems = document.querySelectorAll(".page_number li");
    pageItems.forEach((item, index) => {
      item.classList.toggle("active", index + 1 === currentPage);
    });
  }

  // 초기화
  renderPosts();
  renderPagination();
  updateActivePage();
}
// 2-3. 유저 페이지(user_page)
/* 2-3-1. 유저 페이지 초기화 */
function userPage() {
  // 유저 페이지 관련 코드
  /* 2-3-1. 유저페이지 - 로그인(login) */
  document.addEventListener("DOMContentLoaded", function () {
    const loginSelectItems = document.querySelectorAll(".login_select li");

    loginSelectItems.forEach(function (item) {
      item.addEventListener("click", function () {
        loginSelectFnc.call(this); // 현재 클릭된 요소를 this로 전달
      });
    });

    function loginSelectFnc() {
      const email = document.querySelector(".email");
      const loginForm = document.querySelector(".login_form");
      const snsLogin = document.querySelector(".sns_login");
      const oneTimePW = document.querySelector(".oneTimePW");

      if (this.classList.contains("emailId")) {
        // login_form을 보여주고 li css 변경
        email.style.borderWidth = "0px 1px 0px 0px";
        email.style.backgroundColor = "#fff";
        loginForm.style.display = "flex";
        snsLogin.style.display = "flex";
        oneTimePW.style.borderWidth = "0px 1px 1px 0px";
        oneTimePW.style.backgroundColor = "#fbfbfb";
      } else if (this.classList.contains("oneTimePW")) {
        // 일회용 번호 폼을 보여주고 li css 변경
        // 필요한 CSS 변경 코드를 여기에 추가하세요
      } else if (this.classList.contains("qrCode")) {
        // QR 코드 폼을 보여주고 li css 변경
        // 필요한 CSS 변경 코드를 여기에 추가하세요
      }
    }
  });
}

// 3. 페이지 로드 시 초기화 --------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  let pathName = window.location.pathname;

  // 현재 페이지에 따라 적절한 초기화 함수 호출
  if (pathName.includes("best_view.html")) {
    bestViewPage();
  } else if (pathName.includes("best_page.html")) {
    subScroll();
    bestPage();
    showPost();
  } else if (pathName.includes("user_page.html")) {
    userPage();
  } else if (
    pathName.includes("view_forum.html") ||
    pathName.includes("customizing_forum.html") ||
    pathName.includes("view_info.html") ||
    pathName.includes("community.html") ||
    pathName.includes("customizing_info.html")
  ) {
    subScroll();
    showPost();
    if (pathName.includes("view_info.html")) {
      viewInfo();
    } else if (pathName.includes("community.html")) {
      community();
    } else if (
      pathName.includes("view_forum.html") ||
      pathName.includes("customizing_forum.html")
    ) {
      viewForum();
    } else if (pathName.includes("customizing_info.html")) {
      customizingInfo();
    }
  } else {
    mainPage();
  }
});
