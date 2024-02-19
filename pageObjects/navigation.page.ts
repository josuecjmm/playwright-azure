import ParentPage from "./parentPage.page";
import {Locator, Page} from "@playwright/test";

class NavigationPage extends ParentPage {
    readonly page: Page

    constructor(page) {
        super();
        this.page = page;
    }

    get lblPageTitle() : Locator {
        return this.page.locator('.dashboard_bar')
    }
}

export default NavigationPage;