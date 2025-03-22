import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const blogAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const blogCards = gsap.utils.toArray(".blog-card");

  gsap.fromTo(
    ".blog .fadein-item",
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
    blogCards,
    { opacity: 0, y: 10 },
    {
      trigger: ".blog-card",
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".blog-card",
        start: "top 80%",
      },
    }
  );
};
