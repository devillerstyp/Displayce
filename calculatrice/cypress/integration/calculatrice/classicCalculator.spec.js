context('Use calculator', () => {
    before(() => {
      cy.visit('https://ahfarmer.github.io/calculator/')
    })

    it('Calculator diplay contain 0', () => {
        cy.get('.component-display > div').should('contain', 0)
      
    })
    it('number key of a calculator ', () => {
        cy.numberKey(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
              
    })
    it('Initialize numbers', () => {
        cy.initialDisplay(0)
             
    })
    it('Calculation operators', () => {
        cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
        cy.get(':nth-child(1) > :nth-child(3) > button').should('contain', "%").click()
        cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(2) > .orange > button').should('contain', "x").click()
        cy.get(':nth-child(3) > .orange > button').should('contain', "-").click()
        cy.get(':nth-child(4) > .orange > button').should('contain', "+").click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get(':nth-child(1) > .orange > button').should('contain', "÷").click()
      
    })
    it('Addition Operation', () => {
       
        //simple addition 
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(2) > :nth-child(1) > button').should('contain', 7).click()       
        cy.get(':nth-child(4) > .orange > button').should('contain', "+").click()
        cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain', 10)

        // simple addition of 0
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
        cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
        cy.get(':nth-child(4) > .orange > button').should('contain', "+").click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain', 19)
        
        //simple addition of a negative number
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
        cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
        cy.get(':nth-child(4) > .orange > button').should('contain', "+").click()
        cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain', -4)
       
        //simple addition of  decimal number
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
        cy.get(':nth-child(4) > :nth-child(2) > button').should('contain', 2).click()
        cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
        cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
        cy.get(':nth-child(4) > .orange > button').should('contain', "+").click()
        cy.get(':nth-child(2) > :nth-child(2) > button').should('contain', 8).click()
        cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
        cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain', 20.8)
      
    })

    it('subtraction Operation', () => {
       
        //simple substraction
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
        cy.get(':nth-child(2) > :nth-child(1) > button').should('contain', 7).click()       
        cy.get(':nth-child(3) > .orange > button').should('contain', "-").click()
        cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
        cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain', 62)
        // simple substraction of 0
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
        cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
        cy.get(':nth-child(3) > .orange > button').should('contain', "-").click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain', 19)
        
        //simple substraction of a negative number
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
        cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
        cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
        cy.get(':nth-child(3) > .orange > button').should('contain', "-").click()
        cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain', -89)

        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
        cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
        cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
        cy.get(':nth-child(3) > .orange > button').should('contain', "-").click()
        cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain', 31)
       
        //simple substraction of  decimal number
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
        cy.get(':nth-child(4) > :nth-child(2) > button').should('contain', 2).click()
        cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
        cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
        cy.get(':nth-child(3) > .orange > button').should('contain', "-").click()
        cy.get(':nth-child(2) > :nth-child(2) > button').should('contain', 8).click()
        cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
        cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain',3.8)
      
    })
    it('Division operation', () => {
       
        //simple division
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
        cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()         
        cy.get(':nth-child(1) > .orange > button').should('contain', "÷").click()
        cy.get(':nth-child(2) > :nth-child(1) > button').should('contain', 7).click() 
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain',8.42)
        // simple division by 0
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(1) > .orange > button').should('contain', "÷").click()
        cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
        cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain', 0)
        
        //simple division  of a negative number
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
        cy.get(':nth-child(1) > .orange > button').should('contain', "÷").click()
        cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain', -3)

        // simple division  between two negatives numbers
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
        cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
        cy.get(':nth-child(1) > .orange > button').should('contain', "÷").click()
        cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
        cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain', 38)

        // simple division with  negative denominator number
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(1) > .orange > button').should('contain', "÷").click()
        cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
        cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain', 10)
       
        //simple division  by  decimal number
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
        cy.get(':nth-child(4) > :nth-child(2) > button').should('contain', 2).click()
        cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
        cy.get(':nth-child(1) > .orange > button').should('contain', "÷").click()
        cy.get(':nth-child(2) > :nth-child(2) > button').should('contain', 8).click()
        cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
        cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain',3.76)
        // division by 0,...
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
        cy.get(':nth-child(1) > .orange > button').should('contain', "÷").click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
        cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain',60)
      
    })
    it('Multiplication operation', () => {
       
        //simple Multiplication
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()         
        cy.get(':nth-child(2) > .orange > button').should('contain', "x").click()
        cy.get(':nth-child(2) > :nth-child(1) > button').should('contain', 7).click() 
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain',63)
        // simple Multiplication by 0
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(2) > .orange > button').should('contain', "x").click()
        cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
        cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain', 0)
        
        //simple Multiplication  of negative number
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(2) > .orange > button').should('contain', "x").click()
        cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
        cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
        cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain', -450)

        // simple Multiplication between two negatives numbers
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
        cy.get(':nth-child(2) > .orange > button').should('contain', "x").click()
        cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
        cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain', 50)

        // simple Multiplication between  negative and positive number 
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(2) > .orange > button').should('contain', "x").click()
        cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
        cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain', -810)
       
        //simple Multiplication  of  decimal number
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
        cy.get(':nth-child(4) > :nth-child(2) > button').should('contain', 2).click()
        cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click() 
        cy.get(':nth-child(3) > :nth-child(1) > button').should('contain', 4).click()
        cy.get(':nth-child(2) > .orange > button').should('contain', "x").click()
        cy.get(':nth-child(2) > :nth-child(2) > button').should('contain', 8).click()
        cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
        cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain',275.4)
        // Multiplication by 0,...
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
        cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
        cy.get(':nth-child(2) > .orange > button').should('contain', "x").click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
        cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
        cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cy.get('.component-display > div').should('contain',3.05)
      
    })
    it('Percentage', () => {
        cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
        cy.get('.wide > button').should('contain', 0).click()
        cy.get(':nth-child(1) > :nth-child(3) > button').should('contain', "%").click()
        cy.get('.component-display > div').should('contain', 0.3)
      
    })
    /*it('Fork me on Github', () => {
        
        cy.get('.left-top').should('contain', "Fork me on GitHub").click( {force: true})
        cy.visit('https://github.com/ahfarmer/calculator') 
        //cy.wait(2000) 
        //cy.visit('https://github.com/ahfarmer/calculator')  
        //cy.url().should('contain','https://github.com/ahfarmer/calculator')
        //cy.get('h2').should('contain', "Learn Git and GitHub without any code!").click()
    })
    */
    
})  