import contactPage from "../pages/contact-page.js";
import { faker } from '@faker-js/faker';

describe('Contact', () => {
    it('Open Contact Page, Fill in Info, and Submit', async() => {
        //Open Contact Page
        contactPage.open();

        //Fill in Info
        //Name
        await contactPage.contactName.setValue(faker.person.fullName());
        //Email
        await contactPage.contactEmail.setValue(faker.internet.email());
        //Phone Number
        await contactPage.contactPhoneNumber.setValue(faker.phone.number());
        //Message
        await contactPage.contactMessage.setValue(faker.lorem.paragraphs(4));

        //Submit
        await contactPage.btnSubmit.click();
    });

    it('Assert Expected Success Message', async() => {
        //Find and Assert Expected Message
        await expect(contactPage.successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    });
});