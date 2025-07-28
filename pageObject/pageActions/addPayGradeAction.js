
const payGradeElement= require("../pageElements/addPayGradePageElement.json")

class payGrade {
    
    clickJob(){
        cy.get(payGradeElement.PayGradeElement.Job_Link).click();
    }

    clickJobGrades(){
        cy.get(payGradeElement.PayGradeElement.JobGrades_Link).click();
    }

    verifyJobGradeTitle(){
        cy.get(payGradeElement.PayGradeElement.verifyJobGradeTitle_Link).should('have.text','Add Pay Grade');
    }

    addJobGradeBtn(){
        cy.get(payGradeElement.PayGradeElement.addJobGradeBtn_Link).click();
    }
    editIcon(){
        cy.get(payGradeElement.PayGradeElement.editIcon_Link).click();

    }
    DeleteIcon(){
        cy.get(payGradeElement.PayGradeElement.DeleteIcon_Link).click();
    }
   checkbox1(){
        cy.get(payGradeElement.PayGradeElement.checkbox1_Link).click();
    }
   checkbox2(){
        cy.get(payGradeElement.PayGradeElement.checkbox2_Link).click();
    }

   yesDeleteBtn(){
        cy.get(payGradeElement.PayGradeElement.yesDeleteBtn_Link).click();
    }
   noCancelBtn(){
        cy.get(payGradeElement.PayGradeElement.noCancelBtn_Link).click();
    }
   closeDialogBtn(){
        cy.get(payGradeElement.PayGradeElement.closeDialogBtn_Link).click();
    }
   enterName(){
        cy.get(payGradeElement.PayGradeElement.enterName_Link).type('Oluwadoroolola')
    }
   saveEnteredNameBtn(){
        cy.get(payGradeElement.PayGradeElement.saveEnteredNameBtn_Link).click();
    }

   cancelEnteredNameBtn(){
        cy.get(payGradeElement.PayGradeElement.cancelEnteredNameBtn_Link).click();
    }

   addCurrencyBtn(){
        cy.get(payGradeElement.PayGradeElement.addCurrencyBtn_Link).click();
    }

   selectCurrency(){
        cy.get(payGradeElement.PayGradeElement.selectCurrency_Link).select(0);
    }

   minSalary(){
        cy.get(payGradeElement.PayGradeElement.minSalary_Link).type('123')
    }

   maxSalary(){
        cy.get(payGradeElement.PayGradeElement.maxSalary_Link).type('99999')
    }

   saveAddCurrency(){
        cy.get(payGradeElement.PayGradeElement.saveAddCurrency_Link).click();
    }

   cancelAddCurrency(){
        cy.get(payGradeElement.PayGradeElement.cancelAddCurrency_Link).click();
    }
   enterInvalidName(){
        cy.get(payGradeElement.PayGradeElement.enterName_Link).type('£$%^&*')
    }
   errorMsg(){
        cy.get(payGradeElement.PayGradeElement.errorMsg_Link).should('have.text', 'Required')
    }

   enterNameToEdit(){
        cy.get(payGradeElement.PayGradeElement.enterName_Link).clear().type('Oluwadorolola')
    }

   deleteSel(){
        cy.get(payGradeElement.PayGradeElement.DeleteIcon_Link).click()
    }

} 

export default payGrade