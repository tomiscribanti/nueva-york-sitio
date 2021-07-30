const menu          = document.querySelector(".menu");
const abrirMenuBtn  = document.querySelector(".abrir-menu");
const cerrarMenuBtn = document.querySelector(".cerrar-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}
abrirMenuBtn.addEventListener("click", toggleMenu);
cerrarMenuBtn.addEventListener("click", toggleMenu);
