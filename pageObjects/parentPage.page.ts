import {Locator} from "@playwright/test";

class ParentPage {
    async click(element: Locator): Promise<any> {
        await element.waitFor()
        await element.click()
    }

    async getText(element: Locator): Promise<string> {
        await element.waitFor()
        return element.textContent()
    }

    async fillInput(element: Locator, value: string): Promise<any> {
        await element.waitFor()
        await element.fill(value)
    }
}

export default ParentPage;