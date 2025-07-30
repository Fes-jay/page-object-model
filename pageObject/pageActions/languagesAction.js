
const languagesElementsLocators = require("../pageElements/languagesPageElement.json")

export class languagesPageElement {
     

    languageslink(){
        cy.get(languagesElementsLocators.languagesPageLocators.languages_link).click()
        return
    }

     addboton(){
        cy.get(languagesElementsLocators.languagesPageLocators.addbtn).click()
        return
    }
     languageadd(language){
        cy.get(languagesElementsLocators.languagesPageLocators.languages).type(language)
        return
    }

     save(saved){
        cy.get(languagesElementsLocators.languagesPageLocators.save).click()
        return
    }
    canceeel(canceel){
        cy.get(languagesElementsLocators.languagesPageLocators.cancel).click()
        return
    }

    allcheckbox(checkbos){
        cy.get(languagesElementsLocators.languagesPageLocators.checkboxx).click()
        return
    }

    deleteselected(deleteselecteed){
        cy.get(languagesElementsLocators.languagesPageLocators.delete_selected).click()
        return
    }

    yesdelete(yesdeleted){
        cy.get(languagesElementsLocators.languagesPageLocators.yesdelete).click()
        return
    }

    auser(ausercheck){
        cy.get(languagesElementsLocators.languagesPageLocators.acheckbox).click()
        return
    }
     deleteicon(deleeeticon){
        cy.get(languagesElementsLocators.languagesPageLocators.deleteicon).click()
        return
    }

     editicon(ediiticon){
        cy.get(languagesElementsLocators.languagesPageLocators.editicon).click()
        return
    }
}
export default languagesPageElement