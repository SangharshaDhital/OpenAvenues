class BlogPage {
    open() {
        return browser.url('/blog');
    }

    get blogList(){
        return $$('#recent-posts-3 ul');
    }

    get blogListItems(){
        return $$('#recent-posts-3 ul li');
    }

    async getListItem(number){
        return this.blogListItems[number].getText();
    }
}

export default new BlogPage();