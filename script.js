//Declaración de constantes.
const MAX_INTENTOS = 10;
const MAX_COMBI_COLORES = 4;
const COLORS = ['white', 'blue', 'green', 'violet', 'yellow', 'red', 'orange', 'cyan'];
const GREY = "grey";
const WHITE = "white";
const BLACK = "black";

//Declaración de variables globales.
let master = [];
let userCombi = [];
let intento = 0;
let aciertos = 0;

function init() {
    //1. Genera el código random del master
    generarArrayMaster()
    //2. Crea todas las filas según el número de intentos.
    crearIntentos(MAX_INTENTOS)
    console.log("Master: ", master)
    console.log("User: ", userCombi)
    
}

function generarArrayMaster() {
    for (i = 0; i < 4; i++) {
        const random = Math.floor(Math.random()*(COLORS.length-1))
        master.push(COLORS[random])
    }
    return master
}

/* Llamaremos a esta función desde el botón HTML de la página para comprobar la propuesta de combinación que nos ha
introducido el usuario.
Informamos al usuario del resultado y del número de intentos que lleva*/

function Comprobar() {
    if (userCombi.length === 4) {
        
        for (let elemento of userCombi) {
            console.log(elemento)
        }
        
    }
    else {
        alert("No hay suficientes colores para comprobar, inténtelo de nuevo!")
    }
}

/** Procedimiento que se ejecuta cada vez que el usuario selecciona un color, hasta el número máximo de colores permitidos en la combinación. */
function añadeColor(color) {
    if (userCombi.length < 4) {
        userCombi.push(color);
        document.getElementById("combiText").value = userCombi.join("+"); //LO HE USADO PARA VISUALMENTE MOSTRAR QUE SE SUMAN (realmente el .join es opcional)
    } else {
        alert("Máximo de 4 colores alcanzado");
    }
}

function crearIntentos(MAX_INTENTOS) {
    let result = document.getElementById("Result")
    for (let i = 0; i < MAX_INTENTOS; i++) {
        let div = document.createElement("div")
        div.innerHTML = ROW_RESULT
        result.appendChild(div)
    }
}

/** Template con el código HTML que corresponde a cada fila de juego/intento. */
const ROW_RESULT = `<div class="rowResult w100 flex wrap">
    <div class="rowUserCombi w75 flex wrap">
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
    </div>
    <div class="rowCercleResult w25 flex wrap center">
       <div class="w40 h40">
            <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
    <div>
</div>`;