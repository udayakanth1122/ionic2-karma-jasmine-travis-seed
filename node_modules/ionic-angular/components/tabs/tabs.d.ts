import { ElementRef, ViewContainerRef, EventEmitter, Renderer } from 'angular2/core';
import { IonicApp } from '../app/app';
import { Config } from '../../config/config';
import { Tab } from './tab';
import { Ion } from '../ion';
import { Platform } from '../../platform/platform';
import { NavController } from '../nav/nav-controller';
import { ViewController } from '../nav/view-controller';
/**
 * @name Tabs
 * @description
 * _For basic Tabs usage, see the [Tabs section](../../../../components/#tabs)
 * of the Component docs._
 *
 * The Tabs component is a container with a TabBar and any number of
 * individual Tab components. On iOS, the TabBar is placed on the bottom of
 * the screen, while on Android it is at the top.
 *
 * @usage
 * ```html
 * <ion-tabs>
 *   <ion-tab [root]="tabRoot"></ion-tab>
 * </ion-tabs>
 * ```
 *
 * @demo /docs/v2/demos/tabs/
 *
 * @see {@link /docs/v2/components#tabs Tabs Component Docs}
 * @see {@link ../Tab Tab API Docs}
 *
 */
export declare class Tabs extends Ion {
    private _app;
    private _config;
    private _elementRef;
    private _platform;
    private _renderer;
    private _ids;
    private _preloadTabs;
    private _tabs;
    private _onReady;
    private _useHighlight;
    /**
     * @private
     */
    id: number;
    /**
     * @private
     */
    navbarContainerRef: ViewContainerRef;
    /**
     * @private
     */
    subPages: boolean;
    /**
     * @input {number} The default selected tab index when first loaded. If a selected index isn't provided then it will use `0`, the first tab.
     */
    selectedIndex: any;
    /**
     * @input {boolean} Set whether to preload all the tabs: `true`, `false`.
     */
    preloadTabs: any;
    /**
     * @input {string} Deprecated, use `tabbarLayout` instead. Set the position of the tabbar's icons: `top`, `bottom`, `left`, `right`, `hide`.
     */
    tabbarIcons: string;
    /**
     * @input {string} Set the tabbar layout: `icon-top`, `icon-left`, `icon-right`, `icon-bottom`, `icon-hide`, `title-hide`.
     */
    tabbarLayout: string;
    /**
     * @input {string} Set position of the tabbar: `top`, `bottom`.
     */
    tabbarPlacement: string;
    /**
     * @input {any} Expression to evaluate when the tab changes.
     */
    change: EventEmitter<Tab>;
    /**
     * @private
     */
    private _highlight;
    /**
     * @private
     */
    private _btns;
    /**
     * @private
     */
    parent: any;
    constructor(viewCtrl: ViewController, parent: NavController, _app: IonicApp, _config: Config, _elementRef: ElementRef, _platform: Platform, _renderer: Renderer);
    /**
     * @private
     */
    ngAfterViewInit(): void;
    /**
     * @private
     */
    ngAfterContentInit(): void;
    /**
     * @private
     */
    private _setConfig(attrKey, fallback);
    /**
     * @private
     */
    add(tab: Tab): void;
    /**
     * @param {number} index Index of the tab you want to select
     */
    select(tabOrIndex: any): any;
    /**
     * @param {number} index Index of the tab you want to get
     * @returns {Tab} Returns the tab who's index matches the one passed
     */
    getByIndex(index: number): Tab;
    /**
     * @return {Tab} Returns the currently selected tab
     */
    getSelected(): Tab;
    /**
     * @private
     */
    getIndex(tab: Tab): number;
    /**
     * @private
     * "Touch" the active tab, going back to the root view of the tab
     * or optionally letting the tab handle the event
     */
    private _touchActive(tab);
    /**
     * @private
     * Returns the root NavController. Returns `null` if Tabs is not
     * within a NavController.
     * @returns {NavController}
     */
    rootNav: NavController;
}
