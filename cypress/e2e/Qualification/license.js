import GeneralinformationPageElements from "../../../pageObject/pageActions/GeneralInformationAction";
import { licensesPageElement } from "../../../pageObject/pageActions/licensesAction";
import LoginPageElements from "../../../pageObject/pageActions/LoginPageActions";
import skillPageElement from "../../../pageObject/pageActions/skillAction";


const login_Element = new LoginPageElements
const General_Element =new GeneralinformationPageElements
const skill_Elements = new skillPageElement
const license_Elements = new licensesPageElement


describe('licences page', () => {
    beforeEach("login page", () => {
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       login_Element.username('Admin')
       login_Element.password('admin123')
        login_Element.loginbtn()
    })
    it("verify that admin can navigate to Licenses under qualification", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          license_Elements.licenseslink()
    })  
    it("verify that admin can add Licenses when the add button is clicked", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          license_Elements.licenseslink()
          license_Elements.addboton()
    })
    it("verify that admin cannot add licenses if the reguired field is empty", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          license_Elements.licenseslink()
          license_Elements.addboton()
          license_Elements.licienceadd()
          license_Elements.save()
    })

    it("verify that admin cannot add licenses if the reguired field is empty", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          license_Elements.licenseslink()
          license_Elements.addboton()
          license_Elements.licienceadd()
          license_Elements.save()
    })

    it("verify admin sucessfully save lisences", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          license_Elements.licenseslink()
          license_Elements.addboton()
          license_Elements.licienceadd('software license')
          license_Elements.save()
    })

    it("verify admin sucessfully cancel lisences", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          license_Elements.licenseslink()
          license_Elements.addboton()
          license_Elements.licienceadd('software license')
          license_Elements.canceeel()
    })

     it("verify admin can use check box to select all Licenses in order to delete", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          license_Elements.licenseslink()
          license_Elements.allcheckbox()
          license_Elements.deleteselected()
          license_Elements.yesdelete()
    })

    it("Verify admin can click on the checkbox to select a user on the Licences table", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          license_Elements.licenseslink()
          license_Elements.auser()
          license_Elements.deleteselected()
          license_Elements.yesdelete()
    })

     it("verify that admin can delete Licenses using the delete icon ", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          license_Elements.licenseslink()
          license_Elements.auser()
          license_Elements.deleteicon()
          license_Elements.yesdelete()
    })

    it("verify that admin can edit Licenses using the edit icon ", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          license_Elements.licenseslink()
          license_Elements.auser()
          license_Elements.editicon()
          license_Elements.licienceadd('software license updated')
          license_Elements.save()
    })

    it("verify that admin can cancel edited Licenses using the edit icon ", ()=>{
         General_Element.adminbtn()
          skill_Elements.dropdd()
          license_Elements.licenseslink()
          license_Elements.auser()
          license_Elements.editicon()
          license_Elements.licienceadd('software license updated')
          license_Elements.canceeel()
    })
})