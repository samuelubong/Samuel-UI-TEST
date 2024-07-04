Feature: As a sports user, I would like to read about all articles related to sports

  Scenario: Output the first heading and the last heading returned on the page.
    Given User navigate to the test "https://www.bbc.com/sport/football/scores-fixtures"
    When User search for "sport articles" in the search bar
    Then Print the heading of the first and last article returned on the page
