// 마우스 커서 스타일
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
});

// 헤더 - 알림
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
  heartButton.style.backgroundImage = "url('../img/icon/Result.png')";
  heartButton.style.backgroundPosition = "0px -1705px";
  heartButton.style.filter = "brightness(0)";
  heartButton.style.position = "absolute";
  heartButton.style.zIndex = "500";
}

function handleMouseLeave() {
  heartContent.querySelector("ul").style.height = "0px";
  heartContent.querySelector("ul").style.opacity = "0";
  heartButton.style.backgroundImage = "url('../img/icon/Result.png')";
  heartButton.style.backgroundPosition = "0px -1687px";
  heartButton.style.filter = "brightness(1)";
}

// 헤더 - 우측 메뉴
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
