(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
// fade.animation.ts

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
        ], { optional: true })
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_artikl_artikl_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/artikl/artikl.component */ "./src/app/components/artikl/artikl.component.ts");
/* harmony import */ var _components_dobavljac_dobavljac_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dobavljac/dobavljac.component */ "./src/app/components/dobavljac/dobavljac.component.ts");
/* harmony import */ var _components_porudzbina_porudzbina_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/porudzbina/porudzbina.component */ "./src/app/components/porudzbina/porudzbina.component.ts");
/* harmony import */ var _components_core_help_help_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/core/help/help.component */ "./src/app/components/core/help/help.component.ts");
/* harmony import */ var _components_core_author_author_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/core/author/author.component */ "./src/app/components/core/author/author.component.ts");
/* harmony import */ var _components_core_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/core/home/home.component */ "./src/app/components/core/home/home.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");











var routes = [
    { path: 'artikl', component: _components_artikl_artikl_component__WEBPACK_IMPORTED_MODULE_3__["ArtiklComponent"] },
    { path: 'dobavljac', component: _components_dobavljac_dobavljac_component__WEBPACK_IMPORTED_MODULE_4__["DobavljacComponent"], data: { animation: 'FilterPage' } },
    { path: 'porudzbina', component: _components_porudzbina_porudzbina_component__WEBPACK_IMPORTED_MODULE_5__["PorudzbinaComponent"], data: { animation: 'FilterPage' } },
    { path: 'pomoc', component: _components_core_help_help_component__WEBPACK_IMPORTED_MODULE_6__["HelpComponent"], data: { animation: 'FilterPage' } },
    { path: 'autor', component: _components_core_author_author_component__WEBPACK_IMPORTED_MODULE_7__["AuthorComponent"], data: { animation: 'AuthorPage' } },
    { path: 'home', component: _components_core_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], data: { animation: 'HomePage' } },
    { path: '', redirectTo: '/home', pathMatch: 'full', data: { animation: 'FilterPage' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    min-height: 50%;\r\n   }\r\n   .example-container {\r\n    height: auto;\r\n    margin: 10px;\r\n  }\r\n   .example-button-row {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: left;\r\n            align-items: left;\r\n   }\r\n   .mat-button {\r\n    text-align: left;\r\n    display: block;\r\n   }\r\n   .mat-drawer-container {\r\n     min-height: 700px;\r\n   }\r\n   .header-img {\r\n    height: 10em;\r\n    background-size: 100%;\r\n    width: auto;\r\n    background-image: url('/assets/sidenavph.jpg');\r\n    background-color: white;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n   :host {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n\r\n\r\n}\r\n   :host main {\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  position: relative;\r\n  height: 800px;\r\n}\r\n   :host /deep/ router-outlet ~ * {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n   .mat-drawer-content {\r\n  overflow: initial !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixlQUFlO0dBQ2hCO0dBQ0E7SUFDQyxZQUFZO0lBQ1osWUFBWTtFQUNkO0dBQ0M7SUFDQyxvQkFBYTtJQUFiLGFBQWE7SUFDYix1QkFBaUI7WUFBakIsaUJBQWlCO0dBQ2xCO0dBQ0E7SUFDQyxnQkFBZ0I7SUFDaEIsY0FBYztHQUNmO0dBQ0E7S0FDRSxpQkFBaUI7R0FDbkI7R0FFQTtJQUNDLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLDhDQUE4QztJQUM5Qyx1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQztHQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7OztBQUd4QjtHQUNBO0VBQ0UsbUJBQU87VUFBUCxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtHQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7R0FFQTtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi1oZWlnaHQ6IDUwJTtcclxuICAgfVxyXG4gICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuICAgLmV4YW1wbGUtYnV0dG9uLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XHJcbiAgIH1cclxuICAgLm1hdC1idXR0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB9XHJcbiAgIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgICAgbWluLWhlaWdodDogNzAwcHg7XHJcbiAgIH1cclxuXHJcbiAgIC5oZWFkZXItaW1nIHtcclxuICAgIGhlaWdodDogMTBlbTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3NpZGVuYXZwaC5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcblxyXG59XHJcbjpob3N0IG1haW4ge1xyXG4gIGZsZXg6IDE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogODAwcHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvIHJvdXRlci1vdXRsZXQgfiAqIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWRyYXdlci1jb250ZW50IHtcclxuICBvdmVyZmxvdzogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul>\r\n<a mat-button href=\"https://material.angular.io\">Material</a>\r\n<button mat-mini-fab>\r\n  <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n</button>\r\n<app-vozilo></app-vozilo>\r\n<router-outlet></router-outlet>-->\r\n\r\n<mat-sidenav-container class=\"container\">\r\n\r\n  <mat-accordion>\r\n    <mat-drawer-container class=\"example-container\" autosize>\r\n      <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\" [opened]=\"isMobile() && toggle() && true \">\r\n        <div class=\"header-img\"> </div>\r\n        <a mat-button style=\"text-align: center\">\r\n          <mat-icon (click)=\"drawer.toggle()\" *ngIf=\"isMobile()\">menu</mat-icon>\r\n        </a>\r\n        <mat-expansion-panel [expanded]=\"true\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              Aplikacija\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n              Aplikacija za vodjenje evidencije\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <mat-nav-list>\r\n            <a mat-button [routerLink]=\"['artikl']\" (click)=\"isMobile() === true && drawer.toggle()\">\r\n              <mat-icon>shoppingcart</mat-icon> Artikl\r\n            </a>\r\n          </mat-nav-list>\r\n          <mat-nav-list>\r\n            <a mat-button [routerLink]=\"['dobavljac']\" (click)=\"isMobile() === true && drawer.toggle()\">\r\n              <mat-icon>directionscar</mat-icon> Dobavljač\r\n            </a>\r\n          </mat-nav-list>\r\n          <mat-nav-list>\r\n            <a mat-button [routerLink]=\"['porudzbina']\" (click)=\"isMobile() === true && drawer.toggle()\">\r\n              <mat-icon>listalt</mat-icon> Porudžbina\r\n            </a>\r\n          </mat-nav-list>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              Informacije\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n              Osnovne informacije o aplikaciji\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <mat-nav-list>\r\n            <a mat-button [routerLink]=\"['pomoc']\" (click)=\"isMobile() === true && drawer.toggle()\">\r\n              <mat-icon>help</mat-icon> Pomoć\r\n            </a>\r\n          </mat-nav-list>\r\n          <mat-nav-list>\r\n            <a mat-button [routerLink]=\"['autor']\" (click)=\"isMobile() === true && drawer.toggle()\">\r\n              <mat-icon>face</mat-icon> Autor\r\n            </a>\r\n          </mat-nav-list>\r\n        </mat-expansion-panel>\r\n      </mat-drawer>\r\n\r\n\r\n      <div class=\"example-sidenav-content\">\r\n        <a mat-button style=\"text-align: center\" *ngIf=\"isMobile()\">\r\n          <mat-icon (click)=\"drawer.toggle()\">menu</mat-icon>\r\n        </a>\r\n        <a mat-button style=\"text-align: center\">\r\n          <mat-icon [routerLink]=\"['home']\">home</mat-icon>\r\n        </a>\r\n\r\n        <main [@fadeAnimation]=\"getRouterOutletState(o)\">\r\n          <router-outlet #o=\"outlet\"></router-outlet>\r\n        </main>\r\n      </div>\r\n\r\n    </mat-drawer-container>\r\n  </mat-accordion>\r\n\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(cdRef) {
        this.cdRef = cdRef;
        this.title = 'frontend-rva4';
        this.show = false;
    }
    Object.defineProperty(AppComponent.prototype, "stateName", {
        get: function () {
            return this.show ? 'show' : 'hide';
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngAfterViewChecked = function () {
        this.toggle();
        this.cdRef.detectChanges();
    };
    AppComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    AppComponent.prototype.isMobile = function () {
        if (window.screen.width < 500) {
            return true;
        }
        else if (window.screen.width > 500) {
            this.drawer.open();
            return false;
        }
    };
    AppComponent.prototype.getRouterOutletState = function (outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"])
    ], AppComponent.prototype, "drawer", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_3__["fadeAnimation"]
            ],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_primer_components_vozilo_vozilo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/primer-components/vozilo/vozilo.component */ "./src/app/components/primer-components/vozilo/vozilo.component.ts");
/* harmony import */ var _components_primer_components_automobil_automobil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/primer-components/automobil/automobil.component */ "./src/app/components/primer-components/automobil/automobil.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_artikl_artikl_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/artikl/artikl.component */ "./src/app/components/artikl/artikl.component.ts");
/* harmony import */ var _components_dobavljac_dobavljac_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dobavljac/dobavljac.component */ "./src/app/components/dobavljac/dobavljac.component.ts");
/* harmony import */ var _components_porudzbina_porudzbina_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/porudzbina/porudzbina.component */ "./src/app/components/porudzbina/porudzbina.component.ts");
/* harmony import */ var _components_stavka_porudzbine_stavka_porudzbine_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/stavka-porudzbine/stavka-porudzbine.component */ "./src/app/components/stavka-porudzbine/stavka-porudzbine.component.ts");
/* harmony import */ var _components_core_help_help_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/core/help/help.component */ "./src/app/components/core/help/help.component.ts");
/* harmony import */ var _components_core_author_author_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/core/author/author.component */ "./src/app/components/core/author/author.component.ts");
/* harmony import */ var _components_core_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/core/home/home.component */ "./src/app/components/core/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_artikl_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/artikl.service */ "./src/app/services/artikl.service.ts");
/* harmony import */ var _components_dialogs_artikl_dialog_artikl_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dialogs/artikl-dialog/artikl-dialog.component */ "./src/app/components/dialogs/artikl-dialog/artikl-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_dialogs_dobavljac_dialog_dobavljac_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dialogs/dobavljac-dialog/dobavljac-dialog.component */ "./src/app/components/dialogs/dobavljac-dialog/dobavljac-dialog.component.ts");
/* harmony import */ var _services_dobavljac_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/dobavljac.service */ "./src/app/services/dobavljac.service.ts");
/* harmony import */ var _components_dialogs_porudzbina_dialog_porudzbina_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/dialogs/porudzbina-dialog/porudzbina-dialog.component */ "./src/app/components/dialogs/porudzbina-dialog/porudzbina-dialog.component.ts");
/* harmony import */ var _services_porudzbina_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/porudzbina.service */ "./src/app/services/porudzbina.service.ts");
/* harmony import */ var _components_dialogs_stavka_porudzbine_dialog_stavka_porudzbine_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/dialogs/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component */ "./src/app/components/dialogs/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component.ts");
/* harmony import */ var _services_stavka_porudzbine_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/stavka-porudzbine.service */ "./src/app/services/stavka-porudzbine.service.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_primer_components_vozilo_vozilo_component__WEBPACK_IMPORTED_MODULE_5__["VoziloComponent"],
                _components_primer_components_automobil_automobil_component__WEBPACK_IMPORTED_MODULE_6__["AutomobilComponent"],
                _components_artikl_artikl_component__WEBPACK_IMPORTED_MODULE_9__["ArtiklComponent"],
                _components_dobavljac_dobavljac_component__WEBPACK_IMPORTED_MODULE_10__["DobavljacComponent"],
                _components_porudzbina_porudzbina_component__WEBPACK_IMPORTED_MODULE_11__["PorudzbinaComponent"],
                _components_stavka_porudzbine_stavka_porudzbine_component__WEBPACK_IMPORTED_MODULE_12__["StavkaPorudzbineComponent"],
                _components_core_help_help_component__WEBPACK_IMPORTED_MODULE_13__["HelpComponent"],
                _components_core_author_author_component__WEBPACK_IMPORTED_MODULE_14__["AuthorComponent"],
                _components_core_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _components_dialogs_artikl_dialog_artikl_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ArtiklDialogComponent"],
                _components_dialogs_dobavljac_dialog_dobavljac_dialog_component__WEBPACK_IMPORTED_MODULE_20__["DobavljacDialogComponent"],
                _components_dialogs_porudzbina_dialog_porudzbina_dialog_component__WEBPACK_IMPORTED_MODULE_22__["PorudzbinaDialogComponent"],
                _components_dialogs_stavka_porudzbine_dialog_stavka_porudzbine_dialog_component__WEBPACK_IMPORTED_MODULE_24__["StavkaPorudzbineDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__["ScrollingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__["DragDropModule"]
            ],
            entryComponents: [_components_dialogs_artikl_dialog_artikl_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ArtiklDialogComponent"], _components_dialogs_dobavljac_dialog_dobavljac_dialog_component__WEBPACK_IMPORTED_MODULE_20__["DobavljacDialogComponent"], _components_dialogs_porudzbina_dialog_porudzbina_dialog_component__WEBPACK_IMPORTED_MODULE_22__["PorudzbinaDialogComponent"], _components_dialogs_stavka_porudzbine_dialog_stavka_porudzbine_dialog_component__WEBPACK_IMPORTED_MODULE_24__["StavkaPorudzbineDialogComponent"]],
            providers: [_services_artikl_service__WEBPACK_IMPORTED_MODULE_17__["ArtiklService"], _services_dobavljac_service__WEBPACK_IMPORTED_MODULE_21__["DobavljacService"], _services_porudzbina_service__WEBPACK_IMPORTED_MODULE_23__["PorudzbinaService"], _services_stavka_porudzbine_service__WEBPACK_IMPORTED_MODULE_25__["StavkaPorudzbineService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/artikl/artikl.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/artikl/artikl.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-content{\r\n    font-weight: normal;\r\n\r\n}\r\n\r\n.example-card{\r\n    min-height: 30px;\r\n    width: 100%;\r\n    padding-left: 1%;\r\n}\r\n\r\n.list-item{\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n    -webkit-transform: rotateY(10deg);\r\n            transform: rotateY(10deg);\r\n}\r\n\r\n.lightSpeedIn {\r\n    -webkit-animation-duration: 1.3s;\r\n            animation-duration: 1.3s;\r\n    -webkit-animation-delay: 0.5s;\r\n            animation-delay: 0.5s;\r\n\r\n  }\r\n\r\nul {\r\n    width: 100%;\r\n    color:black;\r\n    list-style: none;\r\n    margin: 5% auto;\r\n    padding: 0;\r\n}\r\n\r\n.example-list span, .example-card span {\r\n    width: 25%;\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.list li {\r\n    padding: 5px;\r\n    width: auto;\r\n    background: whitesmoke;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n    text-align: left;\r\n    font-size: 32px;\r\n\r\n}\r\n\r\n.container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1;\r\n    margin-top: 8px;\r\n}\r\n\r\n.no-result {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    padding: 14px;\r\n    font-size: 14px;\r\n    font-style:  italic;\r\n}\r\n\r\n.mat-cell:nth-child(1),\r\n.mat-header-cell:nth-child(1){\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 5%;\r\n}\r\n\r\n.mat-cell:nth-child(2),\r\n.mat-header-cell:nth-child(2){\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 40%;\r\n}\r\n\r\n.mat-cell:nth-child(3),\r\n.mat-header-cell:nth-child(3){\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 20%;\r\n}\r\n\r\n.mat-cell:nth-child(4),\r\n.mat-header-cell:nth-child(4){\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 15%;\r\n}\r\n\r\n.title-center {\r\n    margin: 0 auto;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpa2wvYXJ0aWtsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBYztJQUFkLGNBQWM7SUFDZCxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLGlDQUF5QjtZQUF6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLDZCQUFxQjtZQUFyQixxQkFBcUI7O0VBRXZCOztBQUVGO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFDQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBWTtZQUFaLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxtQkFBWTtZQUFaLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksbUJBQWE7WUFBYixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLG1CQUFhO1lBQWIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxtQkFBYTtZQUFiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcnRpa2wvYXJ0aWtsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZC1jb250ZW50e1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmR7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xyXG59XHJcblxyXG4ubGlzdC1pdGVte1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDEwZGVnKTtcclxufVxyXG5cclxuLmxpZ2h0U3BlZWRJbiB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuM3M7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XHJcblxyXG4gIH1cclxuXHJcbnVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uZXhhbXBsZS1saXN0IHNwYW4sIC5leGFtcGxlLWNhcmQgc3BhbiB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5saXN0IGxpIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4ubm8tcmVzdWx0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXN0eWxlOiAgaXRhbGljO1xyXG59XHJcblxyXG4ubWF0LWNlbGw6bnRoLWNoaWxkKDEpLFxyXG4ubWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKXtcclxuICAgIGZsZXg6IDAgMCA1JTtcclxufVxyXG5cclxuLm1hdC1jZWxsOm50aC1jaGlsZCgyKSxcclxuLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMil7XHJcbiAgICBmbGV4OiAwIDAgNDAlO1xyXG59XHJcblxyXG4ubWF0LWNlbGw6bnRoLWNoaWxkKDMpLFxyXG4ubWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgzKXtcclxuICAgIGZsZXg6IDAgMCAyMCU7XHJcbn1cclxuXHJcbi5tYXQtY2VsbDpudGgtY2hpbGQoNCksXHJcbi5tYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDQpe1xyXG4gICAgZmxleDogMCAwIDE1JTtcclxufVxyXG5cclxuLnRpdGxlLWNlbnRlciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/artikl/artikl.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/artikl/artikl.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span class=\"title-center\">Artikl</span>\r\n</mat-toolbar>\r\n\r\n<mat-card style=\"min-height: 30px; margin-bottom: -45pt; width: auto\" class=\"example-card\" >\r\n    <mat-card-content>\r\n        <span>ID</span>\r\n        <span>Naziv</span>\r\n        <span>Proizvodjac</span>\r\n        <button  mat-icon-button color=\"primary\" (click)=\"openDialog(1, null, null, null)\">\r\n            <mat-icon>add</mat-icon>\r\n        </button>\r\n  </mat-card-content>\r\n</mat-card> \r\n\r\n<ul class=\"list\">\r\n    <div class=\"example-list list\">\r\n      <cdk-virtual-scroll-viewport itemSize = \"50\" style=\" height:500px; width: 100%;\" >\r\n              <!--li *cdkVirtualFor=\"let row of numbers\" class=\"animated lightSpeedIn\" style=\"width: 100%;\"-->   \r\n              <li *cdkVirtualFor=\"let row of artikls\" class=\"animated lightSpeedIn\" style=\"width: 100%;\">  \r\n                <mat-card class=\"example-card \" >\r\n                  <mat-card-content>\r\n                      <span>{{row.id}}</span>\r\n                      <span>{{row.naziv}}</span>\r\n                      <span>{{row.proizvodjac}}</span>\r\n                      \r\n                      <span>\r\n                        <button mat-icon-button color=\"primary\" (click)=\"openDialog(2, row.id, row.naziv, row.proizvodjac)\">\r\n                            <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n                          </button>\r\n                          <button mat-icon-button color=\"primary\" (click)=\"openDialog(3, row.id, row.naziv, row.proizvodjac)\">\r\n                            <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n                          </button>\r\n                      </span>\r\n                        \r\n                  </mat-card-content>\r\n              </mat-card> \r\n            </li>\r\n\r\n      </cdk-virtual-scroll-viewport>\r\n  </div>\r\n</ul>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/artikl/artikl.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/artikl/artikl.component.ts ***!
  \*******************************************************/
/*! exports provided: ArtiklComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtiklComponent", function() { return ArtiklComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_artikl_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/artikl.service */ "./src/app/services/artikl.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_artikl_dialog_artikl_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialogs/artikl-dialog/artikl-dialog.component */ "./src/app/components/dialogs/artikl-dialog/artikl-dialog.component.ts");






var ArtiklComponent = /** @class */ (function () {
    function ArtiklComponent(httpClient, artiklService, dialog) {
        this.httpClient = httpClient;
        this.artiklService = artiklService;
        this.dialog = dialog;
        this.artikls = [];
        //testiranje virtual-scrolla
        /*for (let index = 0; index < 1000; index++) {
          this.numbers.push(index);
        }*/
    }
    ArtiklComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    ArtiklComponent.prototype.loadData = function () {
        var _this = this;
        var artiklsObservable = this.artiklService.getAllArtikli();
        artiklsObservable.subscribe(function (data) {
            _this.artikls = data;
        });
    };
    ArtiklComponent.prototype.openDialog = function (flag, id, naziv, proizvodjac) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_artikl_dialog_artikl_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ArtiklDialogComponent"], { data: { id: id, naziv: naziv, proizvodjac: proizvodjac } });
        dialogRef.componentInstance.flag = flag;
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 1)
                _this.loadData();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ArtiklComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], ArtiklComponent.prototype, "sort", void 0);
    ArtiklComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artikl',
            template: __webpack_require__(/*! ./artikl.component.html */ "./src/app/components/artikl/artikl.component.html"),
            styles: [__webpack_require__(/*! ./artikl.component.css */ "./src/app/components/artikl/artikl.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_artikl_service__WEBPACK_IMPORTED_MODULE_3__["ArtiklService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ArtiklComponent);
    return ArtiklComponent;
}());



/***/ }),

/***/ "./src/app/components/core/author/author.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/core/author/author.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1;\r\n    margin-top: 8px;\r\n}\r\n\r\n.title-center {\r\n    margin: 0 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3JlL2F1dGhvci9hdXRob3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFZO1lBQVosWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3JlL2F1dGhvci9hdXRob3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi50aXRsZS1jZW50ZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/core/author/author.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/core/author/author.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span class=\"title-center\">Autor</span>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/components/core/author/author.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/core/author/author.component.ts ***!
  \************************************************************/
/*! exports provided: AuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorComponent", function() { return AuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthorComponent = /** @class */ (function () {
    function AuthorComponent() {
    }
    AuthorComponent.prototype.ngOnInit = function () {
    };
    AuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-author',
            template: __webpack_require__(/*! ./author.component.html */ "./src/app/components/core/author/author.component.html"),
            styles: [__webpack_require__(/*! ./author.component.css */ "./src/app/components/core/author/author.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthorComponent);
    return AuthorComponent;
}());



/***/ }),

/***/ "./src/app/components/core/help/help.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/core/help/help.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1;\r\n    margin-top: 8px;\r\n}\r\n\r\n.title-center {\r\n    margin: 0 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3JlL2hlbHAvaGVscC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQVk7WUFBWixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvcmUvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4udGl0bGUtY2VudGVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/core/help/help.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/core/help/help.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span class=\"title-center\">Pomoć</span>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/components/core/help/help.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/core/help/help.component.ts ***!
  \********************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/components/core/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/components/core/help/help.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/components/core/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/core/home/home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-center {\r\n    margin: 0 auto;\r\n}\r\n\r\n.image {\r\n    height: 50em;\r\n    background-size: 80%;\r\n    width: auto;\r\n    background-image: url('/assets/background.png');\r\n    background-color: white;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3JlL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLCtDQUErQztJQUMvQyx1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1jZW50ZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDUwZW07XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2JhY2tncm91bmQucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/core/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/core/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span class=\"title-center\">Razvoj višeslojnih aplikacija</span>\r\n</mat-toolbar>\r\n<div class=\"image\"> </div>\r\n"

/***/ }),

/***/ "./src/app/components/core/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/core/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/core/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/core/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/dialogs/artikl-dialog/artikl-dialog.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/dialogs/artikl-dialog/artikl-dialog.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n display: -webkit-box;\r\n display: flex;\r\n -webkit-box-orient: vertical;\r\n -webkit-box-direction: normal;\r\n         flex-direction: column;\r\n min-width: 450px;\r\n}\r\n\r\n.form {\r\n display: -webkit-box;\r\n display: flex;\r\n}\r\n\r\n.mat-form-field {\r\n font-size: 16px;\r\n -webkit-box-flex: 1;\r\n         flex-grow: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2dzL2FydGlrbC1kaWFsb2cvYXJ0aWtsLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msb0JBQWE7Q0FBYixhQUFhO0NBQ2IsNEJBQXNCO0NBQXRCLDZCQUFzQjtTQUF0QixzQkFBc0I7Q0FDdEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msb0JBQWE7Q0FBYixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsbUJBQVk7U0FBWixZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RpYWxvZ3MvYXJ0aWtsLWRpYWxvZy9hcnRpa2wtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gbWluLXdpZHRoOiA0NTBweDtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuIGZvbnQtc2l6ZTogMTZweDtcclxuIGZsZXgtZ3JvdzogMTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/dialogs/artikl-dialog/artikl-dialog.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dialogs/artikl-dialog/artikl-dialog.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3 mat-dialog-title *ngIf=\"flag == 1\">Dodavanje artikla</h3>\r\n  <h3 mat-dialog-title *ngIf=\"flag == 2\">Modifikacija artikla: {{data.naziv}}</h3>\r\n  <h3 mat-dialog-title *ngIf=\"flag == 3\">Brisanje artikla: {{data.naziv}}</h3>\r\n  <form class=\"mat-dialog-content\" #formControl=\"ngForm\">\r\n    <div class=\"form\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Naziv\" [(ngModel)]=\"data.naziv\" name=\"naziv\" [disabled]=\"flag == 3\" required>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"form\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Proizvodjac\" [(ngModel)]=\"data.proizvodjac\" name=\"proizvodjac\" [disabled]=\"flag == 3\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <button mat-button *ngIf=\"flag == 1\" [type]=\"submit\" [mat-dialog-close]=\"1\" (click)=\"add()\" [disabled]=\"!formControl.valid\">Sacuvaj</button>\r\n      <button mat-button *ngIf=\"flag == 2\" [type]=\"submit\" [mat-dialog-close]=\"1\" (click)=\"update()\" [disabled]=\"!formControl.valid\">Sacuvaj</button>\r\n      <button mat-button *ngIf=\"flag == 3\" [type]=\"submit\" [mat-dialog-close]=\"1\" (click)=\"delete()\">Obriši</button>\r\n      <button mat-button (click)=\"cancel()\">Poništi</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dialogs/artikl-dialog/artikl-dialog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/dialogs/artikl-dialog/artikl-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ArtiklDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtiklDialogComponent", function() { return ArtiklDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_artikl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/artikl */ "./src/app/models/artikl.ts");
/* harmony import */ var _services_artikl_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/artikl.service */ "./src/app/services/artikl.service.ts");





var ArtiklDialogComponent = /** @class */ (function () {
    function ArtiklDialogComponent(snackBar, dialogRef, data, artiklService) {
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.artiklService = artiklService;
    }
    ArtiklDialogComponent.prototype.ngOnInit = function () {
    };
    ArtiklDialogComponent.prototype.add = function () {
        this.artiklService.addArtikl(this.data);
        this.snackBar.open("Uspešno dodat artikl: " + this.data.naziv, "U redu", {
            duration: 2500
        });
    };
    ArtiklDialogComponent.prototype.update = function () {
        this.artiklService.editArtikl(this.data);
        this.snackBar.open("Uspešno modifikovan artikl: " + this.data.naziv, "U redu", {
            duration: 1500
        });
    };
    ArtiklDialogComponent.prototype.delete = function () {
        console.log("brisem artikl sa id: " + this.data.id);
        this.artiklService.deleteArtikl(this.data.id);
        this.snackBar.open("Uspešno modifikovan artikl: " + this.data.naziv, "U redu", {
            duration: 1500
        });
    };
    ArtiklDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
        this.snackBar.open("Odustali ste", "U redu");
    };
    ArtiklDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artikl-dialog',
            template: __webpack_require__(/*! ./artikl-dialog.component.html */ "./src/app/components/dialogs/artikl-dialog/artikl-dialog.component.html"),
            styles: [__webpack_require__(/*! ./artikl-dialog.component.css */ "./src/app/components/dialogs/artikl-dialog/artikl-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _models_artikl__WEBPACK_IMPORTED_MODULE_3__["Artikl"],
            _services_artikl_service__WEBPACK_IMPORTED_MODULE_4__["ArtiklService"]])
    ], ArtiklDialogComponent);
    return ArtiklDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/dialogs/dobavljac-dialog/dobavljac-dialog.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/dialogs/dobavljac-dialog/dobavljac-dialog.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    min-width: 450px;\r\n}\r\n\r\n.form {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 16px;\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2dzL2RvYmF2bGphYy1kaWFsb2cvZG9iYXZsamFjLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFZO1lBQVosWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9ncy9kb2JhdmxqYWMtZGlhbG9nL2RvYmF2bGphYy1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDQ1MHB4O1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/dialogs/dobavljac-dialog/dobavljac-dialog.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dialogs/dobavljac-dialog/dobavljac-dialog.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3 mat-dialog-title *ngIf=\"flag == 1\">Dodavanje dobavljača</h3>\r\n  <h3 mat-dialog-title *ngIf=\"flag == 2\">Modifikacija dobavljača</h3>\r\n  <h3 mat-dialog-title *ngIf=\"flag == 3\">Brisanje dobavljača</h3>\r\n  <form class=\"mat-dialog-content\" #formControl=\"ngForm\">\r\n    <div class=\"form\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Adresa\" [(ngModel)]=\"data.adresa\" name=\"adresa\" [disabled]=\"flag==3\" required>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"form\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Naziv\" [(ngModel)]=\"data.naziv\" name=\"naziv\" [disabled]=\"flag==3\" required>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"form\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Kontakt\" [(ngModel)]=\"data.kontakt\" name=\"kontakt\" [disabled]=\"flag==3\" required>\r\n      </mat-form-field>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <button mat-button *ngIf=\"flag==1\" [type]=\"submit\" [mat-dialog-close]=\"1\" (click)=\"add()\" [disabled]=\"!formControl.valid\">\r\n        Sačuvaj\r\n      </button>\r\n      <button mat-button *ngIf=\"flag==2\" [type]=\"submit\" [mat-dialog-close]=\"1\" (click)=\"update()\" [disabled]=\"!formControl.valid\">\r\n        Sačuvaj\r\n      </button>\r\n      <button mat-button *ngIf=\"flag==3\" [type]=\"submit\" [mat-dialog-close]=\"1\" (click)=\"delete()\">\r\n        Obriši\r\n      </button>\r\n      <button mat-button (click)=\"cancel()\">Poništi</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dialogs/dobavljac-dialog/dobavljac-dialog.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dialogs/dobavljac-dialog/dobavljac-dialog.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DobavljacDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DobavljacDialogComponent", function() { return DobavljacDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dobavljac_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/dobavljac.service */ "./src/app/services/dobavljac.service.ts");




var DobavljacDialogComponent = /** @class */ (function () {
    function DobavljacDialogComponent(snackBar, dialogRef, data, dobavljacService) {
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dobavljacService = dobavljacService;
    }
    DobavljacDialogComponent.prototype.ngOnInit = function () {
    };
    DobavljacDialogComponent.prototype.add = function () {
        this.data.id = -1;
        this.dobavljacService.addDobavljac(this.data);
        this.snackBar.open("Uspešno dodat dobavljač: " + this.data.naziv, "U redu", { duration: 2500 });
    };
    DobavljacDialogComponent.prototype.update = function () {
        this.dobavljacService.updateDobavljac(this.data);
        this.snackBar.open("Uspešno modifikovan dobavljač: " + this.data.id, "U redu", { duration: 2500 });
    };
    DobavljacDialogComponent.prototype.delete = function () {
        this.dobavljacService.deleteDobavljac(this.data.id);
        this.snackBar.open("Uspešno obrisan dobavljač: " + this.data.id, "U redu", { duration: 2500 });
    };
    DobavljacDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
        this.snackBar.open("Odustali ste", "U redu", { duration: 1000 });
    };
    DobavljacDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dobavljac-dialog',
            template: __webpack_require__(/*! ./dobavljac-dialog.component.html */ "./src/app/components/dialogs/dobavljac-dialog/dobavljac-dialog.component.html"),
            styles: [__webpack_require__(/*! ./dobavljac-dialog.component.css */ "./src/app/components/dialogs/dobavljac-dialog/dobavljac-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_dobavljac_service__WEBPACK_IMPORTED_MODULE_3__["DobavljacService"]])
    ], DobavljacDialogComponent);
    return DobavljacDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/dialogs/porudzbina-dialog/porudzbina-dialog.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/dialogs/porudzbina-dialog/porudzbina-dialog.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    min-width: 450px;\r\n   }\r\n   \r\n   .form {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    padding-top: 6px;\r\n    width: 100% ;\r\n   }\r\n   \r\n   .mat-form-field {\r\n    font-size: 16px;\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1;\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2dzL3BvcnVkemJpbmEtZGlhbG9nL3BvcnVkemJpbmEtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixnQkFBZ0I7R0FDakI7O0dBRUE7SUFDQyxvQkFBYTtJQUFiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtHQUNiOztHQUVBO0lBQ0MsZUFBZTtJQUNmLG1CQUFZO1lBQVosWUFBWTtHQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2dzL3BvcnVkemJpbmEtZGlhbG9nL3BvcnVkemJpbmEtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgfVxyXG4gICBcclxuICAgLmZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICB3aWR0aDogMTAwJSA7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/dialogs/porudzbina-dialog/porudzbina-dialog.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dialogs/porudzbina-dialog/porudzbina-dialog.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3 mat-dialog-title *ngIf=\"flag == 1\">Dodavanje porudžbine</h3>\r\n  <h3 mat-dialog-title *ngIf=\"flag == 2\">Modifikacija porudžbine: {{data.id}}</h3>\r\n  <h3 mat-dialog-title *ngIf=\"flag == 3\">Brisanje porudžbine: {{data.id}}</h3>\r\n \r\n  <form class=\"mat-dialog-content\"  #formControl=\"ngForm\">\r\n    <div class=\"form\">\r\n      <mat-form-field>\r\n        <input matInput [matDatepicker]=\"datumKreiranja\" placeholder=\"Datum kreiranja\" [(ngModel)]=\"data.datum\" name=\"datum\" [disabled]=\"flag == 3\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"datumKreiranja\"></mat-datepicker-toggle>\r\n        <mat-datepicker #datumKreiranja></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n \r\n    <div class=\"form\">\r\n      <mat-form-field>\r\n        <input matInput [matDatepicker]=\"datumIsporuke\" placeholder=\"Datum isporuke\" [(ngModel)]=\"data.isporuceno\" name=\"isporuceno\"\r\n          [disabled]=\"flag == 3\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"datumIsporuke\"></mat-datepicker-toggle>\r\n        <mat-datepicker #datumIsporuke></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n \r\n    <div class=\"form\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input type=\"tel\" matInput placeholder=\"Iznos\" [(ngModel)]=\"data.iznos\" name=\"iznos\" [disabled]=\"flag == 3\">\r\n        <span matSuffix>RSD</span>\r\n      </mat-form-field>\r\n    </div>\r\n \r\n    <div class=\"form\">\r\n      <mat-checkbox align=\"End\" [(ngModel)]=\"data.placeno\" name=\"placeno\" [disabled]=\"flag == 3\">Plaćeno</mat-checkbox>\r\n    </div>\r\n \r\n    <div class=\"form\">\r\n      <mat-form-field>\r\n        <mat-select [(ngModel)]=\"data.dobavljacBean\" placeholder=\"Dobavljač\" name=\"dobavljac\" [compareWith]=\"compareTo\" [disabled]=\"flag == 3\">\r\n          <mat-option *ngFor=\"let dobavljac of dobavljaci\" [value]=\"dobavljac\">\r\n            {{ dobavljac.naziv }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n \r\n    <div mat-dialog-actions>\r\n      <button mat-button *ngIf=\"flag == 1\"  [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"add()\">Sačuvaj</button>\r\n      <button mat-button *ngIf=\"flag == 2\"  [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"update()\">Sačuvaj</button>\r\n      <button mat-button *ngIf=\"flag == 3\"  [mat-dialog-close]=\"1\" (click)=\"delete()\">Obriši</button>\r\n      <button mat-button (click)=\"cancel()\" tabindex=\"-1\">Poništi</button>\r\n    </div>\r\n  </form>\r\n </div>\r\n"

/***/ }),

/***/ "./src/app/components/dialogs/porudzbina-dialog/porudzbina-dialog.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dialogs/porudzbina-dialog/porudzbina-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PorudzbinaDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorudzbinaDialogComponent", function() { return PorudzbinaDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_porudzbina__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/porudzbina */ "./src/app/models/porudzbina.ts");
/* harmony import */ var _services_porudzbina_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/porudzbina.service */ "./src/app/services/porudzbina.service.ts");
/* harmony import */ var _services_dobavljac_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/dobavljac.service */ "./src/app/services/dobavljac.service.ts");







var PorudzbinaDialogComponent = /** @class */ (function () {
    function PorudzbinaDialogComponent(snackBar, dialogRef, data, porudzbinaService, dobavljacService) {
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.porudzbinaService = porudzbinaService;
        this.dobavljacService = dobavljacService;
    }
    PorudzbinaDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dobavljacService.getAllDobavljac().subscribe(function (dobavljaci) {
            return _this.dobavljaci = dobavljaci;
        });
    };
    PorudzbinaDialogComponent.prototype.compareTo = function (a, b) {
        return a.id == b.id;
    };
    PorudzbinaDialogComponent.prototype.add = function () {
        this.data.id = -1;
        this.porudzbinaService.addPorudzbina(this.data);
        this.snackBar.open("Uspešno dodata porudžbina", "U redu", { duration: 2500 });
    };
    PorudzbinaDialogComponent.prototype.update = function () {
        this.porudzbinaService.updatePorudzbina(this.data);
        this.snackBar.open("Uspešno modifikovana porudžbina", "U redu", { duration: 2500 });
    };
    PorudzbinaDialogComponent.prototype.delete = function () {
        this.porudzbinaService.deletePorudzbina(this.data.id);
        this.snackBar.open("Uspešno obrisana porudžbina", "U redu", { duration: 2000 });
    };
    PorudzbinaDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
        this.snackBar.open("Odustali ste", "U redu", { duration: 1000 });
    };
    PorudzbinaDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-porudzbina-dialog',
            template: __webpack_require__(/*! ./porudzbina-dialog.component.html */ "./src/app/components/dialogs/porudzbina-dialog/porudzbina-dialog.component.html"),
            styles: [__webpack_require__(/*! ./porudzbina-dialog.component.css */ "./src/app/components/dialogs/porudzbina-dialog/porudzbina-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _models_porudzbina__WEBPACK_IMPORTED_MODULE_3__["Porudzbina"],
            _services_porudzbina_service__WEBPACK_IMPORTED_MODULE_4__["PorudzbinaService"],
            _services_dobavljac_service__WEBPACK_IMPORTED_MODULE_5__["DobavljacService"]])
    ], PorudzbinaDialogComponent);
    return PorudzbinaDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/dialogs/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/dialogs/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    min-width: 450px;\r\n   }\r\n   \r\n   .container > * {\r\n    width: 100%;\r\n   }\r\n   \r\n   .form {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    padding-top: 6px;\r\n   }\r\n   \r\n   .mat-form-field {\r\n    font-size: 16px;\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1;\r\n   }\r\n   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2dzL3N0YXZrYS1wb3J1ZHpiaW5lLWRpYWxvZy9zdGF2a2EtcG9ydWR6YmluZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtHQUNqQjs7R0FFQTtJQUNDLFdBQVc7R0FDWjs7R0FFQTtJQUNDLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGdCQUFnQjtHQUNqQjs7R0FFQTtJQUNDLGVBQWU7SUFDZixtQkFBWTtZQUFaLFlBQVk7R0FDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9ncy9zdGF2a2EtcG9ydWR6YmluZS1kaWFsb2cvc3RhdmthLXBvcnVkemJpbmUtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgfVxyXG4gICBcclxuICAgLmNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICB9XHJcbiAgICJdfQ== */"

/***/ }),

/***/ "./src/app/components/dialogs/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/dialogs/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3 mat-dialog-title *ngIf=\"flag == 1\">Dodavanje stavke porudžbine</h3>\r\n  <h3 mat-dialog-title *ngIf=\"flag == 2\">Modifikacija stavke porudžbine: {{data.id}}</h3>\r\n  <h3 mat-dialog-title *ngIf=\"flag == 3\">Brisanje stavke porudžbine: {{data.id}}</h3>\r\n \r\n  <form class=\"mat-dialog-content\"  #formControl=\"ngForm\">\r\n \r\n    <div class=\"form\">\r\n      <mat-form-field>\r\n        <mat-select [(ngModel)]=\"data.artiklBean\" placeholder=\"Artikl\" name=\"artikl\" [compareWith]=\"compareTo\" [disabled]=\"flag == 3\">\r\n          <mat-option *ngFor=\"let artikl of artikli\" [value]=\"artikl\">\r\n            {{ artikl.naziv }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n \r\n    <div class=\"form\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Količina\" [(ngModel)]=\"data.kolicina\" name=\"kolicina\" [disabled]=\"flag == 3\">\r\n      </mat-form-field>\r\n    </div>\r\n \r\n    <div class=\"form\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Jedinica mere\" [(ngModel)]=\"data.jedinicaMere\" name=\"jedinicaMere\" [disabled]=\"flag == 3\">\r\n      </mat-form-field>\r\n    </div>\r\n \r\n    <div class=\"form\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Cena\" [(ngModel)]=\"data.cena\" name=\"cena\" [disabled]=\"flag == 3\">\r\n      </mat-form-field>\r\n    </div>\r\n \r\n    <div mat-dialog-actions>\r\n      <button mat-button *ngIf=\"flag == 1\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"add()\">Sačuvaj</button>\r\n      <button mat-button *ngIf=\"flag == 2\"  [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"update()\">Sačuvaj</button>\r\n      <button mat-button *ngIf=\"flag == 3\"  [mat-dialog-close]=\"1\" (click)=\"delete()\">Obriši</button>\r\n      <button mat-button (click)=\"cancel()\" tabindex=\"-1\">Poništi</button>\r\n    </div>\r\n  </form>\r\n </div>\r\n "

/***/ }),

/***/ "./src/app/components/dialogs/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/dialogs/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: StavkaPorudzbineDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StavkaPorudzbineDialogComponent", function() { return StavkaPorudzbineDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_artikl_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/artikl.service */ "./src/app/services/artikl.service.ts");
/* harmony import */ var _models_stavka_porudzbine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/stavka-porudzbine */ "./src/app/models/stavka-porudzbine.ts");
/* harmony import */ var _services_stavka_porudzbine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/stavka-porudzbine.service */ "./src/app/services/stavka-porudzbine.service.ts");







var StavkaPorudzbineDialogComponent = /** @class */ (function () {
    function StavkaPorudzbineDialogComponent(snackBar, dialogRef, data, stavkaPorudzbineService, artiklService) {
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.stavkaPorudzbineService = stavkaPorudzbineService;
        this.artiklService = artiklService;
    }
    StavkaPorudzbineDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.artiklService.getAllArtikli().subscribe(function (artikli) {
            return _this.artikli = artikli;
        });
    };
    StavkaPorudzbineDialogComponent.prototype.add = function () {
        this.data.id = -1;
        this.stavkaPorudzbineService.addStavkaPorudzbine(this.data);
        this.snackBar.open("Uspešno dodata stavka porudžbine", "U redu", { duration: 2500 });
    };
    StavkaPorudzbineDialogComponent.prototype.update = function () {
        this.stavkaPorudzbineService.updateStavkaPorudzbine(this.data);
        this.snackBar.open("Uspešno modifikovana stavka porudžbine", "U redu", { duration: 2500 });
    };
    StavkaPorudzbineDialogComponent.prototype.delete = function () {
        this.stavkaPorudzbineService.deleteStavkaPorudzbine(this.data.id);
        this.snackBar.open("Uspešno obrisana stavka porudžbine", "U redu", { duration: 2000 });
    };
    StavkaPorudzbineDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
        this.snackBar.open("Odustali ste", "U redu", { duration: 1000 });
    };
    StavkaPorudzbineDialogComponent.prototype.compareTo = function (a, b) {
        return a.id == b.id;
    };
    StavkaPorudzbineDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stavka-porudzbine-dialog',
            template: __webpack_require__(/*! ./stavka-porudzbine-dialog.component.html */ "./src/app/components/dialogs/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component.html"),
            styles: [__webpack_require__(/*! ./stavka-porudzbine-dialog.component.css */ "./src/app/components/dialogs/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _models_stavka_porudzbine__WEBPACK_IMPORTED_MODULE_4__["StavkaPorudzbine"],
            _services_stavka_porudzbine_service__WEBPACK_IMPORTED_MODULE_5__["StavkaPorudzbineService"],
            _services_artikl_service__WEBPACK_IMPORTED_MODULE_3__["ArtiklService"]])
    ], StavkaPorudzbineDialogComponent);
    return StavkaPorudzbineDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/dobavljac/dobavljac.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dobavljac/dobavljac.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  ul {\r\n    color: black;\r\n      list-style: none;\r\n      margin: 5% auto;\r\n      width: 100%;\r\n      padding: 0;\r\n  }\r\n\r\n  .list li {\r\n    padding: 25px;\r\n    width: auto;\r\n    background: whitesmoke;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n    text-align: left;\r\n    font-size: 32px;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .container {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n              flex-direction: column;\r\n  }\r\n\r\n  .mat-form-field {\r\n      font-size: 14px;\r\n      -webkit-box-flex: 1;\r\n              flex-grow: 1;\r\n      margin-top: 8px;\r\n  }\r\n\r\n  .no-result {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      -webkit-box-pack: center;\r\n              justify-content: center;\r\n      padding: 14px;\r\n      font-size: 14px;\r\n      font-style:  italic;\r\n  }\r\n\r\n  .mat-cell:nth-child(1),\r\n  .mat-header-cell:nth-child(1){\r\n      -webkit-box-flex: 0;\r\n              flex: 0 0 5%;\r\n  }\r\n\r\n  .mat-cell:nth-child(2),\r\n  .mat-header-cell:nth-child(2){\r\n      -webkit-box-flex: 0;\r\n              flex: 0 0 40%;\r\n  }\r\n\r\n  .mat-cell:nth-child(3),\r\n  .mat-header-cell:nth-child(3){\r\n      -webkit-box-flex: 0;\r\n              flex: 0 0 20%;\r\n  }\r\n\r\n  .mat-cell:nth-child(4),\r\n  .mat-header-cell:nth-child(4){\r\n      -webkit-box-flex: 0;\r\n              flex: 0 0 15%;\r\n  }\r\n\r\n  .title-center {\r\n      margin: 0 auto;\r\n  }\r\n\r\n  /*Drag and\r\n   drop list*/\r\n\r\n  .example-list {\r\n      width: 100%;\r\n      min-height: 60px;\r\n      display: block;\r\n      background: #3F51B5;\r\n      border-radius: 4px;\r\n      overflow: hidden;\r\n    }\r\n\r\n  .example-list span, .example-card span {\r\n    width: 20%;\r\n    display: inline-block;\r\n    float: left;\r\n    }\r\n\r\n  @media only screen and (max-width: 1100px) {\r\n      .example-list span {\r\n        float: none;\r\n      }\r\n    }\r\n\r\n  .cdk-drag-preview {\r\n      box-sizing: border-box;\r\n      border-radius: 4px;\r\n      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n                  0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n                  0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n    }\r\n\r\n  .cdk-drag-placeholder {\r\n      opacity: 0;\r\n    }\r\n\r\n  .cdk-drag-animating {\r\n      -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n      transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    }\r\n\r\n  .example-box:last-child {\r\n      border: none;\r\n    }\r\n\r\n  .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\r\n      -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n      transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2JhdmxqYWMvZG9iYXZsamFjLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxZQUFZO01BQ1YsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixXQUFXO01BQ1gsVUFBVTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtNQUNJLG9CQUFhO01BQWIsYUFBYTtNQUNiLDRCQUFzQjtNQUF0Qiw2QkFBc0I7Y0FBdEIsc0JBQXNCO0VBQzFCOztFQUVBO01BQ0ksZUFBZTtNQUNmLG1CQUFZO2NBQVosWUFBWTtNQUNaLGVBQWU7RUFDbkI7O0VBRUE7TUFDSSxvQkFBYTtNQUFiLGFBQWE7TUFDYix3QkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLGFBQWE7TUFDYixlQUFlO01BQ2YsbUJBQW1CO0VBQ3ZCOztFQUVBOztNQUVJLG1CQUFZO2NBQVosWUFBWTtFQUNoQjs7RUFFQTs7TUFFSSxtQkFBYTtjQUFiLGFBQWE7RUFDakI7O0VBRUE7O01BRUksbUJBQWE7Y0FBYixhQUFhO0VBQ2pCOztFQUVBOztNQUVJLG1CQUFhO2NBQWIsYUFBYTtFQUNqQjs7RUFFQTtNQUNJLGNBQWM7RUFDbEI7O0VBRUE7YUFDVzs7RUFFVjtNQUNHLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCOztFQUVEO0lBQ0MsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1g7O0VBRUE7TUFDRTtRQUNFLFdBQVc7TUFDYjtJQUNGOztFQUVBO01BQ0Usc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQjs7b0RBRThDO0lBQ2hEOztFQUVBO01BQ0UsVUFBVTtJQUNaOztFQUVBO01BQ0Usc0VBQXNEO01BQXRELDhEQUFzRDtNQUF0RCxzREFBc0Q7TUFBdEQsMEdBQXNEO0lBQ3hEOztFQUVBO01BQ0UsWUFBWTtJQUNkOztFQUVBO01BQ0Usc0VBQXNEO01BQXRELDhEQUFzRDtNQUF0RCxzREFBc0Q7TUFBdEQsMEdBQXNEO0lBQ3hEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kb2JhdmxqYWMvZG9iYXZsamFjLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIHVsIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC5saXN0IGxpIHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICB9XHJcblxyXG4gIC5uby1yZXN1bHQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMTRweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXN0eWxlOiAgaXRhbGljO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jZWxsOm50aC1jaGlsZCgxKSxcclxuICAubWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKXtcclxuICAgICAgZmxleDogMCAwIDUlO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jZWxsOm50aC1jaGlsZCgyKSxcclxuICAubWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKXtcclxuICAgICAgZmxleDogMCAwIDQwJTtcclxuICB9XHJcblxyXG4gIC5tYXQtY2VsbDpudGgtY2hpbGQoMyksXHJcbiAgLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMyl7XHJcbiAgICAgIGZsZXg6IDAgMCAyMCU7XHJcbiAgfVxyXG5cclxuICAubWF0LWNlbGw6bnRoLWNoaWxkKDQpLFxyXG4gIC5tYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDQpe1xyXG4gICAgICBmbGV4OiAwIDAgMTUlO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlLWNlbnRlciB7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLypEcmFnIGFuZFxyXG4gICBkcm9wIGxpc3QqL1xyXG5cclxuICAgLmV4YW1wbGUtbGlzdCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYmFja2dyb3VuZDogIzNGNTFCNTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgLmV4YW1wbGUtbGlzdCBzcGFuLCAuZXhhbXBsZS1jYXJkIHNwYW4ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgIC5leGFtcGxlLWxpc3Qgc3BhbiB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAuZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gICAgfVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/dobavljac/dobavljac.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dobavljac/dobavljac.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- novo -->\r\n\r\n<mat-toolbar color=\"primary\">\r\n    <span class=\"title-center\">Dobavljač</span>\r\n</mat-toolbar>\r\n<div>\r\n  <mat-card style=\"min-height: 30px; margin-bottom: -35pt;\" class=\"example-card\" >\r\n      <mat-card-content style = \"margin-left: 30pt;\">\r\n          <span>ID</span>\r\n          <span>Adresa</span>\r\n          <span>Naziv</span>\r\n          <span>Kontakt</span>\r\n          <button mat-icon-button color=\"primary\" (click)=\"openDialog(1, null, null, null, null)\">\r\n              <mat-icon>add</mat-icon>\r\n          </button>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n<ul >\r\n  <div cdkDropList class=\"example-list list\" (cdkDropListDropped)=\"drop($event)\" >\r\n    <ng-container *ngFor=\"let row of dobavljaci\">\r\n\r\n          <mat-card style=\"min-height: 30px;\" class=\"example-card\" cdkDrag>\r\n            <mat-card-content >\r\n                <span>{{row.id}}</span>\r\n                <span>{{row.adresa}}</span>\r\n                <span>{{row.naziv}}</span>\r\n                <span>{{row.kontakt}}</span>\r\n                <span>\r\n                    <button mat-icon-button color=\"primary\" (click)=\"openDialog(2, row.id, row.adresa, row.naziv, row.kontakt)\">\r\n                        <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"primary\" (click)=\"openDialog(3, row.id, row.adresa, row.naziv, row.kontakt)\">\r\n                        <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n                    </button>\r\n                </span>\r\n            </mat-card-content>\r\n\r\n          </mat-card>\r\n\r\n      </ng-container>\r\n    </div>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/dobavljac/dobavljac.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dobavljac/dobavljac.component.ts ***!
  \*************************************************************/
/*! exports provided: DobavljacComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DobavljacComponent", function() { return DobavljacComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dobavljac_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dobavljac.service */ "./src/app/services/dobavljac.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_dobavljac_dialog_dobavljac_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialogs/dobavljac-dialog/dobavljac-dialog.component */ "./src/app/components/dialogs/dobavljac-dialog/dobavljac-dialog.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");






var DobavljacComponent = /** @class */ (function () {
    function DobavljacComponent(dobavljacService, dialog) {
        this.dobavljacService = dobavljacService;
        this.dialog = dialog;
        // displayedColumns = ['id', 'adresa', 'naziv', 'kontakt', 'actions'];
        // dataSource: MatTableDataSource<Dobavljac>;
        this.dobavljaci = [];
    }
    DobavljacComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    DobavljacComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["moveItemInArray"])(this.dobavljaci, event.previousIndex, event.currentIndex);
        console.log("Previous: " + event.previousIndex + " Curr: " + event.currentIndex);
    };
    DobavljacComponent.prototype.loadData = function () {
        var _this = this;
        var artiklsObservable = this.dobavljacService.getAllDobavljac();
        artiklsObservable.subscribe(function (data) {
            _this.dobavljaci = data;
        });
    };
    DobavljacComponent.prototype.openDialog = function (flag, id, adresa, naziv, kontakt) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_dobavljac_dialog_dobavljac_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DobavljacDialogComponent"], { data: { id: id, adresa: adresa, naziv: naziv, kontakt: kontakt } });
        dialogRef.componentInstance.flag = flag;
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 1)
                _this.loadData();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], DobavljacComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], DobavljacComponent.prototype, "sort", void 0);
    DobavljacComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dobavljac',
            template: __webpack_require__(/*! ./dobavljac.component.html */ "./src/app/components/dobavljac/dobavljac.component.html"),
            styles: [__webpack_require__(/*! ./dobavljac.component.css */ "./src/app/components/dobavljac/dobavljac.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dobavljac_service__WEBPACK_IMPORTED_MODULE_2__["DobavljacService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], DobavljacComponent);
    return DobavljacComponent;
}());



/***/ }),

/***/ "./src/app/components/porudzbina/porudzbina.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/porudzbina/porudzbina.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n}\r\n\r\n.spacer {\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 auto;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.form {\r\n  background-color: white;\r\n  min-height: 56px;\r\n  max-height: 56px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  padding: 8px 24px 0;\r\n  font-size: 20px;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  border-bottom: 1px solid transparent;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  -webkit-box-flex: 1;\r\n          flex-grow: 1;\r\n  margin-top: 8px;\r\n}\r\n\r\n.title-center {\r\n  margin: 0 auto;\r\n}\r\n\r\n.selectRow{\r\n  background: lightskyblue;\r\n}\r\n\r\n.mat-row:hover, .example-selected-row {\r\n  background: #f5f5f5;\r\n}\r\n\r\n.mat-row:active, .mat-row.example-selected-row {\r\n  background: #eaeaea;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J1ZHpiaW5hL3BvcnVkemJpbmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQWM7VUFBZCxjQUFjO0VBQ2QseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBWTtVQUFaLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9ydWR6YmluYS9wb3J1ZHpiaW5hLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtaW4taGVpZ2h0OiA1NnB4O1xyXG4gIG1heC1oZWlnaHQ6IDU2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDhweCAyNHB4IDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi50aXRsZS1jZW50ZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc2VsZWN0Um93e1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0c2t5Ymx1ZTtcclxufVxyXG5cclxuLm1hdC1yb3c6aG92ZXIsIC5leGFtcGxlLXNlbGVjdGVkLXJvdyB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG5cclxuLm1hdC1yb3c6YWN0aXZlLCAubWF0LXJvdy5leGFtcGxlLXNlbGVjdGVkLXJvdyB7XHJcbiAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/porudzbina/porudzbina.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/porudzbina/porudzbina.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span class=\"title-center\">Porudžbina</span>\r\n</mat-toolbar>\r\n<div class=\"container mat-elevation-z8\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n  <mat-table (click)=\"(this.trenutnoSelektovaniId === this.prethSelektovaniId) && toggle()\" #table\r\n    [dataSource]=\"dataSource\" class=\"mat-cell\" matSort>\r\n    <ng-container matColumnDef=\"id\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.id}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"datum\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Datum kreiranja</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.datum | date : \"dd.MM.yyyy.\"}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"isporuceno\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Datum isporuke</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.isporuceno | date : \"dd.MM.yyyy.\"}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"iznos\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Iznos</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.iznos}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"placeno\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Plaćeno</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.placeno == true ? 'green':'red' \"> {{row.placeno?'Da':'Ne'}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"dobavljac\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Dobavljač</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.dobavljacBean.naziv}}</mat-cell>\r\n    </ng-container>\r\n    <!-- actions -->\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"openDialog(1)\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"primary\"\r\n          (click)=\"openDialog(2, row.id, row.datum, row.isporuceno, row.placeno, row.iznos, row.dobavljacBean)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button color=\"primary\"\r\n          (click)=\"openDialog(3, row.id, row.datum, row.isporuceno, row.placeno, row.iznos, row.dobavljacBean)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row style=\"cursor: pointer\" *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectRow(row)\"\r\n      [ngClass]=\"{'selectRow': selektovanaPorudzbina != null && selektovanaPorudzbina.id == row.id}\"></mat-row>\r\n  </mat-table>\r\n</div>\r\n\r\n<div class=\"container mat-elevation-z8\" id=\"stavka\" [@popOverState]=\"stateName\">\r\n  <app-stavka-porudzbine *ngIf=\"selektovanaPorudzbina\" [selektovanaPorudzbina]=\"selektovanaPorudzbina\">\r\n  </app-stavka-porudzbine>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/porudzbina/porudzbina.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/porudzbina/porudzbina.component.ts ***!
  \***************************************************************/
/*! exports provided: PorudzbinaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorudzbinaComponent", function() { return PorudzbinaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_porudzbina_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/porudzbina.service */ "./src/app/services/porudzbina.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_porudzbina_dialog_porudzbina_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialogs/porudzbina-dialog/porudzbina-dialog.component */ "./src/app/components/dialogs/porudzbina-dialog/porudzbina-dialog.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");






var PorudzbinaComponent = /** @class */ (function () {
    function PorudzbinaComponent(porudzbinaService, dialog) {
        this.porudzbinaService = porudzbinaService;
        this.dialog = dialog;
        this.show = false;
        this.prethSelektovaniId = -1;
        this.trenutnoSelektovaniId = -1;
        this.displayedColumns = ['id', 'datum', 'isporuceno', 'iznos', 'placeno', 'dobavljac', 'actions'];
    }
    PorudzbinaComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    Object.defineProperty(PorudzbinaComponent.prototype, "stateName", {
        get: function () {
            return this.show ? 'show' : 'hide';
        },
        enumerable: true,
        configurable: true
    });
    PorudzbinaComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    PorudzbinaComponent.prototype.loadData = function () {
        var _this = this;
        this.porudzbinaService.getAllPorudzbina().subscribe(function (data) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            //pretraga po nazivu ugnježdenog objekta
            _this.dataSource.filterPredicate = function (data, filter) {
                var accumulator = function (currentTerm, key) {
                    return key === 'dobavljacBean' ? currentTerm + data.dobavljacBean.naziv : currentTerm + data[key];
                };
                var dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
                var transformedFilter = filter.trim().toLowerCase();
                return dataStr.indexOf(transformedFilter) !== -1;
            };
            //sortiranje po nazivu ugnježdenog objekta
            _this.dataSource.sortingDataAccessor = function (data, property) {
                switch (property) {
                    case 'dobavljacBean': return data.dobavljacBean.naziv.toLocaleLowerCase();
                    default: return data[property];
                }
            };
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    PorudzbinaComponent.prototype.openDialog = function (flag, id, datum, isporuceno, placeno, iznos, dobavljac) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_porudzbina_dialog_porudzbina_dialog_component__WEBPACK_IMPORTED_MODULE_4__["PorudzbinaDialogComponent"], { data: { id: id, datum: datum, isporuceno: isporuceno, placeno: placeno, iznos: iznos, dobavljacBean: dobavljac } });
        dialogRef.componentInstance.flag = flag;
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                _this.loadData();
            }
        });
    };
    PorudzbinaComponent.prototype.selectRow = function (row) {
        this.selektovanaPorudzbina = row;
        this.prethSelektovaniId = this.trenutnoSelektovaniId;
        this.trenutnoSelektovaniId = row.id;
        if (this.prethSelektovaniId === -1 || document.getElementById('stavka').style.opacity === '0') {
            if (this.prethSelektovaniId === this.trenutnoSelektovaniId) {
                this.toggle();
            }
            this.toggle();
        }
    };
    PorudzbinaComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLocaleLowerCase();
        this.dataSource.filter = filterValue;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], PorudzbinaComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], PorudzbinaComponent.prototype, "sort", void 0);
    PorudzbinaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-porudzbina',
            template: __webpack_require__(/*! ./porudzbina.component.html */ "./src/app/components/porudzbina/porudzbina.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('popOverState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('600ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('1000ms ease-in'))
                ])
            ],
            styles: [__webpack_require__(/*! ./porudzbina.component.css */ "./src/app/components/porudzbina/porudzbina.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_porudzbina_service__WEBPACK_IMPORTED_MODULE_2__["PorudzbinaService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], PorudzbinaComponent);
    return PorudzbinaComponent;
}());



/***/ }),

/***/ "./src/app/components/primer-components/automobil/automobil.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/primer-components/automobil/automobil.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpbWVyLWNvbXBvbmVudHMvYXV0b21vYmlsL2F1dG9tb2JpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/primer-components/automobil/automobil.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/primer-components/automobil/automobil.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  automobil works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/primer-components/automobil/automobil.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/primer-components/automobil/automobil.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AutomobilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomobilComponent", function() { return AutomobilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AutomobilComponent = /** @class */ (function () {
    function AutomobilComponent() {
    }
    AutomobilComponent.prototype.ngOnInit = function () {
    };
    AutomobilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-automobil',
            template: __webpack_require__(/*! ./automobil.component.html */ "./src/app/components/primer-components/automobil/automobil.component.html"),
            styles: [__webpack_require__(/*! ./automobil.component.css */ "./src/app/components/primer-components/automobil/automobil.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AutomobilComponent);
    return AutomobilComponent;
}());



/***/ }),

/***/ "./src/app/components/primer-components/vozilo/vozilo.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/primer-components/vozilo/vozilo.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n    Ja sam komponenta vozilo i imam ugnjezdene komponente!\r\n</h1>\r\n<app-automobil></app-automobil>\r\n<app-automobil></app-automobil>"

/***/ }),

/***/ "./src/app/components/primer-components/vozilo/vozilo.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/primer-components/vozilo/vozilo.component.ts ***!
  \*************************************************************************/
/*! exports provided: VoziloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoziloComponent", function() { return VoziloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VoziloComponent = /** @class */ (function () {
    function VoziloComponent() {
    }
    VoziloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vozilo',
            template: __webpack_require__(/*! ./vozilo.component.html */ "./src/app/components/primer-components/vozilo/vozilo.component.html")
        })
    ], VoziloComponent);
    return VoziloComponent;
}());



/***/ }),

/***/ "./src/app/components/stavka-porudzbine/stavka-porudzbine.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/stavka-porudzbine/stavka-porudzbine.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n   }\r\n   \r\n   /* Toolbar */\r\n   \r\n   .spacer {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n   }\r\n   \r\n   /* Filter */\r\n   \r\n   .form {\r\n    background-color: white;\r\n    min-height: 56px;\r\n    max-height: 56px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    padding: 8px 24px 0;\r\n    font-size: 20px;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    border-bottom: 1px solid transparent;\r\n   }\r\n   \r\n   .mat-form-field {\r\n    font-size: 14px;\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1;\r\n    margin-top: 8px;\r\n   }\r\n   \r\n   /* Mat table */\r\n   \r\n   .no-results {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    padding: 14px;\r\n    font-size: 14px;\r\n    font-style: italic;\r\n   }\r\n   \r\n   .mat-cell:nth-child(7),\r\n   .mat-header-cell:nth-child(7){\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 20%;\r\n   }\r\n   \r\n   .title-center {\r\n    margin: 0 auto;\r\n   }\r\n   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGF2a2EtcG9ydWR6YmluZS9zdGF2a2EtcG9ydWR6YmluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7R0FDdkI7O0dBRUEsWUFBWTs7R0FDWjtJQUNDLG1CQUFjO1lBQWQsY0FBYztJQUNkLHlCQUFtQjtZQUFuQixtQkFBbUI7R0FDcEI7O0dBRUEsV0FBVzs7R0FDWDtJQUNDLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLG9DQUFvQztHQUNyQzs7R0FFQTtJQUNDLGVBQWU7SUFDZixtQkFBWTtZQUFaLFlBQVk7SUFDWixlQUFlO0dBQ2hCOztHQUVBLGNBQWM7O0dBQ2Q7SUFDQyxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0dBQ25COztHQUVBOztJQUVDLG1CQUFhO1lBQWIsYUFBYTtHQUNkOztHQUVBO0lBQ0MsY0FBYztHQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdGF2a2EtcG9ydWR6YmluZS9zdGF2a2EtcG9ydWR6YmluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgfVxyXG4gICBcclxuICAgLyogVG9vbGJhciAqL1xyXG4gICAuc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgfVxyXG4gICBcclxuICAgLyogRmlsdGVyICovXHJcbiAgIC5mb3JtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWluLWhlaWdodDogNTZweDtcclxuICAgIG1heC1oZWlnaHQ6IDU2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweCAyNHB4IDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC8qIE1hdCB0YWJsZSAqL1xyXG4gICAubm8tcmVzdWx0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICB9XHJcbiAgIFxyXG4gICAubWF0LWNlbGw6bnRoLWNoaWxkKDcpLFxyXG4gICAubWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg3KXtcclxuICAgIGZsZXg6IDAgMCAyMCU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC50aXRsZS1jZW50ZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIH1cclxuICAgIl19 */"

/***/ }),

/***/ "./src/app/components/stavka-porudzbine/stavka-porudzbine.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/stavka-porudzbine/stavka-porudzbine.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbarNew\" color=\"primary\">\r\n  <span class=\"title-center\">Stavka porudžbine</span>\r\n </mat-toolbar>\r\n <div class=\"container mat-elevation-z8\">\r\n    <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n      </mat-form-field>\r\n  <mat-table #table [dataSource]=\"dataSource\" class=\"mat-cell\" matSort>\r\n    <ng-container matColumnDef=\"id\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">{{row.id}}</mat-cell>\r\n    </ng-container>\r\n \r\n    <ng-container matColumnDef=\"artikl\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Artikl</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.artiklBean.naziv}}</mat-cell>\r\n    </ng-container>\r\n \r\n    <ng-container matColumnDef=\"redniBroj\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Redni broj</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.redniBroj}}</mat-cell>\r\n    </ng-container>\r\n \r\n    <ng-container matColumnDef=\"kolicina\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Količina</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.kolicina}}</mat-cell>\r\n    </ng-container>\r\n \r\n    <ng-container matColumnDef=\"jedinicaMere\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Jedinica mere</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.jedinicaMere}}</mat-cell>\r\n    </ng-container>\r\n \r\n    <ng-container matColumnDef=\"cena\" >\r\n      <mat-header-cell *matHeaderCellDef  mat-sort-header>Cena</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.cena}}</mat-cell>\r\n    </ng-container>\r\n \r\n    <ng-container matColumnDef=\"porudzbina\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Porudžbina</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.porudzbinaBean.id}}</mat-cell>\r\n    </ng-container>\r\n    <!-- actions -->\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"openDialog(1)\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n \r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"primary\" (click)=\"openDialog(2, row.id, row.redniBroj,\r\n         row.kolicina, row.jedinicaMere, row.cena, row.porudzbinaBean, row.artiklBean)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n \r\n        <button mat-icon-button color=\"primary\" (click)=\"openDialog(3, row.id, row.redniBroj,\r\n        row.kolicina, row.jedinicaMere, row.cena, row.porudzbinaBean, row.artiklBean)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n \r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row style=\"cursor: default\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n </div>\r\n "

/***/ }),

/***/ "./src/app/components/stavka-porudzbine/stavka-porudzbine.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/stavka-porudzbine/stavka-porudzbine.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StavkaPorudzbineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StavkaPorudzbineComponent", function() { return StavkaPorudzbineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_porudzbina__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/porudzbina */ "./src/app/models/porudzbina.ts");
/* harmony import */ var _services_stavka_porudzbine_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/stavka-porudzbine.service */ "./src/app/services/stavka-porudzbine.service.ts");
/* harmony import */ var _dialogs_stavka_porudzbine_dialog_stavka_porudzbine_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialogs/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component */ "./src/app/components/dialogs/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component.ts");






var StavkaPorudzbineComponent = /** @class */ (function () {
    function StavkaPorudzbineComponent(stavkaPorudzbineService, dialog) {
        this.stavkaPorudzbineService = stavkaPorudzbineService;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'redniBroj', 'kolicina', 'jedinicaMere', 'cena', 'porudzbina', 'artikl', 'actions'];
    }
    StavkaPorudzbineComponent.prototype.ngOnInit = function () {
    };
    StavkaPorudzbineComponent.prototype.ngOnChanges = function () {
        if (this.selektovanaPorudzbina.id) {
            this.loadData();
        }
    };
    StavkaPorudzbineComponent.prototype.loadData = function () {
        var _this = this;
        this.stavkaPorudzbineService.getStavkeZaPorudzbinu(this.selektovanaPorudzbina.id)
            .subscribe(function (data) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            //pretraga po nazivu ugnježdenog objekta
            _this.dataSource.filterPredicate = function (data, filter) {
                var accumulator = function (currentTerm, key) {
                    return key === 'artiklBean' ? currentTerm + data.artiklBean.naziv : currentTerm + data[key];
                };
                var dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
                var transformedFilter = filter.trim().toLowerCase();
                return dataStr.indexOf(transformedFilter) !== -1;
            };
            //sortiranje po nazivu ugnježdenog objekta
            _this.dataSource.sortingDataAccessor = function (data, property) {
                switch (property) {
                    case 'artiklBean': return data.artiklBean.naziv.toLocaleLowerCase();
                    default: return data[property];
                }
            };
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    StavkaPorudzbineComponent.prototype.openDialog = function (flag, id, redniBroj, kolicina, jedinicaMere, cena, porudzbina, artikl) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_stavka_porudzbine_dialog_stavka_porudzbine_dialog_component__WEBPACK_IMPORTED_MODULE_5__["StavkaPorudzbineDialogComponent"], {
            data: {
                i: id, id: id, redniBroj: redniBroj, kolicina: kolicina, jedinicaMere: jedinicaMere,
                cena: cena, porudzbinaBean: porudzbina, artiklBean: artikl
            }
        });
        dialogRef.componentInstance.flag = flag;
        if (flag == 1)
            dialogRef.componentInstance.data.porudzbinaBean = this.selektovanaPorudzbina;
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 1)
                _this.loadData();
        });
    };
    StavkaPorudzbineComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLocaleLowerCase();
        this.dataSource.filter = filterValue;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_porudzbina__WEBPACK_IMPORTED_MODULE_3__["Porudzbina"])
    ], StavkaPorudzbineComponent.prototype, "selektovanaPorudzbina", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], StavkaPorudzbineComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], StavkaPorudzbineComponent.prototype, "sort", void 0);
    StavkaPorudzbineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stavka-porudzbine',
            template: __webpack_require__(/*! ./stavka-porudzbine.component.html */ "./src/app/components/stavka-porudzbine/stavka-porudzbine.component.html"),
            styles: [__webpack_require__(/*! ./stavka-porudzbine.component.css */ "./src/app/components/stavka-porudzbine/stavka-porudzbine.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_stavka_porudzbine_service__WEBPACK_IMPORTED_MODULE_4__["StavkaPorudzbineService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], StavkaPorudzbineComponent);
    return StavkaPorudzbineComponent;
}());



/***/ }),

/***/ "./src/app/models/artikl.ts":
/*!**********************************!*\
  !*** ./src/app/models/artikl.ts ***!
  \**********************************/
/*! exports provided: Artikl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Artikl", function() { return Artikl; });
var Artikl = /** @class */ (function () {
    function Artikl() {
    }
    return Artikl;
}());



/***/ }),

/***/ "./src/app/models/porudzbina.ts":
/*!**************************************!*\
  !*** ./src/app/models/porudzbina.ts ***!
  \**************************************/
/*! exports provided: Porudzbina */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Porudzbina", function() { return Porudzbina; });
var Porudzbina = /** @class */ (function () {
    function Porudzbina() {
    }
    return Porudzbina;
}());



/***/ }),

/***/ "./src/app/models/stavka-porudzbine.ts":
/*!*********************************************!*\
  !*** ./src/app/models/stavka-porudzbine.ts ***!
  \*********************************************/
/*! exports provided: StavkaPorudzbine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StavkaPorudzbine", function() { return StavkaPorudzbine; });
var StavkaPorudzbine = /** @class */ (function () {
    function StavkaPorudzbine() {
    }
    return StavkaPorudzbine;
}());



/***/ }),

/***/ "./src/app/services/artikl.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/artikl.service.ts ***!
  \********************************************/
/*! exports provided: ArtiklService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtiklService", function() { return ArtiklService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ArtiklService = /** @class */ (function () {
    function ArtiklService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'https://rvabackend.herokuapp.com/artikl/';
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    ArtiklService.prototype.getAllArtikli = function () {
        var _this = this;
        this.httpClient.get(this.API_URL).subscribe(function (data) {
            _this.dataChange.next(data);
        });
        return this.dataChange.asObservable();
    };
    ArtiklService.prototype.addArtikl = function (artikl) {
        this.httpClient.post(this.API_URL, artikl).subscribe();
    };
    ArtiklService.prototype.editArtikl = function (artikl) {
        this.httpClient.put(this.API_URL, artikl).subscribe();
    };
    ArtiklService.prototype.deleteArtikl = function (id) {
        this.httpClient.delete(this.API_URL + id).subscribe();
    };
    ArtiklService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ArtiklService);
    return ArtiklService;
}());



/***/ }),

/***/ "./src/app/services/dobavljac.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dobavljac.service.ts ***!
  \***********************************************/
/*! exports provided: DobavljacService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DobavljacService", function() { return DobavljacService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var DobavljacService = /** @class */ (function () {
    function DobavljacService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'https://rvabackend.herokuapp.com/dobavljac/';
        //private readonly API_URL = 'http://localhost:8080/backend/dobavljac/';
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    DobavljacService.prototype.getAllDobavljac = function () {
        var _this = this;
        this.httpClient.get(this.API_URL).subscribe(function (data) {
            _this.dataChange.next(data);
        }, function (error) {
            console.log(error.name + ' ' + error.message);
        });
        return this.dataChange.asObservable();
    };
    DobavljacService.prototype.addDobavljac = function (dobavljac) {
        this.httpClient.post(this.API_URL, dobavljac).subscribe();
    };
    DobavljacService.prototype.updateDobavljac = function (dobavljac) {
        this.httpClient.put(this.API_URL, dobavljac).subscribe();
    };
    DobavljacService.prototype.deleteDobavljac = function (id) {
        this.httpClient.delete(this.API_URL + id).subscribe();
    };
    DobavljacService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DobavljacService);
    return DobavljacService;
}());



/***/ }),

/***/ "./src/app/services/porudzbina.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/porudzbina.service.ts ***!
  \************************************************/
/*! exports provided: PorudzbinaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorudzbinaService", function() { return PorudzbinaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var PorudzbinaService = /** @class */ (function () {
    function PorudzbinaService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'https://rvabackend.herokuapp.com/porudzbina/';
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    PorudzbinaService.prototype.getAllPorudzbina = function () {
        var _this = this;
        this.httpClient.get(this.API_URL).subscribe(function (data) {
            _this.dataChange.next(data);
        }, function (error) {
            console.log(error.name + ' ' + error.message);
        });
        return this.dataChange.asObservable();
    };
    PorudzbinaService.prototype.addPorudzbina = function (porudzbina) {
        this.httpClient.post(this.API_URL, porudzbina).subscribe();
    };
    PorudzbinaService.prototype.updatePorudzbina = function (porudzbina) {
        this.httpClient.put(this.API_URL, porudzbina).subscribe();
    };
    PorudzbinaService.prototype.deletePorudzbina = function (id) {
        this.httpClient.delete(this.API_URL + id).subscribe();
    };
    PorudzbinaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PorudzbinaService);
    return PorudzbinaService;
}());



/***/ }),

/***/ "./src/app/services/stavka-porudzbine.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/stavka-porudzbine.service.ts ***!
  \*******************************************************/
/*! exports provided: StavkaPorudzbineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StavkaPorudzbineService", function() { return StavkaPorudzbineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var StavkaPorudzbineService = /** @class */ (function () {
    function StavkaPorudzbineService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'https://rvabackend.herokuapp.com/stavkaPorudzbine/';
        this.API_URL_BYID = 'https://rvabackend.herokuapp.com/stavkeZaPorudzbinu/';
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    StavkaPorudzbineService.prototype.getStavkeZaPorudzbinu = function (idPorudzbine) {
        var _this = this;
        this.httpClient.get(this.API_URL_BYID + idPorudzbine).subscribe(function (data) {
            _this.dataChange.next(data);
        }, function (error) {
            console.log(error.name + ' ' + error.message);
        });
        return this.dataChange.asObservable();
    };
    StavkaPorudzbineService.prototype.addStavkaPorudzbine = function (stavkaPorudzbine) {
        this.httpClient.post(this.API_URL, stavkaPorudzbine).subscribe();
    };
    StavkaPorudzbineService.prototype.updateStavkaPorudzbine = function (stavkaPorudzbine) {
        this.httpClient.put(this.API_URL, stavkaPorudzbine).subscribe();
    };
    StavkaPorudzbineService.prototype.deleteStavkaPorudzbine = function (id) {
        this.httpClient.delete(this.API_URL + id).subscribe();
    };
    StavkaPorudzbineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], StavkaPorudzbineService);
    return StavkaPorudzbineService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Predmeti\6. semestar\Razvoj viseslojnih aplikacija\Vezbe\Projekat\rva2020\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map