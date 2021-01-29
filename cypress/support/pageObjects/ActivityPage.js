class ActivityPage {
    getActivityName() {
        return cy.get("#txtAssignmentName");
    }
    getClass() {
        return cy.get("#selclass");
    }
    getSubjectName() {
        return cy.get("#selSubject");
    }
    getChapter() {
        return cy.get("#Select1");
    }
    getTopic() {
        return cy.get(":nth-child(2) > .nice-select");
    }
    getDescription() {
        return cy.get(".cke_wysiwyg_div");
    }
    getResources() {
        return cy.get('[ng-click="addResourceLink()"]')
    }
    getResourcepreview() {
        return cy.get('i.fa.fa-eye.resource-preview-icon')
    }
    getDeleteResource() {
        return cy.get('.fa.fa-trash.resource-delete-icon[ng-click="deleteResource($index)"]')
    }
    getClosePreview() {
        cy.get('[ng-click="closeModal()"]')
    }
    getCreatePushButton() {
        return cy.get("#aCreateAndPush");
    }
    getCheckSection() {
        return cy.get('[ng-change="onSectionChecked(section)"]')
    }
    

}
export default ActivityPage;