/// <reference types="cypress" />
import LoginPageElements from "../../../pageObject/pageActions/LoginPageActions";
import GeneralinformationPageElements from "../../../pageObject/pageActions/GeneralInformationAction";
import skillPageElement  from "../../../pageObject/pageActions/skillAction";
const skill_Elements = new skillPageElement
const login_Element = new LoginPageElements
const General_Element = new GeneralinformationPageElements

describe('skill page', () => {

    beforeEach("login page", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       login_Element.username('Admin')
       login_Element.password('admin123')
        login_Element.loginbtn()

    })

    it("confirm the visibility of  qualification", ()=> {
        General_Element.adminbtn()
        skill_Elements.dropdd()
    
    }) 


   it("verify admin can navigate to qualifiction and access the dropdown ", ()=> {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        
    }) 

     it("confirm after admin clicked on the qualification drop-down admin can then use  mouse to highlight each drop-down item   ", ()=> {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        
    }) 


    it("verify that admin can navigate to skills under qualification ", ()=> {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        skill_Elements.skilllinks()
    })


     it("verify that admin can add a skill when the add button is clicked", ()=> {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        skill_Elements.skilllinks()
        skill_Elements.addbtttn()
    })


     it("verify that admin cannot add a skill if the reguired field is empty", ()=> {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        skill_Elements.skilllinks()
        skill_Elements.addbtttn()
        skill_Elements.saves()
    })

    it("Make sure there is adequate text space on the Description to accommodate a large number of words.", ()=> {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        skill_Elements.skilllinks()
        skill_Elements.addbtttn()

        skill_Elements.des('who we are to say we are who we are to say we are who wwe are to say we are who we are to say we are who we are to say we are wh we are to say we are who we are ')
    })

      it("verify admin sucessfully save a skill", ()=> {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        skill_Elements.skilllinks()
        skill_Elements.addbtttn()
        skill_Elements.namees('software engineer')
        skill_Elements.des('who we are to say we are who we are to say we are who wwe are to say we are who we are to say we are who we are to say we are wh we are to say we are who we are ')
        skill_Elements.saves()
        skill_Elements.cancil()
        
    })

    it("verify admin can use check box to select all users in order to delete", ()=> {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        skill_Elements.skilllinks()
       skill_Elements.checkbbb()
       skill_Elements.delsel()
    })

     it("verify admin can use check box to select all users in order to delete", ()=> {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        skill_Elements.skilllinks()
       skill_Elements.checkbbb()
       skill_Elements.delsel()
       skill_Elements.yesdel()
    })

     it("verify admin can use check box to select all users in order to cancel", ()=> {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        skill_Elements.skilllinks()
       skill_Elements.checkbbb()
       skill_Elements.delsel()
       skill_Elements.noocal()
    })

    it("Verify admin can click on the checkbox to select a user on the Skill table", ()=> {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        skill_Elements.skilllinks()
       skill_Elements.onecheck()
       
    })

 it("verify that admin can delete skills usingthe delete icon ", ()=> {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        skill_Elements.skilllinks()
       skill_Elements.deleted()
       skill_Elements.dellee()
       
    })

    it("verify that admin can edit skills usingthe edit icon  ", ()=> {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        skill_Elements.skilllinks()
      skill_Elements.eddit()
       
    })
    it("verify that admin can cancel edited skills ", ()=> {
        General_Element.adminbtn()
        skill_Elements.dropdd()
        skill_Elements.skilllinks()
      skill_Elements.eddit()
      skill_Elements.can_edit()
       
    })
      
})