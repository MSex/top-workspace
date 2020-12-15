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
export class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
export class Users {
}
export class UsersImpl {
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
UsersImpl.ɵprov = i0.ɵɵdefineInjectable({ token: UsersImpl, factory: UsersImpl.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UsersImpl, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLWxpYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL3RvcC1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL3RvcC1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRWxELE1BQU0sT0FBTyxPQUFPO0lBS2xCLFlBQVksRUFBVSxFQUFFLFdBQW1CLEVBQUUsUUFBZ0I7UUFDM0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQWdCLFFBQVE7Q0FJN0I7QUFHRCxNQUFNLE9BQU8sWUFBWTtJQVF2QjtRQVBRLGFBQVEsR0FBRztZQUNqQixJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQztZQUNwQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQztZQUNuQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQztTQUNyQyxDQUFDO1FBQ00sVUFBSyxHQUFHLElBQUksZUFBZSxDQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUUvQyxDQUFDO0lBRVQsSUFBSTtRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRU0sR0FBRyxDQUFDLEVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQ3RCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQ3pCLENBQUM7SUFDSixDQUFDOzt3RUFuQlUsWUFBWTtvREFBWixZQUFZLFdBQVosWUFBWTtrREFBWixZQUFZO2NBRHhCLFVBQVU7O0FBd0JYLE1BQU0sT0FBTyxJQUFJO0lBSWYsWUFBWSxFQUFVLEVBQUUsSUFBWTtRQUNsQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBZ0IsS0FBSztDQUkxQjtBQUdELE1BQU0sT0FBTyxTQUFTO0lBUXBCO1FBUFEsYUFBUSxHQUFHO1lBQ2pCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDO1NBQ3RCLENBQUM7UUFDTSxVQUFLLEdBQUcsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTVDLENBQUM7SUFFVCxJQUFJO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFTSxHQUFHLENBQUMsRUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFDdEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FDekIsQ0FBQztJQUNKLENBQUM7O2tFQW5CVSxTQUFTO2lEQUFULFNBQVMsV0FBVCxTQUFTO2tEQUFULFNBQVM7Y0FEckIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2VNYXAsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIE1lZXRpbmcge1xuICBpZDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTWVldGluZ3Mge1xuICBhYnN0cmFjdCBnZXQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8TWVldGluZz47XG5cbiAgYWJzdHJhY3QgbGlzdCgpOiBPYnNlcnZhYmxlPE1lZXRpbmdbXT47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZWV0aW5nc0ltcGwgaW1wbGVtZW50cyBNZWV0aW5ncyB7XG4gIHByaXZhdGUgX3N0b3JhZ2UgPSBbXG4gICAgbmV3IE1lZXRpbmcoXCIxXCIsIFwiUHJpbWVpcm9cIiwgXCJhc2RmXCIpLFxuICAgIG5ldyBNZWV0aW5nKFwiMlwiLCBcIlNlZ3VuZG9cIiwgXCJhc2RmXCIpLFxuICAgIG5ldyBNZWV0aW5nKFwiM1wiLCBcIlRlcmNlaXJvXCIsIFwiYXNkZlwiKSxcbiAgXTtcbiAgcHJpdmF0ZSBfbGlzdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWVldGluZ1tdPih0aGlzLl9zdG9yYWdlKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3Q7XG4gIH1cblxuICBwdWJsaWMgZ2V0KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdC5waXBlKFxuICAgICAgbWVyZ2VNYXAoaXRlbSA9PiBpdGVtKSxcbiAgICAgIGZpbHRlcih4ID0+IHguaWQgPT09IGlkKVxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVXNlcnMge1xuICBhYnN0cmFjdCBnZXQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlcj47XG5cbiAgYWJzdHJhY3QgbGlzdCgpOiBPYnNlcnZhYmxlPFVzZXJbXT47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2Vyc0ltcGwgaW1wbGVtZW50cyBVc2VycyB7XG4gIHByaXZhdGUgX3N0b3JhZ2UgPSBbXG4gICAgbmV3IFVzZXIoXCIxXCIsIFwiR3V0b1wiKSxcbiAgICBuZXcgVXNlcihcIjJcIiwgXCJSZW5hdG9cIiksXG4gICAgbmV3IFVzZXIoXCIzXCIsIFwiTVNleFwiKSxcbiAgXTtcbiAgcHJpdmF0ZSBfbGlzdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VXNlcltdPih0aGlzLl9zdG9yYWdlKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3Q7XG4gIH1cblxuICBwdWJsaWMgZ2V0KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdC5waXBlKFxuICAgICAgbWVyZ2VNYXAoaXRlbSA9PiBpdGVtKSxcbiAgICAgIGZpbHRlcih4ID0+IHguaWQgPT09IGlkKVxuICAgICk7XG4gIH1cblxufVxuXG4iXX0=