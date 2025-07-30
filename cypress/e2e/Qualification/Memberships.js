
/// <reference types="cypress" />
import GeneralinformationPageElements from "../../../pageObject/pageActions/GeneralInformationAction";

import LoginPageElements from "../../../pageObject/pageActions/LoginPageActions";
import MembershipPageElement  from "../../../pageObject/pageActions/membershipAction";
import skillPageElement from "../../../pageObject/pageActions/skillAction";

const memberships_Elements = new MembershipPageElement
const login_Element = new LoginPageElements
const General_Element = new GeneralinformationPageElements
const skill_Elements = new skillPageElement



describe('membership page', () => {
    beforeEach("login page", () => {
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       login_Element.username('Admin')
       login_Element.password('admin123')
        login_Element.loginbtn()
    })

    it("verify that admin can navigate to languages under qualification", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
         memberships_Elements.membershiplink()
    })  

    it("verify that admin can add languages when the add button is clicked", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          memberships_Elements.membershiplink()
          
    })
    it("verify that admin cannot add languages if the reguired field is empty", ()=>{
          General_Element.adminbtn()
          skill_Elements.dropdd()
          memberships_Elements.membershiplink()
          memberships_Elements.addboton()
          memberships_Elements.membershipclear()
          memberships_Elements.save()
    })


    it("verify admin sucessfully save languages", ()=>{
          General_Element.adminbtn()
          skill_Elements.dropdd()
          memberships_Elements.membershiplink()
          memberships_Elements.addboton()
          memberships_Elements.membershipadd('cimas')
          memberships_Elements.save()
    })

    it("verify admin sucessfully cancel membership", ()=>{
         General_Element.adminbtn()
         skill_Elements.dropdd()
         memberships_Elements.membershiplink()
         memberships_Elements.addboton()
         memberships_Elements.membershipadd('cimas')
         memberships_Elements.canceeel()
    })

     it("verify admin can use check box to select all memberships in order to delete", ()=>{
         General_Element.adminbtn()
         skill_Elements.dropdd()
          memberships_Elements.membershiplink()
          memberships_Elements.allcheckbox()
          memberships_Elements.deleteselecteed()
          memberships_Elements.yesdelete()
    })


    it("verify admin sucessfully save languages", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          memberships_Elements.membershiplink()
          memberships_Elements.addboton()
          memberships_Elements.membershipadd('cimas')
          memberships_Elements.save()
    })
    it("Verify admin can click on the checkbox to select a user on the memberships table", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          memberships_Elements.membershiplink()
          memberships_Elements.auser()
          memberships_Elements.deleteselecteed()
          memberships_Elements.yesdelete()
    })

    it("verify admin sucessfully save languages", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          memberships_Elements.membershiplink()
          memberships_Elements.addboton()
          memberships_Elements.membershipadd('cimas')
          memberships_Elements.save()
    })

     it("verify that admin can delete memberships using the delete icon ", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
         memberships_Elements.membershiplink()
         memberships_Elements.auser()
          memberships_Elements.deleteicon()
        memberships_Elements.yesdelete()
    })

    it("verify that admin can edit memberships using the edit icon ", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          memberships_Elements.membershiplink()
          memberships_Elements.auser()
          memberships_Elements.editicon()
          memberships_Elements.membershipadd('microsoft')
          memberships_Elements.save()
    })

    it("verify that admin can cancel edited memberships using the edit icon ", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          memberships_Elements.membershiplink()
          memberships_Elements.auser()
          memberships_Elements.editicon()
          memberships_Elements.membershipadd('microsoft updated')
          memberships_Elements.canceeel()
    })
})