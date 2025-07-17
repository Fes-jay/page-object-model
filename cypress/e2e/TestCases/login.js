/// <reference types="cypress" />
import LoginPageElements from "../../../pageObject/pageActions/LoginPageActions"
const login_Element = new LoginPageElements
describe("Page Object Model", () => {
    it("Login Page", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        
        login_Element.username('Admin')
        login_Element.password('admin123')
        login_Element.loginbtn()
       //this is just to test that i can deploy changes

    })
});
