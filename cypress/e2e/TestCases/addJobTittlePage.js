/// <reference types="cypress" />
import jobTitlePage from "../../../pageObject/pageActions/addJobTitleAction";
const jobPage = new jobTitlePage

import jobNav from "../../../pageObject/pageActions/jobNavigationAction"
const jn = new jobNav
describe("JOB", () => {

 beforeEach(() => {
    cy.loginAsAdmin();
  });

 
  it("Add Job title with valid data", () => {
    jn.clickJob();
    jn.clickJobTittle();
    jn.getAddButton();
    jobPage.getJobTitle();
    jobPage.getJobDescrip();
    jobPage.getNote();
    jobPage.getSaveBtn();

    });

  it("Add Job title without required fields", () => {
    jn.clickJob();
    jn.clickJobTittle();
    jn.getAddButton();
    jobPage.getSaveBtn();
    jobPage.getRequiredTxt();

    });

  it("Verify adding Job title with duplicate entry", () => {
    jn.clickJob();
    jn.clickJobTittle();
    jn.getAddButton();
    jobPage.getJobTitle();
    jobPage.getJobDescrip();
    jobPage.getNote();
    jobPage.getSaveBtn();
    
    });

  it("Verify if existing job title can be edited", () => {
    jn.clickJob();
    jn.clickJobTittle();
    jn.getEditIcon();
    jobPage.getJobTitleToEdit();
    jobPage.getSaveBtn();
    });

  it("Verify that 'Delete selected' button appears when  clicked on any of the checkbox on the list of job titles", () => {
    jn.clickJob();
    jn.clickJobTittle();
    jn.getCheckbox1();
    jn.getDelSelBtn();
    });
  it("Verify closing icon on confirmation dialog when 'Delete selected' button is clicked ", () => {
    jn.clickJob();
    jn.clickJobTittle();
    jn.getCheckbox1();
    jn.clickDelSel(); 
    jn.closeDialog();
    });
  it("Verify if an existing job title can be deleted", () => {
    jn.clickJob();
    jn.clickJobTittle();
    jn.getCheckbox1();
    jn.clickDelSel(); 
    jn.clickYesDelete();
  });

  it.only("Verify Cancel button on Add Job Title page", () => {
    jn.clickJob();
    jn.clickJobTittle();
    jn.getAddButton();
    jobPage.getCancelBtn();
  });

  

});