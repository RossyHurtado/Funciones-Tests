"use strict";
/**
 * Ejercicio 5
 * cree una función que reciba dos arreglos y verifique
 * que el primero contenga todos los elementos del segundo
 */
let wordArray1 = [];
wordArray1 = ["casa", "perro", "computador", "televisor"];
let wordArray2 = [];
wordArray2 = ["casa", "computador", "televisor", "perro"];
function checkSimilarity(array1, array2) {
    array1.sort();
    array2.sort();
    if (array1.length == array2.length && array1.every(function (v, i) { return v === array2[i]; })) {
        return "Son iguales!";
    }
    else {
        return "No son iguales";
    }
}
console.log(checkSimilarity(wordArray1, wordArray2));
module.exports = checkSimilarity;
