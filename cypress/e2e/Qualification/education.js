
/// <reference types="cypress" />
import educationPageElement from "../../../pageObject/pageActions/educationAction";
import GeneralinformationPageElements from "../../../pageObject/pageActions/GeneralInformationAction";
import LoginPageElements from "../../../pageObject/pageActions/LoginPageActions";
import skillPageElement from "../../../pageObject/pageActions/skillAction";
const login_Element = new LoginPageElements
const General_Element = new GeneralinformationPageElements
const education_Elements = new educationPageElement
const skill_Elements = new skillPageElement

describe ('education page', ()=> {

    beforeEach('login page', () => {
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       login_Element.username('Admin')
       login_Element.password('admin123')
        login_Element.loginbtn()
    })

    it("verify that admin can navigate to Education page under qualification", () => {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        education_Elements.educationlink()  
    })

    it("verify that admin can add Education when the add button is clicked", () => {
        General_Element.adminbtn()
       skill_Elements.dropdd()
        education_Elements.educationlink()  
        education_Elements.addbtn()
    })

     it("verify that admin cannot add education if the reguired field is empty", () => {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        education_Elements.educationlink()  
        education_Elements.addbtn()
        education_Elements.edulev()
        education_Elements.savebtn()


    })


    it("verify admin sucessfully save education", () => {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        education_Elements.educationlink()  
       education_Elements.addbtn()
        education_Elements.educationlev('200 level')
        education_Elements.savebtn()

    })

    it("verify admin sucessfully cancel education", () => {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        education_Elements.educationlink()  
        education_Elements.addbtn()
        education_Elements.educationlev('200 level')
        education_Elements.cancelbtn()

    })

     it("verify admin can use check box to select all Education level in order to delete", () => {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        education_Elements.educationlink()  
        education_Elements.check_box()
        education_Elements.delselected()
        education_Elements.yesdeletee()
    })

      it("Verify admin can click on the checkbox to select a user on the Education table", () => {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        education_Elements.educationlink()  
        education_Elements.auser()
        education_Elements.delselected()
        education_Elements.yesdeletee()
    })


     it("verify that admin can delete education level usingthe delete icon ", () => {
        General_Element.adminbtn()
       skill_Elements.dropdd()
        education_Elements.educationlink()  
        education_Elements.delicon()
        education_Elements.yesdeletee()
    })

     it("verify that admin can cancel education level after using the delete icon ", () => {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        education_Elements.educationlink()  
        education_Elements.delicon()
        education_Elements.nocanceel()
    })

    it("verify that admin can edit Education Level usingthe edit icon  ", () => {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        education_Elements.educationlink()  
        education_Elements.edit_icon()
    })
})
