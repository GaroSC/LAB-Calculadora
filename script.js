let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));

function sumaFuncion(numero1, numero2) {
    return numero1 + numero2;
}

function restaFuncion(numero1, numero2) {
    return numero1 - numero2;
}

function multipliacionFuncion(numero1, numero2) {
    return numero1 * numero2;
}

function divisionFuncion(numero1, numero2) {
    return numero1 / numero2;
}

let suma = sumaFuncion(numero1, numero2);
let resta = restaFuncion(numero1, numero2);
let multipliacion = multipliacionFuncion(numero1, numero2);
let division = divisionFuncion(numero1, numero2);

console.log(suma);
console.log(resta);
console.log(multipliacion);
console.log(division);