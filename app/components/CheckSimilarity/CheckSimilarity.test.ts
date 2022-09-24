const ejer5 = require ("./CheckSimilarity");

test("verificacion", () =>{

   let  wordArray1: string [] = [];
        wordArray1 = ["casa", "perro", "computador", "televisor"];

   let  wordArray2: string [] = [];
        wordArray2 = ["casa", "computador", "televisor", "perro"];


    expect(ejer5(wordArray1,wordArray2)).toContain("Son iguales!");

})