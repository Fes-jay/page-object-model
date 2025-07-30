

const EducationElementsLocators = require("../pageElements/educationPageElement.json")

export class educationPageElement {
     educationlink(){
        cy.get(EducationElementsLocators.EducationPageLocators.education_link).click()
        return
     }

      addbtn(){
        cy.get(EducationElementsLocators.EducationPageLocators.add).click()
        return
     }

     educationlev(educationlevel){
        cy.get(EducationElementsLocators.EducationPageLocators.education_level).type(educationlevel)
        return
     }
     edulev(educationslevel){
        cy.get(EducationElementsLocators.EducationPageLocators.education_level).clear()
        return
     }

     savebtn(){
        cy.get(EducationElementsLocators.EducationPageLocators.save).click()
        return
     }

     cancelbtn(){
        cy.get(EducationElementsLocators.EducationPageLocators.cancel).click()
        return
     }

      check_box(){
        cy.get(EducationElementsLocators.EducationPageLocators.checkbox).click()
        return
     }

     auser(){
        cy.get(EducationElementsLocators.EducationPageLocators.a_user).click()
        return
     }

     delselected(){
        cy.get(EducationElementsLocators.EducationPageLocators.delete_selected).click()
        return
     }

     
     yesdeletee(){
        cy.get(EducationElementsLocators.EducationPageLocators.yesdelete).click()
        return
     }

       nocanceel(){
        cy.get(EducationElementsLocators.EducationPageLocators.no_cancel).click()
        return
     }


      delicon(){
        cy.get(EducationElementsLocators.EducationPageLocators.deleteicon).click()
        return
     }

     edit_icon(){
        cy.get(EducationElementsLocators.EducationPageLocators.editicon).click()
        return
     }
} 

export default educationPageElement