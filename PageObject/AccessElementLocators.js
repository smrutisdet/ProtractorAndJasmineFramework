function locators(){
    this.firstEditBox=element(by.model('first'));
    this.lastEditBox=element(by.model('second'));
    this.subtraction=element(by.css("select[ng-model='operator'] option[value='SUBTRACTION']"));
    this.multiplication=element(by.css("select[ng-model='operator'] option[value='MULTIPLICATION']"));
    this.division=element(by.css("select[ng-model='operator'] option[value='DIVISION']"));
    this.gotoButton=element(by.id('gobutton'));
    this.getResult=element(by.css("h2[class='ng-binding']"));
    this.getURL=function () {
        browser.get('https://juliemr.github.io/protractor-demo/');
    };
}
module.exports=new locators();