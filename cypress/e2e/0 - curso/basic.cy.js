/// <reference types = "cypress" />

describe ('Basic Cypress', () =>{
    it.only ('Should visit a page and assert title', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.pause()//Pausa o teste e permite executar cada etapa por vez

        cy.title().should('be.equal', 'Campo de Treinamento').debug()//Debug "serve para ver" mais info
    
        cy.title()
            .should('contain', 'Treinamento')
            .and('be.equal', 'Campo de Treinamento') //Podemos ir adicionando should através de ponto e and
    })

    it ('Should interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('contains.value', 'Obri')
            .and('have.value', 'Obrigado!')
            .and('have.not.value', 'Click me!')

    })

})