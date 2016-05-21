"use strict";
var common_1 = require('angular2/common');
var clickerForm_1 = require('./clickerForm');
var clickers_1 = require('../../services/clickers');
var utils_1 = require('../../services/utils');
var clickerForm = null;
var mockClickers = Object.create(clickers_1.Clickers);
mockClickers.newClicker = function () { return 'dave'; };
function main() {
    'use strict';
    describe('ClickerForm', function () {
        beforeEach(function () {
            clickerForm = new clickerForm_1.ClickerForm(mockClickers, new common_1.FormBuilder());
            spyOn(clickerForm, 'newClicker').and.callThrough();
            spyOn(mockClickers, 'newClicker').and.callThrough();
        });
        it('initialises', function () {
            expect(clickerForm).not.toBeNull();
        });
        it('passes new clicker through to service', function () {
            var clickerName = 'dave';
            spyOn(utils_1.Utils, 'resetControl').and.callThrough();
            clickerForm['clickerNameInput']['updateValue'](clickerName, true);
            clickerForm.newClicker({ clickerNameInput: clickerName });
            expect(clickerForm.newClicker).toHaveBeenCalledWith(Object({ clickerNameInput: clickerName }));
            expect(mockClickers.newClicker).toHaveBeenCalledWith(clickerName);
            expect(utils_1.Utils.resetControl).toHaveBeenCalledWith(clickerForm['clickerNameInput']);
        });
        it('doesn\'t try to add a clicker with no name', function () {
            var rtn = clickerForm.newClicker('dave');
            expect(rtn).toBe(false);
            expect(clickerForm.newClicker).toHaveBeenCalled();
            expect(mockClickers.newClicker).not.toHaveBeenCalled();
        });
    });
}
exports.main = main;
//
// Waiting for https://github.com/driftyco/ionic/issues/5494 to be released until we can test the form
// When it's out, replace with the below, tested working
//
// import {
//   beforeEach,
//   beforeEachProviders,
//   ComponentFixture,
//   describe,
//   expect,
//   injectAsync,
//   it,
//   TestComponentBuilder,
// }                        from 'angular2/testing';
// import { provide }       from 'angular2/core';
// import {
//   Config,
//   Form,
//   IonicApp,
//   Platform,
// }                        from 'ionic-angular/index';
// import { ClickerForm }   from '../../../app/components/clickerForm/clickerForm';
// import { Clickers }      from '../../../app/services/clickers';
// import { TestUtils }     from '../../testUtils';
// import { Utils }         from '../../../app/services/utils';
// let clickerForm = null;
// let clickerFormFixture = null;
// class MockClickers {
//   public newClicker() {
//     return true;
//   }
// }
// class MockClass {
//   public get(): any {
//     return {};
//   }
// }
// export function main() {
//   describe('ClickerForm', () => {
//     beforeEachProviders(() => [
//       Form,
//       provide(Clickers, {useClass: MockClickers}),
//       provide(IonicApp, {useClass: MockClass}),
//       provide(Platform, {useClass: MockClass}),
//       provide(Config, {useClass: MockClass}),
//     ]);
//     beforeEach(injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
//       return tcb
//         .createAsync(ClickerForm)
//         .then((componentFixture: ComponentFixture) => {
//           clickerFormFixture = componentFixture;
//           clickerForm = componentFixture.componentInstance;
//           spyOn(clickerForm, 'newClicker').and.callThrough();
//           spyOn(clickerForm['clickerService'], 'newClicker').and.callThrough();
//         })
//         .catch(Utils.promiseCatchHandler);
//     }));
//     it('initialises', () => {
//       expect(clickerForm).not.toBeNull();
//     });
//     it('passes new clicker through to service', () => {
//       let clickerName = 'dave';
//       let input = clickerFormFixture.nativeElement.querySelectorAll('.text-input')[0];
//       let button = clickerFormFixture.nativeElement.querySelectorAll('button')[0];
//       spyOn(Utils, 'resetControl').and.callThrough();
//       input.value = clickerName;
//       clickerFormFixture.detectChanges();
//       // clickerForm.clickerNameInput.updateValue(clickerName, true);
//       TestUtils.eventFire(input, 'input');
//       TestUtils.eventFire(button, 'click');
//       expect(clickerForm.newClicker).toHaveBeenCalledWith(Object({ clickerNameInput: clickerName }));
//       expect(clickerForm['clickerService'].newClicker).toHaveBeenCalledWith(clickerName);
//       expect(Utils.resetControl).toHaveBeenCalledWith(clickerForm.clickerNameInput);
//     });
//     it('doesn\'t try to add a clicker with no name', () => {
//       let button = clickerFormFixture.nativeElement.querySelectorAll('button')[0];
//       TestUtils.eventFire(button, 'click');
//       expect(clickerForm.newClicker).toHaveBeenCalled();
//       expect(clickerForm['clickerService'].newClicker).not.toHaveBeenCalled();
//     });
//   });
// }
