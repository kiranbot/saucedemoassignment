export default class Sort {


    get drpSort () {
        return $('.product_sort_container');
    }


    async sortByValue(sortOption) {

        const element = await this.drpSort;
        await element.waitForClickable();
       await element.selectByVisibleText(sortOption);
    }

}