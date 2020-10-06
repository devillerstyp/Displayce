Cypress.Commands.add('numberKey', (zero, un, deux, trois, quatre, cinq, six, sept, huit, neuf) => {
    zero = cy.get('.wide > button').should('contain', 0).click()
    un = cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
    deux = cy.get(':nth-child(4) > :nth-child(2) > button').should('contain', 2).click()
    trois = cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
    quatre = cy.get(':nth-child(3) > :nth-child(1) > button').should('contain', 4).click()
    cinq = cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
    six = cy.get(':nth-child(3) > :nth-child(3) > button').should('contain', 6).click()
    sept = cy.get(':nth-child(2) > :nth-child(1) > button').should('contain', 7).click()
    huit = cy.get(':nth-child(2) > :nth-child(2) > button').should('contain', 8).click()
    neuf = cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
    cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "C").click()

})
Cypress.Commands.add('initialDisplay', (init) => {
    init = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    cy.get('.component-display > div').should('contain', 0)

})
Cypress.Commands.add('operators', (sign, percent, comma, clear, multiplication, substraction, addition, equal, division) => {
    sign = cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
    percent = cy.get(':nth-child(1) > :nth-child(3) > button').should('contain', "%").click()
    comma = cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    multiplication = cy.get(':nth-child(2) > .orange > button').should('contain', "x").click()
    substraction = cy.get(':nth-child(3) > .orange > button').should('contain', "-").click()
    addition = cy.get(':nth-child(4) > .orange > button').should('contain', "+").click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    division = cy.get(':nth-child(1) > .orange > button').should('contain', "÷").click()
})
Cypress.Commands.add('simpleAdditionCas1', (clear, sept, addition, trois, equal, dix) => {
    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    sept = cy.get(':nth-child(2) > :nth-child(1) > button').should('contain', 7).click()
    addition = cy.get(':nth-child(4) > .orange > button').should('contain', "+").click()
    trois = cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    dix = cy.get('.component-display > div').should('contain', 10)
})
Cypress.Commands.add('simpleAdditionCas2', (clear, un, neuf, addition, zero, equal, dix_neuf) => {
    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    un = cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
    neuf = cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
    addition = cy.get(':nth-child(4) > .orange > button').should('contain', "+").click()
    zero = cy.get('.wide > button').should('contain', 0).click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    dix_neuf = cy.get('.component-display > div').should('contain', 19)

})
Cypress.Commands.add('simpleAdditionCas3', (clear, neuf, sign, addition, cinq, equal, neg_quatre) => {
    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    neuf = cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
    sign = cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
    addition = cy.get(':nth-child(4) > .orange > button').should('contain', "+").click()
    cinq = cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    neg_quatre = cy.get('.component-display > div').should('contain', -4)

})

Cypress.Commands.add('simpleAdditionCas4', (clear, un, deux, comma, trois, addition, huit, cinq, equal, vingt_chuit) => {
    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    un = cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
    deux = cy.get(':nth-child(4) > :nth-child(2) > button').should('contain', 2).click()
    comma = cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
    trois = cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
    addition = cy.get(':nth-child(4) > .orange > button').should('contain', "+").click()
    huit = cy.get(':nth-child(2) > :nth-child(2) > button').should('contain', 8).click()
    comma = cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
    cinq = cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    vingt_chuit = cy.get('.component-display > div').should('contain', 20.8)
})
Cypress.Commands.add('substractionCas1', (clear, neuf, sept, substraction, trois, cinq, equal, soixante_deux) => {

    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    neuf = cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
    sept = cy.get(':nth-child(2) > :nth-child(1) > button').should('contain', 7).click()
    substraction = cy.get(':nth-child(3) > .orange > button').should('contain', "-").click()
    trois = cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
    cinq = cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    soixante_deux = cy.get('.component-display > div').should('contain', 62)
})
Cypress.Commands.add('substractionCas2', (clear, un, neuf, substraction, zero, equal, dix_neuf) => {

    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    un = cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
    neuf = cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
    substraction = cy.get(':nth-child(3) > .orange > button').should('contain', "-").click()
    zero = cy.get('.wide > button').should('contain', 0).click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    dix_neuf = cy.get('.component-display > div').should('contain', 19)
})
Cypress.Commands.add('substractionCas3', (clear, trois, neuf, sign, substraction, cinq, zero, equal, cquatre_vingt_neuf) => {

    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    trois = cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
    neuf = cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
    sign = cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
    substraction = cy.get(':nth-child(3) > .orange > button').should('contain', "-").click()
    cinq = cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
    zero = cy.get('.wide > button').should('contain', 0).click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    cquatre_vingt_neuf = cy.get('.component-display > div').should('contain', -89)

})
Cypress.Commands.add('substractionCas4', (clear, un, neuf, sign, substraction, cinq, zero, equal, trente_un) => {

    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    un = cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
    neuf = cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
    sign = cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
    substraction = cy.get(':nth-child(3) > .orange > button').should('contain', "-").click()
    cinq = cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
    zero = cy.get('.wide > button').should('contain', 0).click()
    sign = cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    trente_un = cy.get('.component-display > div').should('contain', 31)

})
Cypress.Commands.add('substractionCas5', (clear, un, deux, comma, trois, substraction, huit, cinq, equal, trois_c_huit) => {

    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    un = cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
    deux = cy.get(':nth-child(4) > :nth-child(2) > button').should('contain', 2).click()
    comma = cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
    trois = cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
    substraction = cy.get(':nth-child(3) > .orange > button').should('contain', "-").click()
    huit = cy.get(':nth-child(2) > :nth-child(2) > button').should('contain', 8).click()
    comma = cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
    cinq = cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    trois_c_huit = cy.get('.component-display > div').should('contain', 3.8)


})
Cypress.Commands.add('divisionCas1', (clear, cinq, neuf, division, sept, equal, huit_c_quarenteDeux) => {

    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    cinq = cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
    neuf = cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
    division = cy.get(':nth-child(1) > .orange > button').should('contain', "÷").click()
    sept = cy.get(':nth-child(2) > :nth-child(1) > button').should('contain', 7).click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    huit_c_quarenteDeux = cy.get('.component-display > div').should('contain', 8.42)

})
Cypress.Commands.add('divisionCas2', (clear, zero, division, un, neuf, equal) => {

    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    zero = cy.get('.wide > button').should('contain', 0).click()
    division = cy.get(':nth-child(1) > .orange > button').should('contain', "÷").click()
    un = cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
    neuf = cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    zero = cy.get('.component-display > div').should('contain', 0)

})
Cypress.Commands.add('divisionCas3', (clear, trois, zero, sign, division, un, equal, neg_trois) => {

    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    trois = cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
    zero = cy.get('.wide > button').should('contain', 0).click()
    sign = cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
    division = cy.get(':nth-child(1) > .orange > button').should('contain', "÷").click()
    un = cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
    zero = cy.get('.wide > button').should('contain', 0).click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    neg_trois = cy.get('.component-display > div').should('contain', -3)

})
Cypress.Commands.add('divisionCas4', (clear, un, neuf, zero, sign, division, cinq, equal, trente_huit) => {

    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    un = cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
    neuf = cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
    zero = cy.get('.wide > button').should('contain', 0).click()
    sign = cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
    division = cy.get(':nth-child(1) > .orange > button').should('contain', "÷").click()
    cinq = cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
    sign = cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    trente_huit = cy.get('.component-display > div').should('contain', 38)

})
Cypress.Commands.add('divisionCas5', (clear, neuf, zero, division, sign, equal, neg_dix) => {

    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    neuf = cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
    zero = cy.get('.wide > button').should('contain', 0).click()
    division = cy.get(':nth-child(1) > .orange > button').should('contain', "÷").click()
    neuf = cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
    sign = cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    neg_dix = cy.get('.component-display > div').should('contain', -10)

})
Cypress.Commands.add('divisionCas6', (clear, trois, deux, division, huit, comma, cinq, equal, trois_c_septSix) => {

    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    trois = cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
    deux = cy.get(':nth-child(4) > :nth-child(2) > button').should('contain', 2).click()
    division = cy.get(':nth-child(1) > .orange > button').should('contain', "÷").click()
    huit = cy.get(':nth-child(2) > :nth-child(2) > button').should('contain', 8).click()
    comma = cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
    cinq = cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    trois_c_septSix = cy.get('.component-display > div').should('contain', 3.76)

})
Cypress.Commands.add('divisionCas7', (clear, trois, zero, division, comma, cinq, equal, soixante) => {

    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    trois = cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
    zero = cy.get('.wide > button').should('contain', 0).click()
    division = cy.get(':nth-child(1) > .orange > button').should('contain', "÷").click()
    zero = cy.get('.wide > button').should('contain', 0).click()
    comma = cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
    cinq = cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    soixante = cy.get('.component-display > div').should('contain', 60)

})
Cypress.Commands.add('multiplicationCas1', (clear, neuf, multiplication, sept, equal, soixante_trois) => {

    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    neuf = cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
    multiplication = cy.get(':nth-child(2) > .orange > button').should('contain', "x").click()
    sept = cy.get(':nth-child(2) > :nth-child(1) > button').should('contain', 7).click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    soixante_trois = cy.get('.component-display > div').should('contain', 63)

})
Cypress.Commands.add('multiplicationCas2', (clear, zero, multiplication, un, neuf, equal) => {

    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    zero = cy.get('.wide > button').should('contain', 0).click()
    multiplication = cy.get(':nth-child(2) > .orange > button').should('contain', "x").click()
    un = cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
    neuf = cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    zero = cy.get('.component-display > div').should('contain', 0)

})
Cypress.Commands.add('multiplicationCas3', (clear, trois, zero, multiplication, un, cinq, sign, equal, neg_qutre_cinq_zero) => {

    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
    trois = cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
    zero = cy.get('.wide > button').should('contain', 0).click()
    multiplication = cy.get(':nth-child(2) > .orange > button').should('contain', "x").click()
    un = cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
    cinq = cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
    sign = cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
    equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
    neg_qutre_cinq_zero = cy.get('.component-display > div').should('contain', -450)

})
Cypress.Commands.add('multiplicationCas4', (clear, un,zero,sign,multiplication,cinq,equal,cinquante) => {

    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        un = cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
        zero = cy.get('.wide > button').should('contain', 0).click()
        sign = cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
        multiplication = cy.get(':nth-child(2) > .orange > button').should('contain', "x").click()
        cinq = cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
        sign = cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
        equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        cinquante = cy.get('.component-display > div').should('contain', 50)

})
Cypress.Commands.add('multiplicationCas5', (clear, neuf,zero,multiplication,sign,equal,neg_huit_cent_dix) => {

        clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        neuf = cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
        zero = cy.get('.wide > button').should('contain', 0).click()
        multiplication = cy.get(':nth-child(2) > .orange > button').should('contain', "x").click()
        neuf = cy.get(':nth-child(2) > :nth-child(3) > button').should('contain', 9).click()
        sign = cy.get(':nth-child(1) > :nth-child(2) > button').should('contain', "+/-").click()
        equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        neg_huit_cent_dix = cy.get('.component-display > div').should('contain', -810)
})
Cypress.Commands.add('multiplicationCas6', (clear, trois,zero,comma,cinq,multiplication,un,equal,trois_c_cinq) => {

        clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        trois = cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
        zero = cy.get('.wide > button').should('contain', 0).click()
        comma = cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
        cinq = cy.get(':nth-child(3) > :nth-child(2) > button').should('contain', 5).click()
        multiplication = cy.get(':nth-child(2) > .orange > button').should('contain', "x").click()
        zero = cy.get('.wide > button').should('contain', 0).click()
        comma = cy.get(':nth-child(5) > :nth-child(2) > button').should('contain', ".").click()
        un = cy.get(':nth-child(4) > :nth-child(1) > button').should('contain', 1).click()
        equal = cy.get(':nth-child(5) > .orange > button').should('contain', "=").click()
        trois_c_cinq = cy.get('.component-display > div').should('contain',3.05)
})
Cypress.Commands.add('percentage', (clear, trois,zero,percent,zero_c_trois) => {

    clear = cy.get(':nth-child(1) > :nth-child(1) > button').should('contain', "AC").click()
        trois = cy.get(':nth-child(4) > :nth-child(3) > button').should('contain', 3).click()
        zero = cy.get('.wide > button').should('contain', 0).click()
        percent = cy.get(':nth-child(1) > :nth-child(3) > button').should('contain', "%").click()
        zero_c_trois = cy.get('.component-display > div').should('contain', 0.3)
})