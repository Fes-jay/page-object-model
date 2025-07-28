const StructureElementLocators = require("../pageElements/structure.json")

export class structurePageElement{
     structure_link() {
        cy.get(StructureElementLocators.StructurePageLocators.structure_link).click();
        return
        }

        edit_link() {
        cy.get(StructureElementLocators.StructurePageLocators.edit_btn ).click();
        return
        }

         add_btnn() {
        cy.get(StructureElementLocators.StructurePageLocators.add_btn ).click();
        return
        }
        
        

}
export default structurePageElement