/// <reference types = "cypress" />

describe ('Working with basic elements', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    
    it('About texts', () => {
        cy.get('body')//Busco pelos tipos de elemento, mas pego direto no HTML
            .should('contain', 'Cuidado')

        cy.get('span')
            .should('contain', 'Cuidado')//Posso deixar um pouco mais específico

        cy.get('.facilAchar')//Conseguir através do playground selector
            .should('have.text', 'Cuidado onde clica, muitas armadilhas...')//Especificar ao máximo
    })

    it ('About links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.contains('Voltar').click()
    })

    it ('Text Fields', () => {
        cy.get('#formNome')
            .type('Thiago')
            .should('have.value', 'Thiago')

        cy.get('[data-cy="dataSobrenome"]')
            .type('da Silva')
            .should('have.value', 'da Silva')

        cy.get('#elementosForm\\:sugestoes')//Quando se tem ":" usamos "\\" para escapar
            .type('Aleatorio')
            .should('have.value', 'Aleatorio')
            .clear()
            .type('erro{selectall}acerto', {delay: 300})
            .should('have.value', 'acerto')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('Coisa123{backspace}{backspace}{backspace}')
            .should('have.value', 'Coisa')
    })

    it ('Radio Button',() => {
        cy.get('#formSexoMasc')
            .click()
            .should('be.checked')

        cy.get('#formSexoFem')
            .should('not.be.checked')

    })

    it ('Check Box', () =>{
        cy.get('#formComidaPizza')
           .click()
           .should('be.checked')

        cy.get('[name=formComidaFavorita]')
            .click({multiple:true})//Permite clicar em vários elementos de uma só vez

        cy.get('#formComidaFrango')
            .should('be.checked')

        cy.get('#formComidaPizza')
            .should('not.be.checked')
    })

    it ('Combox Box', () => {
        cy.get('[data-test="dataEscolaridade"]')
            .select('1grauincomp')
            .should('be.value', '1grauincomp')
    })

    it.only ('Multiple Combo', () => {
        cy.get('[data-testid="dataEsportes"]')
            .select(['natacao', 'Corrida', 'nada'])//Interpreta como array, tendo que selecionar o value
        })

        //TODO implementacao

})