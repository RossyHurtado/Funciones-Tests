"use strict";
/*
  * Ejercicio 4
  * dadas dos listas de palabras, retorne una unica lista en la cual se encuentren las palabras
  * que existan en las dos listas iniciales, además ordene esta última lista de manera que las
  * palabras repet'idas más veces en ambos arreglos se encuentren al inicio de la lista.
  *
  * ejem:
  * ["rat", "dog", "cat", "parrot", "cat"] y ["cat", "lizard", "rat", "cat"] devolverán ["cat", "rat"]
  */
function RepeatedWords(arrayW1, arrayW2) {
    const list = arrayW1.filter(element => arrayW2.includes(element));
    return list;
}
module.exports = RepeatedWords;
