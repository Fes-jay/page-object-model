
const membershipElementsLocators = require("../pageElements/membershipPageElement.json")

export class MembershipPageElement {
     

    membershiplink(){
        cy.get(membershipElementsLocators.MembershipPageLocators.membership_link).click()
        return
    }

     addboton(){
        cy.get(membershipElementsLocators.MembershipPageLocators.addbtn).click()
        return
    }
     membershipadd(membership){
        cy.get(membershipElementsLocators.MembershipPageLocators.membership).type(membership)
        return
    }
     membershipclear(){
        cy.get(membershipElementsLocators.MembershipPageLocators.membership).clear()
        return
    }

     save(saved){
        cy.get(membershipElementsLocators.MembershipPageLocators.save).click()
        return
    }
    canceeel(canceel){
        cy.get(membershipElementsLocators.MembershipPageLocators.cancel).click()
        return
    }

    allcheckbox(checkbos){
        cy.get(membershipElementsLocators.MembershipPageLocators.checkboxx).click()
        return
    }

   deleteselecteed(delesec){
        cy.get(membershipElementsLocators.MembershipPageLocators.delete_selected).click()
        return
    }

    yesdelete(yesdeleted){
        cy.get(membershipElementsLocators.MembershipPageLocators.yesdelete).click()
        return
    }

    auser(ausercheck){
        cy.get(membershipElementsLocators.MembershipPageLocators.acheckbox).click()
        return
    }
     deleteicon(deleeeticon){
        cy.get(membershipElementsLocators.MembershipPageLocators.deleteicon).click()
        return
    }

     editicon(ediiticon){
        cy.get(membershipElementsLocators.MembershipPageLocators.editicon).click()
        return
    }
}
export default MembershipPageElement