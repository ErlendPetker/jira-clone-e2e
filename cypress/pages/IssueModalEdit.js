class IssueModalEdit {
    constructor() {
        
        this.issueType = '[data-testid="select:type"]';
        this.issueTypeStory = '[data-testid="select-option:Story"]';
        this.selectAssignees='[data-testid="select:assignees"]'
        this.assignee = '[data-testid="select:userIds"]';
        this.assigneeLordGaben = '[data-testid="select-option:Lord Gaben"]';
        this.assigneeBabyYoda = '[data-testid="select-option:Baby Yoda"]';
        this.submitButton = 'button[type="submit"]';
        this.selectStatus= '[data-testid="select:status"]';
        this.issueStatusDone= '[data-testid="select-option:Done"]';
        this.selectReporter='[data-testid="select:reporter"]';
        this.reporterPickleRick='[data-testid="select-option:Pickle Rick"]';
        this.selectPriority='[data-testid="select:priority"]';
        this.priorityMedium='[data-testid="select-option:Medium"]';
    }

    selectIssueType() {
        cy.get(this.issueType).click('bottomRight');
        cy.get(this.issueTypeStory)
            .trigger('mouseover')
            .trigger('click');
        cy.get('[data-testid="select:type"]').should('contain', 'Story');
    }

    selectIssueStatus() {
        cy.get(this.selectStatus).click('bottomRight');
        cy.get(this.issueStatusDone).click();
        cy.get('[data-testid="select:status"]').should('have.text', 'Done');
    }

    selectIssueAssignee() {
        cy.get(this.selectAssignees).click('bottomRight');
        cy.get(this.assigneeLordGaben).click()
        cy.get(this.selectAssignees).click('bottomRight');
        cy.get(this.assigneeBabyYoda).click()
        cy.get('[data-testid="select:assignees"]').should('contain', 'Baby Yoda');
        cy.get('[data-testid="select:assignees"]').should('contain', 'Lord Gaben');
    }

    selectIssueReporter() {
       cy.get(this.selectReporter).click('bottomRight');
       cy.get(this.reporterPickleRick).click();
       cy.get('[data-testid="select:reporter"]').should('have.text', 'Pickle Rick');
    }

    selectIssuePriority(){
        cy.get(this.selectPriority).click('bottomRight');
        cy.get(this.priorityMedium).click();
        cy.get('[data-testid="select:priority"]').should('have.text', 'Medium');
    }

    updateIssue() {
            this.selectIssueType();
            this.selectIssueStatus();
            this.selectIssueAssignee();
            this.selectIssueReporter();
            this.selectIssuePriority();
    }
   
}

export default new IssueModalEdit();