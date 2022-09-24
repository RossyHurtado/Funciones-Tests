const ejer6 = require ("./OrganizeArray");

test("organizacion", () =>{

    let arraynl: any [] =[];
        arraynl = ["r", 2, "o", "s", 4, 3];

    let result: any [] = [];
        result = ["o","r","s",3,2,4];


    expect(ejer6(arraynl)).not.toEqual(result);

})