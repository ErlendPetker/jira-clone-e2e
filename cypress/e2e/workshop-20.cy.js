import IssueModal from "../pages/workshop20.js";

describe('workshop 20', () => {
    beforeEach(() => {
        cy.visit('https://jira.ivorreic.com');
        // cy.intercept('GET','**/currentUser').as('currentUserApiRequest')
        cy.url().should('eq', 'https://jira.ivorreic.com/project/board').then((url) => {
            // cy.wait('@currentUserApiRequest')
            cy.visit(url + '/project/board?modal-issue-create=true');
        });
    });

it('TASK1', () => {

    IssueModal.createIssueNoData(); 

})

it('TASK2', () => {

    IssueModal.createIssueRandomData(); 

})

it('TASK3', () => {

    IssueModal.createIssueTask3(); 

})

})