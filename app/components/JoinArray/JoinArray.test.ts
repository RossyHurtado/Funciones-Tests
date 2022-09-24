const ejer1 = require ("./JoinArray");

test("arreglo", () =>{
    
    let wordArrayA: string [] = [];
        wordArrayA = ["e", "c", "b"];

    let wordArrayB: string [] = [];
        wordArrayB  = ["s", "o", "a"];
    
    let arrayFinal = ["e","s","c","o","b","a"]


    expect(ejer1(wordArrayA,wordArrayB)).toEqual(arrayFinal);

})