describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:4000/')

    // Check for expected heading.
    cy.get('h1').contains('Helsinki City Bikes')
    
    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/about')

    // The new page should contain an h1 with "About Helsinki City Bikes"
    cy.get('h1').contains('About Helsinki City Bikes')
  })
})