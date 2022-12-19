window.addEventListener("scroll", () => {
  const navElement = document.querySelector("nav");
  const navLinks = document.querySelectorAll(".nav-link, .navbar-brand");
  // The queryselectorAll would collect the nodes before generated so a defer was required in the script tag
  if (document.documentElement.scrollTop > window.innerHeight) {
    navElement.classList.add("bg-white");
    navLinks.forEach((e) => {
      e.classList.remove("text-white");
      e.classList.add("text-black");
    });
  } else {
    navElement.classList.remove("bg-white");
    navLinks.forEach((e) => {
      e.classList.remove("text-black");
      e.classList.add("text-white");
    });
  }
});

document.addEventListener("click", () => {
  const sideLinks = document.querySelector(".listgroup");
});
