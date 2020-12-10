(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/core'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('top-lib', ['exports', 'rxjs', '@angular/core', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['top-lib'] = {}, global.rxjs, global.ng.core, global.rxjs.operators));
}(this, (function (exports, rxjs, i0, operators) { 'use strict';

    var Meeting = /** @class */ (function () {
        function Meeting(id, description, password) {
            this.id = id;
            this.description = description;
            this.password = password;
        }
        return Meeting;
    }());
    var Meetings = /** @class */ (function () {
        function Meetings() {
        }
        return Meetings;
    }());
    var MeetingsImpl = /** @class */ (function () {
        function MeetingsImpl() {
            this._storage = [
                new Meeting("1", "Primeiro", "asdf"),
                new Meeting("2", "Segundo", "asdf"),
                new Meeting("3", "Terceiro", "asdf"),
            ];
            this._list = new rxjs.BehaviorSubject(this._storage);
        }
        MeetingsImpl.prototype.list = function () {
            return this._list;
        };
        MeetingsImpl.prototype.get = function (id) {
            return this._list.pipe(operators.mergeMap(function (item) { return item; }), operators.filter(function (x) { return x.id === id; }));
        };
        return MeetingsImpl;
    }());
    MeetingsImpl.ɵfac = function MeetingsImpl_Factory(t) { return new (t || MeetingsImpl)(); };
    MeetingsImpl.ɵprov = i0.ɵɵdefineInjectable({ token: MeetingsImpl, factory: MeetingsImpl.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MeetingsImpl, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    var TopLibComponent = /** @class */ (function () {
        function TopLibComponent() {
        }
        TopLibComponent.prototype.ngOnInit = function () {
        };
        return TopLibComponent;
    }());
    TopLibComponent.ɵfac = function TopLibComponent_Factory(t) { return new (t || TopLibComponent)(); };
    TopLibComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TopLibComponent, selectors: [["lib-top-lib"]], decls: 2, vars: 0, template: function TopLibComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " top-lib works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TopLibComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-top-lib',
                        template: "\n    <p>\n      top-lib works!\n    </p>\n  ",
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
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TopLibModule, { declarations: [TopLibComponent], exports: [TopLibComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TopLibModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [TopLibComponent],
                        imports: [],
                        exports: [TopLibComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of top-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Meeting = Meeting;
    exports.Meetings = Meetings;
    exports.MeetingsImpl = MeetingsImpl;
    exports.TopLibComponent = TopLibComponent;
    exports.TopLibModule = TopLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=top-lib.umd.js.map
