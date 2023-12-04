describe("Computer Database Tests", () => {
    it("Pesquisar Computador Existente", () => {
      cy.visit("https://computer-database.gatling.io/computers");
      cy.get("#searchbox").type("Apple II");
      cy.contains("Filter by name").click();
      cy.contains("Apple II").should("exist");
    });
    it("Adicionar Novo Computador", () => {
      cy.visit("https://computer-database.gatling.io/computers");
      cy.contains("Add a new computer").click();
      cy.get("#name").type("Test Computer");
      cy.get("#introduced").type("2022-01-01");
      cy.get("#discontinued").type("2023-01-01");
      cy.get("#company").select("RCA");
      cy.contains("Create this computer").click();
  
      cy.wait(2000);
      cy.contains("Test Computer").should("exist");
    });
  
    it("Editar Computador Existente", () => {
      cy.visit("https://computer-database.gatling.io/computers");
      cy.contains("ACE").click();
      cy.get("#name").clear().type("Edited Apple ACE");
      cy.contains("Save this computer").click();
  
      cy.wait(2000);
      cy.contains("Edited Apple II").should("exist");
    });
  });