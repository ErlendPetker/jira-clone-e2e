import IssueModal from "../pages/workshop20.js";


describe('workshop 22', () => {
    beforeEach(() => {
        cy.visit('https://jira.ivorreic.com');
        // cy.intercept('GET','**/currentUser').as('currentUserApiRequest')
        cy.url().should('eq', 'https://jira.ivorreic.com/project/board').then((url) => {
            // cy.wait('@currentUserApiRequest')
             cy.visit(url + '/project/board?modal-issue-create=true');
        });
        IssueModal.createIssueRandomData();
    });

    it('Delete recent issue from list', () => {

        //IssueModal.createIssueRandomData();
        IssueModal.deleteRecentIssue(); 
    
    })

    it('Start deletion, but cancel it', () => {

       // IssueModal.createIssueRandomData();
        IssueModal.cancelDeletion(); 
    
    })

})