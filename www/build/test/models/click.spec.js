'use strict';
var click_1 = require('./click');
function main() {
    'use strict';
    describe('Click', function () {
        it('initialises with defaults', function () {
            var click = new click_1.Click();
            // toString() prints out something like "Thu Jan 07 2016 14:05:14 GMT+1300 (NZDT)"
            // comparing millis directly sometimes fails test (as it will be one milli too late!)
            var currentDateString = new Date().toString();
            var defaultDateString = new Date(click.getTime()).toString();
            expect(currentDateString).toEqual(defaultDateString);
            expect(click.getLocation()).toEqual('TODO');
        });
        it('initialises with overrides', function () {
            var current = new Date().getTime();
            var location = 'MY LOCATION';
            var click = new click_1.Click(current, location);
            expect(click.getTime()).toEqual(current);
            expect(click.getLocation()).toEqual(location);
        });
    });
}
exports.main = main;
