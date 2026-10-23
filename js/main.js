/* ==========================================================
   Acopio | Comportamiento de la página
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const formBuscador = document.querySelector('.buscador');
  const inputBuscador = formBuscador.querySelector('input');
  const tarjetas = document.querySelectorAll('.card');

  // Filtra las tarjetas de producto según el texto escrito
  function filtrarProductos() {
    const texto = inputBuscador.value.trim().toLowerCase();

    tarjetas.forEach((tarjeta) => {
      const contenido = tarjeta.textContent.toLowerCase();
      tarjeta.style.display = contenido.includes(texto) ? '' : 'none';
    });
  }

  // Evita que el formulario recargue la página (antes estaba como onsubmit en el HTML)
  formBuscador.addEventListener('submit', (evento) => {
    evento.preventDefault();
    filtrarProductos();
  });

  // Filtra mientras se escribe
  inputBuscador.addEventListener('input', filtrarProductos);
});
