import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const skillsAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const skillDescriptions = gsap.utils.toArray(".description-item");

  gsap.fromTo(
    ".badge-area",
    { opacity: 0, y: 10 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".badge-area",
        start: "top 80%",
      },
    }
  );

  gsap.fromTo(
    skillDescriptions,
    { opacity: 0, y: 10 },
    {
      trigger: ".description-item",
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".description-item",
        start: "top 80%",
      },
    }
  );
};
