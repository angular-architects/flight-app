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

  it('should search for flights from Vienna to Eisenstadt by intercepting the network', () => {
    const from = 'Vienna';
    const to = 'Eisenstadt';
    const date = new Date().toISOString();
    const delayed = false;

    cy.intercept('GET', 'https://demo.angulararchitects.io/api/flight**', [
      { id: 10, from, to, date, delayed },
      { id: 11, from, to, date, delayed },
      { id: 12, from, to, date, delayed },
    ]);

    cy.get('input[name=from]').clear().type('Vienna');
    cy.get('input[name=to]').clear().type('Eisenstadt');
    cy.get('button.btn').click();

    cy.get('app-flight-card').should('have.length', 3);

    // Check styles
    cy.get('app-flight-card').first().as('flight-card');
    cy.get('@flight-card')
      .find('> div')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('@flight-card').contains('button', 'Select').click();
    cy.get('@flight-card')
      .find('> div')
      .should('have.css', 'background-color', 'rgb(255, 228, 181)');
  });

  it('should disable the search button when form is invalid', () => {
    cy.get('input[name=from]').clear();
    cy.get('input[name=to]').clear();
    cy.get('button.btn').should('be.disabled');
  });

  it('should enable the search button when form is valid', () => {
    cy.get('input[name=from]').clear().type('London');
    cy.get('input[name=to]').clear().type('Paris');
    cy.get('button.btn').should('not.be.disabled');
  });
});
