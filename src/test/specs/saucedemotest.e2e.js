// import LoginPage from '../pageobjects/login.page';
// import SecurePage from '../pageobjects/secure.page';

import { menu } from "../instances/components";
import { loginPage, productsPage } from "../instances/pages"
import { menulist } from "../pagecomponents/menu/menulist";
import { sortlist } from "../pagecomponents/sort/sortlist";

describe('Sauce Demo Test', () => {
    it('Login with valid credentials', async () => {
        await loginPage.open();

        await loginPage.login('standard_user', 'secret_sauce');
        await expect(productsPage.validatePageTitle()).toBeTruthy();
    });


    it('Sort Products by Price from high to low', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await productsPage.sortProducts(sortlist.PRICE_HIGH_TO_LOW);
        await expect(productsPage.validateProductsSorted(sortlist.PRICE_HIGH_TO_LOW)).toBeTruthy();
    });

    it('Sort Products by Name Z to A', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await productsPage.sortProducts(sortlist.NAME_Z_TO_A);
        await expect(productsPage.validateProductsSorted(sortlist.NAME_Z_TO_A)).toBeTruthy();
    });

    it('Verify CSS Color property on products page', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(productsPage.validateCssColorCodeForProductNames("#e2231a")).toBeTruthy();
    });


    it('Login with valid credentials and logout from menu', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await menu.clickOnMenu(menulist.LOG_OUT);
    });

});


