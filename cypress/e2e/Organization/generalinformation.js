/// <reference types="cypress" />
import GeneralinformationPageElements from "../../../pageObject/pageActions/GeneralInformationAction";
import  LoginPageElements from "../../../pageObject/pageActions/LoginPageActions"

 const login_Element = new LoginPageElements
 const General_Element = new GeneralinformationPageElements

describe ('general information', () => {
    
   beforeEach("Login Page",  () => {
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
         login_Element.username('Admin')
         login_Element.password('admin123')
         login_Element.loginbtn();      
     }); 

     it("confirm the visibility of the organization",  () => {
        General_Element.adminbtn()
        
           
     });

      it("verify admin can navigate to organization and access the dropdown ",  () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
           
     });
    
     it("confirm after admin clicked on the organization drop-down admin can then use  mouse to highlight each drop-down item  ",  () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
           
     });


it("Check the general information page's accessibility and the accuracy of its contents.",  () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        General_Element.generalinfobtn()   
        
     });


     it("verify  the save button and the content textfield are not visible until the admin toggles the edit button on the general information page.",  () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        General_Element.generalinfobtn()   
        
     });

      it("Verify that the page's edit button is working.",  () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        General_Element.generalinfobtn()   
        General_Element.togglebtn()
     });
    
   it("Confirm that admin can access and edit general  information",  () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        General_Element.generalinfobtn()   
        General_Element.togglebtn()
     });

      it("Confirm that the general information page has all required fields  in.",  () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        General_Element.generalinfobtn()   
        General_Element.togglebtn()
     });

      it("confirm that if the whole text field are left empty the save button is inactive ",  () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        General_Element.generalinfobtn()   
        General_Element.togglebtn()
        General_Element.organizationname()
        General_Element.registrationnumber();
        General_Element.taxid();
        General_Element.phonenumber();
        General_Element.fax()
        General_Element.email()
        General_Element.address1()
        General_Element.address2()
        General_Element.city()
        General_Element.state()
        General_Element.zipcode()
        General_Element.country()
        General_Element.note()
        General_Element.save()

     });

     it("verify that the value in the number of employee is static and cant be edited",  () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        General_Element.generalinfobtn()   
        General_Element.togglebtn()
        General_Element.organizationname()
        General_Element.registrationnumber();
        General_Element.save()
     });

      it("verify that  phone number, fax accepts only numbers and  email accepts @ symbol",  () => {
       General_Element.adminbtn()
        General_Element.dropdownnbtn()
        General_Element.generalinfobtn()   
        General_Element.togglebtn()
        General_Element.organizationname()
        General_Element.registrationnumber();
        General_Element.taxid();
        General_Element.phonenumber()
        General_Element.phonenumber1('08163564536ee')  
        General_Element.fax()
        General_Element.fax1('536352tst')
        General_Element.email()
        General_Element.email1('oluwaseyeoguntuga@gmail.com')
        General_Element.address1()
        General_Element.address2()
        General_Element.city()
        General_Element.state()
        General_Element.zipcode()
        General_Element.country()
        General_Element.note()
        General_Element.save()
        
        
     });
       it("verify country has a drop-down menu that displays the list of countries and can be set to default by clicking select",  () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        General_Element.generalinfobtn()   
        General_Element.togglebtn()
        General_Element.country()
     });
      it("verify that the notes on the general information page accepts more than 50 words",  () => {
        General_Element.adminbtn()
        General_Element.dropdownnbtn()
        General_Element.generalinfobtn()   
        General_Element.togglebtn()
        General_Element.note()
        General_Element.note1("i am oluwaseye and i work with festus, blesssing and ohiz in verraki partners we work together to achieve quality software ")
     });

     it("Verify that the save button is not active when the fax and phone number are entered incorrectly ",  () => {
      General_Element.adminbtn()
        General_Element.dropdownnbtn()
        General_Element.generalinfobtn()   
        General_Element.togglebtn()
        General_Element.organizationname()
        General_Element.organizationnamee('verraki')
        General_Element.registrationnumber();
        General_Element.taxid();
        General_Element.phonenumber()
        General_Element.phonenumber1('08163564536ee')  
        General_Element.fax()
        General_Element.fax1('536352tst')
        General_Element.email()
        General_Element.address1()
        General_Element.address2()
        General_Element.city()
        General_Element.state()
        General_Element.zipcode()
        General_Element.country()
        General_Element.note()
        General_Element.save()
     });

     it("verify the edited informations are saved successfully and observe the response message ",  () => {
      General_Element.adminbtn()
        General_Element.dropdownnbtn()
        General_Element.generalinfobtn()   
        General_Element.togglebtn()
        General_Element.organizationname()
        General_Element.organizationnamee('verraki')
        General_Element.registrationnumber();
        General_Element.registrationnumbeer('24354635qwew')
        General_Element.taxid();
        General_Element.taxidd('0816658509iwueiuww')
        General_Element.phonenumber()
        General_Element.phonenumber1('08166585090')  
        General_Element.fax()
        General_Element.fax1('+1536352')
        General_Element.email()
        General_Element.email1('oluwaseyeoguntuga@gmail.com')
        General_Element.address1()
        General_Element.address11('10 osborne road ')
        General_Element.address2()
        General_Element.address22('ikoyi lagos state')
        General_Element.city()
        General_Element.cityy('ikoyi')
        General_Element.state()
        General_Element.states('lagos state')
        General_Element.zipcode()
        General_Element.zipcodee('100001')
        General_Element.country()
        General_Element.note()
        General_Element.note1('i am oluwaseye and i work with festus, blesssing and ohiz in verraki partners we work together to achieve quality software')
        General_Element.save()
     });


});
