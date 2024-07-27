const menuButton = document.querySelector("#nav-toggle");
const MenuBar = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  MenuBar.classList.toggle("show");
});
