import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const aboutAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".about .fadein-item").forEach((fadeinItem) => {
    gsap.fromTo(
      fadeinItem,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        scrollTrigger: {
          trigger: fadeinItem,
          start: "top 80%",
        },
      }
    );
  });
};
