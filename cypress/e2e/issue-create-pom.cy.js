import IssueModal from "../pages/IssueModalNew";

describe('Issue create', () => {
    beforeEach(() => {
      cy.visit('https://jira.ivorreic.com');
      cy.intercept('GET','**/currentUser').as('currentUserApiRequest')
      cy.url().should('eq', 'https://jira.ivorreic.com/project/board').then((url) => {
        cy.wait('@currentUserApiRequest')
        cy.visit(url + '/settings?modal-issue-create=true');
      });
    });
  
    it('Should create an issue and validate it successfully', () => {
        IssueModal.createIssue('TITLE', 'DESCRIPTION');
    });
  });
  