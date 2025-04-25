/// <reference types = "cypress" />


//Faz um teste somente
it ('A external test', () => {
     
})


//Faz um grupo de testes (tipo uma suíte, imagino)
describe ('It should be a group test', () => {
    
    describe ('It should be a more specific group of tests', () =>{
        it ('A more specif test', () => {

        })
        it.skip ('A ignored specif test', () => { //posso pedir também para skipar um teste específico

        })
    })

    describe.skip ('It should be a ignored specific group of tests', () =>{ //posso skipar um grupo todo tb
        it ('A more specif test inclued in ignored group', () => { 

        })
        it ('A more specif test inclued in ignored group', () => { 

        })
    })
    
    it ('A internal test', () => {

    })
})