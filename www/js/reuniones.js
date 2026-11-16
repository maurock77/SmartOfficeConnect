document.addEventListener(
    "DOMContentLoaded",
    iniciarReuniones
);

function iniciarReuniones(){

    const btnGuardar =
        document.getElementById("btnGuardar");

   const btnVolver =
        document.getElementById("btnVolver");

    if(btnVolver){
        btnVolver.addEventListener(
            "click",
            volverInicio
        );
    }
    btnGuardar.addEventListener(
        "click",
        guardarReunion
    );

    btnVolver.addEventListener(
        "click",
        volverInicio
    );

    cargarReuniones();
}

/* función para guardar reuniones */
function guardarReunion(){

    const titulo =
        document
        .getElementById("titulo")
        .value
        .trim();

    const fecha =
        document
        .getElementById("fecha")
        .value;

    if(titulo === "" || fecha === ""){

        alert(
            "Complete todos los campos"
        );

        return;
    }

    const reunion = {
        titulo,
        fecha
    };

    guardarEnStorage(reunion);

    mostrarReunion(reunion);

    limpiarFormulario();
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

function volverInicio(){

    window.location.assign(
        "index.html"
    );

}