const ticket = 200;
let valEstudiante = (ticket - ((ticket * 80) / 100));
let valTrainee = (ticket - ((ticket * 50) / 100));
let valJunior = (ticket - ((ticket * 15) / 100));
let total = 0;


/** 
let estudiante = document.getElementById("estudiante")
estudiante.addEventListener("select",compraEstudiante)


let trainee = document.getElementById("trainee")
trainee.addEventListener("true",compraTrainee)


let junior = document.getElementById("junior")
junior.addEventListener("selectionchange",compraJunior)


let resumen = document.getElementById("resumen")
resumen.addEventListener("click",muestraTotal)



function compraEstudiante() {
    total = total + valEstudiante;
    return total;
}

function compraTrainee() {
    total = total + valTrainee;
    return total;
}

function compraJunior() {
    total = total + valJunior;
    return total;
}

function muestraTotal(){
    console.log("El total es: ",total)
    document.totalPagar.ans.value = total
    // aca estos llendo a la direccion: documento(es decir al html), total a pagar (que es el id), ans(que es el formulario) al valor, el cual esta en solo lectura
}

*/


let ticketsResumen = document.getElementById("ticketsResumen");
ticketsResumen.addEventListener("click", precioTickets);

let ticketsBorrar = document.getElementById("ticketsBorrar");
ticketsBorrar.addEventListener("click", borrarOutput);

let ticketsCantidad = document.querySelector(".ticketsCantidad");
ticketsCantidad.addEventListener("click", clearInput);


function precioTickets(evento) {
    evento.preventDefault();   // prevent default es para que el formulario no se refresque
    let ticketsCantidad = document.querySelector(".ticketsCantidad"); // leo el valor del input cantidad

    if (Number(ticketsCantidad.value)) {
        let ticketsCategoria = document.querySelector(".ticketsCategoria");
        let pagoTotal;

        switch (ticketsCategoria.value) {
            case "Estudiante": {
                pagoTotal = valEstudiante * ticketsCantidad.value;
                break;
            }
            case "Trainee": {
                pagoTotal = valTrainee * ticketsCantidad.value;
                break;
            }
            case "Junior": {
                pagoTotal = valJunior * ticketsCantidad.value;
                break;
            }
        }

        document.querySelector(".ticketsOutput").textContent = `Total a pagar: $${pagoTotal}`;

        console.log("El total es: ",valEstudiante)
        console.log("El total es: ",pagoTotal)

    } else{
        document.getElementById("ticketsCantidad").style.border="2px solid red"
        ticketsCantidad.value="";
        ticketsCantidad.placeholder="Ingrese un numero";
    }

} 


// funcion clearInput
function clearInput(evento){
    document.querySelector("."+ evento.target.className).style.border = "1px solid gray"
}


// funcion borrarOutput (cuando le doy borrar)
function borrarOutput(){
    document.querySelector(".ticketsOutput").textContent = "Total a pagar:";
}

