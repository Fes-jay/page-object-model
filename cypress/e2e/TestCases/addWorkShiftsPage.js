/// <reference types="cypress" />
import workShift from "../../../pageObject/pageActions/addWorkShiftsAction";
const wrkSft =new workShift
describe("WORK SHIFTS", () => {

 beforeEach(() => {
    cy.loginAsAdmin();
  });

 
it("Verify that work shifts is clickable", () => {
    wrkSft.clickJob();
    wrkSft.clickWorkShift();
    });

it("Verify presence of 'Add Work Shift' on the add Work Shift page", () => {
    wrkSft.clickJob();
    wrkSft.clickWorkShift();
    wrkSft.addWorkShiftBtn();
    wrkSft.PageTitle();
    
    });
it("Verify that an admin can add work shift with valid data.", () => {
    wrkSft.clickJob();
    wrkSft.clickWorkShift();
    wrkSft.addWorkShiftBtn();
    wrkSft.enterValidName('Mighty');
    wrkSft.assignEmployee('o');
    wrkSft.autocomplete();
    wrkSft.saveBtn();
    });

it.only("Verify that an admin can add work shift for multiple employees.", () => {
    wrkSft.clickJob();
    wrkSft.clickWorkShift();
    wrkSft.addWorkShiftBtn();
    wrkSft.enterValidName('Mighty');
    wrkSft.assignEmployee('o');
    wrkSft.autocomplete1();
    wrkSft.assignEmployee('o'); 
    wrkSft.autocomplete2();
    wrkSft.saveBtn();
    });
});