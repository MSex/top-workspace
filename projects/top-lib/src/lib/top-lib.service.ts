import { BehaviorSubject, Observable, of } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { mergeMap, filter } from 'rxjs/operators';

export class Meeting {
  id: string;
  description: string;
  password: string;

  constructor(id: string, description: string, password: string) {
    this.id = id;
    this.description = description;
    this.password = password;
  }
}

export abstract class Meetings {
  abstract get(id: string): Observable<Meeting>;

  abstract list(): Observable<Meeting[]>;
}

@Injectable()
export class MeetingsImpl implements Meetings {
  private _storage = [
    new Meeting("1", "Primeiro", "asdf"),
    new Meeting("2", "Segundo", "asdf"),
    new Meeting("3", "Terceiro", "asdf"),
  ];
  private _list = new BehaviorSubject<Meeting[]>(this._storage);

  constructor() {}

  public list() {
    return this._list;
  }

  public get(id: string) {
    return this._list.pipe(
      mergeMap(item => item),
      filter(x => x.id === id)
    );
  }

}
