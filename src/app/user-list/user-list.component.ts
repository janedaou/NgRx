import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = [
    { id: 1, name: 'Jane Daou' },
    { id: 2, name: 'Angie Daou' },
    // more users
  ];

  constructor() { }

  ngOnInit(): void { }

  trackById(index: number, user: any): number {
    return user.id;
  }

  onAction(): void {
    alert('You just clicked the action button. Press OK to exit.');
  }

}
