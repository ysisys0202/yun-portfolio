import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextEffect from "../effects/textEffect.js";

export const titleAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".section-title.bounce-text").forEach((text) => {
    const bouceText = new TextEffect(text);
    gsap.to(text, {
      scrollTrigger: {
        trigger: text,
        start: "top bottom",
        onEnter: () => {
          bouceText.bounce();
        },
      },
    });
  });
};
