import TextEffect from "./textEffect.js";

const intro = document.querySelector(".intro");
const introTitle = new TextEffect(intro.querySelector(".intro-title"));

const introTitleChars = document.querySelectorAll(".intro-title .char");
const lastIntroTitleChars = introTitleChars[introTitleChars.length - 1];

window.addEventListener("load", () => {
  introTitle.bounce();
});

lastIntroTitleChars.addEventListener("animationend", () => {
  intro.classList.add("is-loaded");
});
