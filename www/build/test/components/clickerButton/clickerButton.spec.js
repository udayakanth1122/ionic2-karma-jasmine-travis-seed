"use strict";
var testing_1 = require('angular2/testing');
var core_1 = require('angular2/core');
var index_1 = require('ionic-angular/index');
var clickerButton_1 = require('./clickerButton');
var clickers_1 = require('../../services/clickers');
var testUtils_1 = require('../../../test/testUtils');
var utils_1 = require('../../services/utils');
var clickerButton = null;
var clickerButtonFixture = null;
var MockClickers = (function () {
    function MockClickers() {
    }
    MockClickers.prototype.doClick = function () {
        return true;
    };
    return MockClickers;
}());
var MockClicker = (function () {
    function MockClicker() {
        this.name = 'TEST CLICKER';
    }
    MockClicker.prototype.getCount = function () { return 10; };
    ;
    return MockClicker;
}());
var MockClass = (function () {
    function MockClass() {
    }
    MockClass.prototype.get = function () {
        return {};
    };
    return MockClass;
}());
function main() {
    'use strict';
    testing_1.describe('ClickerForm', function () {
        testing_1.beforeEachProviders(function () { return [
            core_1.provide(clickers_1.Clickers, { useClass: MockClickers }),
            core_1.provide(index_1.Config, { useClass: MockClass }),
        ]; });
        testing_1.beforeEach(testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb
                .createAsync(clickerButton_1.ClickerButton)
                .then(function (componentFixture) {
                clickerButtonFixture = componentFixture;
                clickerButton = componentFixture.componentInstance;
                clickerButton['clicker'] = { name: 'TEST CLICKER' };
                clickerButton['clicker'].getCount = function () { return 10; };
                window['fixture'] = clickerButtonFixture;
                window['testUtils'] = testUtils_1.TestUtils;
            })
                .catch(utils_1.Utils.promiseCatchHandler);
        }));
        testing_1.it('initialises', function () {
            testing_1.expect(clickerButton).not.toBeNull();
        });
        testing_1.it('displays the clicker name and count', function () {
            clickerButtonFixture.detectChanges();
            testing_1.expect(clickerButtonFixture.nativeElement.querySelectorAll('.button-inner')[0].innerHTML).toEqual('TEST CLICKER (10)');
        });
        testing_1.it('does a click', function () {
            clickerButtonFixture.detectChanges();
            spyOn(clickerButton['clickerService'], 'doClick');
            testUtils_1.TestUtils.eventFire(clickerButtonFixture.nativeElement.querySelectorAll('button')[0], 'click');
            testing_1.expect(clickerButton['clickerService'].doClick).toHaveBeenCalled();
        });
    });
}
exports.main = main;
