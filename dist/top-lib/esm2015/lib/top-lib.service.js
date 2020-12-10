import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { mergeMap, filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class Meeting {
    constructor(id, description, password) {
        this.id = id;
        this.description = description;
        this.password = password;
    }
}
export class Meetings {
}
export class MeetingsImpl {
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
MeetingsImpl.ɵprov = i0.ɵɵdefineInjectable({ token: MeetingsImpl, factory: MeetingsImpl.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MeetingsImpl, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLWxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL3RvcC1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL3RvcC1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRWxELE1BQU0sT0FBTyxPQUFPO0lBS2xCLFlBQVksRUFBVSxFQUFFLFdBQW1CLEVBQUUsUUFBZ0I7UUFDM0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQWdCLFFBQVE7Q0FJN0I7QUFHRCxNQUFNLE9BQU8sWUFBWTtJQVF2QjtRQVBRLGFBQVEsR0FBRztZQUNqQixJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQztZQUNwQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQztZQUNuQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQztTQUNyQyxDQUFDO1FBQ00sVUFBSyxHQUFHLElBQUksZUFBZSxDQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUUvQyxDQUFDO0lBRVQsSUFBSTtRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRU0sR0FBRyxDQUFDLEVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQ3RCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQ3pCLENBQUM7SUFDSixDQUFDOzt3RUFuQlUsWUFBWTtvREFBWixZQUFZLFdBQVosWUFBWTtrREFBWixZQUFZO2NBRHhCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1lcmdlTWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBNZWV0aW5nIHtcbiAgaWQ6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1lZXRpbmdzIHtcbiAgYWJzdHJhY3QgZ2V0KGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE1lZXRpbmc+O1xuXG4gIGFic3RyYWN0IGxpc3QoKTogT2JzZXJ2YWJsZTxNZWV0aW5nW10+O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVldGluZ3NJbXBsIGltcGxlbWVudHMgTWVldGluZ3Mge1xuICBwcml2YXRlIF9zdG9yYWdlID0gW1xuICAgIG5ldyBNZWV0aW5nKFwiMVwiLCBcIlByaW1laXJvXCIsIFwiYXNkZlwiKSxcbiAgICBuZXcgTWVldGluZyhcIjJcIiwgXCJTZWd1bmRvXCIsIFwiYXNkZlwiKSxcbiAgICBuZXcgTWVldGluZyhcIjNcIiwgXCJUZXJjZWlyb1wiLCBcImFzZGZcIiksXG4gIF07XG4gIHByaXZhdGUgX2xpc3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE1lZXRpbmdbXT4odGhpcy5fc3RvcmFnZSk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBsaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9saXN0O1xuICB9XG5cbiAgcHVibGljIGdldChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3QucGlwZShcbiAgICAgIG1lcmdlTWFwKGl0ZW0gPT4gaXRlbSksXG4gICAgICBmaWx0ZXIoeCA9PiB4LmlkID09PSBpZClcbiAgICApO1xuICB9XG5cbn1cbiJdfQ==