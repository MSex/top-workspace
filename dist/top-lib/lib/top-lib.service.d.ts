import { BehaviorSubject, Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class Meeting {
    id: string;
    description: string;
    password: string;
    constructor(id: string, description: string, password: string);
}
export declare abstract class Meetings {
    abstract get(id: string): Observable<Meeting>;
    abstract list(): Observable<Meeting[]>;
}
export declare class MeetingsImpl implements Meetings {
    private _storage;
    private _list;
    constructor();
    list(): BehaviorSubject<Meeting[]>;
    get(id: string): Observable<Meeting>;
    static ɵfac: i0.ɵɵFactoryDef<MeetingsImpl, never>;
    static ɵprov: i0.ɵɵInjectableDef<MeetingsImpl>;
}
//# sourceMappingURL=top-lib.service.d.ts.map