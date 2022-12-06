import { faker } from '@faker-js/faker';

class IssueModal {
    constructor() {
        this.submitButton = 'button[type="submit"]';
        this.shortDesc= '[data-testid="form-field:title]';
        this.shortDescField='[name="title"]'
        this.errorMessage= 'div';
        this.randomTitle= faker.word.adjective(5)
        this.issueType='[data-testid="select:type"]';
        this.issuePriority='[data-testid="form-field:priority"]'
        this.issueReporter='[data-testid="form-field:reporterId"]'
        this.issueTypeBug='[data-testid="select-option:Bug"]' 
        this.priorityHighest='[data-testid="select-option:Highest"]'
        this.reporterPicklerick='[data-testid="select-option:Pickle Rick"]'
        this.issueIconTask='[data-testid="icon:task"]'
        this.issue='[data-testid="list-issue"]';
        this.typePartialSelector='[data-testid="icon:';
        this.board='#root';
        this.firstIssue = '[data-testid="list-issue"]'
        this.trashIcon= '[data-testid="icon:trash"]'
        this.deleteButton = 'button'
        this.deleteConfirmationModal ='[data-testid="modal:confirm]'
    }

    selectIssueType(issueType) {
        cy.get(this.issueType).invoke('text').then((extractedText) => {
            if(extractedText != issueType) {
                cy.get(this.issueType).click('bottomRight');
                cy.get(`[data-testid="select-option:${issueType}"]`)
                .trigger('mouseover')
                .trigger('click');
            }
        })
    }

    ensureCreatedIssueIsVisible(title){
        cy.contains(title).should('be.visible');
    }

    ensureIssueIsFirstOnTheBoard(title){
        cy.get(this.issue).first().within(() => {
            cy.get('p').invoke('text').should('contain', title);
        })
    }

    ensureFistIssueHasType(type){

        cy.get(this.issue).first().within(() => {
            cy.get(this.typePartialSelector + type.toLowerCase() + "\"]").should('be.visible');
        })
    }

  
    createIssueNoData() {
            cy.get(this.submitButton).click();
            cy.get(this.shortDescField).should('have.css', 'border').should('contain', '1px solid rgb(225, 60, 60)')
            cy.get(this.errorMessage).should('contain', 'This field is required');
    }

    createIssueRandomData() {
        this.selectIssueType('Task');
        cy.wait(500)
        cy.get(this.shortDescField).clear().type(this.randomTitle).blur();
        cy.get(this.submitButton).click();
        cy.wait(15000)
        this.ensureFistIssueHasType('Task');
       
}

createIssueTask3() {
    
    cy.get(this.issuePriority).click()
    cy.wait(500)
        cy.get(this.priorityHighest).trigger('mouseover').trigger('click');
    cy.get(this.issueReporter).click()
        cy.get(this.reporterPicklerick).trigger('mouseover').trigger('click');
    cy.get(this.shortDescField).clear().type(this.randomTitle).blur();
    cy.get(this.issueType).click()
        cy.get(this.issueTypeBug).trigger('mouseover').trigger('click');
    cy.get(this.submitButton).click();
    cy.wait(15000)
    this.ensureFistIssueHasType('Bug');
    
}

deleteRecentIssue() {
    cy.visit('jira.ivorreic.com/project/board')
    cy.get(this.firstIssue).first().click();
    cy.get(this.trashIcon).click();
    cy.get(this.deleteButton).contains('Delete issue').click();
    cy.get(this.deleteConfirmationModal).should('not.exist');
}

cancelDeletion() {
    cy.visit('jira.ivorreic.com/project/board');
    cy.get(this.firstIssue).first().click();
    cy.get(this.trashIcon).click();
    cy.get(this.deleteButton).contains('Cancel').click();
    cy.get(this.deleteConfirmationModal).should('not.exist');
}


}

export default new IssueModal();