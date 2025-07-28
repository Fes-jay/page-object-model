/// <reference types="cypress" />

import jobNav from "../../../pageObject/pageActions/jobNavigationAction"
const jn = new jobNav

describe("JOB", () => {

 beforeEach(() => {
    cy.loginAsAdmin();
  });


  it("Verify the visibility of job", () => {
    jn.JobVisibility(); 
    });

  it("Verify if the dropdown arrow on job is clickable", () => {
    jn.clickJob(); 
    });
  it("Verify if Job titles is clickable.", () => {
    jn.clickJob();
    jn.clickJobTittle();
    });
  it.only("Verify presence of 'Add Job Title' on the add Job Titles page", () => {
    jn.clickJob();
    jn.clickJobTittle();
    jn.getAddButton();
    jn.getJobTitleText();
    });
});