/// <reference types="cypress" />
import GeneralinformationPageElements from "../../../pageObject/pageActions/GeneralInformationAction";
import LoginPageElements from "../../../pageObject/pageActions/LoginPageActions";
import structurePageElement from "../../../pageObject/pageActions/structureAction";

const login_Element = new LoginPageElements
const Structure_Element = new structurePageElement
const General_Element = new GeneralinformationPageElements

describe ( 'Structure page',  ()=> {
    
beforeEach( "Login page",  () => {
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       login_Element.username('Admin')
       login_Element.password('admin123')
        login_Element.loginbtn()
    }); 

    it(  "verify admin can navigate to  structure page" ,() => {
         
         General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Structure_Element.structure_link()
    })

    it("Make sure that when toggled, the edit radio button functions." ,() => {
         
         General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Structure_Element.structure_link()
        Structure_Element.edit_link()
    })

 it("verify that the add button is active" ,() => {
         
         General_Element.adminbtn()
        General_Element.dropdownnbtn()
        Structure_Element.structure_link()
        Structure_Element.edit_link()
        Structure_Element.add_btnn()
    })
})