
const LocationsElementLocators = require("../pageElements/locationPage.json")

    export class LocationsPageElements {

        location_login() {
        cy.get(LocationsElementLocators.LocationPageLocators.location_page).click();
        return
        }
 locationsub_btn() {
        cy.get(LocationsElementLocators.LocationPageLocators.locationsubmit_btn).click();
        return
        }

         nameee(namee) {
        cy.get(LocationsElementLocators.LocationPageLocators.name).type(namee);
        return
        }
         nameeee(nameee) {
        cy.get(LocationsElementLocators.LocationPageLocators.name).clear();
        return
        }
         cityyy_text(cities) {
        cy.get(LocationsElementLocators.LocationPageLocators.city_text).type(cities);
        return
        }
          cityyy_texts(citiess) {
        cy.get(LocationsElementLocators.LocationPageLocators.city_text).clear();
        return
        }
         country(countries) {
        cy.get(LocationsElementLocators.LocationPageLocators.country).click();
        return
        }

        country_textinput(countries_text) {
        cy.get(LocationsElementLocators.LocationPageLocators.country).type(countries_text);
        return
        }

        click_upp() {
        cy.get(LocationsElementLocators.LocationPageLocators.click_up).click();
        return
        }

        reset_btn() {
        cy.get(LocationsElementLocators.LocationPageLocators.reset).click();
        return
        }
         add_locations() {
        cy.get(LocationsElementLocators.LocationPageLocators.addlocation).click();
        return
        }

         save_btn() {
        cy.get(LocationsElementLocators.LocationPageLocators.savebutton).click();
        return
        }
         location_nameeee(locationnameee) {
        cy.get(LocationsElementLocators.LocationPageLocators.location_name).clear();
        return
        }
        location_nameee(locationnamee) {
        cy.get(LocationsElementLocators.LocationPageLocators.location_name).type(locationnamee);
        return
        }

        countryy(countryyy) {
        cy.get(LocationsElementLocators.LocationPageLocators.country_drop).type(countryyy);
        return
        }

        city_11(city12) {
        cy.get(LocationsElementLocators.LocationPageLocators.city_1).type(city12);
        return
        }

        state_provincee(stateprovince) {
        cy.get(LocationsElementLocators.LocationPageLocators.state_province).type(stateprovince);
        return
        }
        zip_code(zipcodeee) {
        cy.get(LocationsElementLocators.LocationPageLocators.zipcode).type(zipcodeee);
        return
        }
         phonenumbeer(phone11111) {
        cy.get(LocationsElementLocators.LocationPageLocators.phonenumber).type(phone11111);
        return
        }
        addres(addresss) {
        cy.get(LocationsElementLocators.LocationPageLocators.address).type(addresss);
        return
        }
        cancelbutton(canceel) {
        cy.get(LocationsElementLocators.LocationPageLocators.cancel_button).click();
        return
        }

        checkboxx(cheeckbox) {
        cy.get(LocationsElementLocators.LocationPageLocators.check_box).click();
        return
        }

        onecheckboxx(onecheeckbox) {
        cy.get(LocationsElementLocators.LocationPageLocators.one_checkbox).click();
        return
        }

        delete(deletee) {
        cy.get(LocationsElementLocators.LocationPageLocators.delete).click();
        return
        }
        deletee_one(deleteeone) {
        cy.get(LocationsElementLocators.LocationPageLocators.delete_one).click();
        return
        }
    }
export default LocationsPageElements