// 이미지 세트 정의
const imageSets = {
  1: [
    "../../img/photo/view/sub_view/fief/fief_1.jpg",
    "../../img/photo/view/sub_view/fief/fief_2.jpg",
    "../../img/photo/view/sub_view/fief/fief_3.jpg",
    "../../img/photo/view/sub_view/fief/fief_4.jpg",
    "../../img/photo/view/sub_view/fief/fief_5.jpg",
  ],
  2: [
    "../../img/photo/view/sub_view/continent/continent_1.jpg",
    "../../img/photo/view/sub_view/continent/continent_2.jpg",
    "../../img/photo/view/sub_view/continent/continent_3.jpg",
    "../../img/photo/view/sub_view/continent/continent_4.jpg",
    "../../img/photo/view/sub_view/continent/continent_5.jpg",
  ],
  3: [
    "../../img/photo/view/sub_view/dongeon/dongeon_1.jpeg",
    "../../img/photo/view/sub_view/dongeon/dongeon_2.jpg",
    "../../img/photo/view/sub_view/dongeon/dongeon_3.jpeg",
    "../../img/photo/view/sub_view/dongeon/dongeon_4.jpg",
    "../../img/photo/view/sub_view/dongeon/dongeon_5.jpg",
  ],
  4: [
    "../../img/photo/view/sub_view/island/island_1.jpg",
    "../../img/photo/view/sub_view/island/island_2.jpg",
    "../../img/photo/view/sub_view/island/island_3.jpg",
    "../../img/photo/view/sub_view/island/island_4.jpg",
    "../../img/photo/view/sub_view/island/island_5.jpg",
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
} /*else {
  imageContainer.innerHTML = "<p>유효하지 않은 세트입니다.</p>";
}*/
//웹페이지에 있는 모든 섹션(부분)을 찾아서 저장
const sections = document.querySelectorAll(".view_content");
// 배경 이미지들을 찾아서 저장
const images = document.querySelectorAll(".bg");
// 각 섹션의 제목들을 찾아서 저장
const headings = gsap.utils.toArray(".content_title");
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
