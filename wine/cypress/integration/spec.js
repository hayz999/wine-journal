describe('Wine-About-It', () => {
  it('has about page', () => {
    cy.visit('https://wine-about-it.firebaseapp.com')
    cy.get('#nav-bar a').should('have.length', 4)
    cy.get('.header').should('contain', 'Wine-About-It')
    cy.get('#about').contains('p')
  })
  it('allows new submission', () => {
    cy.get('a').eq(1).click()
    cy.get('input').eq(0).type('Red wine')
    cy.get('input').eq(1).type('2018')
    cy.get('input').eq(2).type('Merlot')
    cy.get('input').eq(3).type('Silver Oak')
    cy.get('input').eq(4).type('Napa')
    cy.get('textArea').type('Good Wine')
    cy.get('input').eq(5).type('80')
    cy.get('button').contains('Submit').click()
  })
  it('loads journals', () => {
    cy.get('a').eq(2).click()
  })
  it('loads chart', () => {
    cy.get('a').eq(3).click()
    cy.get('canvas').should('exist')
  });
})