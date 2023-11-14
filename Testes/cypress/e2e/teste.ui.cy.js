/// <reference types ="cypress"/>

describe('Criando cenário de teste para o site Uai Rango', () => {

  it.skip('Caso de teste: Pesquisa de Items e acesso', () => {

      cy.visit('https://www.uairango.com/delivery/santa-rita-do-sapucai')
      cy.get('#palavra').type('Restaurante Elite Mineira')
      cy.get('#palavra').type('{enter}');
      cy.get('.foto-estabelecimento').click()

  })

  it.skip('Caso de teste: Criando usuário com sucesso', () => {
      
      let info = criarUsuario()
  })


})

it.skip('Caso de teste: Login Falho', () => {

  cy.visit('https://www.uairango.com/delivery/santa-rita-do-sapucai')
  cy.get('.modal_login').click()
  cy.get('#email_login').type('VaidarErrado@gmail.com')
  cy.get('#senha_login').type('sla123')
  cy.get('#botao_login').click()

})

it.skip('Caso de teste: Filtrar Restaurantes falho', () => {

  cy.visit('https://www.uairango.com/delivery/santa-rita-do-sapucai')
  cy.get('#entrega_delivery').click()
  cy.get('#outras_formas').click()
  cy.get(':nth-child(12) > label > #id_segmento\[\]').click()


})

it.skip('Caso de teste: Mudar Cidade sem opções', () => {

  cy.visit('https://www.uairango.com/delivery/santa-rita-do-sapucai')
  cy.get('.menu1 > [href="principal"]').click()
  cy.get('.modal_cidades').click()

})

it('Caso de teste: Acessar Instagram Uai Rango', () => {

  cy.visit('https://www.uairango.com/delivery/santa-rita-do-sapucai')
  cy.get('.menu1 > [href="principal"]').click()
  cy.get('[href="https://www.instagram.com/uairango"] > .efeito').click()

})

function criarUsuario(){

  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let nome = 'Joao Testador de site'
  let telefone = '27' + '998734212'
  let email = horas + minutos + 'Teste' + '@gmail.com'
  let senha = horas + minutos + segundos + 'Senha'
  let userInfo = [nome, telefone, email, senha]

  cy.visit('https://www.uairango.com/delivery/santa-rita-do-sapucai')
  cy.get('.modal_login').click()
  cy.get('.infos-login > .criar').click()
  cy.get('#nome').type(nome)
  cy.get('#tel1').type(telefone)
  cy.get('#email').type(email)
  cy.get('#senha').type(senha)
  cy.get('#senha2').type(senha)
  cy.get('.checa-politica').click()
  cy.get('.infos-cadastro > .form-login > #form_site > [name="envia"]').click() 



  return userInfo

}