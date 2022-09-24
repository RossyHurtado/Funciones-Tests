"use strict";
const ejer3 = require("./MultiWordArray");
test("Multiword", () => {
    let multiWordArray1 = ["r", "s", "y"];
    let multiWordArray2 = ["v", "d", "l"];
    let multiWordArray3 = ["c", "g", "j"];
    let group = multiWordArray1.concat(multiWordArray2, multiWordArray3);
    expect(ejer3(group)).toEqual(group);
});
