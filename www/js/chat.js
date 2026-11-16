document.addEventListener(
    "DOMContentLoaded",
    iniciarChat
);

function iniciarChat() {

    configurarEventos();
    cargarContactos();

    document
    .getElementById("btnContactos")
    .addEventListener(
        "click",
        mostrarContactos
    );

document
    .getElementById("btnCerrarContactos")
    .addEventListener(
        "click",
        cerrarContactos
    );
}

function configurarEventos() {

    const btnVolver =
        document.getElementById("btnVolver");

    if(btnVolver){
        btnVolver.addEventListener(
            "click",
            volverInicio
        );
    }

    const btnEnviar =
        document.getElementById("btnEnviar");

    if(btnEnviar){
        btnEnviar.addEventListener(
            "click",
            enviarMensaje
        );
    }

    const btnContactos =
        document.getElementById("btnContactos");

    if(btnContactos){
        btnContactos.addEventListener(
            "click",
            mostrarContactos
        );
    }

    const archivo =
        document.getElementById("archivo");

    if(archivo){
        archivo.addEventListener(
            "change",
            adjuntarArchivo
        );
    }
}

/* Función para volver a la pantalla principal */
function volverInicio() {

    window.location.assign("index.html");

}

/* Función para enviar un mensaje */
function enviarMensaje() {

    const input =
        document.getElementById("mensaje");

    const texto =
        input.value.trim();

    if(texto === ""){
        return;
    }

    agregarMensaje(
        texto,
        "💬"
    );

    input.value = "";
}

/* Función para mostrar la lista de contactos */
function agregarMensaje(texto, icono) {

    const lista =
        document.getElementById("listaMensajes");

    const item =
        document.createElement("li");

    item.innerHTML =
        `${icono} ${texto}`;

    lista.appendChild(item);
}

let contactos = [
    "Ana Torres",
    "Carlos Díaz",
    "María López",
    "Pedro González"
];

/* Función para cargar la lista de contactos */
/*function mostrarContactos(){

    const panel =
        document.getElementById("panelContactos");

    panel.classList.remove("oculto");

    actualizarListaContactos();
}

function cerrarContactos(){

    document
        .getElementById("panelContactos")
        .classList.add("oculto");
}*/

/* Función para agregar contactos */
function cargarContactos() {

    const lista =
        document.getElementById("listaContactos");

    lista.innerHTML = "";

    if(contactos.length === 0){

        const item =
            document.createElement("li");

        item.textContent =
            "Sin contactos";

        lista.appendChild(item);

        return;
    }

    contactos.forEach(contacto => {

        const item =
            document.createElement("li");

        item.textContent = contacto;

        lista.appendChild(item);

    });

}

function actualizarListaContactos(){

    const lista =
        document.getElementById("listaContactos");

    lista.innerHTML = "";

    if(contactos.length === 0){

        const item =
            document.createElement("li");

        item.textContent =
            "Sin contactos";

        lista.appendChild(item);

        return;
    }

    contactos.forEach(contacto => {

        const item =
            document.createElement("li");

        item.textContent = contacto;

        lista.appendChild(item);

    });

}