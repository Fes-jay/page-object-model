/// <reference types="cypress" />
import LocationsPageElements from "../../../pageObject/pageActions/LocationAction"
import LoginPageElements from "../../../pageObject/pageActions/LoginPageActions"
import GeneralinformationPageElements from "../../../pageObject/pageActions/GeneralInformationAction"

const login_Element = new LoginPageElements
const General_Element = new GeneralinformationPageElements
const Location_Element = new LocationsPageElements


describe ('locations', () => {

  beforeEach( "Login page",  () => {
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       login_Element.username('Admin')
       login_Element.password('admin123')
        login_Element.loginbtn()
    }); 
it("verify that admin can navigate to location page", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login()   
    });
it("verify that when admin navigates to location page a pop up message showing no records found ", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login()   
    });
it("verify when the admin   leaves  name, city, and country text fields empty and clicks search it should return the location page", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login()
        Location_Element.locationsub_btn()   
    });
it("verify that admin can search for Location using name, city and country(validate the country dropdown)", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login()
        Location_Element.locationsub_btn()
        Location_Element.nameeee('Canadian Regional HQ')
        Location_Element.cityyy_texts('Ottawa')
        Location_Element.country('canada')
        Location_Element.locationsub_btn()    
    });
it("verify that admin can minimize the location module by cicking the arrow up component", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login()
        Location_Element.click_upp()    
    });
it("Verify admin can set the page back to default by clicking on the reset button", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login()
        Location_Element.reset_btn()   
    });
it("verify that the add location button is working", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login()
        Location_Element.add_locations()    
    });
it("verify admin can see all information on the add the location page", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login()
        Location_Element.add_locations()     
    });

it("verify admin can fill in all informations on the add location page and saves successfully", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login()
        Location_Element.add_locations()    
        Location_Element.location_nameee('lagos') 
        Location_Element.city_11('ikoyi')
        Location_Element.state_provincee('lagos state')
        Location_Element.zip_code('10001')
        Location_Element.country('nigeria')
        Location_Element.phonenumbeer('0810166585090')
    });
it("When all text fields are empty, confirm that the name and country are Required and the save button is inactive.", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login()
        Location_Element.add_locations()
        Location_Element.save_btn()  
    });
    it("check that admin can add a location by adding just name and country", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login()
        Location_Element.add_locations()
        Location_Element.location_nameeee()
        Location_Element.location_nameee('lagos')
        Location_Element.countryy('any')
        Location_Element.save_btn()   
    });
    it("Check to see if the admin can add a new location using a name that has already been used.", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login()
        Location_Element.add_locations()
        Location_Element.location_nameeee()
        Location_Element.location_nameee('Canadian Regional HQ')
        Location_Element.save_btn()    
    });
   it("Verify that the country has a drop-down  with various nations.", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login()
        Location_Element.add_locations()
        Location_Element.country()
   });

   it("Make sure there is adequate text space on the address and note to accommodate a large number of words.", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login()
         Location_Element.add_locations()
         Location_Element.addres('124 osborhne road ikoyi lagos opposit guarantee trust bank lagos island')
   });
    it("verify when the cancel button is clicked it redirects to the location page", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login()
        Location_Element.add_locations()
        Location_Element.country()
        Location_Element.cancelbutton()
   });

   it("confrim that name, city, country, phone, number of employees are on the Record found table", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login() 
   });

    it("verify admin can delete locations when the all checkbox is clicked ", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login() 
        Location_Element.checkboxx()

   });
    it("verify admin can delete locations when the one checkbox is clicked ", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login() 
        Location_Element.onecheckboxx()
           Location_Element.deletee_one()
   });
    it("verify admin can delete location using delete icon ", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login() 
        Location_Element.onecheckboxx()
        Location_Element.delete()
   });
    it.only("verify that when the delete icon is clicked a pop up module indicating either No to cancel /Yes Delete comes up ", () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Location_Element.location_login() 
        Location_Element.onecheckboxx()
        Location_Element.delete()
   });


   


});