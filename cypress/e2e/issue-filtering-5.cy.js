/**
 * Workshop #16
 * We are locating issues here based on one enter ('multiple assignees')
 * Think and create a loop using "forEach", which would allow us to test multiple enters without creating a new instance of test for that
 * Use object with multiple rows for solving this task.
 *
 * Expected result:
 * 1. You will have object with multiple entries
 * 2. You are running test X amount of times without creating new instance of test (using "it")
 */

describe('Issue filtering', () => {
  beforeEach(() => {
    cy.visit('https://jira.ivorreic.com/');
  });

  it('Should filter issues by title', () => {
    getSearchInput().debounced('type', 'multiple assignee');
    cy.get('[data-testid="list-issue"]').should('have.length', '1');
  });


  

  /**
   * New tests can be created here for practice
   * 1. Filter by avatar
   * 2. Filter by "Only My Issues" button
   * 3. Filter by "Recently Updated" button
   */

  const getSearchInput = () => cy.get('[data-testid="board-filters"]').find('input');
});




  describe('Issue filtering', () => {
    beforeEach(() => {
      cy.visit('https://jira.ivorreic.com/');
    });
  
    it.only('Should filter issues by title', () => {
      for ( const element of dataForSearch ) {
        const getSearchInput = () => cy.get('[data-testid="board-filters"]').find('input');
        getSearchInput().debounced('type', element);
      cy.get('[data-testid="list-issue"]').should('have.length', 1);
      }
 
    });
  
  
    const getSearchInput = () => cy.get('[data-testid="board-filters"]').find('input');

    const dataForSearch = [

      {issueSearch: 'multiple assignees', expectedNumberOfFoundIssues: '1'},
      {issueSearch: 'an issue', expectedNumberOfFoundIssues: '3'},
      {issueSearch: 'this', expectedNumberOfFoundIssues: '2'}
      
      ];
  });
