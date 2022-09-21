export default class Menu {


    get btnMenu () {
        return $('#react-burger-menu-btn');
    }

    getMenuLink(menu) {
        return `//a[text()='${menu}']`;
    }

    async clickOnMenu(menu) {
       await this.btnMenu.click()
       const element = await $(this.getMenuLink(menu));
       await element.waitForClickable();
       await element.click();
    }

}