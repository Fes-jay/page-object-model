const srhPage = require("../pageElements/searchUserPageAction.json")

class search {
    usernameinput(){
        cy.get(srhPage.searchPage.usernameSearch).type('Admin');
        return
    }
    searchSubBtn(){
        cy.get(srhPage.searchPage.subBtn).click();
        return
    }

    StatusClickt(){
        cy.get(('div.oxd-select-text-input').eq(1)).click();
        return
    }
    invalidUsername(){
        cy.get(srhPage.searchPage.usernameSearch).type('wearegreatyeswearedefine');
        return
    } 
    
    resetBtn(){
        cy.get(srhPage.searchPage.reset_btn).click();
        return
    }

    searchToggleBtn(){
        cy.get(srhPage.searchPage.toggle_btn).click();
        return
    }

    checkBox(){
        cy.get(srhPage.searchPage.checkbox_link).click();
        return
    }
    checkBox2(){
        cy.get(srhPage.searchPage.checkbox_link2).click();
        return
    }   

    deleteSelBtn(){
        cy.get(srhPage.searchPage.deleteSelectedBtn).should('have.text', ' Delete Selected ')
        return
    }

    clickDeleteBtn(){
        cy.get(srhPage.searchPage.deleteSelectedBtn).click()
        return
    }

    dialogBtn(){
        cy.get(srhPage.searchPage.dialog_closeBtn).click();
        return
    }
    
    deleteIcon(){
        cy.get(srhPage.searchPage.delete_icon).click();
        return
    }

    Yes_Delete_Btn(){
        cy.get(srhPage.searchPage.Yes_delete_btn).click();
        return
    }

     checkbox_all(){
        cy.get(srhPage.searchPage.check_all).click();
        return
    }
    

    

    
    

    




      
 

}

export default search