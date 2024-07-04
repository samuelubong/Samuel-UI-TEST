import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { Page, Browser, chromium } from '@playwright/test'
import { fixture } from "./fixtures";
import { HomePage } from '../Pages/HomePage';
import dotenv from 'dotenv'

let page: Page;
let browser: Browser;
let homePage: HomePage;

setDefaultTimeout(60000)

Before(async(scenario) => {

  dotenv.config()
  let baseURL = process.env.baseURL;
  browser = await chromium.launch({headless: false});
  page = await browser.newPage();  
  homePage = new HomePage(page);
  await homePage.navigateToURL(baseURL!)
  fixture.page = page;
})

After( async(scenario) => {  
  await fixture.page.close();
  await browser.close();
})