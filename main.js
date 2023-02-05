/* declaracion usuario */
const usuarioAutorizado= "Tutor";
const pswAutorizada= "1234";

/* variables del juego */
let max=100;
let min=1;
let numeroOculto= Math.random ()* (max-min) + min; /* Con esta ecuación generamos el número
random que se debe adivinar */

/* Pedimos al usuario que ingrese */
let usuarioIngresado= prompt("Ingrese su nombre de usuario:");
let pswIngresada=prompt ("Ingrese su contraseña:");

/* Validamos */
if (usuarioIngresado===usuarioAutorizado && pswIngresada===pswAutorizada){
    alert ("Bienvenido " + usuarioIngresado);







}