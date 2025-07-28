/// <reference types="cypress" />

import employmentStatus from "../../../pageObject/pageActions/addEmploymentStatusAction.js"
const employStatus = new employmentStatus 
describe("JOB", () => {

 beforeEach(() => {
    cy.loginAsAdmin();
  });

 
it("Verify if Employment Status is clickable.", () => {
    employStatus.clickJob();
    employStatus.clickEmpStat();
    
    });
it("Verify the presence of 'Add Employment Status' on the add Employment Status page", () => {
    employStatus.clickJob();
    employStatus.clickEmpStat();   
    employStatus.clickAddEmpStatBtn();
    employStatus.correctPageTxt();
    });

it("Verify that admin can add employment status.", () => {
    employStatus.clickJob();
    employStatus.clickEmpStat();   
    employStatus.clickAddEmpStatBtn();
    employStatus.getName();
    employStatus.getSaveBtn();
  
    });
it("Verify adding employment status with invalid name", () => {
    employStatus.clickJob();
    employStatus.clickEmpStat();   
    employStatus.clickAddEmpStatBtn();
    employStatus.getInvalidName();
    employStatus.getSaveBtn();
  
    });
it("Verify that admin can not add employment status without required field.", () => {
    employStatus.clickJob();
    employStatus.clickEmpStat();   
    employStatus.clickAddEmpStatBtn();
    employStatus.getSaveBtn();
    employStatus.getErrorMsg();
  
    });
it("Verify the Cancel button functionality on the add Employment status page", () => {
    employStatus.clickJob();
    employStatus.clickEmpStat();   
    employStatus.clickAddEmpStatBtn();
    employStatus.getName();
    employStatus.getCancelBtn();
    });

it("Verify that admin can edit employment status.", () => {
    employStatus.clickJob();
    employStatus.clickEmpStat();   
    employStatus.EmpStatEditIcon();
    employStatus.getToEditName();
    employStatus.getSaveBtn();
   
    });

it("Verify that 'Delete selected' button appears when  clicked on any of the checkbox on the list of employment status", () => {
    employStatus.clickJob();
    employStatus.clickEmpStat(); 
    employStatus.checkBox1(); 
    employStatus.getYesDelBtnvisible();
   
    });
it("Verify that clicking the close button (X) closes the confirmation dialog", () => {
    employStatus.clickJob();
    employStatus.clickEmpStat(); 
    employStatus.checkBox1(); 
    employStatus.getDelSelBtn();
    employStatus.dialogCloseBtn(); 
    });

it("Verify that admin can delete employment status.", () => {
    employStatus.clickJob();
    employStatus.clickEmpStat(); 
    employStatus.checkBox1(); 
    employStatus.getDelSelBtn();
    employStatus.getYesDelBtn();
    });

it("Verify that admin can delete multiple employment statuses using checkboxes.", () => {
    employStatus.clickJob();
    employStatus.clickEmpStat(); 
    employStatus.checkBox1(); 
    employStatus.checkBox2();
    employStatus.getDelSelBtn();
    employStatus.getYesDelBtn();
    });

it("Verify the functionality of the checkbox to select all listed employment statuses", () => {
    employStatus.clickJob();
    employStatus.clickEmpStat(); 
    employStatus.checkAllBoxes(); 
    
    });
 
});