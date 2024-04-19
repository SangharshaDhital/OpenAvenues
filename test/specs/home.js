import homePage from "../pages/home-page.js";

describe('Home', () => {
    it('Open Browser and Assert Title', async() => {
        //Open Browser
        await homePage.open();

        //Assert Title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });
});