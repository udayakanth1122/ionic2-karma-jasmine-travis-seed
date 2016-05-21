"use strict";
var utils_1 = require('./utils');
var common_1 = require('angular2/common');
function main() {
    'use strict';
    describe('Utils', function () {
        it('resets a control', function () {
            var control = new common_1.Control('');
            var returnedControl = null;
            control.markAsTouched();
            control.updateValue('dave');
            returnedControl = utils_1.Utils.resetControl(control);
            expect(returnedControl.touched).toBe(false);
            expect(returnedControl.untouched).toBe(true);
            expect(returnedControl.pristine).toBe(true);
            expect(returnedControl.dirty).toBe(false);
            expect(returnedControl.value).toBe('');
        });
    });
}
exports.main = main;
