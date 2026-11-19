document.addEventListener("DOMContentLoaded", iniciarAplicacion);

function iniciarAplicacion() {
  document.getElementById("btnChat").addEventListener("click", () => {
    window.location.assign("chat.html");
  });

  document.getElementById("btnReuniones").addEventListener("click", () => {
    window.location.assign("reuniones.html");
  });

  document.getElementById("btnCorreo").addEventListener("click", () => {
    window.location.assign("correo.html");
  });

  document.getElementById("btnSensores").addEventListener("click", () => {
    window.location.assign("pages/ambiente.html");
  });

}

function ocultarTodo() {
  document
    .querySelectorAll(".pantalla")
    .forEach((pantalla) => pantalla.classList.add("oculto"));
}

function mostrarChat() {
  ocultarTodo();

  document.getElementById("vistaChat").classList.remove("oculto");
}

function mostrarReuniones() {
  ocultarTodo();

  document.getElementById("vistaReuniones").classList.remove("oculto");
}

function mostrarCorreo() {
  ocultarTodo();

  document.getElementById("vistaCorreo").classList.remove("oculto");
}

function mostrarSensores() {
  ocultarTodo();

  document.getElementById("vistaSensores").classList.remove("oculto");
}
