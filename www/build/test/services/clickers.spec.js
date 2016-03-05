"use strict";
var clickers_1 = require('./clickers');
var CLICKER_IDS = ['yy5d8klsj0', 'q20iexxg4a', 'wao2xajl8a'];
var clickers = null;
function storageGetStub(key) {
    'use strict';
    var rtn = null;
    switch (key) {
        case 'ids':
            rtn = JSON.stringify(CLICKER_IDS);
            break;
        case CLICKER_IDS[0]:
            rtn = '{"id":"' + CLICKER_IDS[0] + '","name":"test1","clicks":[{"time":1450410168819,"location":"TODO"}]}';
            break;
        case CLICKER_IDS[1]:
            rtn = '{"id":"' + CLICKER_IDS[1] + '","name":"test2","clicks":[{"time":1450410168819,"location":"TODO"},{"time":1450410168945,"location":"TODO"}]}';
            break;
        case CLICKER_IDS[2]:
            rtn = '{"id":"' + CLICKER_IDS[2] + '", "name":"test3", "clicks":[{ "time": 1450410168819, "location": "TODO" }, { "time": 1450410168945, "location": "TODO" }] } ';
            break;
        default:
            rtn = 'SHOULD NOT BE HERE!';
    }
    return new Promise(function (resolve) {
        resolve(rtn);
    });
}
function storageSetStub(key, value) {
    'use strict';
    return new Promise(function (resolve) {
        resolve(true);
    });
}
function storageRemoveStub(key) {
    'use strict';
    return new Promise(function (resolve) {
        resolve(true);
    });
}
var mockSqlStorage = {
    get: storageGetStub,
    set: storageSetStub,
    remove: storageRemoveStub,
};
function main() {
    'use strict';
    describe('Clickers', function () {
        beforeEach(function () {
            spyOn(clickers_1.Clickers, 'initStorage').and.returnValue(mockSqlStorage);
            clickers = new clickers_1.Clickers();
            spyOn(clickers['storage'], 'set');
        });
        it('initialises with empty clickers', function () {
            expect(clickers.getClickers()).toEqual([]);
        });
        it('creates an instance of SqlStorage', function () {
            expect(clickers_1.Clickers.initStorage()).toEqual(mockSqlStorage);
        });
        it('has empty ids with no storage', function (done) {
            clickers.initIds()
                .then(function () {
                expect(clickers.getClickers()).toEqual([]);
                done();
            });
        });
        it('has empty clickers with no storage', function (done) {
            clickers.initClickers([])
                .then(function () {
                expect(clickers.getClickers()).toEqual([]);
                done();
            });
        });
        it('can initialise a clicker from string', function () {
            var clickerString = '{"id":"0g2vt8qtlm","name":"harold","clicks":[{"time":1450410168819,"location":"TODO"},{"time":1450410168945,"location":"TODO"}]}';
            var clicker = clickers.initClicker(clickerString);
            expect(clicker.getName()).toEqual('harold');
            expect(clicker.getCount()).toEqual(2);
        });
        it('returns undefined for a bad id', function () {
            expect(clickers.getClicker('dave')).not.toBeDefined();
        });
        it('adds a new clicker with the correct name', function () {
            var idAdded = clickers.newClicker('dave');
            expect(clickers['storage'].set).toHaveBeenCalledWith(idAdded, jasmine.any(String));
            expect(clickers.getClickers()[0].getName()).toEqual('dave');
        });
        it('removes a clicker by id', function () {
            var idToRemove = clickers.newClicker('dave');
            clickers.removeClicker(idToRemove);
            expect(clickers['storage'].set).toHaveBeenCalledWith(idToRemove, jasmine.any(String));
            expect(clickers.getClickers()).toEqual([]);
        });
        it('does a click', function () {
            var idToClick = clickers.newClicker('dave');
            var clickedClicker = null;
            clickers.doClick(idToClick);
            expect(clickers['storage'].set).toHaveBeenCalledWith(idToClick, jasmine.any(String));
            clickedClicker = clickers.getClicker(idToClick);
            expect(clickedClicker.getCount()).toEqual(1);
        });
        it('loads IDs from storage', function (done) {
            clickers.initIds()
                .then(function (ids) {
                expect(ids).toEqual(CLICKER_IDS);
                done();
            });
        });
        it('loads clickers from storage', function (done) {
            clickers.initClickers(CLICKER_IDS)
                .then(function (resolvedClickers) {
                expect(resolvedClickers.length).toEqual(3);
                expect(resolvedClickers[0].getId()).toEqual(CLICKER_IDS[0]);
                expect(resolvedClickers[1].getId()).toEqual(CLICKER_IDS[1]);
                expect(resolvedClickers[2].getId()).toEqual(CLICKER_IDS[2]);
                done();
            });
        });
    });
}
exports.main = main;
;
