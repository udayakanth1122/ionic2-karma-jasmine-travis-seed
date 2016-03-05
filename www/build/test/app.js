'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var index_1 = require('ionic-angular/index');
var clickerList_1 = require('./pages/clickerList/clickerList');
var page2_1 = require('./pages/page2/page2');
var ClickerApp = (function () {
    function ClickerApp(app, platform) {
        this.app = app;
        this.platform = platform;
        this.rootPage = clickerList_1.ClickerList;
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Clickers', component: clickerList_1.ClickerList },
            { title: 'Goodbye Ionic', component: page2_1.Page2 },
        ];
    }
    ClickerApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // The platform is now ready. Note: if this callback fails to fire, follow
            // the Troubleshooting guide for a number of possible solutions:
            //
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //
            // First, let's hide the keyboard accessory bar (only works natively) since
            // that's a better default:
            //
            // Keyboard.setAccessoryBarVisible(false);
            //
            // For example, we might change the StatusBar color. This one below is
            // good for dark backgrounds and light text:
            // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
        });
    };
    ClickerApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.app.getComponent('leftMenu').close();
        // navigate to the new page if it is not the current page
        this.app.getComponent('nav').setRoot(page.component);
    };
    ;
    ClickerApp = __decorate([
        index_1.App({
            templateUrl: 'build/app.html',
            config: {},
        }), 
        __metadata('design:paramtypes', [index_1.IonicApp, index_1.Platform])
    ], ClickerApp);
    return ClickerApp;
}());
exports.ClickerApp = ClickerApp;
