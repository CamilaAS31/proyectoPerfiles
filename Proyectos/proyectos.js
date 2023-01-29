const imagenContainer = document.getElementById("imagen-container");
const botonAnterior = document.getElementById("botonAnterior");
const botonSiguiente = document.getElementById("botonSiguiente");

botonAnterior.addEventListener("click", () => {
    imagenContainer.scrollLeft -= imagenContainer.clientWidth;
});

botonSiguiente.addEventListener("click", () => {
    imagenContainer.scrollLeft += imagenContainer.clientWidth;
});


imagenContainer.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        imagenContainer.scrollLeft += 150;
    } else {
        imagenContainer.scrollLeft -= 150;
    }
});
