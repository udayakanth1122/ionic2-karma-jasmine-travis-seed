'use strict';
var clicker_1 = require('./clicker');
function main() {
    'use strict';
    describe('Clicker', function () {
        it('initialises with the correct name', function () {
            var clicker = new clicker_1.Clicker('12434', 'testClicker');
            expect(clicker.getName()).toEqual('testClicker');
        });
    });
}
exports.main = main;
