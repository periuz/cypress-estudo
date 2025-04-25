/// <reference types = "cypress" />

describe ('Working with basic elements', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it ('Should wait element be available', () => {
        cy.get('#novoCampo')
            .should('not.exist')
        cy.get('#buttonDelay')
            .click()
        cy.get('#novoCampo')
            .should('not.exist')
        cy.get('#novoCampo')
            .should('exist')
        cy.get('#novoCampo')
            .type('ola')
    })

    it ('Find use', () => {
        cy.get('#buttonList').click()
        
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
            .should('contain', 'Item 2')
    })

    it ('TImeout use', () => {
        cy.get('#buttonList').click()
        //cy.wait(5000) É preferível definir o timer aqui mesmo, não no arquivo do json
        cy.get('#lista li')
            .find('span', {timeout: 30000})//Melhor opcao de espera
            .should('contain', 'Item 2')

    })

    it ('CLick retry', () => {
        cy.get('#buttonCount')
            .click()
            .should('have.value', '1')

            //.should('have.value', '11') -> mesmo se pedirmos o onze ele da certo, pois ele retenta o comando até aparecer o que se espera
    })
    
    it.only ('Should vs Then', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').then($el => {
            //.shoul('have.length', 1) -> isso seria no Cypress, agora fizemos um comando JQuery
            expect($el).to.have.length(1)
            console.log($el)
        })
    })


})