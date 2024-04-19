class Homepage {
    open() {
        return browser.url('/');
    }

    get btnGetStarted(){
        return $('#get-started');
    }

    get siteLogo(){
        return $('.custom-logo-link');
    }

    get txtHeading(){
        return $('.elementor-widget-container h1');
    }
}

export default new Homepage();