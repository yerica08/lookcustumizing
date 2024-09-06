/*
  ---- 목차 ----

  1. 기본 스타일
    1-1. 마우스 커서 스타일
    1-2. header - 알림
    1-3. header - 메뉴

  2. 페이지 스타일
    2-1. 메인 페이지(index)
      2-1-1. 메인페이지 스크롤
      2-1-2. 페이지 전환
      2-1-3. 메인페이지 베스트 뷰(best_view)
    2-2. 서브 페이지(sub_page)
      2-2-1. 베스트 페이지(best_page)
    2-3. 유저 페이지(user_page)
      2-3-1. 로그인 페이지(login)
*/

// 1. 기본스타일

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

// 메뉴 마우스 커서
const menuContent = document.querySelector(".menu_content");
menuContent.addEventListener("mousemove", function (event) {
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

// 2. 페이지 스타일

// main.js

// 공통 초기화 함수
function initCommon() {
  // 모든 페이지에서 공통으로 사용할 기능
}

// 메인 페이지 초기화
function mainPage() {
  console.log("hi");
  const wrapper = document.querySelector(".wrapper");
  wrapper.style.opacity = "1"; // fadeIn 효과를 위해 opacity 설정
  const openBox = document.querySelector(".open_box");
  const boxes = openBox.children;
  let isElseExecuted = false; // else 문이 실행되었는지 확인하는 변수
  const view = document.querySelector(".view");
  const fashion = document.querySelector(".fashion");
  const lcm_sns = document.querySelector(".lcm_sns");
  const banner = document.querySelector(".banner");
  const footer = document.querySelector("footer");

  // 메인페이지 스크롤
  document
    .querySelector(".main_visual")
    .addEventListener("wheel", function (event) {
      event.preventDefault();
      const scrollAmount = event.deltaY;

      if (scrollAmount > 0) {
        // 스크롤을 내릴 때
        window.scrollTo({ top: view.offsetTop, behavior: "smooth" });
      } else {
        // 스크롤 올릴 때
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });

  // 배경 스크롤
  view.addEventListener("wheel", function (event) {
    event.preventDefault();
    const scrollAmount = event.deltaY;

    if (scrollAmount > 0) {
      if (isElseExecuted) {
        window.scrollTo({ top: fashion.offsetTop, behavior: "smooth" });
        isElseExecuted = false; // 다음 스크롤을 위해 초기화
      } else {
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
          isElseExecuted = true;

          // 모든 diamond 요소의 opacity를 1로 설정
          const diamonds = document.querySelectorAll(".view_box .diamond");
          diamonds.forEach((diamond) => {
            diamond.style.opacity = "1"; // 모든 diamond의 opacity를 1로 설정
            diamond.style.transition = "0.5s";
          });
        }, 1000);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      isElseExecuted = false; // 다음 스크롤을 위해 초기화

      // 상태 초기화
      openBox.style.opacity = "1";
      openBox.style.zIndex = "50";

      // 첫 번째 박스 원래 위치로
      boxes[0].style.transform = "translateX(0)";
      boxes[0].style.transition = "transform 0s";

      // 두 번째 박스 원래 위치로
      boxes[1].style.transform = "translateX(0)";
      boxes[1].style.transition = "transform 0s";
      viewText.style.opacity = "1";
      viewText.style.zIndex = "100";
      // 모든 diamond 요소의 opacity를 초기화
      const diamonds = document.querySelectorAll(".view_box .diamond");
      diamonds.forEach((diamond) => {
        diamond.style.opacity = "0"; // 모든 diamond의 opacity를 0으로 설정
        diamond.style.transition = "0s";
      });
    }
  });

  // 패션 스크롤
  fashion.addEventListener("wheel", function (event) {
    event.preventDefault();
    const scrollAmount = event.deltaY;

    if (scrollAmount > 0) {
      window.scrollTo({ top: lcm_sns.offsetTop, behavior: "smooth" });
    } else {
      window.scrollTo({ top: view.offsetTop, behavior: "smooth" });
    }
  });

  // sns 스크롤
  let sns; // 푸터 구경하러 갔을 때 lcm_sns에서 마우스 휠을 올렸을 경우를 위한 변수
  lcm_sns.addEventListener("wheel", function (event) {
    event.preventDefault();
    const scrollAmount = event.deltaY;
    if (scrollAmount > 0) {
      window.scrollTo({ top: banner.offsetTop, behavior: "smooth" });
      sns = true;
    } else {
      if (sns) {
        window.scrollTo({ top: lcm_sns.offsetTop, behavior: "smooth" });
        sns = false;
      } else {
        window.scrollTo({ top: fashion.offsetTop, behavior: "smooth" });
      }
    }
  });

  // 이벤트 & 푸터 스크롤
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

  // 페이지 전환
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
          document.querySelector(".circle").style.backgroundColor = "#d7d7d7";
          document.querySelector(".page1").style.backgroundColor = "#fff";
          document.querySelector(".state > div").style.height = "0%";
          break;
        case 2:
          newImageSrc = "./img/photo/main_visual/main_people02.jpg";
          mainH3.textContent = "dffsd";
          document.querySelector(".circle").style.backgroundColor = "#fff";
          document.querySelector(".page3").style.backgroundColor = "#d7d7d7";
          document.querySelector(".state > div").style.height = "50%";
          break;
        case 3:
          newImageSrc = "./img/photo/main_visual/main_people03.jpg";
          document.querySelector(".circle").style.backgroundColor = "#fff";
          document.querySelector(".state > div").style.height = "100%";
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
function bestViewPage() {
  /* 2-1-3. 메인페이지 베스트 뷰(best_view) */
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
  console.log(setNumber);
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
    console.log(next);
    if (next == 0) {
      state.style.width = "0%";
    } else if (next == 1) {
      document.querySelector(".page2").style.backgroundColor = "#fff";
      state.style.width = "25%";
    }
  }
}

// 2-2. 서브 페이지
/* 스크롤따라 보여주기 */
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
    { el: select[0], delay: "3s" },
    { el: bestImg[0], delay: "4s" },
  ];
  const normalPageElements = [
    { el: scrollTexts[0], delay: "2s" },
    { el: select[0], delay: "3s" },
    { el: contentsWrap, delay: "4s" },
    { el: event[1], delay: "5s" },
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

/* 2-2-1. 서브페이지 - 베스트 페이지(best_page) */
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

// post 내용 보여주고 숨기기
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

/* 2-2-2. 서브페이지 - 뷰 포럼(view_forum) */
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
// 유저 페이지 초기화
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

// 페이지 로드 시 초기화
document.addEventListener("DOMContentLoaded", function () {
  initCommon(); // 공통 기능 초기화
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
  } else if (pathName.includes("view_forum.html")) {
    subScroll();
    viewForum();
    showPost();
  } else {
    mainPage();
  }
});