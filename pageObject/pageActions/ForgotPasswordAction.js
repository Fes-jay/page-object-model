const forgotPasswordLocators = require("../pageElements/ForgotPasswordPage.json")

class ForgotPageElements{

    forgotPasswordLink() {
        cy.get(forgotPasswordLocators.ForgotPasswordLocators.forgotPassword_Link).click()
        return
    }

    username() {
        cy.get(forgotPasswordLocators.ForgotPasswordLocators.username_text).type('Admin')
         return
    }

    submitbtn() {
         cy.get(forgotPasswordLocators.ForgotPasswordLocators.submit_btn).click();
        return
    }

    verifySubPage() {
         cy.get(forgotPasswordLocators.ForgotPasswordLocators.ver_Page).should('have.text', 'Reset Password link sent successfully')
        return
    }
}

export default ForgotPageElements