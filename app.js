const btnMenu = document.querySelector("#btn");
const nav = document.querySelector("nav");

btnMenu.addEventListener("click", () => {
	btnMenu.classList.toggle("fa-times");
	nav.classList.toggle("nav-menu");
});
