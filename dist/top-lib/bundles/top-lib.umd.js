(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
  typeof define === 'function' && define.amd ? define('top-lib', ['exports', '@angular/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['top-lib'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

  var TopNavbar = /** @class */ (function () {
      function TopNavbar() {
      }
      TopNavbar.prototype.ngOnInit = function () {
      };
      return TopNavbar;
  }());
  TopNavbar.ɵfac = function TopNavbar_Factory(t) { return new (t || TopNavbar)(); };
  TopNavbar.ɵcmp = i0.ɵɵdefineComponent({ type: TopNavbar, selectors: [["lib-top-lib"]], decls: 5, vars: 0, consts: [["href", "/meetings"], ["href", "/users"]], template: function TopNavbar_Template(rf, ctx) {
          if (rf & 1) {
              i0.ɵɵelementStart(0, "a", 0);
              i0.ɵɵtext(1, "Meetings");
              i0.ɵɵelementEnd();
              i0.ɵɵtext(2, "\u00A0\u00A0\u00A0\u00A0");
              i0.ɵɵelementStart(3, "a", 1);
              i0.ɵɵtext(4, "Users");
              i0.ɵɵelementEnd();
          }
      }, encapsulation: 2 });
  /*@__PURE__*/ (function () {
      i0.ɵsetClassMetadata(TopNavbar, [{
              type: i0.Component,
              args: [{
                      selector: 'lib-top-lib',
                      template: "\n            <a href=\"/meetings\">Meetings</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/users\">Users</a>\n  ",
                      styles: []
                  }]
          }], function () { return []; }, null);
  })();

  var TopLibModule = /** @class */ (function () {
      function TopLibModule() {
      }
      return TopLibModule;
  }());
  TopLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: TopLibModule });
  TopLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TopLibModule_Factory(t) { return new (t || TopLibModule)(); }, imports: [[]] });
  (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TopLibModule, { declarations: [TopNavbar], exports: [TopNavbar] }); })();
  /*@__PURE__*/ (function () {
      i0.ɵsetClassMetadata(TopLibModule, [{
              type: i0.NgModule,
              args: [{
                      declarations: [TopNavbar],
                      imports: [],
                      exports: [TopNavbar]
                  }]
          }], null, null);
  })();

  /*
   * Public API Surface of top-lib
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.TopLibModule = TopLibModule;
  exports.TopNavbar = TopNavbar;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=top-lib.umd.js.map
