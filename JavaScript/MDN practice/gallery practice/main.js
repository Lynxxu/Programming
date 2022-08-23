const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const galleryFiles = [
  "pic1.png",
  "pic2.png",
  "pic3.png",
  "pic4.png",
  "pic5.png",
];

/* Declaring the alternative text for each image file */
const alts = [
  "me dating noelle at stone gate",
  "me dating noelle at iron tounge Tian",
  "me helping noeele become a Favonius knight",
  "me dating noelle at mondsdat city",
  "me dating noelle at the sign of monsdtat hero",
];
/* Looping through images */
ctn = 0;
for (image of galleryFiles) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${image}`);
  newImage.setAttribute("alt", alts[ctn]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
  ctn += 1;
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", (e) => {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
