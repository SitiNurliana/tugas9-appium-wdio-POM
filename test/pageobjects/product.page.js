import {$, driver, expect} from '@wdio/globals'

class ProductPage{

    get menuBtn() 
        { return $('//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView') }
    get pageMenu () 
    { return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup') }
    get closeBtn()
    {return $('//android.view.ViewGroup[@content-desc="test-Close"]/android.widget.ImageView')}
    get productMenu()
    {return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageView[2]')}
    get toggleView()
    {return $('//android.view.ViewGroup[@content-desc="test-Toggle"]/android.widget.ImageView')}
    get cart()
    {return $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup')}
    get cartText()
    {return $('//android.widget.TextView[@text="YOUR CART"]')}
    get contShop()
    {return $('//android.view.ViewGroup[@content-desc="test-CONTINUE SHOPPING"]')}
    get addToCart()
    {return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]')}
    get removeProduct()
    {return $('//android.view.ViewGroup[@content-desc="test-REMOVE"]')}
    get detailProduct()
    {return $('//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView')}
    get detailText()
    {return $('//android.widget.TextView[@text="Sauce Labs Bike Light"]')}
    get checkout()
    {return $('//android.view.ViewGroup[@content-desc="test-CHECKOUT"]')}
    get coInfo()
    {return $('//android.widget.TextView[@text="CHECKOUT: INFORMATION"]')}
    get cancelBtn()
    {return $('~test-CANCEL')}

    async f_menuBtn(){
        await this.menuBtn.click()

    }
    async f_closeBtn(){
        (await this.closeBtn).click()
    }
    async f_toggleView(){
        (await this.toggleView).click()
    }
    async f_cart(){
        (await this.cart).click()
    }
    async f_contShop(){
        (await this.contShop).click()
    }
    async f_addToCart(){
        (await this.addToCart).click()
    }
    async f_removeProduct(){
        (await this.removeProduct).click()
    }
    async f_detailProduct(){
        (await this.detailProduct).click()
    }
    async f_checkout(){
        (await this.checkout).click()
    }
    async f_cancelBtn(){
        (await this.cancelBtn).click()
    }

}

export default new ProductPage()