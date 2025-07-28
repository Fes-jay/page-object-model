
 const GeneralinforamtionElementLocators = require("../pageElements/GeneralinformationPage.json")

export class GeneralinformationPageElements{
     adminbtn() {
            cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.admin_btn).click();
            return
        }
        dropdownnbtn() {
            cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.drop_down).click();
            return
        }
        generalinfobtn() {
            cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.generalinfo_btn).click();
            return
        }
        togglebtn() {
            cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.toggle_btn).click();
            return
        }
        
        organizationname(organizationname) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.organization_name).clear();
        return
    }
    organizationnamee(organizationnamee) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.organization_name).type(organizationnamee);
        return
    }
   registrationnumber(registrationnumber) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.Registration_number).clear();
        return
    }
    registrationnumbeer(registrationnumbeer) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.Registration_number).type(registrationnumbeer);
        return
    }

    taxid(taxid) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.Tax_id).clear();
        return
    }
    taxidd(taxid1) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.Tax_id).type(taxid1);
        return
    }
    phonenumber(phonenumber) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.phone_number).clear()
        return
    }
    phonenumber1(phonenumbeer) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.phone_number).type(phonenumbeer)
        return
    }
    fax(fax) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.fax).clear();
        return
    }
    fax1(faxee) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.fax).type(faxee);
        return
    }
    email(email) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.Email).clear();
        return
    }
    email1(emaail1) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.Email).type(emaail1);
        return
    }
    address1(address1) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.Address1).clear();
        return
    }
    address11(address101) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.Address1).type(address101);
        return
    }
    address2(address2) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.Address2).clear();
        return
    }
    address22(address22) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.Address2).type(address22);
        return
    }
    city(city) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.city).clear();
        return
    }
    cityy(citey) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.city).type(citey);
        return
    }
    state(state) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.state).clear();
        return
    }
    states(statee) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.state).type(statee);
        return
    }
    zipcode(zipcode) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.zipcode).clear();
        return
    }
    zipcodee(zipcodes) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.zipcode).type(zipcodes);
        return
    }
    country(country) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.country).click().type('select')
        return
    }
    note(note) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.note).clear();
        return
    }
     note1(notee) {
        cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.note).type(notee);
        return
    }
    save() {
            cy.get(GeneralinforamtionElementLocators.GeneralInformationPageLocators.save).click();
            return
        }
}
export default GeneralinformationPageElements