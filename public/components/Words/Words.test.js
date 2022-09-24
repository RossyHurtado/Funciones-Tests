"use strict";
const ejer4 = require('./Words');
test('RW', () => {
    const arrayW1 = ['apple', 'samsung', 'xiaomi'];
    const arrayW2 = ['huawei', 'apple', 'xiaomi', 'apple'];
    const list = ['apple', 'xiaomi'];
    expect(ejer4(arrayW1, arrayW2)).toEqual(list);
});
