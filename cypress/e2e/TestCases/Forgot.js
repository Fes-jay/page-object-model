/// <reference types="cypress" />
import ForgotPageElements from "../../../pageObject/pageActions/ForgotPasswordAction"
const forgotPageElements = new ForgotPageElements
describe("Page Object Model", () => {
    it("ForgotPassword", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").click()
        // cy.get("input[placeholder='Username']").type('Admin')
        // cy.get("button[type='submit']").click();

        forgotPageElements.forgotPasswordLink();
        forgotPageElements.username();
        forgotPageElements.submitbtn();

        
    });
 
});
