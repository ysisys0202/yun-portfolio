import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextEffect from "../effects/textEffect.js";

const route = document.querySelector(".route");

const resetAnimation = () => {
  gsap.killTweensOf(".intro");
  gsap.killTweensOf(".intro-header");
  gsap.killTweensOf(".intro-body");
  gsap.killTweensOf(".intro-description");
};

const makeTextEffectTitle = () => {
  let introTitle;
  const intro = document.querySelector("section.intro");

  return () => {
    if (!introTitle) {
      introTitle = new TextEffect(intro.querySelector(".intro-title"));
    }

    return introTitle;
  };
};

const initTextEffectTitle = makeTextEffectTitle();

const introMobileAnimation = () => {
  const introTitle = initTextEffectTitle();

  gsap.registerPlugin(ScrollTrigger);

  const introTimeline = gsap.timeline();

  introTimeline
    .to(".intro", {
      duration: 2.6,
      onStart: () => {
        introTitle.disableBounce();
        route.classList.add("is-hide");
        setTimeout(() => {
          introTitle.bounce();
        });
      },
    })
    .fromTo(
      ".intro-description",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    )
    .fromTo(
      ".intro-body",
      { y: 20, opacity: 0 },
      {
        opacity: 1,
        ease: "power1.inOut",
        onComplete: () => {
          route.classList.remove("is-hide");
        },
      }
    );
};

const introDesktopAnimation = () => {
  const introTitle = initTextEffectTitle();

  gsap.registerPlugin(ScrollTrigger);

  const introTimeline = gsap.timeline();

  const introScrollTriggerOptions = {
    trigger: ".intro",
    start: "top",
    end: "bottom",
    scrub: true,
  };

  introTimeline
    .to(".intro", {
      duration: 2.6,
      onStart: () => {
        introTitle.disableBounce();
        setTimeout(() => {
          introTitle.bounce();
        });
        route.classList.add("is-hide");
        // document.body.classList.add("no-scroll");
      },
    })
    .fromTo(
      ".intro-header",
      { x: "50%" },
      { x: 0, ease: "power1.inOut" },
      "+=0"
    )
    .fromTo(
      ".intro-body",
      { x: "100%" },
      { x: 0, opacity: 1, ease: "power1.inOut" },
      "<"
    )
    .fromTo(
      ".intro-description",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        onComplete: () => {
          route.classList.remove("is-hide");
          document.body.classList.remove("no-scroll");
        },
      }
    )
    .add(() => {
      gsap.fromTo(
        ".intro-header",
        { x: "0", y: "0px", rotate: 0 },
        {
          x: -200,
          y: -500,
          rotate: -20,
          scrollTrigger: introScrollTriggerOptions,
        }
      );

      gsap.fromTo(
        ".intro-body",
        { x: "0px", y: "0px", rotate: 0 },
        {
          x: 200,
          y: -500,
          rotate: 20,
          scrollTrigger: introScrollTriggerOptions,
        }
      );
    });
};

export const introAnimation = () => {
  resetAnimation();

  if (window.innerWidth < 1080) {
    introMobileAnimation();
  } else {
    introDesktopAnimation();
  }
};
