/* declaracion usuario */
const usuarioAutorizado= "Tutor";
const pswAutorizada= "1234";

/* variables del juego */
let max=100;
let min=1;
let numeroOculto= Math.random ()* (max-min) + min; /* Con esta ecuación generamos el número
random que se debe adivinar */
numeroOculto=parseInt(numeroOculto); /* convertimos en entero el valor en caso
de que sea un flotante */

/* Pedimos al usuario que ingrese */
let usuarioIngresado= prompt("Ingrese su nombre de usuario:");
let pswIngresada=prompt ("Ingrese su contraseña:");

/* Validamos */
if (usuarioIngresado===usuarioAutorizado && pswIngresada===pswAutorizada){
    alert ("Bienvenido " + usuarioIngresado);
    while (true){
        let numUsuario=prompt("Ingresa un número para adivinar el mágico: ");
        if (numUsuario===numeroOculto){
            alert ("Felicitaciones " + usuarioIngresado + " has adivinado el número mágico");
            break;
        }else if (numUsuario==0){
            alert ("Decidiste abandonar el juego");
            break;
        }else if(numUsuario < numeroOculto){
            alert ("El número ingresado es menor al mágico, seguí intentando");
        }else if(numUsuario > numeroOculto){
            alert ("El número ingresado es mayor al mágico, seguí intentando")
        }
    }
} else {
    alert ("Usuario y/o contraseña incorrecta");
}