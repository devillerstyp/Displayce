context('Use calculator', () => {
    let operator = require('../../fixtures/calcul.json')
    before(() => {
      cy.visit('https://ahfarmer.github.io/calculator/')
    })

    it('Calculator diplay contain 0', () => {
        cy.get('.component-display > div').should('contain', 0)
      
    })
    it('number key of a calculator ', () => {
        //execution sans jeu de données
        //cy.numberKey(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
        //execution avec jeu de données
        cy.numberKey(operator.zero, operator.un, operator.deux,operator.trois,operator.quatre,
                     operator.cinq, operator.six, operator.sept, operator.huit, operator.neuf)
              
    })
    it('Initialize numbers', () => {
        cy.initialDisplay(0)
             
    })
    it('Calculation operators', () => {
        //execution sans jeu de données
        // cy.operators("+/-", "%", ".", "AC", "x", "-", "+", "=", "÷" )
        //execution avec jeu de données
        cy.operators(operator.sign, operator.percent, operator.comma, operator.clear, operator.multiplication,
                     operator.substraction,operator.addition, operator.equal, operator.division )
            
    })
    it('Addition Operation', () => {
       
        //simple addition 
        cy.simpleAdditionCas1(operator.clear,operator.sept, operator.addition, operator.trois,
                              operator.equal, operator.dix)
       
        // simple addition of 0
        cy.simpleAdditionCas2(operator.clear,operator.un,operator.neuf, operator.addition, operator.zero,
                              operator.equal, operator.dix_neuf)
               
        //simple addition of a negative number

        cy.simpleAdditionCas3(operator.clear,operator.neuf,operator.sign, operator.addition, operator.cinq,
                              operator.equal, operator.neg_quatre)
            
        //simple addition of  decimal number
        cy.simpleAdditionCas4(operator.clear,operator.un, operator.deux,operator.comma,operator.trois,
                              operator.addition, operator.huit, operator.cinq,operator.equal, operator.vingt_chuit)
              
    })

    it('subtraction Operation', () => {
       
        //simple substraction
        cy.substractionCas1(operator.clear, operator.neuf, operator.sept, operator.substraction, operator.trois,
                            operator.cinq, operator.equal, operator.soixante_deux)
        
        // simple substraction of 0
        cy.substractionCas2(operator.clear, operator.un,operator.neuf, operator.substraction, operator.zero,
                            operator.equal, operator.dix_neuf)
                
        //simple substraction of a negative number
        cy.substractionCas3(operator.clear, operator.trois,operator.neuf, operator.sign,operator.substraction,
                            operator.cinq, operator.zero, operator.equal, operator.cquatre_vingt_neuf)

        
        cy.substractionCas4(operator.clear, operator.trois,operator.neuf, operator.sign,operator.substraction,
                            operator.cinq, operator.zero, operator.sign, operator.equal, operator.trente_un)
        
               
        //simple substraction of  decimal number
        cy.substractionCas5(operator.clear, operator.un,operator.deux, operator.comma,operator.trois,
                            operator.substraction, operator.huit, operator.comma,operator.cinq,operator.equal, 
                            operator.trois_c_huit)
        
    })
    it('Division operation', () => {
       
        //simple division
        cy.divisionCas1(operator.clear, operator.cinq,operator.neuf,operator.division, operator.sept,
                        operator.cinq,operator.equal,operator.huit_c_quarenteDeux)
        
        // simple division by 0
        cy.divisionCas2(operator.clear, operator.zero,operator.division, operator.un,operator.neuf,
                        operator.equal, operator.zero)
                
        //simple division  of a negative number
        cy.divisionCas3(operator.clear, operator.trois,operator.zero, operator.sign,operator.division,
                        operator.un, operator.zero, operator.equal, operator.neg_trois)
        
        // simple division  between two negatives numbers
        cy.divisionCas4(operator.clear, operator.un,operator.neuf,operator.zero, operator.sign,operator.division,
                        operator.cinq,operator.sign, operator.equal, operator.trente_huit)
        
        // simple division with  negative denominator number
        cy.divisionCas5(operator.clear,operator.neuf,operator.zero,operator.division,
            operator.neuf,operator.sign, operator.equal, operator.neg_dix)
        
       
        //simple division  by  decimal number
        cy.divisionCas6(operator.clear, operator.trois,operator.deux,operator.division, operator.huit,
                        operator.comma,operator.cinq,operator.equal, operator.trois_c_septSix)
        
        // division by 0,...
        cy.divisionCas7(operator.clear, operator.trois,operator.zero,operator.division, operator.zero,
            operator.comma,operator.cinq,operator.equal, operator.soixante)
       
      
    })
    it('Multiplication operation', () => {
       
        //simple Multiplication
        cy.multiplicationCas1(operator.clear, operator.neuf,operator.multiplication, operator.sept,
                              operator.equal,operator.soixante_trois)
        
        // simple Multiplication by 0
        cy.multiplicationCas2(operator.clear, operator.zero,operator.multiplication, operator.un, operator.neuf,
                              operator.equal,operator.zero)
        
        
        //simple Multiplication  of negative number
        cy.multiplicationCas3(operator.clear, operator.trois,operator.zero,operator.multiplication, operator.un, 
                              operator.cinq,operator.sign,operator.equal,operator.neg_qutre_cinq_zero)

        // simple Multiplication between two negatives numbers
        cy.multiplicationCas4(operator.clear, operator.un,operator.zero,operator.sign,operator.multiplication, operator.cinq, 
                             operator.sign,operator.equal,operator.cinquante)
        
        // simple Multiplication between  negative and positive number 
        cy.multiplicationCas5(operator.clear, operator.neuf,operator.zero,operator.multiplication, operator.neuf, 
                              operator.sign,operator.equal,operator.neg_huit_cent_dix)
               
        //simple Multiplication  of  decimal number
        cy.multiplicationCas5(operator.clear, operator.trois,operator.deux,operator.comma,operator.quatre,
                              operator.multiplication, operator.huit,operator.comma,operator.cinq,operator.equal,operator.deuxcent_sept_cinq_cquatre)

        // Multiplication by 0,...
        cy.multiplicationCas6(operator.clear, operator.trois,operator.zero,operator.comma,operator.cinq,
                              operator.multiplication, operator.zero,operator.comma,operator.un,
                              operator.equal,operator.trois_c_cinq)
              
    })
    it('Percentage', () => {
        cy.percentage(operator.clear, operator.trois,operator.zero,operator.percent,operator.equal,operator.zero_c_trois)
              
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