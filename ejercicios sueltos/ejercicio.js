let num = prompt("ingrese un numero para verificar si es par")
esPar(num);

function esPar (num){
    let booleanOut = false;

    if (num % 2 == 0)  {
    booleanOut = true;
    } else {
        if (num % 2 !== 0) {
            booleanOut = false ;
        }
    }

    if (booleanOut = true) {
        console.log(num+"es par");
    } else {
        if (booleanOut = false) {
            console.log(num + "Es inpar")
        }
    }

}