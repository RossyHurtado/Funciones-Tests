"use strict";
/* Ejercicio 2
* Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interir,
* la primera contendrá los números pares del arreglo y la segunda los impares
*/
let numberArray = [];
numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function separateNumbers(array) {
    let array1 = [];
    let array2 = [];
    array.forEach(element => {
        if (element % 2 == 0) {
            array1.push(element);
        }
        else {
            array2.push(element);
        }
    });
    console.log(array1, array2);
}
console.log(separateNumbers(numberArray));
module.exports = separateNumbers;
