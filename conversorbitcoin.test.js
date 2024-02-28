const BparaR = require('./conversorbitcoin')

describe('teste a conversão de bitcoins para reais',()=> {
    test('teste quantos reais é cada bitcoin', ()=>{
        expect(BparaR(3)).toBe(900000)
    })
})