const ejer8 = require ('./Ideas');

test('Result Ideas', () =>{

    const ideas: string[] = ['Buena', 'Regular', 'Normal'];
    expect(ejer8(ideas)).toBe('Publicar, fantastico');
});