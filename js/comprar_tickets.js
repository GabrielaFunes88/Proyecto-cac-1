/*const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let desceuntoJunior = 15;

let nombre = document.getElementById( "nombre" );
let apellido = document.getElementById( "apellido" );

let mail = document.getElementById( "email" );

let cantidadTickets = document.getElementById( "cantidadTickets" );

let categoria = document.getElementById( "categoriaSelect" );
let btnResumen = document.getElementById( "btnResumen" );



function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

function ResetTotalAPagar() {
    quitarClaseError();
    totalPago.innerHTML = "";

}

const emailValido = mail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}

function TotalAPagar() {

    quitarClaseError();

    if (nombre.value === " ") {
        alert ("Por favor escribí tu nombre");
        nombre.classList.add("error");
        nombre.focus();
        return;
    }
    if (apellido.value === " ") {
        alert ("Por favor escribí tu apellido");
        apellido.classList.add("error");
        apellido.focus();
        return;
    }
    if (mail.value === " ") {
        alert ("Por favor escribí tu email");
        mail.classList.add("error");
        mail.focus();
        return;
    }
    if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        alert("Por favor, ingresá correctamente cantidad de tickets.");
        return;
    }

    if (categoria.value == "") {
        categoria.classList.add("is-invalid");
        categoria.focus();
        alert("Por favor, seleccioná una categoría.");
        return;
    }
    
    
    let totalValorTickets = (cantidadTickets.value) * valorTicket;



    if(categoria.value == 0) {
        return totalValorTickets = totalValorTickets;
    }
    else if (categoria.value == 1) {
        return totalValorTickets = totalValorTickets - (descuentoEstudiante/100*totalValorTickets);
    }
    else if (categoria.value == 2) {
        return totalValorTickets = totalValorTickets - (descuentoTrainee/100*totalValorTickets);
    }
    else (categoria.value == 3); {
         totalValorTickets = totalValorTickets - (desceuntoJunior/100*totalValorTickets);
    }
    
    document.getElementById("totalPago").innerHTML = totalValorTickets;

}

btnResumen.addEventListener('click',TotalAPagar);
btnBorrar.addEventListener('click', ResetTotalAPagar);


*/


const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;


let nombre           = document.getElementById("nombre");
let apellido         = document.getElementById("apellido");
let mail             = document.getElementById("email");
let cantidadTickets  = document.getElementById("cantidadTickets");
let categoria        = document.getElementById("categoriaSelect");

/*
function quitarClaseError() {
    let x = document.querySelectorAll(".datos_a_completar_AN, .datos_a_completar_correo .datos_a_completar_cantidadytipo");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}


function ResetTotalAPagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
}

*/

const emailValido = mail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}



function TotalAPagar() {

    /*quitarClaseError();*/

    if (nombre.value === "") {
        nombre.classList.add("is-invalid");
        nombre.focus();
        alert("Por favor, escribí tu nombre.");
        return;
    }

    if (apellido.value === "" ) {
        apellido.classList.add("is-invalid");
        apellido.focus();
        alert("Por favor, escribí tu apellido.");
        return;
    }

    if (mail.value === "") {
        mail.classList.add("is-invalid");
        mail.focus();
        alert("Por favor, escribí tu email.");
        return;
    }

    if (!emailValido(mail.value)) {
        mail.classList.add("is-invalid");
        mail.focus()
        alert("Por favor, escribí un correo electrónico válido.");
        return;
    }

    

    if ( (cantidadTickets.value === 0) || (isNaN(cantidadTickets.value)) ) {
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        alert("Por favor, ingresá correctamente cantidad de tickets.");
        return;
    }

    if (categoria.value === "") {
        categoria.classList.add("is-invalid");
        categoria.focus();
        alert("Por favor, seleccioná una categoría.");
        return;
    }


let totalValorTickets = (cantidadTickets.value) * valorTicket;
         
        switch (totalValorTickets){
            case "0": 
               totalValorTickets = totalValorTickets;
            case "1": 
                totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
                break;
            case "2": 
                 totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
                break;
            case "3": 
                totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
                break;
            
        }


        totalPago.innerHTML = totalValorTickets;

}

btnResumen.addEventListener('click', TotalAPagar);
/*btnBorrar.addEventListener('click', ResetTotalAPagar);*/