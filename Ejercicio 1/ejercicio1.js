// SERIE DE EJERCICIOS 1   (DESCOMENTAR PARA REVISAR)

// ==========================================================

// #1 Solicite al usuario capturar su nombre utilizando prompt, al hacerlo lance una alerta saludando por su nombre al usuario.

// let  nombre = prompt('Cual es su nombre?');
// alert('Buenos dias ' + nombre);

// ==========================================================


// #2 Solicite la edad del usuario, valide que este tenga o no la edad para conducir.

/* let  edad = prompt('Que edad tiene?');

if (edad < 18){
    alert('No puede manejar ustedes no es mayor de edad!');
}else {
    alert('No beba mientras conduzca, adelante señor');
}*/

// ==========================================================


// #3 Solicite una calificación, muestre el nombre de la categoría de dicha calificación

// let  calificacion = prompt('Digame su calificacion por favor');

// if (calificacion < 3){
//     alert('Muy deficiente');
// }else if (calificacion >=3 && calificacion < 5){
//     alert('Insuficiente');
// }else if (calificacion >=5 && calificacion < 6){
//     alert('Suficiente');
// }else if (calificacion >=6 && calificacion < 7){
//     alert('Bien');
// }else if (calificacion >=7 && calificacion < 9){
//     alert('Notable'); 
// }else if (calificacion >=9 && calificacion <= 10){
//     alert('Sobresaliente');
// }else{
//     alert('Calificacion erronea, repita por favor');
// }

// ==========================================================


// #4 Solicite al usuario capturar N número de calificaciones, el usuario capturará la cantidad de calificaciones definida y al terminar se mostrará el promedio.

// let n = prompt('Cuantas calificaciones quiere calcular?');

// let promedio = 0;
// let calificacion_final = 0;
// for (let i = 0; i < n; i++) {
//     let calificacion = prompt('Diga su calificacion #' + (i + 1));
//     if (calificacion > 1 && calificacion <= 10) {
//         calificacion_final += parseInt(calificacion, 10);
//     } else {
//         alert('Calificacion invalida!');
//     }

// }

// promedio = calificacion_final / n;

// alert('Su calificacion final es de: ' + promedio);

// ==========================================================

// #5 Solicite al usuario capturar calificaciones hasta que el usuario desee terminar, al terminar muestre el promedio de calificaciones.

// let parar = false;
// let calificacion_final = 0;
// let promedio = 0;
// let ciclos = 0;

// do {
//     let calificacion = prompt('Diga su calificacion #');
//     if (calificacion > 1 && calificacion <= 10) {
//         calificacion_final += parseInt(calificacion, 10);
//     } else {
//         alert('Calificacion invalida!');
//     }
//     ciclos++;
//     let seguir = confirm('Quieres seguir capturando calificaciones?');

//     if (seguir == false) {
//         parar = false;
//         promedio = calificacion_final / ciclos;

//         alert('Su calificacion final es de: ' + promedio);
//         break;
//     }

// } while (parar = true);

// ==========================================================

// #6 Imprima N números de la sucesión fibonacci. N debe estar definido por el usuario.

// let  repeticiones = prompt('Cuantos numeros de la succesión fibonacci desea?');
// let  numero = 1;
// let  numero_anterior =0;
// let  fibonacci = 1;

// for (let i = 0; i < repeticiones; i++){
    
//     alert(fibonacci);

//     // console.log(fibonacci);

//     fibonacci = numero_anterior + numero;
//     numero_anterior = numero;
//     numero  = fibonacci;
// }