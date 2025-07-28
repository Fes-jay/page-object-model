/// <reference types="cypress" />
import JobCategories from "../../../pageObject/pageActions/addJobCategoriesAction";
const JobCat = new JobCategories

describe("JOB CATEGORIES", () => {

 beforeEach(() => {
    cy.loginAsAdmin();
  });

 
it("Verify that job categories is clickable", () => {
    JobCat.clickJob();
    JobCat.clickJobCat();
    });

it("Verify presence of 'Add Job Category' on the add Job Category page", () => {
    JobCat.clickJob();
    JobCat.clickJobCat();
    JobCat.addJobCatBtn();
    JobCat.PageTitle();
    });
it("Verify Add button functionality on the Job categories page", () => {
    JobCat.clickJob();
    JobCat.clickJobCat();
    JobCat.addJobCatBtn();
    });
it("Verify that admin can add job categories.", () => {
    JobCat.clickJob();
    JobCat.clickJobCat();
    JobCat.addJobCatBtn();
    JobCat.enterValidName();
    JobCat.saveBtn();
    });

it("Verify adding Job categories with invalid name(number).", () => {
    JobCat.clickJob();
    JobCat.clickJobCat();
    JobCat.addJobCatBtn();
    JobCat.enterValidName('3456');
    JobCat.saveBtn();
    // this should fail but passed
    });

it("Verify adding Job categories with invalid name (special character).", () => {
    JobCat.clickJob();
    JobCat.clickJobCat();
    JobCat.addJobCatBtn();
    JobCat.enterValidName('"&^%$');
    JobCat.saveBtn();
    // this should fail but passed
    });

it("Verify adding Job categories with invalid name (emoji).", () => {
    JobCat.clickJob();
    JobCat.clickJobCat();
    JobCat.addJobCatBtn();
    JobCat.enterValidName('😁😁👍🏼👍🏼');
    JobCat.saveBtn();
    
    });



it("Check the validation of the required field on the page", () => {
    JobCat.clickJob();
    JobCat.clickJobCat();
    JobCat.addJobCatBtn();
    JobCat.saveBtn();
    JobCat.errorMsg();
    });

it("Check the fuctionality of the Cancel button on the add Job category page", () => {
    JobCat.clickJob();
    JobCat.clickJobCat();
    JobCat.addJobCatBtn();
    JobCat.enterValidName('professionals');
    JobCat.cancelBtn();
    });

it("Verify that admin can edit job categories.", () => {
    JobCat.clickJob();
    JobCat.clickJobCat();
    JobCat.JobCatEditIcon();
    JobCat.enterValidNameAndEdit('gfghafsvsbsn');
    JobCat.saveBtn();
    });

it("Verify that 'Delete selected' button appears when  clicked on any of the checkbox on the list of job categories", () => {
    JobCat.clickJob();
    JobCat.clickJobCat();
    JobCat.checkBox1();
    JobCat.delselBtnVerification();
    
    });
it("Verify that clicking the close button (X) closes the confirmation dialog", () => {
    JobCat.clickJob();
    JobCat.clickJobCat();
    JobCat.checkBox1();
    JobCat.delSelBtn();
    JobCat.dialogCloseBtn();
    
    });

it("Verify that admin can delete job category.", () => {
    JobCat.clickJob();
    JobCat.clickJobCat();
    JobCat.JobCatDelIcon();
    JobCat.yesDelBtn();
    
    });
it("Verify the functionality of the checkbox to check all list on the record table.", () => {
    JobCat.clickJob();
    JobCat.clickJobCat();
    JobCat.checkAllBox();
    });

it.only("Verify that admin can delete multiple job categories using the checkboxes.", () => {
    JobCat.clickJob();
    JobCat.clickJobCat();
    JobCat.checkBox1();
    JobCat.checkBox2();
    JobCat.delSelBtn();
    JobCat.yesDelBtn();
    });
});

