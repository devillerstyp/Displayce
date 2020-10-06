describe('snap shop', () => {
    //let operator = require('../../fixtures/calcul.json')
    beforeEach(() => {
        cy.visit('https://yog9.github.io/SnapShot/#/SnapScout/mountain')
        cy.get('h1')
            .should('contain', 'SnapShot')
        cy.waitForReact();

    })

    it('title and search any theme', () => {
        cy.get('h1').should('contain', "SnapShot")
        cy.get('input').type("Plage")
        cy.get('.search-button').click()
        cy.get('.photo-container').trigger('mouseover')
        cy.get('.photo-container').should('be.visible')
        cy.get('h2').should('contain', 'Plage Images')
        
    })
    it('check the concordance between theme and pictures', () => {
        cy.get('h1').should('contain', "SnapShot")
        cy.get('input').type("Plage")
        cy.get('.search-button').click()
        cy.get('.photo-container').trigger('mouseover')
        cy.get('.photo-container').should('be.visible')
        //cy.get('h2').should('contain', 'Plage Images')
        //cy.get(':nth-child(1) > .active',{timeout:2000}).click({force:true})
        cy.get(':nth-child(1) > a').click({ force: true })
        // cy.get('h2').should('contain', 'Mountain Pictures')
        cy.get(':nth-child(2) > a').click()
        // cy.get('h2').should('contain', ' Beach Pictures')
        cy.get('ul > :nth-child(3) > a').click()
        // cy.get('h2').should('contain', 'Bird Pictures')
        cy.get(':nth-child(4) > a').click()
        cy.waitForReact(4000)
        //cy.get('h2').should('contain', 'Food Pictures')
        cy.get(':nth-child(1) > img').trigger('mouseover')


    })




})  