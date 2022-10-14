describe('First test', () => {
  it('User opens the website and check the heading', () => {
    cy.visit('http://work.co/')

    cy.get('[data-test-id="header-title-text"]').should('have.text', 'We design and ship digital products that transform companies.')
  })
})