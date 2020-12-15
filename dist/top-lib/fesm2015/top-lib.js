import { BehaviorSubject } from 'rxjs';
import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { mergeMap, filter } from 'rxjs/operators';

class Meeting {
    constructor(id, description, password) {
        this.id = id;
        this.description = description;
        this.password = password;
    }
}
class Meetings {
}
class MeetingsImpl {
    constructor() {
        this._storage = [
            new Meeting("1", "Primeiro", "asdf"),
            new Meeting("2", "Segundo", "asdf"),
            new Meeting("3", "Terceiro", "asdf"),
        ];
        this._list = new BehaviorSubject(this._storage);
    }
    list() {
        return this._list;
    }
    get(id) {
        return this._list.pipe(mergeMap(item => item), filter(x => x.id === id));
    }
}
MeetingsImpl.ɵfac = function MeetingsImpl_Factory(t) { return new (t || MeetingsImpl)(); };
MeetingsImpl.ɵprov = ɵɵdefineInjectable({ token: MeetingsImpl, factory: MeetingsImpl.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MeetingsImpl, [{
        type: Injectable
    }], function () { return []; }, null); })();
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Users {
}
class UsersImpl {
    constructor() {
        this._storage = [
            new User("1", "Guto"),
            new User("2", "Renato"),
            new User("3", "MSex"),
        ];
        this._list = new BehaviorSubject(this._storage);
    }
    list() {
        return this._list;
    }
    get(id) {
        return this._list.pipe(mergeMap(item => item), filter(x => x.id === id));
    }
}
UsersImpl.ɵfac = function UsersImpl_Factory(t) { return new (t || UsersImpl)(); };
UsersImpl.ɵprov = ɵɵdefineInjectable({ token: UsersImpl, factory: UsersImpl.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UsersImpl, [{
        type: Injectable
    }], function () { return []; }, null); })();

class TopLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
TopLibComponent.ɵfac = function TopLibComponent_Factory(t) { return new (t || TopLibComponent)(); };
TopLibComponent.ɵcmp = ɵɵdefineComponent({ type: TopLibComponent, selectors: [["lib-top-lib"]], decls: 2, vars: 0, template: function TopLibComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " top-lib works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TopLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-top-lib',
                template: `
    <p>
      top-lib works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class TopLibModule {
}
TopLibModule.ɵmod = ɵɵdefineNgModule({ type: TopLibModule });
TopLibModule.ɵinj = ɵɵdefineInjector({ factory: function TopLibModule_Factory(t) { return new (t || TopLibModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TopLibModule, { declarations: [TopLibComponent], exports: [TopLibComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TopLibModule, [{
        type: NgModule,
        args: [{
                declarations: [TopLibComponent],
                imports: [],
                exports: [TopLibComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of top-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Meeting, Meetings, MeetingsImpl, TopLibComponent, TopLibModule, User, Users, UsersImpl };
//# sourceMappingURL=top-lib.js.map
