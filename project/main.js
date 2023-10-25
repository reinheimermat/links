// Import our custom CSS
import "./src/scss/styles.scss";

const img = document.getElementById("image");
const inputCheck = document.querySelector("#dark-mode");
const body = document.querySelector("body");

inputCheck.addEventListener("click", (_) => {
  const modo = inputCheck.checked ? "dark" : "light";
  body.setAttribute("data-bs-theme", modo);
  body.classList.toggle("dark");

  body.classList.contains("dark")
    ? img.setAttribute("src", "./assets/logo-dark.png")
    : img.setAttribute("src", "https://github.com/reinheimermat.png");
});
