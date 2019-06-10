const container = document.querySelector(".container");
const nav = document.querySelector("nav");

container.addEventListener("click", () => {
  container.classList.toggle("active");
  if (container.classList.contains("active")) {
    nav.classList.add("visible");
  } else {
    nav.classList.remove("visible");
  }
})