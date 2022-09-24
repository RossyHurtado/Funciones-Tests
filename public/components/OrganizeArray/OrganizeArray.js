"use strict";
/**
  * Ejercicio 6
  * cree una función que a partir de una arreglo de número y letras, ordene el arreglo con todas las
  * letras en las primeras posiciones (ordenadas alfabeticamente) y luego ponga todos los número
  * ordenados ascendentemente.
  *
  * ejem:
  * el arreglo ["b", 6, "a", "q", 7, 2] retornará ["a", "b", "q", 2, 6, 7]
  *
  */
let arraynl = [];
arraynl = ["r", 2, "o", "s", 4, 3];
function organizeArray(array) {
    let arr = array;
    const newArray = [];
    array = array.filter(number => Number.isInteger(number));
    arr = arr.filter(string => !Number.isInteger(string));
    array.sort();
    arr.sort();
    arr.forEach(element => {
        newArray.push(element);
    });
    array.forEach(element => {
        newArray.push(element);
    });
    return newArray;
}
console.log(organizeArray(arraynl));
module.exports = organizeArray;
