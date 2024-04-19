import homePage from "../pages/home-page.js";

describe('Getting Started', () => {
    // HOOK
    beforeEach('Open Browser', async() => {
        await homePage.open();
    });

    it('Click Get Started Button and assert URL has Get Started text', async() => {
        //Click Get Started Button
        await homePage.btnGetStarted.click();

        //Assert 'get-started' in URL
        await expect(browser).toHaveUrlContaining('get-started');
    })

    it('Click Logo and assert URL does not contain get-started text', async() => {
        //Click Logo
        await homePage.siteLogo.click();

        //Assert 'get-started' NOT in URL
        await !expect(browser).toHaveUrlContaining('get-started');
    })
});