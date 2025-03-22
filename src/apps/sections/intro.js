import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextEffect from "../effects/textEffect.js";

export const introAnimation = () => {
  const intro = document.querySelector("section.intro");
  const introTitle = new TextEffect(intro.querySelector(".intro-title"));

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
        introTitle.bounce();
        document.body.classList.add("no-scroll");
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
