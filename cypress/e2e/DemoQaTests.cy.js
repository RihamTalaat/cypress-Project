import HomePage from '../support/pages/HomePage';
import PracticeFormPage from '../support/pages/PracticeFormPage';
import WebTablesPage from '../support/pages/WebTablesPage';


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe("Test Page Elements",()=>{
    const homepage = new HomePage();
    const webTablesPage = new WebTablesPage();
    const practiceFormPage= new PracticeFormPage();

    beforeEach(()=>{
        cy.visit("/");
    });
    after(() => {
      
      cy.window().then(win => win.close());
    });

    it("TC01- Verify user can enter new data into the table",()=>{
        cy.fixture('tableData.json').then((data)=>{
        homepage.goToElementsPage();
        webTablesPage.goToWebTablePage();
        webTablesPage.addNewRecord();
        webTablesPage.enterUserData(data.firstName,data.lastName,data.email,data.age,data.salary,data.department);
        webTablesPage.submitUserRecord();
        webTablesPage.validateUserDataSaved(data.firstName,data.lastName,data.email,data.age,data.salary,data.department);
      });
      });
    it('TC02 - Verify user can submit the form.',()=>{
      cy.fixture("form.json").then((formdata) => {
      homepage.goFormsPage();
      practiceFormPage.gotoPracticeFormPage();
      practiceFormPage.enterFormData(
        formdata.firstName,
        formdata.lastName,
        formdata.email,
        formdata.gender,
        formdata.mobile,
        formdata.birthDate,
        formdata.subjects,
        formdata.hobbies,
        formdata.picture,
        formdata.currentAddress,
        formdata.state,
        formdata.city
);
      practiceFormPage.submitform();
practiceFormPage.validateSubmitData( 
  formdata.firstName,
  formdata.lastName,
  formdata.email,
  formdata.gender,
  formdata.mobile,
  formdata.birthDate,
  formdata.subjects,
  formdata.hobbies,
  formdata.picture,
  formdata.currentAddress,
  formdata.state,
  formdata.city)
      });
    });
});
