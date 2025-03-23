import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const endingAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("body", {
    scrollTrigger: {
      trigger: ".ending",
      start: "top 60%",
      end: "bottom center",
      onEnter: () => {
        document.body.classList.add("bg-blue");
      },
      onLeave: () => {
        document.body.classList.remove("bg-blue");
      },
      onEnterBack: () => {
        document.body.classList.add("bg-blue");
      },
      onLeaveBack: () => {
        document.body.classList.remove("bg-blue");
      },
    },
  });

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
