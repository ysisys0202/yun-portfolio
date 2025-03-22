import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const routeAnimation = () => {
  const airplane = document.querySelector(".airplane");
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(airplane, {
    scrollTrigger: {
      trigger: "main",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const isScrollDown = self.direction === 1;
        const offsetDistance = gsap.utils.mapRange(0, 1, 0, 100, progress);

        airplane.style.offsetDistance = `${offsetDistance}%`;

        if (isScrollDown) {
          airplane.classList.remove("is-up");
        } else {
          airplane.classList.add("is-up");
        }
      },
    },
  });
};
