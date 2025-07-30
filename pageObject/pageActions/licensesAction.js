

const licencesElementsLocators = require("../pageElements/licensesPageElement.json")

export class licensesPageElement {
     

    licenseslink(){
        cy.get(licencesElementsLocators.licensesPageLocators.licenses_link).click()
        return
    }

     addboton(){
        cy.get(licencesElementsLocators.licensesPageLocators.addbtn).click()
        return
    }
     licienceadd(licens){
        cy.get(licencesElementsLocators.licensesPageLocators.license).type(licens)
        return
    }

     save(saved){
        cy.get(licencesElementsLocators.licensesPageLocators.save).click()
        return
    }
    canceeel(canceel){
        cy.get(licencesElementsLocators.licensesPageLocators.cancel).click()
        return
    }

    allcheckbox(checkbos){
        cy.get(licencesElementsLocators.licensesPageLocators.checkboxx).click()
        return
    }

    deleteselected(deleteselecteed){
        cy.get(licencesElementsLocators.licensesPageLocators.delete_selected).click()
        return
    }

    yesdelete(yesdeleted){
        cy.get(licencesElementsLocators.licensesPageLocators.yesdelete).click()
        return
    }

    auser(ausercheck){
        cy.get(licencesElementsLocators.licensesPageLocators.acheckbox).click()
        return
    }
     deleteicon(deleeeticon){
        cy.get(licencesElementsLocators.licensesPageLocators.deleteicon).click()
        return
    }

     editicon(ediiticon){
        cy.get(licencesElementsLocators.licensesPageLocators.editicon).click()
        return
    }
}