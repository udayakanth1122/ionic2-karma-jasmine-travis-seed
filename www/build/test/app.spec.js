"use strict";
var browser_1 = require('angular2/platform/testing/browser');
var testing_1 = require('angular2/testing');
var index_1 = require('ionic-angular/index');
var app_1 = require('./app');
// this needs doing _once_ for the entire test suite, hence it's here
testing_1.setBaseTestProviders(browser_1.TEST_BROWSER_PLATFORM_PROVIDERS, browser_1.TEST_BROWSER_APPLICATION_PROVIDERS);
var clickerApp = null;
function getComponentStub(name) {
    'use strict';
    var component = {
        setRoot: function () { return true; },
        close: function (root) { return true; },
    };
    return component;
}
function main() {
    'use strict';
    describe('ClickerApp', function () {
        beforeEach(function () {
            var ionicApp = new index_1.IonicApp(null, null, null);
            var platform = new index_1.Platform();
            clickerApp = new app_1.ClickerApp(ionicApp, platform);
        });
        it('initialises with two possible pages', function () {
            expect(clickerApp['pages'].length).toEqual(2);
        });
        it('initialises with a root page', function () {
            expect(clickerApp['rootPage']).not.toBe(null);
        });
        it('initialises with an app', function () {
            expect(clickerApp['app']).not.toBe(null);
        });
        it('opens a page', function () {
            spyOn(clickerApp['app'], 'getComponent').and.callFake(getComponentStub);
            clickerApp.openPage(clickerApp['pages'][1]);
            expect(clickerApp['app'].getComponent).toHaveBeenCalledWith('leftMenu');
            expect(clickerApp['app'].getComponent).toHaveBeenCalledWith('nav');
        });
    });
}
exports.main = main;
