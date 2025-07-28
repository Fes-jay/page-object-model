 
 
 const loginElementLocators = require("../pageElements/LoginPageElement.json")

export class LoginPageElements{

    username(usernamee) {
        cy.get(loginElementLocators.LoginPageLocators.username_text).type(usernamee)
        return
    }

    password(passwordd) {
        cy.get(loginElementLocators.LoginPageLocators.password_text).type(passwordd)
        return
    }

    loginbtn() {
        cy.get(loginElementLocators.LoginPageLocators.login_btn).click();
        return
    }
}

export default LoginPageElements