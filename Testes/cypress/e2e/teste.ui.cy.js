/// <reference types ="cypress"/>

describe('Criando cenário de teste para o site Kabum', () => {

  it('Caso de teste: Pesquisa de Items', () => {

      cy.visit('https://www.kabum.com.br')

  })

  it.skip('Caso de teste: Criando usuário com sucesso', () => {
      
      let info = criarUsuario()
  })


})

function criarUsuario(){

  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let nome = 'Joao Testador de site'
  let cpf = '963.230.617-16'
  let nascimento = '23' + '10' + '2002'
  let telefone = '27' + '998734212'
  let email = horas + minutos + '@gmail.com'
  let senha = horas + minutos + segundos + 'Senha'
  let userInfo = [nome, cpf, nascimento, telefone, email, senha]
  let cep = '29103472'
  let identi = 'Casa'
  let rua = 'Rua Flávio da Vitória'
  let numero = '9'
  let complemento = '5'
  let bairro = 'Jardim Guaranhuns'
  let cidade = 'Vila Velha'
  let uf = 'ES'

  cy.visit('https://www.kabum.com.br/login?redirect_uri=https://www.kabum.com.br/')
  cy.get('.sc-kNecGe > a').click()
  cy.get(':nth-child(1) > :nth-child(1) > .sc-gweoQa > .sc-eIcdZJ > input').type(nome)
  cy.get(':nth-child(1) > :nth-child(2) > .sc-gweoQa > .sc-eIcdZJ > input').type(cpf)
  cy.get(':nth-child(2) > :nth-child(1) > .sc-gweoQa > .sc-eIcdZJ > input').type(nascimento)
  cy.get(':nth-child(2) > :nth-child(2) > .sc-gweoQa > .sc-eIcdZJ > input').type(telefone)
  cy.get(':nth-child(3) > .sc-la-DkbX > .sc-gweoQa > .sc-eIcdZJ > input').type(email)
  cy.get(':nth-child(4) > :nth-child(1) > .sc-gweoQa > .sc-eIcdZJ > input').type(senha)
  cy.get(':nth-child(4) > :nth-child(2) > .sc-gweoQa > .sc-eIcdZJ > input').type(senha)
  cy.get('.sc-gvPdwL').click()
  cy.get('.sc-djVXDX > :nth-child(2)').click()
  cy.get(':nth-child(8) > .sc-fyVfxW > .sc-eHsDsR > .inputMark').click
  cy.get('.sc-ikkxIA').click()

  cy.get(':nth-child(2) > :nth-child(1) > .sc-gweoQa > .sc-eIcdZJ > input').type(cep)
  cy.get(':nth-child(2) > :nth-child(2) > .sc-gweoQa > .sc-eIcdZJ > input').type(identi)
  cy.get('.logradouro > .sc-gweoQa > .sc-eIcdZJ > input').type(rua)
  cy.get('.numero > .sc-gweoQa > .sc-eIcdZJ > input').type(numero)
  cy.get('.complemento > .sc-gweoQa > .sc-eIcdZJ > input').type(complemento)
  cy.get('.OoyCV > :nth-child(1) > .sc-gweoQa > .sc-eIcdZJ > input').type(bairro)
  cy.get('.OoyCV > :nth-child(2) > .sc-gweoQa > .sc-eIcdZJ > input').type(cidade)
  cy.get('.OoyCV > :nth-child(3) > .sc-gweoQa > .sc-eIcdZJ > input').type(uf)
  cy.get('.OoyCV > :nth-child(3) > .sc-gweoQa > .sc-eIcdZJ > input').click()


  return userInfo

}