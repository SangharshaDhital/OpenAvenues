import blogPage from "../pages/blog-page.js";

describe('Blog', () => {
    it('Open Blog Page and Assert Text Length of Each Item', async() => {
        //Open Browser
        await blogPage.open();

        //Assert Text Length of Each <li> String
        for (const item of await blogPage.blogListItems) {
            const text = await item.getText();
            let len = text.length;
            await expect(len).toBeGreaterThan(10);
        }
    });

    it('Assert Total Row Count', async() => {
        //Declare Expected Total Row Count
        const expectedRowCount = 5;

        //Assert List Length is Equal to Expected Row Count
        await expect(blogPage.blogList).toHaveChildren(expectedRowCount);
    });
});