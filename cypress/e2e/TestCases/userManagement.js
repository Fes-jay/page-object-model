/// <reference types="cypress" />


describe("User Management", () => {

  beforeEach(() => {
    // Visit and log in before each test
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    });

  it("Admin can see 'User Management' in the top bar of the Admin page", () => {

    cy.get("li[class='oxd-topbar-body-nav-tab --parent --visited'] span[class='oxd-topbar-body-nav-tab-item']")
    .should('have.text','User Management ')
    });

  it("Admin can verify the dropdown on User Management functions properly", () => {
    cy.get("li[class='oxd-topbar-body-nav-tab --parent --visited'] i[class='oxd-icon bi-chevron-down']").click()

    });

  it("Admin can verify that the Users link is clickable", () => {
    cy.get("li[class='oxd-topbar-body-nav-tab --parent --visited'] i[class='oxd-icon bi-chevron-down']").click()
    cy.get("ul[class='oxd-dropdown-menu'] li").click()
    });

  it("Admin can verify the presence of the 'Add User' button on the Add User page", () => {
    cy.get("li[class='oxd-topbar-body-nav-tab --parent --visited'] i[class='oxd-icon bi-chevron-down']").click()
    cy.get("ul[class='oxd-dropdown-menu'] li").click()
    cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
    cy.get(".oxd-text.oxd-text--h6.orangehrm-main-title").should('have.text','Add User')

    });

  it("Admin can validate error handling for empty required field", () => {
    cy.get("li[class='oxd-topbar-body-nav-tab --parent --visited'] i[class='oxd-icon bi-chevron-down']").click()
    cy.get("ul[class='oxd-dropdown-menu'] li").click()
    cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
    cy.get("button[type='submit']").click()

    });

  it.only("Admin can add user and assign roles successfully", () => {
    cy.get("li[class='oxd-topbar-body-nav-tab --parent --visited'] i[class='oxd-icon bi-chevron-down']").click()
    cy.get("ul[class='oxd-dropdown-menu'] li").click()
    cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
    
    // cy.get("button[type='submit']").click()

    });

    
    

});
