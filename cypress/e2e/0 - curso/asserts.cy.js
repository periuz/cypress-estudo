/// <reference types = "cypress" />


//About equality
it ('Equality', () => {
    const a = 1

    expect(a).equal(1)
    expect(a, 'It should be 1').equal(1)
    expect(a).to.be.equal(1);
    expect('a').not.be.equal('b')
})


//About true and false
it('Truthy', () => {
    const a = true
    const b = null;
    let c

    expect(a, 'It should be true').to.be.true
    expect(b, 'It should be null').to.be.null
    expect(c, 'It should be undefined').to.be.undefined
})


//About objects
it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj, 'It should be equal itself').equal(obj)
    expect(obj, 'It should be equal itself').equals(obj)
    expect(obj, 'It should be equal itself').to.be.equal(obj)
    expect(obj, 'It should be equal in a deep way').to.be.deep.equal({a:1, b:2})
    expect(obj, 'It should verify if the object have some equal property').include({a:1})
    expect(obj, 'It should verify a specific property').to.have.property('b', 2)
    expect(obj, 'It should verify if it isnt empty').to.not.be.empty
    expect({}, 'It should be empty').to.be.empty
}) 

//About arrays
it('Arrays', () =>{
    const arr = [1,2,3]
    expect(arr, 'It should have the same membrs').to.have.members([1,2,3])
    expect(arr, 'It should have some same values include').to.include.members([1,2])
    expect(arr, 'It should be not empty').to.not.be.empty
    expect([], 'It should be empty').to.be.empty
})

//About types
it('Types', () => {
    const num = 1;
    const str = "ola"

    expect(num, 'It should be a number').to.be.a('number')
    expect(str, 'It should be a string').to.be.a('string')
    expect([], 'It should be an array').to.be.an('array')
    expect({}, 'IT should be an object').to.be.a('object')
})

//About strings
it('Strings', () => {
    const str = 'STRING LEGAL'

    expect(str, 'It should have 6 letters').to.have.length(12)
    expect(str, 'It should contains a specific part of string').to.contains('STR')
    expect(str, 'It should verify if beggin with String').to.match(/^STRING/)
    expect(str, 'It should verify if ends with LEGAL').to.match(/LEGAL$/)
    expect(str, 'It should verify if contains only letter').to.match(/\w+/)
    expect(str, 'It should verify if not contains numbers').to.match(/\D+/)
    
})

//About numbers
it ('Numbers', () => {
    const num = 1
    const floatNum = 1.2

    expect(num, 'It should be above 0').to.be.above(0)
    expect(num, 'It should be below 2').to.be.below(2)
    expect(floatNum, 'It should be close to 1.2').to.be.closeTo(1.12, 0.1)//Último parâmetro é a precisão
})