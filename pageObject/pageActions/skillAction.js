const SkillElementsLocators = require('../pageElements/skillPageElement.json');

export class skillPageElement{

    skilllinks() {
            cy.get(SkillElementsLocators.SkillPageLocators.skilllink).click()
            return
        }

        dropdd() {
            cy.get(SkillElementsLocators.SkillPageLocators.dropdwn).click()
            return
        }
         addbtttn() {
            cy.get(SkillElementsLocators.SkillPageLocators.addbtn).click()
            return
        }
         saves() {
            cy.get(SkillElementsLocators.SkillPageLocators.savee).click()
            return
        }
        des(descriip) {
            cy.get(SkillElementsLocators.SkillPageLocators.descrip).type(descriip)
            return
        }

         namees(nameii) {
            cy.get(SkillElementsLocators.SkillPageLocators.name).type(nameii)
            return
        }
 cancil(canceeil) {
            cy.get(SkillElementsLocators.SkillPageLocators.cancell).click()
            return
        }
        
        checkbbb(checkbbbox) {
            cy.get(SkillElementsLocators.SkillPageLocators.checkboxx).click()
            return
        }

        delsel(delsell) {
            cy.get(SkillElementsLocators.SkillPageLocators.delete_selected).click()
            return
        }

        yesdel(yeesdel) {
            cy.get(SkillElementsLocators.SkillPageLocators.yesyes_del).click()
            return
        }

         noocal(coocancel) {
            cy.get(SkillElementsLocators.SkillPageLocators.no_can).click()
            return
        }

        onecheck(onecheeck) {
            cy.get(SkillElementsLocators.SkillPageLocators.one_checkbox).click()
            return
        }

         deleted(deleteed) {
            cy.get(SkillElementsLocators.SkillPageLocators.delete).click()
            return
        }

         dellee(delleed) {
            cy.get(SkillElementsLocators.SkillPageLocators.deldel).click()
            return
        }

        eddit(edddit) {
            cy.get(SkillElementsLocators.SkillPageLocators.editloc).click()
            return
        }

         can_edit(caned) {
            cy.get(SkillElementsLocators.SkillPageLocators.cancel_edited).click()
            return
        }
}
export default skillPageElement