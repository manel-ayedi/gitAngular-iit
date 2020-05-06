import { Component, OnInit } from '@angular/core';
import {User} from '../../../core/models/user';
import {UsersService} from '../../../core/services/user/user.service' ;

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  private users: User [];
  displayedColumns: string[] = ['username', 'firstname', 'lastname', 'email', 'role'];
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getAllUser().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }

}
