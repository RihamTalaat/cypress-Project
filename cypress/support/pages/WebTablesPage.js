class WebTablesPage {
   goToWebTablePage(){
        cy.get('#item-3').click();
        cy.get('.text-center').should('have.text',"Web Tables");
    }
    addNewRecord(){
        cy.get('#addNewRecordButton').click();
        cy.get('#registration-form-modal').should('be.visible').contains('Registration Form');

    }
    enterUserData(firstName, lastName, email,age, salary, department){
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastName);
        cy.get('#userEmail').type(email);
        cy.get('#age').type(age);
        cy.get('#salary').type(salary);
        cy.get('#department').type(department);
    }
    submitUserRecord(){
     cy.get('#submit').click();
    }
    validateUserDataSaved(firstName, lastName, email,age, salary, department){
   
    cy.get('.rt-tbody').within(() => {
    cy.contains('.rt-tr', firstName)
      .should('contain',firstName)
      .and('contain',lastName)
      .and('contain', age)
      .and('contain', email)
      .and('contain', salary)
      .and('contain', department)
    });
    }

  
}
  export default WebTablesPage;