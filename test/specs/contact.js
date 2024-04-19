import contactPage from "../contact-page.js";
describe('Contact Page', () => {
    it('Fill and Submit Contact Form', async () => {
        // Navigate to the Contact Page
        await browser.url('https://practice.sdetunicorns.com/contact/');

        // Find unique IDs for input fields
        const textBoxInput = $('#evf-277-field_ys0GeZISRs-1');
        const emailInput = $('#evf-277-field_LbH5NxasXM-2');
        const phoneInput = $('#evf-277-field_66FR384cge-3');
        const messageInput = $('#evf-277-field_yhGx3FOwr2-4');

        // Input values into the text boxes
        await textBoxInput.setValue('Sangharsha Dhital');
        await emailInput.setValue('dhitalsangharsha@gmail.com');
        await phoneInput.setValue('1234567890');
        await messageInput.setValue('Hello ! QA This is a test message. Typing .... Typing.... Typing.... Typing .... Typing.... Typing.... Typing .... Typing.... Typing.... Typing .... Typing.... Typing.... Typing .... Typing.... Typing.... Typing .... Typing.... Typing....');

        // Submit the form
        await $('#evf-submit-277').click();

        // Assert the success message
        const successMessage = await $('.everest-forms-notice--success');

        // Assert the success message text
        await expect(successMessage).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
        
    });
});
