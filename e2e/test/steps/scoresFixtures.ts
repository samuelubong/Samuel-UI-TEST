import { Given, Then } from '@cucumber/cucumber'
import { HomePage } from '../../Pages/HomePage';
import { fixture } from '../../hooks/fixtures';

let homePage: HomePage;
let matches: Array<any> = []


Given('User navigate to the given test {string}', async(url: string) => {
  homePage = new HomePage(fixture.page)
  homePage.validateTitle('Scores & Fixtures - Football - BBC Sport')
})

Given('User is able to see the \"Today\" tab on the home page', async() => {
   await homePage.validateTodayElement('Today')
});

Then('Output all teams names with match today or a custom message if there is no match today', async() => {
  await homePage.todaysMatchesGroup1()
  matches = await homePage.todaysMatchesGroup2();

  if(matches.length === 0) {
    console.log("There are no matches scheduled for today")
  }else if(matches.length > 0) {
    console.log(" \n The teams playing today are: \n")
    for(let i = 0; i < matches.length; i += 2) {
      console.log(`${matches[i]} versus ${matches[i + 1]}`)
    }
  }
})


