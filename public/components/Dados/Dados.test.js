"use strict";
const ejer10 = require('./Dados');
test('LanzamientoDados', () => {
    const result = {};
    expect(ejer10(result)).not.toEqual({});
});
