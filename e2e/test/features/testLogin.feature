Feature: As a QA, I would like to verify all negative scenarios for login

  Scenario Outline: Verify that invalid login error message is displayed for email
    Given User navigate to the "https://www.bbc.com/sport/football/scores-fixtures" to test login
    And user clicks on the signin link on the landing page
    When user enter "<username>" as username and clicks continue 
    Then there should be an error "<message>" 

  Examples:
    | username | message ||
  
    | samuel.ubong@mtn.com |  We don’t recognise that email or username | |
    | samuelaubong@gmail.com | Sorry, that email doesn’t look right | |
   