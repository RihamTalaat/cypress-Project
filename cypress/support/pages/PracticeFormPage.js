class PracticeFormPage {
  gotoPracticeFormPage(){
    cy.contains('span', 'Practice Form').click();
    cy.get('.text-center').should('have.text','Practice Form');
  }
  enterFormData(firstName,lastName,email,gender,mobile,dateOfBirth,subject,hobbies,photo,address,state,city){
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get(`input[name="gender"][value=${gender}]`).check({ force: true });
    cy.get('#userNumber').type(mobile);

    const [day, month, year] = dateOfBirth.split(" "); // Split the actual variable
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').should('be.visible').select(month);
    cy.get('.react-datepicker__year-select').should('be.visible').select(year);
    cy.contains('.react-datepicker__day', day).click();

    cy.get('#subjectsContainer').type(`${subject}{enter}`);
    cy.get('.custom-control-label').contains(hobbies).click();

   cy.get('#uploadPicture').attachFile(photo);

    cy.get('#currentAddress').type(address);

    cy.get('#state').click().type(`${state}{enter}`);
   // cy.get('div[role="option"]').should('be.visible').contains(state).click({ force: true });
    cy.get('#city').click().type(`${city}{enter}`)

  }
  submitform(){
    cy.get('#submit').click();
    cy.get('#example-modal-sizes-title-lg').should('have.text','Thanks for submitting the form');
  }
  validateSubmitData(firstName,lastName,email,gender,mobile,dateOfBirth,subject,hobbies,photo,address,state,city){
  
    const [day, month, year] = dateOfBirth.split(" "); 
    cy.contains('td', firstName+" "+lastName).should('be.visible');
    cy.contains('td', email).should('be.visible');
    cy.contains('td', gender).should('be.visible');
    cy.contains('td', mobile).should('be.visible');
    cy.contains('td',day+" "+month+","+year).should('be.visible');
    cy.contains('td', subject).should('be.visible');
    cy.contains('td', hobbies).should('be.visible');
    cy.contains('td', photo).should('be.visible');
    cy.contains('td', address).should('be.visible');
    cy.contains('td',state+" "+city).should('be.visible');
   
  }
}
  
  export default PracticeFormPage;