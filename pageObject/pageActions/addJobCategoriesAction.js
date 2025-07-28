const jobCat_Element = require ("../pageElements/addJobCategoriesElement.json")

class JobCategories {
    clickJob(){
        cy.get(jobCat_Element.JobCat_Element.clickJob_Link).click();
    }

    clickJobCat(){
        cy.get(jobCat_Element.JobCat_Element.clickJobCat_Link).click();
    }

    addJobCatBtn(){
        cy.get(jobCat_Element.JobCat_Element.addJobCatBtn_Link).click();

    }
    JobCatEditIcon(){
        cy.get(jobCat_Element.JobCat_Element.JobCatEditIcon_Link).click();
    }
    JobCatDelIcon(){
        cy.get(jobCat_Element.JobCat_Element.JobCatDelIcon_Link).click();

    }

    checkBox1(){
        cy.get(jobCat_Element.JobCat_Element.checkBox1_Link).click();

    }
    checkBox2(){
        cy.get(jobCat_Element.JobCat_Element.checkBox2_Link).click();

    }
    checkAllBox(){
        cy.get(jobCat_Element.JobCat_Element.checkAllBox_Link).click();

    }

    yesDelBtn(){
        cy.get(jobCat_Element.JobCat_Element.yesDelBtn_Link).click();

    }
    delSelBtn(){
        cy.get(jobCat_Element.JobCat_Element.delSelBtn_Link).click();

    }
    noCancelBtn(){
        cy.get(jobCat_Element.JobCat_Element.noCancelBtn_Link).click();

    }
    dialogCloseBtn(){
        cy.get(jobCat_Element.JobCat_Element.dialogCloseBtn_Link).click();

    }
    enterValidName(name){
        cy.get(jobCat_Element.JobCat_Element.enterValidName_Link).type(name);

    }
    enterValidNameAndEdit(name){
        cy.get(jobCat_Element.JobCat_Element.enterValidName_Link).clear().type(name);

    }
    enterInvalidName(){
        cy.get(jobCat_Element.JobCat_Element.enterInvalidName_Link).type('86^%%$');

    }

    saveBtn(){
        cy.get(jobCat_Element.JobCat_Element.saveBtn_Link).click();

    }

    cancelBtn(){
        cy.get(jobCat_Element.JobCat_Element.cancelBtn_Link).click();

    }

    errorMsg(){
        cy.get(jobCat_Element.JobCat_Element.errorMsg_Link).should('have.text','Required');

    }
    PageTitle(){
        cy.get(jobCat_Element.JobCat_Element.PageTitle_Link).should('have.text','Add Job Category');

    }
    delselBtnVerification(){
        cy.get(jobCat_Element.JobCat_Element.delSelBtn_Link).should('have.text',' Delete Selected ');

    }



}

export default JobCategories