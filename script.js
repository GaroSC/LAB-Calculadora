//Reto: Calculadora

//Declaración de variables, el usuario ingrea los números que desea utilizar en las operaciones aritméticas.
//Se usa parseFloat para covertir la cadena de texto en un tipo de dato Float.
let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));

//Se crea la funcion que realizará la suma.
function suma(numero1, numero2) {
    return numero1 + numero2;
}

//Se crea la funcion que realizará la resta.
function resta(numero1, numero2) {
    return numero1 - numero2;
}

//Se crea la funcion que realizará la multipliación.
function multipliacion(numero1, numero2) {
    return numero1 * numero2;
}

//Se crea la funcion que realizará la división.
function division(numero1, numero2) {
    return numero1 / numero2;
}

//Se declaran las variables que almacenarán los resultados de las operaciones.
let resultadoSuma = suma(numero1, numero2);
let resultadoResta = resta(numero1, numero2);
let resultadoMultipliacion = multipliacion(numero1, numero2);
let resultadoDivision = division(numero1, numero2);

//Se imprimen en consola los resultados.
console.log("El resultado de la suma es: ", resultadoSuma);
console.log("El resultado de la resta es: ", resultadoResta);
console.log("El resultado de la multipliación es: ", resultadoMultipliacion);
console.log("El resultado de la división es: ", resultadoDivision);