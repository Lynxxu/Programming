function changeNav() {
  const bodyElement = document.querySelector("body");
  const navElement = document.querySelector("nav");
  this.scrollY > 300
    ? (navElement.style.opacity = 1)
    : (navElement.style.opacity = 0);
}

window.addEventListener("scroll", changeNav, true);
