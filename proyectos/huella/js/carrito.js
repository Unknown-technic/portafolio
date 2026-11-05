// suma productos al contador del carrito (no hay backend, solo es visual)

// el numero que se ve junto al icono del carrito
var contador = document.querySelector(".carrito span");

// localStorage guarda el numero en el navegador para que no se pierda al cambiar de pagina
var total = Number(localStorage.getItem("carrito")) || 0;
contador.textContent = total;

// todos los botones de "Añadir al carrito" de la pagina
var botones = document.querySelectorAll(".boton-carrito");

for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function () {
    total = total + 1;
    contador.textContent = total;
    localStorage.setItem("carrito", total);

    // cambia el boton para que se note que si se agrego
    this.textContent = "Agregado al carrito";
    this.classList.add("agregado");
  });
}
