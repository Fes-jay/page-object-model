/// <reference types="cypress" />
import addUserPageElements from "../../../pageObject/pageActions/addUserPagePOM"
const AUserPageE= new addUserPageElements
describe("User Management", () => {

 beforeEach(() => {
    cy.loginAsAdmin();
  });

 
  it("Admin can verify the presence of the 'Add User' on the Add User page", () => {

    AUserPageE.addButton();
    AUserPageE.addUserTittle();
    });

  it("Admin can validate error handling for empty required field", () => {
    AUserPageE.addButton();
    AUserPageE.saveButton();
    cy.contains('span', 'Required').eq(0).should('have.text', 'Required');
    });


  it("Admin can add a user and assign roles successfully", () => {
  
    // cy.get('.orangehrm-header-container .oxd-button').click();
    AUserPageE.addButton();
    cy.contains('Select').click();
    cy.get('.oxd-select-dropdown').contains('Admin').click({ force: true });

    cy.contains('Select').click();
    cy.get('.oxd-select-dropdown').contains('Enabled').click({ force: true });

    AUserPageE.password();
    AUserPageE.confirmPassword();

    cy.get("input[placeholder='Type for hints...']").type('Ranga')
    cy.get('.oxd-autocomplete-wrapper .oxd-autocomplete-dropdown').contains('Ranga Akunuri').click({ force: true });
    
    AUserPageE.userName();
    AUserPageE.saveButton();
  });

  it("Admin can validate error handling for empty required fields on the add user page", () => {
  
    AUserPageE.addButton();
    AUserPageE.password();
    AUserPageE.confirmPassword();
    AUserPageE.saveButton();
    cy.contains("Required").should('have.text', 'Required')
  });

  it("Admin can validate duplicate username on the add user page", () => {
  
    AUserPageE.addButton();

    cy.contains('Select').click();
    cy.get('.oxd-select-dropdown').contains('Admin').click({ force: true });

    cy.contains('Select').click();
    cy.get('.oxd-select-dropdown').contains('Enabled').click({ force: true });

    AUserPageE.password();
    AUserPageE.confirmPassword();

    cy.get("input[placeholder='Type for hints...']").type('Ranga')
    cy.get('.oxd-autocomplete-wrapper .oxd-autocomplete-dropdown').contains('Ranga Akunuri').click({ force: true });
  
    AUserPageE.userName();
    AUserPageE.saveButton();

    cy.get(':nth-child(4) > .oxd-input-group > .oxd-text').should('have.text','Already exists')
  });

  it("Admin can verify the cancel button functionality", () => {

    AUserPageE.addButton();
     cy.contains('Select').click();
    cy.get('.oxd-select-dropdown').contains('Admin').click({ force: true });

    cy.contains('Select').click();
    cy.get('.oxd-select-dropdown').contains('Enabled').click({ force: true });

    AUserPageE.password();
    AUserPageE.confirmPassword();

    AUserPageE.userName();
    // cy.get("button[class='oxd-button oxd-button--medium oxd-button--ghost']").click();
    AUserPageE.cancelButton(); 
    });


  it("Verify password creation validation when using weak password", () => {
    AUserPageE.addButton();
    AUserPageE.weakPassword();
    AUserPageE.weakconfirmPassword();
    AUserPageE.weakPass_txt();
    
    });

  it("Verify that the confirmation password mismatch the previous password", () => {
    AUserPageE.addButton();
    AUserPageE.password();
    AUserPageE.weakconfirmPassword();
    AUserPageE.Pass_MismatchTxt();
    });

  it.only("Verify the admin can edit user details.", () => {
    AUserPageE.editBtn();
    AUserPageE.userRole();
    AUserPageE.userRole_Nav();
    AUserPageE.saveButton();
  });

});


