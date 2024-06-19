import {driver, $, expect} from '@wdio/globals'
import scrollScreen from '../../helpers/scrollScreen.js'
import ProductPage from '../pageobjects/product.page.js'
import LoginPage from '../pageobjects/login.page.js'


describe ('FITUR HALAMAN PRODUK', function(){
    // beforeEach('User login', async function(){
    //     await LoginPage.loginProcess('standard_user', 'secret_sauce')
    //     await LoginPage.submitButton()
    //     await driver.pause(3000);
        
    // })
    //1
    it('Klik Menu sidebar', async function(){
        await LoginPage.loginProcess('standard_user', 'secret_sauce')
        await LoginPage.submitButton()
        await driver.pause(3000);
        await ProductPage.f_menuBtn()

        await expect(ProductPage.pageMenu).toBeDisplayed()

    })
    //2
    it('klik close pada halaman side menu', async function(){
        await ProductPage.f_closeBtn()

        await expect(LoginPage.textProduct).toHaveText('PRODUCTS') 
    })
    //3
    it('klik toggle view', async function(){
        await ProductPage.f_toggleView()
        await driver.pause(2000)
        await ProductPage.f_toggleView()

        await driver.pause(3000)

        await expect(LoginPage.textProduct).toHaveText('PRODUCTS') 
    })
    //4
    it ('klik keranjang', async function(){
        await ProductPage.f_cart()

        await expect(ProductPage.cartText).toHaveText('YOUR CART') 

    })
    //5
    it ('klik continue shopping', async function(){
        await ProductPage.f_contShop()

        await expect(LoginPage.textProduct).toHaveText('PRODUCTS') 
    })
    //6
    it ('menambah produk', async function(){
        await ProductPage.f_addToCart()
        await driver.pause(2000)
        await ProductPage.f_cart()

        await expect(ProductPage.cartText).toHaveText('YOUR CART') 
        
    })
    //7
    it ('menghapus produk', async function(){
        await ProductPage.f_contShop()
        await ProductPage.f_removeProduct()

        await expect(LoginPage.textProduct).toHaveText('PRODUCTS') 
    })
    //8
    it ('melihat detail produk', async function(){
        await ProductPage.f_detailProduct()

        await expect (ProductPage.detailText).toHaveText('Sauce Labs Bike Light')
    })
    //9
    it ('checkout', async function(){
        await ProductPage.f_addToCart()
        await driver.pause(2000)
        await ProductPage.f_cart()
        await scrollScreen(1000, 700)
        await driver.pause(2000)
        await ProductPage.f_checkout()

        await expect (ProductPage.coInfo).toHaveText('CHECKOUT: INFORMATION')
    })
    //10
    it ('cancel checkout', async function(){
        await ProductPage.f_cancelBtn()

        await expect (ProductPage.coInfo).toHaveText('CHECKOUT: INFORMATION')

    })

})
