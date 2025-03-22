import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const endingAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".ending.fadein-item",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".ending",
        start: "top 60%",
      },
    }
  );
};
