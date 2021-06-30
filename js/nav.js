const hamburger = document.querySelector(".burger");
const navigationMenu = document.querySelector("nav ul");
let menuOpen = false;

hamburger.addEventListener("click", () => {
  if(!menuOpen) {
    hamburger.classList.toggle("show");
    navigationMenu.classList.add("show")
  } else {
    hamburger.classList.remove("show");
    navigationMenu.classList.remove("show")
  }
  menuOpen = !menuOpen;
})