Feature: snapshop

        Scenario: search theme
            Given I am on page "https://yog9.github.io/SnapShot/#/SnapScout/mountain"
             When I click and I write on the search bar
              And I click on  "search tab" is added to the page
             Then The theme and pictures  appear

        Scenario: check theme
            Given I am on page "https://yog9.github.io/SnapShot/#/SnapScout/mountain"
             When I click on specify theme
             Then The same theme and concordance pictures  appear

        