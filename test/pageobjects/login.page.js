import {$, driver, expect} from '@wdio/globals'

class LoginPage{

    //elemen locators


    get usernameInput() { return $('~test-Username') }
    get passwordInput() { return $('~test-Password') }
    get loginButton() { return $('~test-LOGIN') }
    get errorMsg() {return $('//*[@content-desc="test-Error message"]/android.widget.TextView')}
    get textProduct() {return $('//*[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView[@text="PRODUCTS"]')}
    get lockUserButton(){return $('//*[@content-desc="test-locked_out_user"]')}

    //page action
    async loginProcess(username, password){
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue (password)


    }
    async submitButton(){
        await this.loginButton.click()
    }




}

export default new LoginPage()
