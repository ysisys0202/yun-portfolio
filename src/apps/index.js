import { debounce } from "./util/debounce.js";
import { titleAnimation } from "./sections/common.js";
import { introAnimation } from "./sections/intro.js";
import { aboutAnimation } from "./sections/about.js";
import { skillsAnimation } from "./sections/skills.js";
import { projectsAnimation } from "./sections/projects.js";
import { blogAnimation } from "./sections/blog.js";
import { endingAnimation } from "./sections/ending.js";
import { routeAnimation } from "./sections/route.js";

window.addEventListener("DOMContentLoaded", () => {
  window.history.scrollRestoration = "manual";

  introAnimation();
  titleAnimation();
  aboutAnimation();
  skillsAnimation();
  projectsAnimation();
  blogAnimation();
  endingAnimation();
  routeAnimation();
});

window.addEventListener(
  "resize",
  debounce(() => {
    introAnimation();
  }, 200)
);
