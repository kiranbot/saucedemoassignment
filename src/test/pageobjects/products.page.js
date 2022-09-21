

import { sort } from '../instances/components';
import Page from './page';


/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class ProductsPage extends Page {

    get productTitle() {
        return $('.title')
    }

    get activeSortOption() {
        return $('.active_option');
    }

    get productNamesList() {
        return $$('.inventory_item_name')
    }

    async validatePageTitle() {
        return (await this.productTitle.getText()) == "Products";
    }

    async sortProducts(sortOption) {
        await sort.sortByValue(sortOption);
    }

    async validateProductsSorted(sortOption) {
        return (await this.activeSortOption.getText()) == sortOption;
    }

    async validateCssColorCodeForProductNames(colorCode) {
        const list = await this.productNamesList;
        const colorList = list.map(async (node) => {
            return await node.getCSSProperty("color");
        })
        return colorList.every((node) => node == colorCode);
    }
}

