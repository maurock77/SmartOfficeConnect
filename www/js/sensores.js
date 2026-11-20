document.addEventListener(
    "DOMContentLoaded",
    iniciarSensores
);

function iniciarSensores(){

    const btnActualizar =
        document.getElementById(
            "btnActualizar"
        );

    const btnVolver =
        document.getElementById(
            "btnVolver"
        );

    if(btnActualizar){

        btnActualizar.addEventListener(
            "click",
            actualizarSensores
        );

    }

    if(btnVolver){

        btnVolver.addEventListener(
            "click",
            volverInicio
        );

    }

    actualizarSensores();
}

/* actualizar sensores */
function actualizarSensores(){

    const temperatura =
        generarNumero(18, 30);

    const humedad =
        generarNumero(40, 80);

    const luminosidad =
        generarNumero(200, 1000);

    document.getElementById(
        "temperatura"
    ).textContent =
        temperatura + " °C";

    document.getElementById(
        "humedad"
    ).textContent =
        humedad + " %";

    document.getElementById(
        "luminosidad"
    ).textContent =
        luminosidad + " lx";

}

function generarNumero(min, max){

    return Math.floor(
        Math.random() *
        (max - min + 1)
    ) + min;

}

function volverInicio(){

    window.location.assign(
        "index.html"
    );

}