"use strict";
var clickerList_1 = require('./clickerList');
var clickerList = null;
function main() {
    'use strict';
    describe('ClickerList', function () {
        beforeEach(function () {
            clickerList = new clickerList_1.ClickerList(null, null);
        });
        it('initialises', function () {
            expect(clickerList).not.toBeNull();
        });
    });
}
exports.main = main;
