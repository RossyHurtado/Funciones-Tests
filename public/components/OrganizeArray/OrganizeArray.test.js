"use strict";
const ejer6 = require("./OrganizeArray");
test("organizacion", () => {
    let arraynl = [];
    arraynl = ["r", 2, "o", "s", 4, 3];
    let result = [];
    result = ["o", "r", "s", 3, 2, 4];
    expect(ejer6(arraynl)).not.toEqual(result);
});
