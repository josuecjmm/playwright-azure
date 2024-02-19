import {test, expect} from '@playwright/test';
import LoginPage from "../pageObjects/login.page";
import NavigationPage from "../pageObjects/navigation.page";

const {EMAIL, PASSWORD} = process.env;

test('Verify a correct Login', async ({page}) => {
    const loginPage = new LoginPage(page)
    const navigationPage = new NavigationPage(page)
    await loginPage.visit()
    await loginPage.login(EMAIL, PASSWORD)
    await expect(navigationPage.lblPageTitle).toHaveText('dashboard')
});
