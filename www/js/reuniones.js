document.addEventListener(
    "DOMContentLoaded",
    iniciarReuniones
);

function iniciarReuniones(){

    const btnGuardar =
        document.getElementById("btnGuardar");

    const btnVolver =
        document.getElementById("btnVolver");

    if(btnGuardar){

        btnGuardar.addEventListener(
            "click",
            guardarReunion
        );

    }

    if(btnVolver){

        btnVolver.addEventListener(
            "click",
            volverInicio
        );

    }

}

function volverInicio(){

    window.location.assign(
        "index.html"
    );

}

/* función para guardar reuniones */
function guardarReunion(){

    const titulo =
        document.getElementById("titulo");

    const fecha =
        document.getElementById("fecha");

    if(
        titulo.value.trim() === "" ||
        fecha.value === ""
    ){

        alert(
            "Complete todos los campos"
        );

        return;
    }

    const item =
        document.createElement("li");

    item.innerHTML = `
        <strong>${titulo.value}</strong>
        <br>
        ${fecha.value}
    `;

    document
        .getElementById("listaReuniones")
        .appendChild(item);

    titulo.value = "";
    fecha.value = "";
}

/* muestra las reuniones agendadas */
function mostrarReunion(reunion){

    const lista =
        document.getElementById(
            "listaReuniones"
        );

    const item =
        document.createElement("li");

    item.innerHTML = `
        <strong>${reunion.titulo}</strong>
        <br>
        ${reunion.fecha}
    `;

    lista.appendChild(item);
}

function guardarEnStorage(reunion){

    const reuniones =
        JSON.parse(
            localStorage.getItem(
                "reuniones"
            )
        ) || [];

    reuniones.push(reunion);

    localStorage.setItem(
        "reuniones",
        JSON.stringify(reuniones)
    );
}

function cargarReuniones(){

    const reuniones =
        JSON.parse(
            localStorage.getItem(
                "reuniones"
            )
        ) || [];

    reuniones.forEach(reunion => {

        mostrarReunion(
            reunion
        );

    });

}

function limpiarFormulario(){

    document.getElementById(
        "titulo"
    ).value = "";

    document.getElementById(
        "fecha"
    ).value = "";

}

