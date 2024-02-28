const CparaF = require('./sla')

describe('testa função de celsius para Farenheit', ()=>{
    test('verifica se o celsius é transformado em farenheit', ()=>{
        expect(CparaF(100)).toBe(212)
    })
})