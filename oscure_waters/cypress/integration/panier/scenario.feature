Feature: cart management

        Scenario: refesh cart
            Given I am on page "https://obscure-waters-60500.herokuapp.com/"
             When I click on button "refrech"
             Then The 0 items displays

        Scenario: add items
            Given I am on page
             When I click on " + button"
             Then One  number is add and item is iterative

        Scenario: remove items
            Given I am on page
             When I click on " - button"
             Then a number is remove

        Scenario: delete items
            Given I am on page
             When I click on " - button"
             Then a number is delete and number of item decreases


        Scenario: recycle cart
            Given I am on page
             When I click on button "recycle"
             Then The the cart is recycled
