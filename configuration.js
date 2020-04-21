var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var today = new Date(),
    timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';
var reporter = new Jasmine2HtmlReporter({
    consolidateAll: true,
    savePath: 'target',
    takeScreenshotsOnlyOnFailures: false,
    filePrefix: 'index -' + today
});
exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['./TestCase/*.js'],
    suites: {
        smoke: ['./TestCase/Addition.js', './TestCase/Subtraction.js'],
        regression: ['./TestCase/Multiplication.js', './TestCase/Division.js']
    },
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 400000,
        isVerbose: true,
        includeStackTrace: true
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(reporter);
    },

};