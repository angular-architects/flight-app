describe('Flight Search E2E Test', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('should verify that flight search is showing cards', () => {
    cy.get('input[name=from]').clear().type('London');
    cy.get('input[name=to]').clear().type('Paris');
    cy.get('button.btn').click();

    cy.get('app-flight-card').should('have.length', 3);
  });
});
