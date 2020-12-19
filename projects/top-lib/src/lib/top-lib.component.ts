import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-top-lib',
  template: `
            <a href="/meetings">Meetings</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/users">Users</a>
  `,
  styles: [
  ]
})
export class TopNavbar implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
