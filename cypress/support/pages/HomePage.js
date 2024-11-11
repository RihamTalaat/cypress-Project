class HomePage {
    goToElementsPage(){
        cy.get('h5').contains("Elements").click();
        cy.get('.header-text').contains('Elements').should('be.visible');
    }

    goFormsPage(){
        cy.get('h5').contains('Forms').click();
    }

}
export default HomePage;