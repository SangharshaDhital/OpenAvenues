class ContactPage {
    open() {
        return browser.url('/contact');
    }

    get contactName(){
        return $('.contact-name input');
    }

    get contactEmail(){
        return $('.contact-email input');
    }

    get contactPhoneNumber(){
        return $('.contact-phone input');
    }

    get contactMessage(){
        return $('.contact-message textarea');
    }

    get btnSubmit(){
        return $('.evf-submit');
    }

    get successAlert(){
        return $('div[role=alert');
    }
}

export default new ContactPage();