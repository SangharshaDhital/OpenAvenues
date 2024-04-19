class HomePage {
    get btnGetStarted() {
        return $('*#get-started');
    }

    get imageLogo() {
        return $('//img[@alt="practice E-Commerce Site"]');
    }

    get txtHeading() {
        return $('.elementor-widget-container h1');
    }

    get NavComponent() {
        return NavComponent;
    }
}

export default new HomePage();
