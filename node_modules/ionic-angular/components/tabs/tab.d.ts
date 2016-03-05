import { ElementRef, Compiler, AppViewManager, NgZone, Renderer, Type } from 'angular2/core';
import { EventEmitter } from 'angular2/core';
import { IonicApp } from '../app/app';
import { Config } from '../../config/config';
import { Keyboard } from '../../util/keyboard';
import { NavController, NavOptions } from '../nav/nav-controller';
import { ViewController } from '../nav/view-controller';
import { Tabs } from './tabs';
import { TabButton } from './tab-button';
/**
 * @name Tab
 * @description
 * _For basic Tabs usage, see the [Tabs section](../../../../components/#tabs)
 * of the Component docs._
 *
 * Tab components are basic navigation controllers used with Tabs.  Much like
 * Nav, they are a subclass of NavController and can be used to navigate
 * to pages in and manipulate the navigation stack of a particular tab.
 *
 * For more information on using navigation controllers like Tab or [Nav](../../nav/Nav/),
 * take a look at the [NavController API reference](../NavController/).
 *
 * See the [Tabs API reference](../Tabs/) for more details on configuring Tabs
 * and the TabBar.
 *
 * @usage
 * For most cases, you can give tab a `[root]` property along with the component you want to load.
 *
 * ```html
 * <ion-tabs>
 *  <ion-tab [root]="chatRoot" tabTitle="Chat" tabIcon="chat"><ion-tab>
 * </ion-tabs>
 * ```
 *
 * ```ts
 * import {Chat} from '../chat/chat';
 * export class Tabs {
 *    constructor(){
 *      // here we'll set the property of chatRoot to
 *      // the imported class of Chat
 *      this.chatRoot = Chat
 *    }
 * }
 * ```
 *
 * In other cases, you may not want to navigate to a new component, but just
 * call a method. You can use the `(select)` event to call a method on your
 * class. Below is an example of presenting a modal from one of the tabs.
 *
 * ```html
 * <ion-tabs preloadTabs="false">
 *   <ion-tab (select)="chat()"></ion-tab>
 * </ion-tabs>
 * ```
 *
 * ```ts
 * export class Tabs {
 *   constructor(nav: NavController){
 *     this.nav = nav;
 *   }
 *   chat() {
 *     let modal = Modal.create(ChatPage);
 *     this.nav.present(modal);
 *   }
 * }
 * ```
 *
 *
 *
 * @demo /docs/v2/demos/tabs/
 */
export declare class Tab extends NavController {
    /**
     * @private
     */
    isSelected: boolean;
    private _isInitial;
    private _panelId;
    private _btnId;
    private _loaded;
    private _loadTmr;
    /**
     * @private
     */
    btn: TabButton;
    /**
     * @input {Page} Set the root page for this tab
     */
    root: Type;
    /**
     * @input {object} Any nav-params you want to pass to the root page of the tab
     */
    rootParams: any;
    /**
     * @input {string} Set the title of this tab
     */
    tabTitle: string;
    /**
     * @input {string} Set the icon for this tab
     */
    tabIcon: string;
    /**
     * @input {string} Set the badge for this tab
     */
    tabBadge: string;
    /**
     * @input {string} Set the badge color for this tab
     */
    tabBadgeStyle: string;
    /**
     * @output {Tab} Method to call when the current tab is selected
     */
    select: EventEmitter<Tab>;
    constructor(parentTabs: Tabs, app: IonicApp, config: Config, keyboard: Keyboard, elementRef: ElementRef, compiler: Compiler, viewManager: AppViewManager, zone: NgZone, renderer: Renderer);
    /**
     * @private
     */
    ngOnInit(): void;
    /**
     * @private
     */
    load(opts: NavOptions, done?: Function): void;
    /**
     * @private
     */
    preload(wait: number): void;
    /**
     * @private
     */
    loadPage(viewCtrl: ViewController, navbarContainerRef: any, opts: NavOptions, done: Function): void;
    /**
     * @private
     */
    setSelected(isSelected: boolean): void;
    /**
     * @private
     */
    hideNavbars(shouldHideNavbars: boolean): void;
    /**
     * @private
     */
    index: number;
    /**
     * @private
     */
    ngOnDestroy(): void;
}
