const ejer4 = require ('./Words');

test('RW', ()=>{

    const arrayW1: string[] = ['apple', 'samsung', 'xiaomi'];
    const arrayW2: string[] = ['huawei', 'apple', 'xiaomi', 'apple'];
    
    const list: string[] = ['apple', 'xiaomi'];


    expect(ejer4(arrayW1, arrayW2)).toEqual(list);
});