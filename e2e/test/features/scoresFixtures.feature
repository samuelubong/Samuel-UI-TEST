Feature: As a business user, I would like to make a record of all teams which are playing today  
    
  
  Scenario: Output all team names with a match today. If there are no matches today, output a message to convey this.
    Given User navigate to the given test "https://www.bbc.com/sport/football/scores-fixtures"
    And User is able to see the "Today" tab on the home page
    Then Output all teams names with match today or a custom message if there is no match today
 

