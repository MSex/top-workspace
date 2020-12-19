import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class TopNavbar {
    constructor() { }
    ngOnInit() {
    }
}
TopNavbar.ɵfac = function TopNavbar_Factory(t) { return new (t || TopNavbar)(); };
TopNavbar.ɵcmp = ɵɵdefineComponent({ type: TopNavbar, selectors: [["lib-top-lib"]], decls: 5, vars: 0, consts: [["href", "/meetings"], ["href", "/users"]], template: function TopNavbar_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "a", 0);
        ɵɵtext(1, "Meetings");
        ɵɵelementEnd();
        ɵɵtext(2, "\u00A0\u00A0\u00A0\u00A0");
        ɵɵelementStart(3, "a", 1);
        ɵɵtext(4, "Users");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TopNavbar, [{
        type: Component,
        args: [{
                selector: 'lib-top-lib',
                template: `
            <a href="/meetings">Meetings</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/users">Users</a>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class TopLibModule {
}
TopLibModule.ɵmod = ɵɵdefineNgModule({ type: TopLibModule });
TopLibModule.ɵinj = ɵɵdefineInjector({ factory: function TopLibModule_Factory(t) { return new (t || TopLibModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TopLibModule, { declarations: [TopNavbar], exports: [TopNavbar] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TopLibModule, [{
        type: NgModule,
        args: [{
                declarations: [TopNavbar],
                imports: [],
                exports: [TopNavbar]
            }]
    }], null, null); })();

/*
 * Public API Surface of top-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TopLibModule, TopNavbar };
//# sourceMappingURL=top-lib.js.map
