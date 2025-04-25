/// <reference types = "cypress" />

describe ('Helpers...', () => {
    
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    
    it.skip ('Wrap', () => {
        const obj = {nome: 'Thiago', idade: 18}

        //expect(obj).to.have.property('nome')
        //should('have.property', 'nome') -> NAO funcionaria, pois nao estamos usando o Cypress! 
        //cy.wrap(obj).should('have.property', 'nome')//API do Cypress através do wrap, ent funciona!

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        //cy.get('#formNome').then($el => {
        //        cy.wrap($el).type('Thiago')
        //        console.log($el)
        //})

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => console.log('Teste de impressão primeiro botão'))
        //promise.then(num => console.log('num')) NÃO ta sob controle do cypress, por isso n fica em ordem
        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonList').then(() => console.log('Teste de impressão segundo botão'))
    })

    it.skip ('Testando, pois achei dificil', () => {
        const obj = {nome: 'Thiago', idade: 18}
        cy.wrap(obj).should('have.property', 'nome', 'Thiago')

        cy.get('#formNome').then(($el) => {//Basicamente transforma o elemento em uma variável
            
            cy.wrap($el).type('Thiago')//Chama a API do Cypress e se pode dar comandos na variável - basicamente instancia a classe Cypress para usar seus métodos
            console.log($el)
        })
    })

    it ('Skips', () => {
        const obj = {nome: 'Thiago', idade: 18}
        cy.wrap(obj).should('have.property', 'nome', 'Thiago')
        cy.wrap(obj).its('nome').should('be.equal', 'Thiago')//ITS só quero a informacao especifica

        const obj2 = {nome: 'Thiago', idade: 18, endereço: {rua: 'Olivar'}}
        cy.wrap(obj2).its('endereço').should('have.property', 'rua')
        cy.wrap(obj2).its('endereço.rua').should('contain', 'Olivar')
        cy.title().its('length').should('be.equal', 20)
    })

    it.only ('Invoke', () => {
        cy.get('#formNome').invoke('val', 'Texto via Invoker')
    })
})