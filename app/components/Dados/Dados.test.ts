const ejer10 = require ('./Dados');

test('LanzamientoDados', ()=>{
    
    const result:Record<string,number> = {};

    expect(ejer10(result)).not.toEqual({});
});