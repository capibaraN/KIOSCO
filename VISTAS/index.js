// Función para ir hacia atrás en la historia del navegador
function goBack() {
  window.history.back();
}
// Función para ir hacia adelante en la historia del navegador
function goForward() {
  window.history.forward();
}
// Habilitar o deshabilitar los botones según la disponibilidad de las páginas
function updateButtons() {
  document.getElementById("backButton").disabled = !window.history.back;
  document.getElementById("forwardButton").disabled = !window.history.forward;
}
// Agregar eventos a los botones
document.getElementById("backButton").addEventListener("click", goBack);
document.getElementById("forwardButton").addEventListener("click", goForward);

// Actualizar el estado inicial de los botones
updateButtons();

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})