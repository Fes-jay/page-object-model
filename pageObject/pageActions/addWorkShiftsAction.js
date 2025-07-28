
const WorkShift_Element = require ("../pageElements/addWorkShiftsElement.json")

class workShift {
   
    clickJob() {
        cy.get(WorkShift_Element.workShift_Element.clickJob_Link).click();

    }

   clickWorkShift() {
    cy.get(WorkShift_Element.workShift_Element.clickWorkShift_Link).click();

    }
   addWorkShiftBtn() {
    cy.get(WorkShift_Element.workShift_Element.addWorkShiftBtn_Link).click();

    }
   workShiftEditIcon() {
    cy.get(WorkShift_Element.workShift_Element.workShiftEditIcon_Link).click();

    }
   workShiftDelIcon() {
    cy.get(WorkShift_Element.workShift_Element.workShiftDelIcon_Link).click();

    }
   checkBox1() {
    cy.get(WorkShift_Element.workShift_Element.checkBox1_Link).click();

    }
   checkBox2() {
    cy.get(WorkShift_Element.workShift_Element.checkBox2_Link).click();

    }
   checkAllBox() {
    cy.get(WorkShift_Element.workShift_Element.checkAllBox_Link).click();

    }
   yesDelBtn() {
    cy.get(WorkShift_Element.workShift_Element.yesDelBtn_Link).click();

    }
   delSelBtn() {
    cy.get(WorkShift_Element.workShift_Element.delSelBtn_Link).click();

    }
   noCancelBtn() {
    cy.get(WorkShift_Element.workShift_Element.noCancelBtn_Link).click();

    }
   dialogCloseBtn() {
    cy.get(WorkShift_Element.workShift_Element.dialogCloseBtn_Link).click();

    }
   enterValidName(name) {
    cy.get(WorkShift_Element.workShift_Element.enterValidName_Link).type(name);

    }
   saveBtn() {
    cy.get(WorkShift_Element.workShift_Element.saveBtn_Link).click();

    }
   cancelBtn() {
    cy.get(WorkShift_Element.workShift_Element.cancelBtn_Link).click();

    }
   errorMsg() {
    cy.get(WorkShift_Element.workShift_Element.errorMsg_Link).should('have.text', 'Required')

    }
   PageTitle() {
    cy.get(WorkShift_Element.workShift_Element.PageTitle_Link).should('have.text', 'Add Work Shift')

    }
   assignEmployee(EmployeeName) {
    cy.get(WorkShift_Element.workShift_Element.assignEmployee_Link).type(EmployeeName)

    } 
   autocomplete1() {
    cy.get(WorkShift_Element.workShift_Element.autocomplete1_Link).click();
    } 
   autocomplete2() {
    cy.get(WorkShift_Element.workShift_Element.autocomplete2_Link).click();
    }


}
export default workShift