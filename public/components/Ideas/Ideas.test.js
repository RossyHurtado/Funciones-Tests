"use strict";
const ejer8 = require('./Ideas');
test('Result Ideas', () => {
    const ideas = ['Buena', 'Regular', 'Normal'];
    expect(ejer8(ideas)).toBe('Publicar, fantastico');
});
