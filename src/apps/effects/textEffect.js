export default class TextEffect {
  constructor(element) {
    this.element = element;
    this.text = this.element.innerHTML.trim();
    this.element.innerHTML = "";
    this.splitText();
  }

  splitText() {
    const regex = /(<br\s*\/?>|.)/g;
    const textArray = this.text.match(regex).map((char) => {
      return char === " " ? "&nbsp;" : char;
    });
    textArray.forEach((char, index) => {
      if (char.startsWith("<")) {
        this.element.innerHTML += char;
      } else {
        const span = document.createElement("span");
        span.classList.add("char");
        span.style.animationDelay = `${index * 0.05}s`;
        span.innerHTML = char;
        this.element.appendChild(span);
      }
    });
  }

  bounce() {
    this.element.classList.add("bounce");
  }
  disableBounce() {
    this.element.classList.remove("bounce");
  }
}
