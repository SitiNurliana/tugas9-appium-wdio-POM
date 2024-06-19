import { $, driver, expect } from '@wdio/globals'
import scrollScreen from '../../helpers/scrollScreen.js'
import LoginPage from '../pageobjects/login.page.js'
import ProductPage from '../pageobjects/product.page.js'

describe('coba test login android', function () {
    //1
    it('login dengan username yang benar dan password yang benar',  async function () {
        await LoginPage.loginProcess('standard_user', 'secret_sauce')
        await LoginPage.submitButton()
        await driver.pause(3000)

        await expect(LoginPage.textProduct).toHaveText('PRODUCTS')    
    })
    // //2
    // it('login dengan username locked_out_user dengan menekan tombolnya',  async function () {
    //     await scrollScreen(1000, 100)
    //     await lockUserButton.click()
    //     await scrollScreen(100, 1000)
    //     await driver.pause(2000)

    //     expect(usernameInput).toHaveValue('locked_out_user')

    // })
    // //3
    // it('login dengan username locked_out_user dengan menekan tombolnya, kemudian klik tombol login',  async function () {
    //     await driver.pause(2000)

    //     const usernameInput = await $('~test-Username')
    //     const lockUserButton = await $('//*[@content-desc="test-locked_out_user"]')
    //     const loginButton = await $('~test-LOGIN')
    //     const lockMessage = await $('//*[@content-desc="test-Error message"]/android.widget.TextView')


    //     await scrollScreen(1000, 100)
    //     await lockUserButton.click()
    //     await scrollScreen(100, 1000)
    //     await driver.pause(1000)
    //     await loginButton.click()
    //     await driver.pause(2000)



    //     await expect(lockMessage).toHaveText('Sorry, this user has been locked out.')
    // })
    // //4
    // it('login dengan mengosongkan username dan password',  async function () {
    //     await driver.pause(2000)

    //     const usernameInput = await $('~test-Username')
    //     const passwordInput = await $('~test-Password')
    //     const loginButton = await $('~test-LOGIN')
    //     const usernameRequired = await $('//*[@content-desc="test-Error message"]/android.widget.TextView')

    //     await usernameInput.clearValue()
    //     await passwordInput.clearValue()
    //     await loginButton.click()
    //     await driver.pause(2000)


    //     await expect(usernameRequired).toHaveText('Username is required')
    // })

    // //5
    // it('login dengan username valid dan mengosongkan password',  async function () {
    //     await driver.pause(2000)

    //     const usernameInput = await $('~test-Username')
    //     const passwordInput = await $('~test-Password')
    //     const loginButton = await $('~test-LOGIN')
    //     const passRequired = await $('//*[@content-desc="test-Error message"]/android.widget.TextView')

    //     await usernameInput.setValue('standard_user')
    //     await passwordInput.clearValue()
    //     await loginButton.click()
    //     await driver.pause(2000)


    //     await expect(passRequired).toHaveText('Password is required')
    // })

    // //6
    // it('login dengan username dan password benar',  async function () {
    //     await driver.pause(2000)

    //     const usernameInput = await $('~test-Username')
    //     const passwordInput = await $('~test-Password')
    //     const loginButton = await $('~test-LOGIN')
    //     const tulisanProducts = await $('//android.widget.TextView[@text="PRODUCTS"]')


    //     await usernameInput.setValue('standard_user')
    //     await passwordInput.setValue('secret_sauce')
    //     await submitButton.click()
    //     await driver.pause(2000)


    //     await expect(textProduct).toHaveText('PRODUCTS')
    // })

})