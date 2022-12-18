function changeNav() {
  const bodyElement = document.querySelector("body");
  const navElement = document.querySelector("nav");
  const navList = document.getElementById("#nav-links");
  this.scrollY > 500
    ? navElement.classList.add("bg-dark")
    : navElement.classList.remove("bg-dark");
}

window.addEventListener("scroll", changeNav, true);
