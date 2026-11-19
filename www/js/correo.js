document.addEventListener(
    "DOMContentLoaded",
    iniciarCorreo
);

function iniciarCorreo(){

    const btnEnviar =
        document.getElementById(
            "btnEnviarCorreo"
        );

    const btnVolver =
        document.getElementById(
            "btnVolver"
        );

    if(btnEnviar){

        btnEnviar.addEventListener(
            "click",
            enviarCorreo
        );

    }

    if(btnVolver){

        btnVolver.addEventListener(
            "click",
            volverInicio
        );

    }

    cargarCorreos();
}

function enviarCorreo(){

    const destinatario =
        document.getElementById(
            "destinatario"
        ).value.trim();

    const asunto =
        document.getElementById(
            "asunto"
        ).value.trim();

    const mensaje =
        document.getElementById(
            "mensajeCorreo"
        ).value.trim();

    if(
        destinatario === "" ||
        asunto === "" ||
        mensaje === ""
    ){

        alert(
            "Complete todos los campos"
        );

        return;
    }

    const correo = {

        destinatario,
        asunto,
        mensaje

    };

    mostrarCorreo(correo);

    guardarCorreo(correo);

    limpiarFormulario();
}

function mostrarCorreo(correo){

    const lista =
        document.getElementById(
            "listaCorreos"
        );

    const item =
        document.createElement("li");

    item.innerHTML = `
        <strong>Para:</strong> ${correo.destinatario}<br>
        <strong>Asunto:</strong> ${correo.asunto}<br>
        <strong>Mensaje:</strong> ${correo.mensaje}
    `;

    lista.appendChild(item);
}

function guardarCorreo(correo){

    const correos =
        JSON.parse(
            localStorage.getItem(
                "correos"
            )
        ) || [];

    correos.push(correo);

    localStorage.setItem(
        "correos",
        JSON.stringify(correos)
    );
}

function cargarCorreos(){

    const correos =
        JSON.parse(
            localStorage.getItem(
                "correos"
            )
        ) || [];

    correos.forEach(correo => {

        mostrarCorreo(correo);

    });

}

function limpiarFormulario(){

    document.getElementById(
        "destinatario"
    ).value = "";

    document.getElementById(
        "asunto"
    ).value = "";

    document.getElementById(
        "mensajeCorreo"
    ).value = "";
}

function volverInicio(){

    window.location.assign(
        "index.html"
    );
}