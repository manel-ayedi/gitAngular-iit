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
  displayedColumns: string[] = ['username', 'firstname', 'lastname', 'email', 'role', 'action'];
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getAllUser().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }
  editUser(){
    console.log("edit button works");
  }
  deleteUser(){
    console.log("delete button works");
  }

}
