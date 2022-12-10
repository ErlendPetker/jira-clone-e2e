import IssueModal from "../pages/workshop20.js";


describe('workshop 23', () => {
    beforeEach(() => {
        cy.visit('https://jira.ivorreic.com');
        // cy.intercept('GET','**/currentUser').as('currentUserApiRequest')
        cy.url().should('eq', 'https://jira.ivorreic.com/project/board').then((url) => {
            // cy.wait('@currentUserApiRequest')
             cy.visit(url + '/project/board?modal-issue-create=true');
        });
        IssueModal.createIssueRandomData();
    });

    it('Add, edit estimation', () => {

        IssueModal.addEditRemoveEstimation(); 
    
    })

    it.only('Add, remove log time', () => {

        IssueModal.addRemoveLogtime(); 
    
    })



})