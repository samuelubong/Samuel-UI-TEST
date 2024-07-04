import { Given, Then, When } from "@cucumber/cucumber";
import { HomePage } from '../../Pages/HomePage';
import { HeadlinePage } from "../../Pages/headlinePage";
import { fixture } from "../../hooks/fixtures";

let homePage: HomePage;
let headlinePage: HeadlinePage;

Given('User navigate to the test {string}', async(url: string) => {
  homePage = new HomePage(fixture.page)
  homePage.validateTitle('Scores & Fixtures - Football - BBC Sport')
})
When('User search for {string} in the search bar', async(text: string) => {
  headlinePage = new HeadlinePage(fixture.page);
  await fixture.page.waitForTimeout(7000)
  await homePage.clickSearchLink();
  headlinePage.inputSearchField(text)
  await headlinePage.clickSearchBtn()

});
Then('Print the heading of the first and last article returned on the page', async () => {
  
  let elementHandle =  await headlinePage.getArticlesHeading()
  if(elementHandle.length > 0){
    
    console.log(`\n First article heading - \n ${await elementHandle[0].innerText()} \n`)
    console.log(`Last article heading - \n ${await elementHandle[elementHandle.length - 1].innerText()} \n`)
  }else {
    console.log("No articles found")
  }


});


