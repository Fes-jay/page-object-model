const UserMgtPageLocators = require("../pageElements/userManagementPageElement.json")

class userManagementElement{

    userManagementVisibility(){
        cy.get(UserMgtPageLocators.UserMgtPageLocators.userManagementVisibility_txt).contains('User Management ') 
    }   


    userManagementDropdown(){
        cy.get(UserMgtPageLocators.UserMgtPageLocators.userManagementDropdown_txt).click()
    }

    userVisibilty(){
        cy.get(UserMgtPageLocators.UserMgtPageLocators.userVisibilty_txt).click()
        cy.get("ul[class='oxd-dropdown-menu'] li").click()
    }

    searchUsername(){  

    }


    searchUserRole(){
        
    }


    searchEmployeeName(){
        
    }

    searchStatus(){
        
    }

    addButton(){
        
    }
    

    searchButton(){
        
    }

    resetButton(){
        
    }

    deleteIcon(){
        
    }
    editIcon(){
        
    }

}

export default userManagementElement