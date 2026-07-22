
/* Boton para Abrir el Formulario de Agregar Equipo*/
function mostrarFormulario() {
    document.getElementById("modalEquipo").style.display = "block";
}


/* Boton para Cerrar el formulario de Agregar Equipo */
function cerrarFormulario() {

    document.getElementById("modalEquipo").style.display = "none";

}

/* Funcion para guardar los valores ingresados en el formulario y darles un valor de Javascript*/
function guardarEquipo() {

    let idEquipo = document.getElementById("idEquipo").value;
    let nombreUsuario = document.getElementById("nombreUsuario").value;
    let departamento = document.getElementById("departamento").value;
    let direccionIP = document.getElementById("direccionIP").value;
    let direccionMAC = document.getElementById("direccionMAC").value;
    let marcaMB = document.getElementById("marcaMB").value;
    let modeloMB = document.getElementById("modeloMB").value;
    let marcaCPU = document.getElementById("marcaCPU").value;
    let familiaCPU = document.getElementById("familiaCPU").value;
    let modeloCPU = document.getElementById("modeloCPU").value;
    let sistemaOperativo = document.getElementById("SO").value;
    let versionSO = document.getElementById("versionSO").value;
    let edicionSO = document.getElementById("edicionSO").value;
    let arquitecturaSO = document.getElementById("arquitecturaSO").value;
    let tipoRAM = document.getElementById("tipoRAM").value;
    let ultimoMantenimiento = document.getElementById("ultimoMantenimiento").value;
    let proximoMantenimiento = document.getElementById("proximoMantenimiento").value;
    let diasRestantes = document.getElementById("diasRestantes").value;

    /* Calcula la RAM total añadiendo segun los slots seleccionados */
    let ramTotal = 0;
    let cantidadSlots = document.getElementById("cantidadSlots").value;

    for (let i = 1; i <= cantidadSlots; i++) {

        let slot = document.getElementById("slot" + i);

        if (slot) {
            ramTotal += parseInt(slot.value) || 0;
        }

    }
    /* Calcula el almacenamiento total segun las unidades agregadas */
    let almacenamiento = "";

    let tiposUnidad = document.querySelectorAll(".tipoUnidad");
    let capacidadesUnidad = document.querySelectorAll(".capacidadUnidad");


    for (let i = 0; i < tiposUnidad.length; i++) {

        almacenamiento += tiposUnidad[i].value + " " + capacidadesUnidad[i].value + "GB";

        if (i < tiposUnidad.length - 1) {
            almacenamiento += " + ";
        }

    }

    /* Agrega el equipo a la tabla */
    let tabla = document.getElementById("tablaEquipos");

    tabla.innerHTML += `
<tr>
    <td>${idEquipo}</td>
    <td>${nombreUsuario}</td>
    <td>${departamento}</td>
    <td>${direccionIP}</td>
    <td>${direccionMAC}</td>
    <td>${marcaMB} ${modeloMB}</td>
    <td>${marcaCPU} ${familiaCPU} ${modeloCPU}</td>
    <td> ${tipoRAM} ${ramTotal} GB</td>
    <td>${sistemaOperativo} ${versionSO} ${edicionSO} ${arquitecturaSO}</td>
    <td>${almacenamiento}</td>
    <td>${proximoMantenimiento}</td>
    <td>${diasRestantes} dias</td>
</tr>
`;

}

/* Funcion para calcular la RAM total y agregar por Slots*/

function crearSlots() {

    let cantidadSlots = document.getElementById("cantidadSlots").value;

    let contenedorSlots = document.getElementById("slotsRAM");

    contenedorSlots.innerHTML = "";

    for (let i = 1; i <= cantidadSlots; i++) {

        contenedorSlots.innerHTML += `
            <label>Slot ${i}</label>
            <input type="number" id="slot${i}" min="0" value="0">
            <br><br>
        `;

    }

}

/* Funcion para agregar unidades de almacenamiento de manera dinamica.*/

function agregarUnidadAlmacenamiento() {

    let lista = document.getElementById("listaAlmacenamiento");

    let unidad = document.createElement("div");

    unidad.className = "unidadAlmacenamiento";


    unidad.innerHTML = `

        <label>Tipo de unidad</label>

        <select class="tipoUnidad">
            <option value="M.2">M.2</option>
            <option value="SSD">SSD</option>
            <option value="HDD">HDD</option>
        </select>


        <label>Capacidad GB</label>

        <input type="number" class="capacidadUnidad" min="0">


        <button type="button" onclick="this.parentElement.remove()">
            ❌
        </button>

        <br><br>

    `;

    /* Agrega la unidad individual de almacenamiento a la lista de unidades del formulario del equipo */
    lista.appendChild(unidad);

}

/* Funcion para calculas las fechas de los mantenimientos*/

function calcularMantenimiento() {

    let ultimo = document.getElementById("ultimoMantenimiento").value;
    if (ultimo == "") return;
    let fecha = new Date(ultimo);
    // Sumar 6 meses
    fecha.setMonth(fecha.getMonth() + 6);
    // Formato YYYY-MM-DD
    let año = fecha.getFullYear();
    let mes = String(fecha.getMonth() + 1).padStart(2, "0");
    let dia = String(fecha.getDate()).padStart(2, "0");
    document.getElementById("proximoMantenimiento").value =
        `${año}-${mes}-${dia}`;
    // Calcular días restantes
    let hoy = new Date();
    // Ignorar horas para evitar diferencias raras
    hoy.setHours(0, 0, 0, 0);
    fecha.setHours(0, 0, 0, 0);
    let diferencia = fecha - hoy;
    let dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    document.getElementById("diasRestantes").value = dias;

}