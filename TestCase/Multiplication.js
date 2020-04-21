//import {by, element,browser,Config} from 'protractor';
var using=require('jasmine-data-provider');
var obj=require('../PageObject/AccessElementLocators');
var dd=require('../DataDriven/JasmineDataDriven');
describe('Calculator Multiplication operation', function () {
    beforeEach(function(){
        console.log("Navigate to URL and Maximize Browser Window");
        obj.getURL();
       browser.manage().window().maximize();
    });
    using(dd.DataDrivenMul, function (data, description) {
    it('Perform Multiplication and Verify result-'+description, function () {
        obj.firstEditBox.sendKeys(data.firstinput);
        obj.lastEditBox.sendKeys(data.secondinput);
        obj.multiplication.click();
        obj.gotoButton.click().then(function () {
            //browser.sleep(9000);
            expect(obj.getResult.getText()).toEqual(data.result);
        });
    });
    });
    afterEach(function () {
        console.log('Execution is completed');
    });
});