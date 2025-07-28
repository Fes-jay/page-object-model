
const addAndVerifyUser = require("../pageElements/addUserPageElement.json")

class addUserPageElements{

    addButton(){
        cy.get(addAndVerifyUser.AddAndVerifyUser.addbtn).click()
        return

    }

    addUserTittle(){
        cy.get(addAndVerifyUser.AddAndVerifyUser.addUserTitle).contains('Add User').should('have.text','Add User')
        return
    }

    saveButton(){
         cy.get(addAndVerifyUser.AddAndVerifyUser.savebtn).click()
         return
    }


    userRole(){
        cy.get(addAndVerifyUser.AddAndVerifyUser.userRoleLink).click();
    }
    userRole_Nav(){
        cy.get(addAndVerifyUser.AddAndVerifyUser.userRoleNav).contains('ESS').click({ force: true });
    }
    status(){
        
    }


    employeeName(){
        
    }

    userName(){
    cy.get(addAndVerifyUser.AddAndVerifyUser.username_link).type('welak')      
    }

    password(){
        cy.get(addAndVerifyUser.AddAndVerifyUser.PassWord_link).eq(0).type('Damkay34@');
    }

    weakPassword(){
        cy.get(addAndVerifyUser.AddAndVerifyUser.PassWord_link).eq(0).type('kay34');
    }

    weakconfirmPassword(){
        cy.get(addAndVerifyUser.AddAndVerifyUser.PassWord_link).eq(1).type('kay34');
    }
    
    confirmPassword(){
        cy.get(addAndVerifyUser.AddAndVerifyUser.confirmPassword_link).eq(1).type('Damkay34@')
    }
    weakPass_txt(){
        cy.get(addAndVerifyUser.AddAndVerifyUser.weakPasMsg).should('have.text', 'Should have at least 7 characters')
    }
    Pass_MismatchTxt(){
        cy.get(addAndVerifyUser.AddAndVerifyUser.Password_Mismatch).should('have.text', 'Passwords do not match')
    }

    cancelButton(){
        cy.get(addAndVerifyUser.AddAndVerifyUser.cancelbtn).click();
    }
    editBtn(){
        cy.get(addAndVerifyUser.AddAndVerifyUser.edit_Btn).eq(0).click();
        return
    }
}

export default addUserPageElements