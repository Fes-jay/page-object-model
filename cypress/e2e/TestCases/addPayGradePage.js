/// <reference types="cypress" />
import payGrade from "../../../pageObject/pageActions/addPayGradeAction"
const pg = new payGrade

describe("User Management", () => {

 beforeEach(() => {
    cy.loginAsAdmin();
  });

 
it("Verify if Pay Grades is clickable.", () => {
pg.clickJob();
pg.clickJobGrades();

    });

it("Verify the presence of 'Add Pay Grade' on the add Pay Grades page", () => {
pg.clickJob();
pg.clickJobGrades();
pg.addJobGradeBtn();
pg.verifyJobGradeTitle();

    });

it("Verify adding Pay Grades with valid data", () => {
pg.clickJob();
pg.clickJobGrades();
pg.addJobGradeBtn();
pg.enterName();
pg.saveEnteredNameBtn();
pg.addCurrencyBtn();
pg.selectCurrency();
pg.minSalary();
pg.maxSalary();
pg.saveAddCurrency();

    });
it("Verify adding Pay Grades with invalid name", () => {
pg.clickJob();
pg.clickJobGrades();
pg.addJobGradeBtn();
pg.enterInvalidName();
pg.saveEnteredNameBtn();

//this should fail, but it passed
    });

it("Verify adding Pay Grade without required fields", () => {
pg.clickJob();
pg.clickJobGrades();
pg.addJobGradeBtn();
pg.saveEnteredNameBtn();
pg.errorMsg();
});

it("Verify the Cancel button functionality on the add Pay Grade page", () => {
pg.clickJob();
pg.clickJobGrades();
pg.addJobGradeBtn();
pg.enterName();
pg.cancelEnteredNameBtn();
 });
it("Verify the Cancel button functionality when adding currency to the Pay Grade saved", () => {
pg.clickJob();
pg.clickJobGrades();
pg.addJobGradeBtn();
pg.enterName();
pg.saveEnteredNameBtn();
pg.addCurrencyBtn();
pg.cancelAddCurrency();
 });

it("verify if existing Pay Grade can be edited", () => {
pg.clickJob();
pg.clickJobGrades();
pg.editIcon();
pg.enterNameToEdit();
pg.saveEnteredNameBtn();

 });

it("Verify if an existing Pay grade can be deleted using checkbox", () => {
pg.clickJob();
pg.clickJobGrades();
pg.checkbox1();
pg.deleteSel();
pg.yesDeleteBtn();
 });

it.only("Verify that the admin can delete multiple pay grades at once using checkboxes.", () => {
pg.clickJob();
pg.clickJobGrades();
pg.checkbox1();
pg.checkbox2();
pg.deleteSel();
pg.yesDeleteBtn();
 });


});