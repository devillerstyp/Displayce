describe('Cart management', () => {
    //let operator = require('../../fixtures/calcul.json')
    beforeEach(() => {
      cy.visit('https://obscure-waters-60500.herokuapp.com/')
      
    })
    
    it('Check items', () => {
          cy.get('.navbar-brand > .fa')
          cy.get('.navbar-brand > .badge')
          cy.get('.navbar-brand').should('contain', "Items")
          cy.get('.btn-success')
              
    })
     
    it('Refrech the items in the cart', () => {
        cy.get('.btn-success').click()
        cy.get('.navbar-brand > .badge').should('contain', 0)
            
  })
  it('Recycle the items in the cart', () => {
    cy.get(':nth-child(3) > .row > .col-md-4 > .btn-secondary > .fa').dblclick()
    
})

it('add elements in the cart', () => {
    // display contain 0 element
    cy.get(':nth-child(3) > .row > .col-md-1 > .badge').should('contain', 'Zero')
    cy.get(':nth-child(4) > .row > .col-md-1 > .badge').should('contain', 'Zero')
    cy.get(':nth-child(5) > .row > .col-md-1 > .badge').should('contain', 'Zero')
    cy.get(':nth-child(6) > .row > .col-md-1 > .badge').should('contain', 'Zero')
    //add element
    cy.get(':nth-child(3) > .row > .col-md-4 > .btn-secondary > .fa').dblclick()
    cy.get(':nth-child(4) > .row > .col-md-4 > .btn-secondary > .fa').click()
    cy.get(':nth-child(5) > .row > .col-md-4 > .btn-secondary > .fa').click()
    cy.get(':nth-child(6) > .row > .col-md-4 > .btn-secondary > .fa').click()
    // value change in display
    cy.get(':nth-child(3) > .row > .col-md-1 > .badge').should('contain', '2')
    cy.get(':nth-child(4) > .row > .col-md-1 > .badge').should('contain', '1')
    cy.get(':nth-child(5) > .row > .col-md-1 > .badge').should('contain', '1')
    cy.get(':nth-child(6) > .row > .col-md-1 > .badge').should('contain', '1')

    cy.get('.navbar-brand > .badge').should('contain', 4)

})

it('remove elements in the cart', () => {
    cy.get(':nth-child(3) > .row > .col-md-4 > .btn-secondary > .fa').dblclick()
    cy.get(':nth-child(3) > .row > .col-md-4 > .btn-info > .fa').click()
    cy.get(':nth-child(3) > .row > .col-md-1 > .badge').should('contain', '1')
    
    cy.get(':nth-child(4) > .row > .col-md-4 > .btn-secondary > .fa').click()
    cy.get(':nth-child(4) > .row > .col-md-4 > .btn-info > .fa').click()
    cy.get(':nth-child(4) > .row > .col-md-1 > .badge').should('contain', 'Zero')

    cy.get(':nth-child(5) > .row > .col-md-4 > .btn-secondary > .fa').click()
    cy.get(':nth-child(5) > .row > .col-md-4 > .btn-info').click()
    cy.get(':nth-child(5) > .row > .col-md-1 > .badge').should('contain', 'Zero')
      
    cy.get(':nth-child(6) > .row > .col-md-4 > .btn-secondary > .fa').click()     
    cy.get(':nth-child(6) > .row > .col-md-4 > .btn-info').click()
    cy.get(':nth-child(6) > .row > .col-md-1 > .badge').should('contain', 'Zero')

    cy.get('.navbar-brand > .badge').should('contain', 1)
  
    
})
it('delete elements in the cart', () => {
    cy.get(':nth-child(3) > .row > .col-md-4 > .btn-danger > .fa').click()
    cy.get(':nth-child(4) > .row > .col-md-4 > .btn-danger > .fa').click()
    cy.get(':nth-child(4) > .row > .col-md-4 > .btn-danger').click()
    cy.get(':nth-child(3) > .row > .col-md-4 > .btn-danger').click()
    cy.get('.navbar-brand > .badge').should('contain', 0)
      
})

    
    
})  