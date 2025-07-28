const jobPageElement = require ("../pageElements/addJobTitleElement.json")

class jobTitlePage  {
    
    getJobTitle(){
        cy.get(jobPageElement.jobPage_Element.JobTitle_Link).type('software tester');
        return
    }

    getJobDescrip(){
        cy.get(jobPageElement.jobPage_Element.JobDescrip_Link).type('we ensure quality softwares');
        return
    }

    //getJobSpec(){
        //cy.get(jobPageElement.jobPage_Element.JobSpec_Link).attachFile('laptop.png')
       // return
   // }

    getNote(){
        cy.get(jobPageElement.jobPage_Element.Note_Link).type('i am to verify if Admin can Add user successfully');
        return
    }

    getSaveBtn(){
        cy.get(jobPageElement.jobPage_Element.SaveBtn_Lnk).click();
        return
    }
    getCancelBtn(){
        cy.get(jobPageElement.jobPage_Element.CancelBtn_Link).click();
        return
    }

    getRequiredTxt(){
        cy.get(jobPageElement.jobPage_Element.RequiredTxt).should('have.text','Required');
        return
    }
    getJobTitleToEdit(){
        cy.get(jobPageElement.jobPage_Element.JobTitle_Link).clear().type('Engineer');
        return
    }
    getCancelBtn(){
        cy.get(jobPageElement.jobPage_Element.CancelBtn_Link).click();
        return
    }
}

export default jobTitlePage