/// <reference types ="cypress"/>

describe('Criando cenário de teste para o site globalsqa', () => {

    it.skip('Caso de teste: Registrando um usuário no site com sucesso', () => {

        cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('.btn-link').click()
        cy.get('#firstName').type('Inatel')
        cy.get('#Text1').type('Inatel')
        cy.get('#username').type('Inatel')
        cy.get('#password').type('Inatel')
        cy.get('.btn-primary').click()
        cy.get('.ng-binding').should('contain.text', 'Registration successful') // contain text significa que pode ter outra coisa escrita

    })

})