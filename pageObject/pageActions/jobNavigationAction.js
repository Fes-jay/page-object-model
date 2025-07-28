const job_Nav = require("../pageElements/jobNavigationElement.json")

class jobNav {
    clickJob(){
        cy.get(job_Nav.Job_Navigation.jobLink).click();
    }

    clickJobTittle(){
        cy.get(job_Nav.Job_Navigation.jobTitleLink).click();
    }

    JobVisibility(){
        cy.get(job_Nav.Job_Navigation.jobLink).contains('Job');
    }   
    
    getAddButton(){
        cy.get(job_Nav.Job_Navigation.addBtn).click();
    }
    
    getJobTitleText(){
        cy.get(job_Nav.Job_Navigation.addJobTitleText).should('have.text', 'Add Job Title')
    }
    getEditIcon(){
        cy.get(job_Nav.Job_Navigation.editIcon).click();
    }

    getCheckbox1(){
        cy.get(job_Nav.Job_Navigation.checkbox1_Link).click();
    }
    getDelSelBtn(){
        cy.get(job_Nav.Job_Navigation.Del_Sel_Btn).should('have.text', ' Delete Selected ')
    }

    clickDelSel(){
        cy.get(job_Nav.Job_Navigation.Del_Sel_Btn).click();
    }
    closeDialog(){
        cy.get(job_Nav.Job_Navigation.CloseDialog_Link).click();
    }
    clickYesDelete(){
        cy.get(job_Nav.Job_Navigation.DelButton_Link).click();
    }
}

export default jobNav