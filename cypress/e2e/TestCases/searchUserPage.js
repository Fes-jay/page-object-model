/// <reference types="cypress" />
import search from "../../../pageObject/pageActions/searchUserPageAction";
const srh = new search

describe("User Management", () => {

 beforeEach(() => {
    cy.loginAsAdmin();
  });


it("Admin can search users by valid username", () => {
    srh.usernameinput();
    srh.searchSubBtn();
  });
it("Admin can search users by valid User Role", () => {
  
    cy.contains('Select').click();
    cy.get('.oxd-select-dropdown').contains('Admin').click({ force: true });
    srh.searchSubBtn();
  });

it("Admin can search users by valid Employee name", () => {
  
    cy.get("input[placeholder='Type for hints...']").type('Dawn');
    cy.get('.oxd-autocomplete-dropdown').contains('Dawn Reese Reginald').click({ force: true });
    srh.searchSubBtn();

  });

it("Admin can search users by valid Status", () => {
  
    cy.get('div.oxd-select-text-input').eq(1).click();  
    cy.get('.oxd-select-dropdown').contains('Enabled').click({ force: true });
    srh.searchSubBtn();
  });

it("Admin can search users by Employee Name", () => {
    
    cy.get('.oxd-autocomplete-text-input.oxd-autocomplete-text-input--active').type('Russel')
    cy.get('.oxd-autocomplete-dropdown').contains('Russel Hamilton').click();
    srh.searchSubBtn();
  });
it("Admin can search users by invalid username", () => {
    srh.invalidUsername();
    srh.searchSubBtn();
  });
it("Verify Reset button clears the search fields", () => {
    srh.usernameinput();
    srh.resetBtn();
  });

it("Verify that the collapse search button functions as expected", () => {
  srh.searchToggleBtn();

  });
it("Verify that the expand search button can expand the search field", () => {
  srh.searchToggleBtn();
  srh.searchToggleBtn();

  });

it("Verify that 'Delete selected' button appears when clicked on any of the checkbox on the list of Users", () => {
  srh.checkBox();
  srh.deleteSelBtn();

  });
it("Verify that clicking the close button (X) closes confirmation dialog of 'Delete selected'", () => {
  srh.checkBox();
  srh.clickDeleteBtn();
  srh.dialogBtn();
  });


it("Verify Delete user functionality", () => {
  srh.deleteIcon();
  srh.Yes_Delete_Btn();
  });

it("Verify that the checkbox functionality selects all listed users in the record table when clicked", () => {
  srh.deleteIcon();
  srh.Yes_Delete_Btn();
  });

it("Verify that the checkbox functionality selects all listed users in the record table when clicked", () => {
  srh.checkbox_all();
  });

it("Verify the checkboxes functionality on individual users can be used to delete the users on the record table", () => {
  srh.checkBox();
  srh.checkBox2();
  srh.deleteSelBtn();
  });
  


});
 
  