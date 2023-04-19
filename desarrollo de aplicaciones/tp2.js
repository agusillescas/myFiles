//Ejercicio 1


let valorIngresado = prompt("ingrese un numero");

let salida;

let calculo = valorIngresado % 2;

esPar(valorIngresado,salida);

function esPar (valorIngresado,salida) {
if (calculo == 0) {
    salida = true;
}
if (salida == true){
console.log("Su numero es par")
} else {
    if (salida != 0) {
        console.log("Su numero es inpar");
    }
}
}






//Ejercicio 2


let numeroA = prompt("ingrese un valor A");
let numeroB = prompt("ingrese un valor B");

let resultado = numeroA % numeroB;

esDivisible(resultado);

function esDivisible (resultado) {
    let valorBool

    if (resultado == 0) {
        valorBool = true;
    } else {
        valorBool = false;
    }

    if (valorBool == true) {
        console.log(numeroA + " es divisible por "+numeroB);
    } else {
        if (valorBool == false) {
            console.log(numeroA+" no es divisible por "+ numeroB);
        }
    }
}





//Ejercicio 3


let peso = prompt("ingrese el peso");
let altura = prompt("ingrese la altura");


imc(peso,altura);


function imc (peso,altura) {
    let ResultadoDelCalculo = (peso / (altura * altura));

    console.log("Su imc es de "+ ResultadoDelCalculo.toFixed(2));

}







//ejercicio 4


let numEntero = Math.floor(prompt("Ingrese un numero entero"));


if (esPrimo(numEntero)) {
    console.log(numEntero +" es primo");
} else {
    console.log(numEntero+" no es primo");
}



    function esPrimo (numEntero) {

    if (numEntero <=1){
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numEntero); i++) {

        if (numEntero % i === 0) {
          return false;
        }
    }


return true;

}






//ejercicio 5






