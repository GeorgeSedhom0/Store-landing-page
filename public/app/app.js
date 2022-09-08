const scrollUp = document.querySelector("#scrollTopCont");
const copyIcons = document.querySelectorAll(".cloneMe");
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollUp.style.display = "grid";
  } else {
    scrollUp.style.display = "none";
  }
});
const copyToClipboard = (text) => {
  const elem = document.createElement("textarea");
  elem.value = text;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
};
const textCopy = (text, e) => {
  copyToClipboard(text);
  const copied = document.createElement("span");
  copied.innerText = "Copied";
  copied.classList.add("copy");
  copied.style.top = `${e.clientY - 20}px`;
  copied.style.left = `${e.clientX}px`;
  document.body.appendChild(copied);
  setTimeout(() => {
    copied.classList.add("copied");
  }, 0);
  setTimeout(() => {
    copied.remove();
  }, 1000);
};
copyIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    const text = icon.innerText;
    textCopy(text, e);
  });
});
for (let i = 0; i < 5; i++) {
  const bgDesign = document.createElement("div");
  bgDesign.classList.add("bgDesign");
  bgDesign.style.top = `${Math.random() * 70}%`;
  bgDesign.style.left = `${Math.random() * 70}%`;
  document.body.appendChild(bgDesign);
}
const bgDesign = document.querySelectorAll(".bgDesign");
const bgAnimation = () => {
  bgDesign.forEach((bg) => {
    bg.style.top = `${Math.random() * 200}%`;
    bg.style.left = `${Math.random() * 200}%`;
  });
};
setTimeout(() => {
  bgAnimation();
}, 100);
setInterval(() => {
  bgAnimation();
}, 10000);

window.statusbar.visible = !window.statusbar.visible;
