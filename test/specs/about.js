import homePage from "../pages/home-page.js";

describe('About', () => {
    it('Open Browser and Assert About URL on the About Page', async() => {
        //Open Browser
        await homePage.open();

        //Open About Page
        await browser.navigateTo('https://practice.sdetunicorns.com/about/');

        //Assert About URL
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
    })
});