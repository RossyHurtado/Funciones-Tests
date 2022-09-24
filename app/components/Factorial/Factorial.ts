/**
 * Ejercicio 9
 * Calcular el factorial de un número
 */


 function factorialnumber( n:number) {

    let total = 1;
    for (let a = 1; a < n; a++) {
        total = total * a;
    }
    return total;
 }
console.log(factorialnumber(4));

module.exports= factorialnumber;





