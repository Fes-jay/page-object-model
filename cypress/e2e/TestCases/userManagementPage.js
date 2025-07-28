/// <reference types="cypress" />

import userManagementElement from "../../../pageObject/pageActions/userManagementPageAction";

const User_Mgt = new userManagementElement

describe("User Management", () => {

 beforeEach(() => {
    cy.loginAsAdmin();
  });


  it("Admin can see 'User Management' in the top bar of the Admin page", () => {
    User_Mgt.userManagementVisibility()
    })

  it("Admin can verify the dropdown on User Management functions properly", () => {
    User_Mgt.userManagementDropdown()
    })
    
  it("Admin can verify that the Users link is clickable", () => {
    User_Mgt.userVisibilty()
    })
    
});
 