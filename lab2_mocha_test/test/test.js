const assert = require('assert')
const Calculator = require('../app/calculator')

//ADD

describe('Add test', ()=>{
    it('add(2, 1) expected result 3 PASS', ()=>{
        assert.equal(Calculator.add(2,1),3)
    })
})

describe('Add test', ()=>{
    it('add(5, 5) expected result 9 FAIL', ()=>{
        assert.equal(Calculator.add(5,5),9)
    })
})

//MUL

describe('Mul test', ()=>{
    it('mul(2, 2) expected result 4 PASS', ()=>{
        assert.equal(Calculator.mul(2,2),4)
    })
})

describe('Mul test', ()=>{
    it('mul(5, 6) expected result 25 FAIL', ()=>{
        assert.equal(Calculator.mul(5,6),25)
    })
})

//DIV
describe('Div test', ()=>{
    it('div(10, 2) expected result 5 PASS', ()=>{
        assert.equal(Calculator.div(10,2),5)
    })
})

describe('Div test', ()=>{
    it('div(20, 5) expected result 3 FAIL', ()=>{
        assert.equal(Calculator.div(20,5),3)
    })
})

//SUB
describe('Sub test', ()=>{
    it('sub(5, 2) expected result 3 PASS', ()=>{
        assert.equal(Calculator.sub(5,2),3)
    })
})

describe('Sub test', ()=>{
    it('sub(30, 15) expected result 12 FAIL', ()=>{
        assert.equal(Calculator.sub(30,15),12)
    })
})