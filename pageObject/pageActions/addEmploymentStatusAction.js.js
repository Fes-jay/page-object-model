
const employStat_Element = require("../pageElements/addEmploymentStatusPageElement.json")
class EmploymentStatus {
    clickJob(){
        cy.get(employStat_Element.EmployStat_Element.job_Link).click();
    }

    clickEmpStat(){
        cy.get(employStat_Element.EmployStat_Element.EmpStat_Link).click();
    }
    correctPageTxt(){
        cy.get(employStat_Element.EmployStat_Element.CorrectPage_txt).should('have.text', 'Add Employment Status');
    }

    clickAddEmpStatBtn(){
        cy.get(employStat_Element.EmployStat_Element.AddEmpStatBtn_Link).click();
    }
    EmpStatEditIcon(){
        cy.get(employStat_Element.EmployStat_Element.EmpStatEditIcon_Link).click();
    }
    EmpStatDeleteIcon(){
        cy.get(employStat_Element.EmployStat_Element.EmpStatDeleteIcon_Link).click();

    }

    checkBox1(){
        cy.get(employStat_Element.EmployStat_Element.checkBox1_Link).click();

    }
    checkBox2(){
        cy.get(employStat_Element.EmployStat_Element.checkBox2_Link).click();

    }
    yesDelBtn(){
        cy.get(employStat_Element.EmployStat_Element.yesDelBtn_Link).click();

    }
    noCancelBtn(){
        cy.get(employStat_Element.EmployStat_Element.noCancelBtn_Link).click();

    }
    dialogCloseBtn(){
        cy.get(employStat_Element.EmployStat_Element.dialogCloseBtn_Link).click();

    }
    getName(){
        cy.get(employStat_Element.EmployStat_Element.getName_Link).type('Employed');

    }
    getToEditName(){
        cy.get(employStat_Element.EmployStat_Element.getName_Link).clear().type('unemployed');

    }

    getYesDelBtnvisible(){
        cy.get(employStat_Element.EmployStat_Element.DelSelBtn_Link).should('have.text', ' Delete Selected ')

    }

    getYesDelBtn(){
        cy.get(employStat_Element.EmployStat_Element.yesDelBtn_Link).click();

    }


    getInvalidName(){
        cy.get(employStat_Element.EmployStat_Element.getName_Link).type('123"£😁👍🏼%%');

    }
    getErrorMsg(){
        cy.get(employStat_Element.EmployStat_Element.getErrorMsg_Link).should('have.text', 'Required');

    }
    getSaveBtn(){
        cy.get(employStat_Element.EmployStat_Element.getSaveBtn_Link).click();

    }

    getCancelBtn(){
        cy.get(employStat_Element.EmployStat_Element.getCancelBtn_Link).click();

    }

    getDelSelBtn(){
        cy.get(employStat_Element.EmployStat_Element.DelSelBtn_Link).click();

    }
    checkAllBoxes(){
        cy.get(employStat_Element.EmployStat_Element.checkAllBoxes_Link).click();

    }



}

export default EmploymentStatus