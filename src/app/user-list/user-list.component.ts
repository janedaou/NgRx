import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = [
    { id: 1, name: 'User One' },
    { id: 2, name: 'User Two' },
    // more users
  ];

  constructor() { }

  ngOnInit(): void { }

  trackById(index: number, user: any): number {
    return user.id;
  }
}
