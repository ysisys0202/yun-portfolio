import { gsap } from "gsap";

export const projectsAnimation = () => {
  gsap.to("body", {
    scrollTrigger: {
      trigger: ".projects",
      start: "top 80%",
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

  gsap.utils.toArray(".project-box").forEach((projectBox) => {
    gsap.to(
      projectBox,

      {
        scrollTrigger: {
          trigger: projectBox,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            let scale;
            let opacity;

            if (progress < 0.2) {
              scale = gsap.utils.mapRange(0, 0.2, 0.8, 1, progress);
              opacity = gsap.utils.mapRange(0, 0.2, 0.6, 1, progress);
            } else if (progress > 0.7) {
              scale = gsap.utils.mapRange(0.7, 1, 1, 0.8, progress);
              opacity = gsap.utils.mapRange(0.7, 1, 1, 0.6, progress);
            } else {
              scale = 1;
              opacity = 1;
            }

            gsap.to(projectBox, {
              scale,
            });

            gsap.to(projectBox.querySelector(".project-box-content"), {
              opacity,
            });
          },
        },
      }
    );
  });
};
