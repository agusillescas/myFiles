//  Ejercicios de la Clase 3 de Argentina Programa 4.0


// Alumno:  Agustín Illescas





// EJERCICIO 1


            let myInput = "Soy un input";
            let tipoDeVariable = myInput;

            function mifuncion (tipoDeVariable)     {
                console.log("el tipo de variable es: " + typeof(tipoDeVariable)) ;
}
            mifuncion(tipoDeVariable);



        





// EJERCICIO 2


let num1 = prompt("ingrese el primer numero");
let num2 = prompt("ingrese el segundo numero");

function Resta (num1,num2) {
    let resultadoResta = num1 - num2;
    return resultadoResta ;
}

console.log("El resultado de la resta es igual a " + Resta (num1,num2));









//EJERCICIO 3


let valorA = prompt("ingrese un valor para A");
let valorB = prompt("ingrese un valor para B");

function darVuelta (valorA,valorB) {
    let AUXvalorA = valorA;
    let AUXvalorB = valorB;

    valorA = AUXvalorB;
    valorB = AUXvalorA;

    console.log("El valor de A ahora es " + valorA + " y el valor de B ahora es " + valorB);
}

darVuelta (valorA,valorB);










//EJERCICIO 4


let ladoCuadrado = prompt("Ingrese la longitud de los lados de un cuadrado expresada en centímetros");


function funcionCalculos (ladoCuadrado) {
    let perimetro = ladoCuadrado * 4;
    let superficie = ladoCuadrado * ladoCuadrado;
    console.log("el perimetro de su cuadrado es de " + perimetro + " cm"+ ", mientras que la superficie es de " + superficie + " cm");
}

funcionCalculos (ladoCuadrado);









//EJERCICIO 5 


let gradosF = prompt("Ingrese el valor en Fahrenheit");

function calculoCelcius (gradosF)   {
let gradosC = (gradosF - 32) / 1.8;

console.log("Su valor en Fahrenheit equivale a "+ gradosC +"ºC");

}

calculoCelcius(gradosF);









//EJERCICIO 6 


let factorialNUM = prompt("Ingrese un número entero entre 1 y 10")
let resultadoFactor = factorialNUM

validacion(factorialNUM)


function validacion (factorialNUM) {
    if (factorialNUM <=10) {
        if (factorialNUM >=1) {
           calculoFactorial(factorialNUM)
    }  
    else { 
        console.log("Numero incorrecto. Vuelva a intentarlo") 
    } 
    }                   
    else { 
        console.log("Numero incorrecto. Vuelva a intentarlo") 
    } 

}


function calculoFactorial (factorialNUM) {
 
    for (i=factorialNUM-1; i>=1; i--)
    resultadoFactor = resultadoFactor * i ;
   console.log("el factorial de su numero es " + resultadoFactor) ;
}









//EJERCICIO 7


let textoUsuario = prompt("Ingrese un texto para comprobar si es un palíndromo:");


let textoEnMinuscula = textoUsuario.toLowerCase();


let textoSinEspacio = textoEnMinuscula.replace(/\s/g, "");


let longitudCadena = textoSinEspacio.length;


let InvertirCadena = "";


for (let i = longitudCadena - 1; i >= 0; i--) {
InvertirCadena += textoSinEspacio[i];
}

if (textoSinEspacio === InvertirCadena) {
console.log("El texto ingresado es un palíndromo");
} else {
console.log("El texto ingresado no es un palíndromo");
}








//EJERCICIO 8 


let CadenaUser = prompt("Ingrese un texto");

let ConvertMayus;

let ConvertMinus;

conversionMayuscula(CadenaUser,ConvertMayus,ConvertMinus);

function conversionMayuscula(CadenaUser,ConvertMayus,ConvertMinus) {
    ConvertMinus = CadenaUser.toLowerCase();
    ConvertMayus = ConvertMinus.toUpperCase();
    
   
    console.log("Su texto en mayúsculas: " + ConvertMayus);
    console.log("Su texto en minúsculas: " + ConvertMinus);
}








//EJERCICIO 9


let notaAlumno = prompt("Ingrese la nota del alumno a continuación");
let calificacion = '';

if (notaAlumno <=3) {
    if (notaAlumno >=0) {
 calificacion = "Muy deficiente" }
}

if (notaAlumno <=5) {
    if (notaAlumno >=3) {
        calificacion = "Insuficiente"
    }
} 

if (notaAlumno <=6) {
    if (notaAlumno >=5) {
        calificacion = "Suficiente"
    }
} 

if (notaAlumno <=7) {
    if (notaAlumno >=6) {
        calificacion = "Bien"
    }
} 

if (notaAlumno <=9) {
    if (notaAlumno >=7) {
        calificacion = "Notable"
    }
} 

if (notaAlumno <=10) {
    if (notaAlumno >=9) {
        calificacion = "Sobresaliente"
    }
} 

else {
    console.log("Nota no válida. Intente de nuevo.");
}

console.log("La calificacion correspondiente a la nota del alumno es: "+calificacion);









//EJERCICIO 10


let mesUsuario = prompt("Introducca el número del mes del cual quiera averiguar su cantidad de dias:");

if(mesUsuario === "2"){
    console.log("Febrero tiene 28 o 29 días, dependiendo del año.");
} 
else if (mesUsuario === "4" || mesUsuario === "6" || mesUsuario === "9" || mesUsuario === "11"){
    console.log("El mes "+mesUsuario +" tiene 30 días.");
}
 else {
    console.log("El mes "+mesUsuario+" tiene 31 días.");
}







//EJERCICIO 11


let numeroIngresado = parseInt(prompt("Ingrese un número entre 1 y 10:"));

if (numeroIngresado < 1 || numeroIngresado > 10) {
console.log("Número no válido");
} else {
let cadena = "";
for (let i = 1; i <= numeroIngresado; i++) {
for (let j = 1; j <= i; j++) {
cadena += j;
}
console.log(cadena);
cadena = "";
}
}







//EJERCICIO 12


let bultosDisponibles = prompt("Ingrese la cantidad de bultos en stock")

let bultosPorCaja = prompt ("bultos por caja")


function calcularCajas(bultosDisponibles, bultosPorCaja) {
let cajasCompletas = Math.floor(bultosDisponibles / bultosPorCaja);
let bultosSueltos = bultosDisponibles % bultosPorCaja;
console.log(`Se pueden llenar ${cajasCompletas} cajas completas y quedan ${bultosSueltos} bultos sueltos.`);
}

calcularCajas(bultosDisponibles, bultosPorCaja); 








//EJERCICIO 13


let codigoArticulo = prompt("Ingrese el codigo del artículo al cual quiere aplicar su descuento");

let menu = "MENU\n";
menu += "1. Fiesta\n"
menu += "2. Focus\n"
menu += "3. Salir\n"
menu += "4. Ingrese una opcion\n\n";

let cod=parseint(prompt(menu))



