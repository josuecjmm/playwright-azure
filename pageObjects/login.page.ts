import ParentPage from "./parentPage.page";
import {Locator, Page} from "@playwright/test";

class LoginPage extends ParentPage {
    readonly page: Page

    constructor(page) {
        super();
        this.page = page;
    }

    get inputEmail(): Locator {
        return this.page.locator('[type="email"]')
    }

    get inputPassword(): Locator {
        return this.page.locator('[type="password"]')
    }

    get btnSubmit(): Locator {
        return this.page.getByRole('button', { name: 'Ingresar' })
    }

    async visit() {
        await this.page.goto('/')
    }

    async login(email: string, password: string): Promise<any> {
        await super.fillInput(this.inputEmail, email)
        await super.fillInput(this.inputPassword, password)
        await super.click(this.btnSubmit)
    }
}
export default LoginPage;