
/// <reference types="cypress" />
import GeneralinformationPageElements from "../../../pageObject/pageActions/GeneralInformationAction";
import languagesPageElement from "../../../pageObject/pageActions/languagesAction";
import LoginPageElements from "../../../pageObject/pageActions/LoginPageActions";
import skillPageElement from "../../../pageObject/pageActions/skillAction";


const login_Element = new LoginPageElements
const General_Element = new GeneralinformationPageElements
const skill_Elements = new skillPageElement
const languages_Elements = new languagesPageElement


describe('languages page', () => {
    beforeEach("login page", () => {
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       login_Element.username('Admin')
       login_Element.password('admin123')
        login_Element.loginbtn()
    })

    it("verify that admin can navigate to languages under qualification", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
         languages_Elements.languageslink()
    })  

    it("verify that admin can add languages when the add button is clicked", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          languages_Elements.languageslink()
          
    })
    it("verify that admin cannot add languages if the reguired field is empty", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          languages_Elements.languageslink()
          languages_Elements.addboton()
          languages_Elements.languageadd()
          languages_Elements.save()
    })

    it("verify that admin cannot add languages if the reguired field is empty", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          languages_Elements.languageslink()
          languages_Elements.addboton()
          languages_Elements.languageadd()
          languages_Elements.save()
    })

    it("verify admin sucessfully save languages", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          languages_Elements.languageslink()
          languages_Elements.addboton()
          languages_Elements.languageadd('arabic')
          languages_Elements.save()
    })

    it("verify admin sucessfully cancel languages", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          languages_Elements.languageslink()
          languages_Elements.addboton()
          languages_Elements.languageadd('arabic')
          languages_Elements.canceeel()
    })

     it("verify admin can use check box to select all languages in order to delete", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          languages_Elements.languageslink()
          languages_Elements.allcheckbox()
          languages_Elements.deleteselected()
          languages_Elements.yesdelete()
    })

    it("Verify admin can click on the checkbox to select a user on the languages table", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          languages_Elements.languageslink()
          languages_Elements.auser()
          languages_Elements.deleteselected()
          languages_Elements.yesdelete()
    })

     it("verify that admin can delete languages using the delete icon ", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          languages_Elements.languageslink()
          languages_Elements.auser()
          languages_Elements.deleteicon()
          languages_Elements.yesdelete()
    })

    it("verify that admin can edit languages using the edit icon ", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          languages_Elements.languageslink()
          languages_Elements.auser()
          languages_Elements.editicon()
          languages_Elements.languageadd('arabic updated')
          languages_Elements.save()
    })

    it("verify that admin can cancel edited languages using the edit icon ", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          languages_Elements.languageslink()
          languages_Elements.auser()
          languages_Elements.editicon()
          languages_Elements.languageadd('arabic updated')
          languages_Elements.canceeel()
    })
})