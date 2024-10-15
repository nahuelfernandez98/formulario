let nombre;
let apellido;
let email;
let numero;
let consulta;

const validacionMail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
function enviarFormulario() {
    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;
    email = document.getElementById('email').value;
    numero = document.getElementById('numero').value;
    consulta = document.getElementById('consulta').value;

    if(isNaN(parseInt(numero))) {
        alert("Por favor ingrese un numero correcto");
        let numeroCorrecto = prompt("Ingresa un numero correcto")
        if(isNaN(parseInt(numeroCorrecto))) {
            alert("Numero incorrecto")
            return;
        } else {
            numero = numeroCorrecto;
        }
    } 

    if(validarMail(email) == false) {
        alert("Email incorrecto")
        return;
    }

    let confirmacion = confirm("Confirmacion de datos \nNombre : " + nombre + "\nApellido : " + apellido + "\nCorreo Electronico : " + email + "\nNumero : " + numero)

    console.log(confirmacion)
    if(confirmacion == true) {
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('email').value = '';
        document.getElementById('numero').value = 0;
        document.getElementById('consulta').value = '';
    }
}

function validarMail(e) {
    if(validacionMail.test(e)) {
        console.log("entra al true")
        return true;
    } else {
        return false;
    }
}

